# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)
**Date:** 2026-10-29 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md), [2026-10-15](webmcp-audit-2026-10-15.md) et [2026-10-22](webmcp-audit-2026-10-22.md).

## Verdict: aucune régression, score stable à ~92%. Target 75%+ maintenu. 3e re-check consécutif sans dérive d'instrumentation.

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | 29 oct | Détail du re-check live |
|---|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | 5/5 | robots.txt: 8 crawlers IA nommés (les 7 historiques + Bytespider, présent depuis le commit 5d65737 du 16 sept — checklist plus large que les audits précédents, pas de nouveau crawler), zéro bloqué, ligne Sitemap ✓. llms.txt 200, 2 089 octets (identique au 22 oct), section actions + lien mcp-actions.json ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions (request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown), 3 735 octets ✓. `<link rel="mcp-actions">` servi sur /, /fr et /en ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | Home 97 235 octets ≈ 24,3k tokens, octet pour octet identique au 22 oct (dérive nulle). /fr 99 805 octets, /en 97 235. Hiérarchie h1×1 / h2×5 / h3×10 identique sur les 3 locales ✓ |
| Capacités | 4/4 | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR, identiques sur /, /fr et /en ✓. Honeypot présent ✓, zéro référence CAPTCHA/Turnstile/hCaptcha dans le HTML servi ✓ |

## Livrables wave 3 (vérifiés live aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200 (66 198 octets), présent au sitemap.xml ✓
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200 (62 765 octets), présent au sitemap.xml ✓

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (identique aux baselines du 15 et du 22 oct) ✓
- `/chargeback-audit`: 11 occurrences `data-mcp-*` ✓
- `<link rel="mcp-actions">` servi sur la home ✓
- `/mcp-actions.json`: 200, v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: 3 569 octets, les 2 actions documentées (endpoints + params + honeypot + note Turnstile sur signup) ✓
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓
- **Nouveau depuis le 22 oct**: `/developers` (200) et `/developers.md` (200) — miroir markdown agent-lisible (commits 101aa7b + 6fbe8be, Fern Agent Score). Cohérent avec la thèse wave 3; piste de réplication côté expertsia.

## Notes

- Dérive mesurée en 7 jours: llms.txt 2 089 → 2 089 (0), home 97 235 → 97 235 (0). Aucune perte d'instrumentation.
- Aucune action requise côté expertsia. Piste ouverte (pas urgente): un `/developers.md` type ChargeGuard renforcerait le pilier Découverte, à faire quand un contenu dev-facing existe à mirrorer.
- Prochain jalon: phase 2 (API impérative) seulement après confirmation de l'adoption navigateur (Chrome origin trial, Edge), inchangé depuis le 8 oct.
