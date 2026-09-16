/**
 * Teardown runner: crawl + LLM 7 passes → structured JSON audit.
 * Used by /api/teardown (x402-paid agent endpoint).
 */

import { crawlSite } from "./crawl";
import { buildTeardownPrompt } from "./prompt";

import { callGLM } from "./llm";

const MODEL = process.env.TEARDOWN_MODEL || "glm-5.3-flash";

export interface TeardownResult {
  url: string;
  fetched_at: string;
  audit: Record<string, unknown>;
  meta: {
    model: string;
    pages_crawled: number;
    crawl_notes: string[];
  };
}

function normalizeUrl(raw: string): URL {
  const withScheme = raw.startsWith("http") ? raw : `https://${raw}`;
  const u = new URL(withScheme);
  if (u.protocol !== "https:" && u.protocol !== "http:") throw new Error("invalid protocol");
  return u;
}

export async function runTeardown(rawUrl: string): Promise<TeardownResult> {
  const url = normalizeUrl(rawUrl);

  // 1. crawl
  const crawl = await crawlSite(url.href);

  // 2. build compact corpus (limit total size for LLM)
  const corpus = crawl.pages
    .map(
      (p) =>
        `### PAGE: ${p.url} (HTTP ${p.status})\n` +
        `TITLE: ${p.title}\n` +
        `META DESC: ${p.metaDescription || "(missing)"}\n` +
        `H1: ${p.h1.join(" | ") || "(none)"}\n` +
        `H2: ${p.h2.join(" | ")}\n` +
        `TEXT: ${p.text}\n`
    )
    .join("\n")
    .slice(0, 60_000);

  const metadata_notes = [
    `robots.txt present: ${crawl.robots_txt ? "yes" : "no"}`,
    `llms.txt present: ${crawl.llms_txt}`,
    `sitemap URL count: ${crawl.sitemap_urls ?? "unknown"}`,
    `JSON-LD on start page: ${crawl.has_jsonld}`,
    ...crawl.notes,
  ];

  const { system, user } = buildTeardownPrompt({
    siteUrl: url.href,
    corpus: `${corpus}\n\nCRAWL METADATA:\n${metadata_notes.join("\n")}`,
    notes: crawl.notes,
  });

  // 3. LLM 7 passes
  const raw = await callGLM(system, user);

  // 4. parse JSON (strip fences if the model added them anyway)
  const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  let audit: Record<string, unknown>;
  try {
    audit = JSON.parse(cleaned);
  } catch {
    throw new Error("LLM returned invalid JSON — retry or lower temperature");
  }

  return {
    url: url.href,
    fetched_at: new Date().toISOString(),
    audit,
    meta: {
      model: MODEL,
      pages_crawled: crawl.pages.length,
      crawl_notes: crawl.notes,
    },
  };
}
