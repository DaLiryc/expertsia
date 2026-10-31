/**
 * Direct Z.AI (GLM) client for the teardown endpoint.
 * Uses the same provider as the Hermes agent — no OpenRouter middleman.
 */

const ZAI_URL = "https://api.z.ai/api/paas/v4/chat/completions";
const MODEL = process.env.TEARDOWN_MODEL || "glm-5.3-flash";

export async function callGLM(system: string, user: string): Promise<string> {
  const apiKey = process.env.Z_AI_API_KEY;
  if (!apiKey) throw new Error("Z_AI_API_KEY not configured");

  const res = await fetch(ZAI_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.2,
      max_tokens: 10000,
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(240_000),
  });

  if (!res.ok) {
    throw new Error(`Z.AI error ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  const choice = json.choices?.[0];
  if (choice?.finish_reason === "length") {
    throw new Error("LLM output truncated (finish_reason=length) — raise max_tokens");
  }
  return choice?.message?.content || "";
}
