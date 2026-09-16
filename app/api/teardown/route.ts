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
 * Price:    $0.05 per call (TEARDOWN_PRICE env, placeholder until launch).
 */

import { NextRequest, NextResponse } from "next/server";
import { withX402, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { runTeardown } from "@/lib/teardown/run";

export const runtime = "nodejs";
export const maxDuration = 300; // crawl + LLM can take a while

const PRICE = process.env.TEARDOWN_PRICE || "$0.05";
const PAY_TO = process.env.TEARDOWN_PAYTO_ADDRESS || "";
const NETWORK = "eip155:84532"; // Base mainnet

const facilitatorClient = new HTTPFacilitatorClient({
  url: process.env.X402_FACILITATOR_URL || "https://x402.org/facilitator",
});
const resourceServer = new x402ResourceServer(facilitatorClient).register(
  NETWORK,
  new ExactEvmScheme()
);

async function handler(req: NextRequest): Promise<NextResponse> {
  try {
    // API-key fallback (non-x402 clients): Bearer <TEARDOWN_API_KEY>
    const auth = req.headers.get("authorization");
    const apiKey = process.env.TEARDOWN_API_KEY;
    const viaApiKey = apiKey && auth === `Bearer ${apiKey}`;
    if (!viaApiKey && !PAY_TO) {
      // x402 not configured and no API key — endpoint not launchable yet
      return NextResponse.json(
        { error: "teardown endpoint not configured (missing TEARDOWN_PAYTO_ADDRESS)" },
        { status: 503 }
      );
    }

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
// Without it (dev / API-key mode), the bare handler is exposed.
function exportedHandler(req: NextRequest) {
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
