# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression)

**Date:** 2026-11-26 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib, suit les redirects), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md) au [2026-11-19](webmcp-audit-2026-11-19.md).

## Verdict: instrumentation stable (6e re-check consécutif sans dérive). Aucun correctif nécessaire sur le site en prod. En revanche, la grille complète passée en STATIQUE sur le funnel atelier WIP: markup déclaratif déjà conforme, mais 3 items de découverte à faire au déploiement (deadline réelle: l'atelier est daté du mardi 2 décembre — voir section WIP).

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | 5 nov | 12 nov | 19 nov | 26 nov | Détail du re-check live |
|---|---|---|---|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | robots.txt 200: 11 user-agents, 10 crawlers IA listés (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, YouBot, cohere-ai, Bytespider), zéro crawler IA bloqué, Sitemap ✓. llms.txt 200, 2 089 octets, diff vide vs repo (0 dérive), section « Machine-readable actions » ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions (request-ai-consultation, subscribe-newsletter, book-audit-call, request-site-teardown), diff vide vs repo ✓ |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 12 pages testées cette fois (3 du tree [locale] + 7 money + les 2 blogposts WebMCP). / 97 570 octets (h1×1 / h2×5 / h3×10), /fr 100 105 (+1 038 vs 19 nov, cartes des 2 posts blog de novembre), /en 97 570. Les 7 money pages: 43 443 à 60 333 octets, h1×1 partout, hiérarchie propre. Server-rendered, lisibles sans JS ✓ |
| Capacités | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR sur /, /fr et /en, identiques aux baselines ✓. Les 7 money pages + blogposts: 0 `data-mcp` mais `<link rel="mcp-actions">` servi sur les 12 pages testées — le correctif ade43ff (McpActionsLink) tient, aucune régression. Les actions restent déclarées dans le catalogue JSON |

## Le funnel atelier WIP — grille complète passée en statique (fichiers non commités, non touchés)

Périmètre: `app/fr/atelier-audit-ia/page.tsx`, `components/AtelierForm.tsx`, `app/api/atelier/route.ts`, diff `app/sitemap.ts`. Rien n'est servi en prod (sitemap live: 55 URLs, aucune fuite « atelier »).

**Déjà conforme à la grille:**
- `data-mcp-action="register-atelier"` + `data-mcp-description` + `data-mcp-params='{"required": ["email"], "optional": ["name"]}'` sur le `<form>` ✓
- `data-mcp-param` + `aria-label` sur les 2 inputs (email natif `type="email"`, pas de placeholder-only) ✓
- Honeypot `website` (tabIndex -1, aria-hidden, succès silencieux côté serveur) ✓
- Zéro CAPTCHA, inputs natifs ✓
- Entrée sitemap préparée dans le diff (priority 0.9) ✓
- API route: validation email + honeypot honorer, pattern MVP Resend documenté ✓

**3 items à faire au moment du commit/déploiement (sinon le gap du 19 nov se répète):**
1. `components/McpActionsLink.tsx` NON importé dans `app/fr/atelier-audit-ia/page.tsx` — arbre dédié `app/fr/*`, n'hérite d'aucun layout qui sert le link rel. Ajouter le composant en premier enfant du fragment.
2. `public/mcp-actions.json` ne déclare pas `register-atelier` — le form déclarerait une action absente du catalogue de découverte. Ajouter l'action (POST `/api/atelier`, params email requis / name optionnel, note honeypot).
3. `public/llms.txt` section « Machine-readable actions » — ajouter la ligne register-atelier dans la foulée.

**Échéance:** la route API annonce l'atelier du mardi 2 décembre 2026, 12h30. Le funnel doit être déployé avec ces 3 items AVANT cette date pour que les agents (et le SEO) découvrent l'action dès la mise en ligne.

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (curl -L, HTML minifié → compter avec `grep -o | wc -l`), `<link rel="mcp-actions">` servi ✓ — 7e check consécutif au même chiffre
- `/chargeback-audit`: 11 occurrences `data-mcp-*`, link rel servi ✓ — identique
- `/mcp-actions.json`: 200, v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: 200 ✓
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓
- Arbres CG: routes toutes à la racine (pas d'arbre fr/en dédié), donc pas de risque du gap type 19 nov; /blog porte aussi le link rel ✓

## Blogposts WebMCP (chantier « blogpost » de la session)

- FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, h1×1, link rel servi, présent au sitemap.xml ✓
- EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, h1×1, link rel servi, présent au sitemap.xml ✓
- CG `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 ✓
- Les 3 sujets (wave 3 + site actionnable, FR et EN) restent couverts: pas de duplicata écrit aujourd'hui, conformément à la règle anti-cannibalisation du pipeline blog. Aucun post publié → pas de creative gate à passer aujourd'hui.

## Notes

- Piège curl du jour: `expertsia.dev/mcp-actions.json` en GET sans `-L` renvoie « Redirecting... » (redirection apex→www). Toujours curler avec `-L` (leçon déjà notée côté CG le 15 oct; urllib la suit nativement — l'audit script n'est pas affecté).
- WIP atelier laissé intouché (règle du 19 nov: WIP d'une autre session non commité = on audite, on ne touche pas).
- Phase 2 (API impérative) toujours gated sur l'adoption navigateur réelle, inchangée depuis le 8 oct.
- Prochaine session: si le funnel atelier est déployé d'ici là, re-checker la grille complète en LIVE (les 3 items ci-dessus) + l'ajouter à l'échantillon d'audit (13 pages).
