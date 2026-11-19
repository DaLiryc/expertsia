# Ré-audit WebMCP / agentic-readiness — expertsia.dev (régression + correctif)

**Date:** 2026-11-19 · **Auditeur:** Hermes (cron jeudi WebMCP) · **Méthode:** fetch HTML brut sans JS (urllib), checks mécaniques. Comparé aux baselines du [2026-10-08](webmcp-audit-2026-10-08.md), 2026-10-15, 2026-10-22, [2026-11-05](webmcp-audit-2026-11-05.md) et [2026-11-12](webmcp-audit-2026-11-12.md).

## Verdict: instrumentation stable (5e re-check sans dérive), MAIS un gap de découverte trouvé et corrigé aujourd'hui: le lien `<link rel="mcp-actions">` était absent des 7 pages money (arbres dédiés `app/fr/*` et `app/en/*`). Les re-checks précédents n'échantillonnaient que /, /fr et /en — angle mort corrigé, lien déployé et vérifié live (commit ade43ff).

## Scorecard (même grille que les audits précédents)

| Pilier | 8 oct | 15 oct | 22 oct | 5 nov | 12 nov | 19 nov | Détail du re-check live |
|---|---|---|---|---|---|---|---|
| Découverte | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 (après correctif) | robots.txt: 11 user-agents (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, YouBot, cohere-ai, Bytespider + `*`), zéro crawler IA bloqué, Sitemap ✓. llms.txt 200 (2 089 octets, identique au 12 nov) avec section « Machine-readable actions » ✓. mcp-actions.json 200, JSON valide v1.0, 4 actions ✓. **Avant correctif le link rel était servi sur /, /fr, /en uniquement; après correctif (ade43ff) il est servi sur les 10 pages testées, dont les 7 pages money** — vérifié live le jour même |
| Parsabilité | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | 4.5/5 | Hiérarchie stable: / 96 856 octets (h1×1 / h2×5 / h3×10), /fr 99 067 (+2 561 vs baseline 8 oct, cartes de posts FR), /en 96 856. Les 7 pages money: 42 986 à 59 794 octets, h1×1 partout, hiérarchie propre. Pages server-rendered, lisibles sans JS ✓ |
| Capacités | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 16 occurrences `data-mcp-*` servies en SSR, identiques sur /, /fr et /en ✓. Les pages money n'ont pas de formulaire inline (CTA cal.com + API teardown documentée dans mcp-actions.json): 0 `data-mcp` y est normal, pas un défaut — les actions restent déclarées dans le catalogue JSON |

## Le gap trouvé et le correctif (ade43ff, 2026-11-19)

- **Constat avant correctif:** `app/[locale]/layout.tsx` porte le `<link rel="mcp-actions">` (ligne 120), mais les pages des arbres dédiés (`app/fr/agentic-ready`, `app/en/agentic-ready`, `app/fr/commerce-agentique`, `app/en/agentic-commerce`, `app/fr/tarifs`, `app/en/pricing`, `app/fr/consultant-ia-bordeaux`) n'héritent d'aucun layout qui le rend. Un agent atterrissant directement sur la page qui VEND l'audit WebMCP (/fr/agentic-ready) ne pouvait pas découvrir le catalogue d'actions. Ironique et contre-productif commercialement.
- **Correctif:** nouveau composant `components/McpActionsLink.tsx` (React 19 hoiste `<link>` dans la région head servie), ajouté en premier enfant du fragment des 7 pages. `npx tsc --noEmit` exit 0, commit `ade43ff` (8 fichiers, 22 insertions), push main, rebuild Vercel.
- **Vérification live après rebuild:** link présent sur les 7 pages (+129 à +142 octets par page, taille du tag servi). Position dans le document: région ressources de tête (le document de ces routes ne contient pas de balises `<head>` explicites; le link voisin du canonical/stylesheet, donc traité comme métadonnée de head par tout parseur HTML). Les 3 pages du tree [locale] inchangées: 96 856 / 99 067 / 96 856 octets, 16 `data-mcp-*`, link déjà présent.
- **Leçon process:** l'audit hebdo ne testait que 3 pages d'un site à ~51 URLs. Toute page nouvelle doit passer la grille complète (labels natifs, honeypot, pas de CAPTCHA, data-mcp sur tout form, link rel de découverte). Le funnel atelier en WIP devra passer la grille complète au moment de son déploiement.

## Cross-check trychargeguard.com (même session)

- `/signup`: 15 occurrences `data-mcp-*` (1 action, 7 description, 6 param), `<link rel="mcp-actions">` servi ✓ — identique aux baselines (6e check consécutif au même chiffre)
- `/chargeback-audit`: 11 occurrences `data-mcp-*` (1 action, 5 description, 4 param), link rel servi ✓ — identique
- `/mcp-actions.json`: 200, JSON valide v1.0, actions create-account + request-chargeback-audit ✓
- `/llms.txt`: 4 350 octets, identique au fichier du repo public/llms.txt (diff vide, 0 dérive) ✓
- Blogpost wave 3 `/blog/webmcp-let-ai-agents-complete-tasks-2026` → 200 + présent au sitemap ✓

## Livrables du 8 oct toujours en prod (vérifiés aujourd'hui)

- Blogpost FR `/fr/blog/site-actionnable-agents-ia-webmcp-2026` → 200, présent au sitemap.xml ✓
- Blogpost EN `/en/blog/make-your-site-agent-actionable-webmcp-2026` → 200, présent au sitemap.xml ✓
- Les deux sujets (blogpost wave 3 + audit WebMCP vendable) sont donc déjà couverts FR et EN: pas de duplicata écrit aujourd'hui, conformément à la règle anti-cannibalisation du pipeline blog.

## Notes

- `/fr/contact` n'existe pas (404): le form contact est sur la home, couvert par les 16 `data-mcp-*`. Stable depuis le 8 oct, pas une régression.
- WIP non commité toujours présent (funnel atelier: `app/api/atelier/`, `app/fr/atelier-audit-ia/`, `components/AtelierForm.tsx`, `app/sitemap.ts` modifié): non servi en prod, hors périmètre, non touché par le correctif d'aujourd'hui.
- Phase 2 (API impérative) toujours gated sur l'adoption navigateur réelle, inchangée depuis le 8 oct.
- Prochain jalon: étendre la grille complète aux nouvelles pages au fur et à mesure (atelier, futures pages money), et garder l'échantillon d'audit à 10 pages minimum (les 3 du tree [locale] + les 7 money).
