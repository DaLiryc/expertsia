# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)

**Date:** 2026-11-12 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md), [2026-10-15](webmcp-audit-2026-10-15.md), [2026-10-22](webmcp-audit-2026-10-22.md) et [2026-11-05](webmcp-audit-2026-11-05.md).

## Verdict: aucune régression, score stable à ~92%. Target 75%+ maintenu (4e re-check consécutif sans dérive d'instrumentation).

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | 5 nov | 12 nov | Détail du re-check live |
|---|---|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | robots.txt: 7 crawlers IA nommés (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended), zéro bloqué, ligne Sitemap ✓. llms.txt 200 (2 089 octets, taille identique au 5 nov) avec section actions + lien mcp-actions.json ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions (request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown) ✓. `<link rel="mcp-actions">` présent dans le head servi sur /, /fr et /en ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | Hiérarchie stable sur /, /fr et /en: h1×1 / h2×5 / h3×10 ✓. / 96 910 octets (identique au 5 nov), /en 96 910 (identique). /fr 99 471 octets (+2 561 vs le home mesuré le 5 nov): croissance de contenu, pas d'instrumentation — les 3 posts FR publiés depuis le 5 nov (assistant ia intranet cabinet comptable, re-optimisation audit IA prix, liens entrants) ajoutent des cartes de posts sur la home FR |
| Capacités | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR, identiques sur /, /fr et /en ✓. Labels natifs reliés for/id (4 par page), honeypot `name="website"` présent en SSR sur les 3 pages, aucun CAPTCHA ni Turnstile ✓ |

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (1 action, 1 params, 7 description, 6 param), `<link rel="mcp-actions">` servi ✓ — identique aux baselines (5e check consécutif au même chiffre)
- `/chargeback-audit`: 11 occurrences `data-mcp-*` (1 action, 1 params, 5 description, 4 param), link rel servi ✓ — identique
- `/mcp-actions.json`: 200, JSON valide v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: 4 350 octets, taille identique au 5 nov (0 octet de dérive), les 2 actions listées ✓
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓

## Livrables du 8 oct toujours en prod (vérifiés aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, présent au sitemap.xml ✓
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, présent au sitemap.xml ✓

## Notes

- Dérive mesurée en 7 jours: llms.txt 2 089 → 2 089 octets (0), home EN / 96 910 → 96 910 (0), /fr 96 910 → 99 471 (+2 561, cartes des nouveaux posts FR). Aucune perte d'instrumentation. Quatre re-checks consécutifs (15 oct, 22 oct, 5 nov, 12 nov) sans aucune dérive d'instrumentation.
- `/fr/contact` n'existe pas (404): le form contact est sur la home, couvert par les 16 `data-mcp-*`. Le pattern est stable depuis le 8 oct, pas une régression.
- WIP non commité présent dans le repo au moment de l'audit (funnel atelier: `app/api/atelier/`, `app/fr/atelier-audit-ia/`, `components/AtelierForm.tsx`, `app/sitemap.ts` modifié): non servi en prod, hors périmètre de ce re-check. Quand il partira en prod, les pages nouvelles devront passer la grille complète (labels natifs, honeypot, pas de CAPTCHA, data-mcp-* sur tout form).
- Aucune action requise. Prochain jalon: phase 2 (API impérative) seulement après confirmation de l'adoption navigateur (Chrome origin trial, Edge), inchangé depuis le 8 oct.
