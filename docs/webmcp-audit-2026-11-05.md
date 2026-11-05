# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)

**Date:** 2026-11-05 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md), [2026-10-15](webmcp-audit-2026-10-15.md) et [2026-10-22](webmcp-audit-2026-10-22.md).

## Verdict: aucune régression, score stable à ~92%. Target 75%+ maintenu (3e re-check consécutif sans dérive).

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | 5 nov | Détail du re-check live |
|---|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | 5/5 | robots.txt: 7 crawlers IA nommés (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended), zéro bloqué, ligne Sitemap ✓. llms.txt 200 (2 089 octets, taille identique au 22 oct) avec section actions + lien mcp-actions.json ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions (request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown) ✓. `<link rel="mcp-actions">` présent dans le head servi sur /, /fr et /en ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | Home 96 910 octets ≈ 24k tokens (-325 vs 22 oct, bruit de déploiement). Hiérarchie stable sur /, /fr et /en: h1×1 / h2×5 / h3×10 ✓ |
| Capacités | 4/4 | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR, identiques sur /, /fr et /en ✓. Labels natifs reliés for/id (4 par page), honeypot `name="website"` présent en SSR sur les 3 pages, pas de CAPTCHA ✓ |

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (1 action, 1 params, 7 description, 6 param), `<link rel="mcp-actions">` servi ✓ — identique aux baselines
- `/chargeback-audit`: 11 occurrences `data-mcp-*` (1 action, 1 params, 5 description, 4 param), link rel servi ✓ — identique
- `/mcp-actions.json`: 200, JSON valide v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: les 2 actions listées ✓ (4 350 octets, croissance = nouvelles pages listées, instrumentation intacte)
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓

**Changement noté (non-bloquant):** l'apex `trychargeguard.com` répond désormais 301 vers `www.trychargeguard.com` sur toutes les routes (le 22 oct les checks passaient directement sur l'apex). Redirection canonique www, contenu servi identique après suivi du redirect. Aucune action requise, à surveiller si un check futur tombe sur un 301 inattendu: suivre avec `-L`.

## Livrables du 8 oct toujours en prod (vérifiés aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, présent au sitemap.xml, 26 mentions WebMCP, CTAs tarifs + cal.com + lien page agentic-ready ✓
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, présent au sitemap.xml, 26 mentions WebMCP ✓

## Notes

- Dérive mesurée en 14 jours: llms.txt 2 089 → 2 089 octets (0), home 97 235 → 96 910 (-325). Bruit de déploiement, aucune perte d'instrumentation. Trois re-checks consécutifs (15 oct, 22 oct, 5 nov) sans aucune dérive d'instrumentation.
- `/fr/contact` n'existe pas (404): le form contact est sur la home, couvert par les 16 `data-mcp-*`. Le pattern est stable depuis le 8 oct, pas une régression.
- Aucune action requise. Prochain jalon: phase 2 (API impérative) seulement après confirmation de l'adoption navigateur (Chrome origin trial, Edge), inchangé depuis le 8 oct.
