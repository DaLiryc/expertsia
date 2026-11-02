/**
 * POST /api/teardown-snapshot — tier d'entrée du teardown growth ($0.25).
 * Crawl léger (3 pages), callGLM direct, sortie courte qui renvoie vers
 * le teardown complet ($4.90). Même sécurité que le teardown complet.
 */

import { NextRequest, NextResponse } from "next/server";
import { withX402, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { createCdpFacilitatorClient } from "@coinbase/cdp-sdk/x402";
import { crawlSite } from "@/lib/teardown/crawl";
import { buildSnapshotPrompt } from "@/lib/teardown/prompt-snapshot";
import { callGLM } from "@/lib/teardown/llm";
import {
  keyMatches,
  rateLimited,
  assertPublicUrl,
} from "@/lib/teardown/security";

export const runtime = "nodejs";
export const maxDuration = 120;

const SNAPSHOT_PRICE = process.env.TEARDOWN_SNAPSHOT_PRICE || "$0.25";
const PAY_TO = process.env.TEARDOWN_PAYTO_ADDRESS || "";
const TEARDOWN_API_KEY = process.env.TEARDOWN_API_KEY || "";
const RATE_MAX = Number(process.env.TEARDOWN_RATE_MAX || 10);
const NETWORK = "eip155:8453"; // Base mainnet (USDC)

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
        url: "https://x402.org/facilitator",
      });
const resourceServer = new x402ResourceServer(facilitatorClient).register(
  NETWORK,
  new ExactEvmScheme()
);

function parseAudit(txt: string): Record<string, unknown> {
  const cleaned = txt
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  return JSON.parse(cleaned);
}

async function handler(req: NextRequest): Promise<NextResponse> {
  try {
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

    try {
      await assertPublicUrl(url);
    } catch (e) {
      return NextResponse.json(
        { error: (e as Error).message },
        { status: 400 }
      );
    }

    const crawl = await crawlSite(url, { maxPages: 3 });
    const corpus = crawl.pages
      .map(
        (p) =>
          `URL: ${p.url}\nTITLE: ${p.title}\nH1: ${p.h1.join(" | ")}\nTEXT: ${p.text.slice(0, 4000)}\n`
      )
      .join("\n---\n");

    const { system, user } = buildSnapshotPrompt({ siteUrl: url, corpus });

    let raw = await callGLM(system, user);
    let snapshot: Record<string, unknown>;
    try {
      snapshot = parseAudit(raw);
    } catch {
      raw = await callGLM(
        system,
        user +
          "\n\nIMPORTANT: your previous answer was not valid JSON. Return ONLY a single valid JSON object, nothing else."
      );
      snapshot = parseAudit(raw);
    }

    return NextResponse.json({
      url,
      fetched_at: new Date().toISOString(),
      snapshot,
      meta: {
        model: "glm-5.3-flash",
        pages_crawled: crawl.pages.length,
        tier: "snapshot",
        full_teardown: "POST /api/teardown ($4.90)",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal error";
    console.error("[teardown-snapshot] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function exportedHandler(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  if (TEARDOWN_API_KEY && keyMatches(auth, TEARDOWN_API_KEY)) {
    if (rateLimited("snapshot:api-key", RATE_MAX)) {
      return NextResponse.json(
        { error: `rate limit exceeded (${RATE_MAX} per hour)` },
        { status: 429 }
      );
    }
    return handler(req);
  }
  if (!PAY_TO) {
    return NextResponse.json(
      { error: "snapshot endpoint not configured (missing TEARDOWN_PAYTO_ADDRESS)" },
      { status: 503 }
    );
  }
  return withX402(
    handler,
    {
      accepts: {
        scheme: "exact",
        price: SNAPSHOT_PRICE,
        network: NETWORK,
        payTo: PAY_TO,
      },
      description:
        "Growth snapshot of any website: clarity score, top 3 opportunities with fixes. Compact entry tier of the full 7-pass teardown.",
      mimeType: "application/json",
    },
    resourceServer
  )(req);
}

export const POST = exportedHandler;
