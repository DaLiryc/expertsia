/**
 * Sécurité partagée des endpoints teardown (full + snapshot).
 * Extrait de app/api/teardown/route.ts pour réutilisation sans duplication.
 */
import { timingSafeEqual, createHash } from "crypto";
import dns from "dns/promises";

// Constant-time key comparison (sha256 both sides to equalize length).
export function keyMatches(authHeader: string, apiKey: string): boolean {
  if (!apiKey) return false;
  const expected = `Bearer ${apiKey}`;
  const a = createHash("sha256").update(authHeader).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

// Rate limit in-memory (per-instance guard against runaway loops / cost
// blowups; the x402 path self-gates by payment). Buckets are labeled so
// the full and snapshot endpoints can have separate budgets.
const RATE_WINDOW_MS = 60 * 60 * 1000;
const rateMap = new Map<string, number[]>();

export function rateLimited(bucket: string, max: number): boolean {
  const now = Date.now();
  const hits = (rateMap.get(bucket) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= max) return true;
  hits.push(now);
  rateMap.set(bucket, hits);
  return false;
}

function isPrivateIp(ip: string): boolean {
  const m = ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    const a = Number(m[1]);
    const b = Number(m[2]);
    if (a === 0 || a === 10 || a === 127) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a >= 224) return true;
    return false;
  }
  const l = ip.toLowerCase();
  if (l === "::" || l === "::1") return true;
  if (l.startsWith("::ffff:")) return isPrivateIp(l.slice(7));
  if (/^f[cd]/.test(l)) return true; // IPv6 unique local
  if (/^fe[89ab]/.test(l)) return true; // IPv6 link-local
  return false;
}

// SSRF guard: public http(s) URLs only. Resolves the hostname and rejects
// loopback/private/link-local targets before any fetch happens.
export async function assertPublicUrl(raw: string): Promise<void> {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    throw new Error("invalid URL");
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") {
    throw new Error("only http/https URLs are allowed");
  }
  const host = u.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".internal") ||
    host.endsWith(".local")
  ) {
    throw new Error("internal hosts are not allowed");
  }
  if (/^[\d.]+$/.test(host) || host.includes(":")) {
    if (isPrivateIp(host)) throw new Error("private addresses are not allowed");
    return;
  }
  const addrs = await dns.lookup(host, { all: true });
  for (const { address } of addrs) {
    if (isPrivateIp(address)) {
      throw new Error("host resolves to a private address");
    }
  }
}
