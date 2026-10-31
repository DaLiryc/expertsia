/**
 * POST /api/teardown — agent-callable site teardown (x402-paid).
 *
 * Request:  { "url": "https://example.com" }
 * Response: structured 7-pass teardown JSON (clarity, pricing, SEO/GEO,
 *           CRO, differentiation, monetization, action plan).
 *
 * Payment:  x402 protocol — first call returns 402 with payment terms,
 *           client pays USDC on Base and retries with X-PAYMENT header.
 *           API-key fallback: Authorization: Bearer <TEARDOWN_API_KEY>
 *           (for human customers and non-x402 integrations).
 *
 * Price:    $4.90 per call by default (TEARDOWN_PRICE env). Cost per call
 *           (crawl + GLM flash passes) is roughly $0.05-0.30.
 */

import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual, createHash } from "crypto";
import dns from "dns/promises";
import { withX402, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { createCdpFacilitatorClient } from "@coinbase/cdp-sdk/x402";
import { runTeardown } from "@/lib/teardown/run";

export const runtime = "nodejs";
export const maxDuration = 300; // crawl + LLM can take a while

const PRICE = process.env.TEARDOWN_PRICE || "$4.90";
const PAY_TO = process.env.TEARDOWN_PAYTO_ADDRESS || "";
const TEARDOWN_API_KEY = process.env.TEARDOWN_API_KEY || "";
const NETWORK = "eip155:8453"; // Base mainnet (USDC)

// CDP facilitator (Base mainnet) — x402.org public facilitator is testnet-only.
// Reads both naming generations to survive env var renames.
const CDP_KEY = process.env.X402_CDP_KEY || process.env.CDP_API_KEY_ID || "";
const CDP_SECRET =
  process.env.X402_CDP_SECRET || process.env.CDP_API_KEY_SECRET || "";

const facilitatorClient =
  CDP_KEY && CDP_SECRET
    ? createCdpFacilitatorClient({
        apiKeyId: CDP_KEY,
        apiKeySecret: CDP_SECRET,
      })
    : new HTTPFacilitatorClient({
        url: "https://x402.org/facilitator", // testnet dev fallback
      });
const resourceServer = new x402ResourceServer(facilitatorClient).register(
  NETWORK,
  new ExactEvmScheme()
);

// --- Security helpers ---

// Constant-time key comparison (sha256 both sides to equalize length).
function keyMatches(authHeader: string): boolean {
  if (!TEARDOWN_API_KEY) return false;
  const expected = `Bearer ${TEARDOWN_API_KEY}`;
  const a = createHash("sha256").update(authHeader).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

// Rate limit for the API-key path (in-memory, per-instance guard against
// runaway loops / cost blowups; the x402 path self-gates by payment).
const RATE_MAX = Number(process.env.TEARDOWN_RATE_MAX || 10);
const RATE_WINDOW_MS = 60 * 60 * 1000;
const rateMap = new Map<string, number[]>();
function rateLimited(keyId: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(keyId) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (hits.length >= RATE_MAX) return true;
  hits.push(now);
  rateMap.set(keyId, hits);
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
async function assertPublicUrl(raw: string): Promise<void> {
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

async function handler(req: NextRequest): Promise<NextResponse> {
  try {
    // parse + validate input
    let body: { url?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "invalid JSON body" }, { status: 400 });
    }
    const url = (body.url || "").trim();
    if (!url || url.length > 2048) {
      return NextResponse.json(
        { error: "missing or invalid 'url' field" },
        { status: 400 }
      );
    }

    // SSRF guard before any fetch
    try {
      await assertPublicUrl(url);
    } catch (e) {
      return NextResponse.json(
        { error: (e as Error).message },
        { status: 400 }
      );
    }

    // run the teardown
    const result = await runTeardown(url);

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal error";
    console.error("[teardown] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// x402 wrapper active only when a pay-to address is configured.
// The API-key fallback bypasses the payment gate BEFORE the x402 wrapper:
// withX402 intercepts every request, so the check must live here, not in the handler.
function exportedHandler(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  if (TEARDOWN_API_KEY && keyMatches(auth)) {
    if (rateLimited("api-key")) {
      return NextResponse.json(
        { error: `rate limit exceeded (${RATE_MAX} teardowns per hour)` },
        { status: 429 }
      );
    }
    return handler(req);
  }
  if (PAY_TO) {
    return withX402(
      handler,
      {
        accepts: {
          scheme: "exact",
          price: PRICE,
          network: NETWORK,
          payTo: PAY_TO,
        },
        description:
          "Full 7-pass growth teardown of any website: clarity, pricing, SEO/GEO, CRO leaks, differentiation, monetization gaps, prioritized action plan. Structured JSON.",
        mimeType: "application/json",
      },
      resourceServer
    )(req);
  }
  return handler(req);
}

export const POST = exportedHandler;
