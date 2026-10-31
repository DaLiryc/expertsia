import { NextResponse } from "next/server";
import { createCdpFacilitatorClient } from "@coinbase/cdp-sdk/x402";

export const runtime = "nodejs";

// TEMP diagnostic — à supprimer après le debugging du facilitator mainnet.
// N'expose JAMAIS les valeurs: uniquement des booléens de présence.
export async function GET(req: Request) {
  const vars = {
    X402_CDP_KEY: !!process.env.X402_CDP_KEY,
    X402_CDP_SECRET: !!process.env.X402_CDP_SECRET,
    TEARDOWN_PAYTO_ADDRESS: !!process.env.TEARDOWN_PAYTO_ADDRESS,
    TEARDOWN_API_KEY: !!process.env.TEARDOWN_API_KEY,
    Z_AI_API_KEY: !!process.env.Z_AI_API_KEY,
  };
  // candidate via querystring: répond true/false uniquement (jamais la valeur)
  const candidate = new URL(req.url).searchParams.get("candidate") || "";
  const keyMatches =
    !!process.env.TEARDOWN_API_KEY && candidate === process.env.TEARDOWN_API_KEY;
  const keyLen = (process.env.TEARDOWN_API_KEY || "").length;
  const CDP_KEY = process.env.X402_CDP_KEY || process.env.CDP_API_KEY_ID || "";
  const CDP_SECRET =
    process.env.X402_CDP_SECRET || process.env.CDP_API_KEY_SECRET || "";

  let supported: unknown = null;
  let supportedError: string | null = null;
  if (CDP_KEY && CDP_SECRET) {
    try {
      const client = createCdpFacilitatorClient({
        apiKeyId: CDP_KEY,
        apiKeySecret: CDP_SECRET,
      });
      supported = await client.getSupported();
    } catch (e) {
      supportedError = String((e as Error).message || e).slice(0, 300);
    }
  } else {
    supportedError = "CDP key/secret introuvables";
  }

  return NextResponse.json({ vars, keyMatches, keyLen, supported, supportedError });
}
