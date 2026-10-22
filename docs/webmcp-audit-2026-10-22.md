# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)
**Date:** 2026-10-22 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md) et du [2026-10-15](webmcp-audit-2026-10-15.md).

## Verdict: aucun regression, score stable à ~92%. Target 75%+ maintenu.

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | Détail du re-check live |
|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | robots.txt: 7 crawlers IA nommés (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended), zéro bloqué, ligne Sitemap ✓. llms.txt 200 (2 089 octets) avec section actions + lien mcp-actions.json ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions (request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown) ✓. `<link rel="mcp-actions">` présent dans le head servi ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | Home 97 235 octets ≈ 24k tokens (stable). Hiérarchie stable sur /, /fr et /en: h1×1 / h2×5 / h3×10 ✓ |
| Capacités | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR, identiques sur /, /fr et /en ✓. Labels natifs reliés for/id, honeypot présent, pas de CAPTCHA ✓ |

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (1 action, 1 params, 7 description, 6 param), `<link rel="mcp-actions">` servi ✓
- `/chargeback-audit`: 11 occurrences `data-mcp-*`, link rel servi ✓
- `/mcp-actions.json`: 200, JSON valide v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: les 2 actions listées ✓
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓

## Livrables du 8 oct toujours en prod (vérifiés aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, présent au sitemap.xml, mentionne WebMCP
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, présent au sitemap.xml, mentionne WebMCP

## Notes

- Dérive mesurée en 7 jours: llms.txt 2 059 → 2 089 octets (+30), home 97 181 → 97 235 octets (+54). Bruit de déploiement, aucune perte d'instrumentation.
- Aucune action requise. Prochain jalon: phase 2 (API impérative) seulement après confirmation de l'adoption navigateur (Chrome origin trial, Edge), inchangé depuis le 8 oct.
