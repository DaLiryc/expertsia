import { NextResponse } from "next/server";
import { HTTPFacilitatorClient } from "@x402/core/server";

export const runtime = "nodejs";

// TEMP diagnostic — à supprimer après le debugging du facilitator mainnet.
// N'expose JAMAIS les valeurs: uniquement des booléens de présence.
export async function GET() {
  const vars = {
    X402_CDP_KEY: !!process.env.X402_CDP_KEY,
    X402_CDP_SECRET: !!process.env.X402_CDP_SECRET,
    CDP_API_KEY_ID: !!process.env.CDP_API_KEY_ID,
    CDP_API_KEY_SECRET: !!process.env.CDP_API_KEY_SECRET,
    TEARDOWN_PAYTO_ADDRESS: !!process.env.TEARDOWN_PAYTO_ADDRESS,
    TEARDOWN_API_KEY: !!process.env.TEARDOWN_API_KEY,
    Z_AI_API_KEY: !!process.env.Z_AI_API_KEY,
  };
  const CDP_KEY = process.env.X402_CDP_KEY || process.env.CDP_API_KEY_ID || "";
  const CDP_SECRET =
    process.env.X402_CDP_SECRET || process.env.CDP_API_KEY_SECRET || "";

  let supported: unknown = null;
  let supportedError: string | null = null;
  if (CDP_KEY && CDP_SECRET) {
    const auth =
      "Basic " + Buffer.from(`${CDP_KEY}:${CDP_SECRET}`).toString("base64");
    const headers = { Authorization: auth };
    try {
      const client = new HTTPFacilitatorClient({
        url: "https://api.cdp.coinbase.com/platform/v2/x402",
        createAuthHeaders: async () => ({
          verify: headers,
          settle: headers,
          supported: headers,
        }),
      });
      supported = await client.getSupported();
    } catch (e) {
      supportedError = String((e as Error).message || e).slice(0, 300);
    }
  } else {
    supportedError = "CDP key/secret introuvables sous les 4 noms testés";
  }

  return NextResponse.json({ vars, supported, supportedError });
}
