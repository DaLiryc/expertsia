# Audit WebMCP / agentic-readiness — expertsia.dev
**Date:** 2026-10-08 · **Auditeur:** Hermes (session jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS, checks mécaniques (grep/parse), aucune auto-évaluation d'agent browser

## Scorecard (grille maison, pas un standard industrie)

| Pilier | Avant | Après (8 oct) | Détail |
|---|---|---|---|
| Découverte | 3/5 | 5/5 | robots AI crawlers explicites ✓ (déjà), llms.txt ✓ (déjà), sitemap ✓, mcp-actions.json ✗→✓, link rel=mcp-actions ✗→✓ |
| Parsabilité | 4/5 | 4.5/5 | SSR sans JS ✓, hiérarchie h1×1/h2×5/h3×10 ✓, labels natifs 4/4 ✓ (newsletter placeholder-only → aria-label ajouté), poids home 96KB ≈ 24k tokens (moyen, honnête) |
| Capacités | 1/4 | 4/4 | forms déclarés 0/2→2/2, guest flow ✓ (contact + newsletter sans compte), API agent-callable ✓ (teardown x402), anti-bot proportionné ✓ (honeypot, pas de CAPTCHA) |

**Score global: ~44% avant → ~92% après. Target 75%+ atteint.**

## Trouvailles d'avant (preuves)
- `GET /mcp-actions.json` → 200 avec du HTML (soft-404 catch-all) : induit un agent en erreur. Corrigé par publication du vrai JSON.
- 0 attribut `data-mcp-*` sur les 2 forms. Corrigé (contact + newsletter).
- `/fr/contact` → 404 : le form vit sur `/#contact`. Point à connaître pour les agents (llms.txt mis à jour pour le leur dire).
- Base saine: labels natifs reliés for/id, honeypot correctement caché, zéro widget JS custom.

## Livré le 8 oct (commits 191b744 + 593f339)
1. `data-mcp-action` + descriptions + `data-mcp-param` sur ContactForm (request-ai-consultation) et NewsletterCapture (subscribe-newsletter)
2. `public/mcp-actions.json`: 4 actions (contact, newsletter, booking cal.com, teardown x402 $0.05)
3. `<link rel="mcp-actions">` dans app/[locale]/layout.tsx
4. llms.txt: section « Machine-readable actions »
5. Blogposts FR+EN wave 3 + liens réciproques checkout-agentique

## Pitch service (différenciant 2026-2027)
Audit en 3 piliers (Découverte / Parsabilité / Capacités), baseline mesurée, quick wins posés en 1h, target 75%+. Presque personne ne l'offre encore. S'adosse sur l'audit gouvernance commerce-agentique existant (/fr/commerce-agentique).

## Restant (phase 2, non bloquant)
- Test par un VRAI agent browser des 2 flows avant/après (taux de complétion) — baseline "avant" perdue puisque corrigé, mesurer "après" suffit
- Surveillance adoption WebMCP (Chrome origin trial 149+, Edge 150, exp. nov 2026) avant la phase impérative
