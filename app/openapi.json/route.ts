/**
 * GET /openapi.json — machine-readable spec for the Expertsia agentic APIs.
 * x402 registries (x402scan and similar) auto-discover x402 resources from
 * this file, so keep the /api/teardown entry accurate.
 */

export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "Expertsia Agentic API",
      version: "1.0.0",
      description:
        "Agent-callable growth intelligence. The teardown endpoint audits any website and returns a structured 7-pass growth teardown (clarity, pricing, SEO/GEO, CRO, differentiation, monetization gaps, action plan). Paid per call via the x402 protocol (USDC on Base mainnet) or with a Bearer API key.",
      "x-402-support": true,
    },
    servers: [{ url: "https://www.expertsia.dev" }],
    paths: {
      "/api/teardown": {
        post: {
          operationId: "growth_teardown",
          summary: "Structured 7-pass growth teardown of any website",
          description:
            "Crawls the site (home, pricing, product, blog pages), then returns: clarity_score, pricing analysis, seo (incl. AI-search citability), cro (top conversion leaks), differentiation (competitive attack angles), monetization_gaps, action_plan (top 5, impact x effort). Payment: first unpaid call returns HTTP 402 with x402 terms; pay in USDC on Base and retry with the X-PAYMENT header. Alternative: Authorization: Bearer <API key>.",
          "x-402": {
            scheme: "exact",
            network: "eip155:8453",
            payTo: "0x2bc3d96262392241498c6f568828ad69df6f6192",
            price: "$4.90",
            version: "2",
          },
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["url"],
                  properties: {
                    url: {
                      type: "string",
                      format: "uri",
                      description: "Public http(s) URL of the site to audit.",
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Growth teardown (structured JSON).",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      url: { type: "string" },
                      fetched_at: { type: "string", format: "date-time" },
                      audit: {
                        type: "object",
                        properties: {
                          clarity_score: { type: "integer", minimum: 0, maximum: 10 },
                          pricing: { type: "object" },
                          seo: { type: "object" },
                          cro: { type: "object" },
                          differentiation: { type: "object" },
                          monetization_gaps: { type: "object" },
                          action_plan: { type: "array", items: { type: "object" } },
                        },
                      },
                      meta: { type: "object" },
                    },
                  },
                },
              },
            },
            "400": { description: "Invalid input or URL blocked (SSRF guard)." },
            "402": { description: "Payment required — x402 terms in the payment-required response header." },
            "503": { description: "Endpoint not configured." },
          },
        },
      },
    },
  };

  return Response.json(spec, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
