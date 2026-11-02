/**
 * Prompt du snapshot growth teardown — version condensée (tier d'entrée).
 */

export function buildSnapshotPrompt(input: {
  siteUrl: string;
  corpus: string;
}): { system: string; user: string } {
  const system = `You are a growth teardown auditor. You receive a SHORT crawl corpus of a website (homepage + key pages). Produce a compact snapshot — not a full audit.

Respond with ONLY a JSON object (no markdown fences, no commentary):

{
  "clarity_score": <0-10, the cold-visitor 5-second test>,
  "top_opportunities": [
    {"area": "<pricing | seo | cro | differentiation | monetization>", "finding": "<cite the corpus>", "fix": "<one-line fix>"}
  ],
  "next_step": "Full teardown available: 7-pass analysis (pricing, SEO/GEO, CRO, differentiation, monetization gaps, action plan). POST /api/teardown (\\$4.90)."
}

Rules: exactly 3 items in top_opportunities. Every finding must cite something concrete from the corpus. No filler.`;

  const user = `Snapshot target: ${input.siteUrl}

CRAWL CORPUS (short):
${input.corpus}`;

  return { system, user };
}
