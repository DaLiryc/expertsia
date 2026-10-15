# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)
**Date:** 2026-10-15 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé au baseline du [2026-10-08](webmcp-audit-2026-10-08.md).

## Verdict: aucun regresion, instrumentation en prod confirmée

## Scorecard (même grille que le 8 oct)

| Pilier | 8 oct | 15 oct | Détail du re-check live |
|---|---|---|---|
| Découverte | 5/5 | 5/5 | robots.txt: 7 crawlers IA nommés (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended), zéro bloqué, ligne Sitemap ✓. llms.txt 200 (2 059 octets) avec section actions + lien mcp-actions.json ✓. mcp-actions.json 200, JSON valide (pas de soft-404), 4 actions ✓. `<link rel="mcp-actions">` présent dans le head servi ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | Home 97 181 octets ≈ 24k tokens (honnête, moyen). Hiérarchie stable: h1×1 / h2×5 / h3×10 ✓ |
| Capacités | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR sur /, /fr et /en (identique sur les 3) ✓. 4 labels natifs reliés for/id, 5 inputs natifs, honeypot présent ✓. Actions servies: request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown ✓ |

**Score global: ~92% (stable). Target 75%+ maintenu.**

## Livrables du 8 oct toujours en prod (vérifiés aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, présent au sitemap.xml, parle bien de WebMCP
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, présent au sitemap.xml, parle bien de WebMCP

## Notes

- Le nombre d'occurrences data-mcp est identique sur la home et les deux locales (16): le layout partagé porte bien les forms déclaratifs partout.
- Aucune action requise. Prochain jalon: phase 2 (API impérative) seulement après confirmation de l'adoption navigateur (Chrome origin trial, Edge), inchangé depuis le 8 oct.
