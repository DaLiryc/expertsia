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
// The API-key fallback bypasses the payment gate BEFORE the x402 wrapper:
// withX402 intercepts every request, so the check must live here, not in the handler.
function exportedHandler(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  if (TEARDOWN_API_KEY && auth === `Bearer ${TEARDOWN_API_KEY}`) {
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
