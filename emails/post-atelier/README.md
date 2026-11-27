# Séquence email post-atelier (J+0 / J+2 / J+5)

Séquence de relance après l'atelier live. Construite le 17 novembre 2026,
dans le cadre de la stratégie outbound Scalezia appliquée aux projets ExpertsIA
et ChargeGuard (rapport : ~/reports/outbound/trychargeguard.com/strategy.md).

Cette séquence remplace la ligne « pas de relance supplémentaire avant janvier »
du playbook (docs/atelier-playbook.md, section 6) : décision du kickoff du
17 novembre. Mettre à jour le playbook si la séquence entre en prod.

## Fichiers

| Email | Fichier | Envoi |
|---|---|---|
| J+0 récap + offre | `email-j0-recap.ts` | le jour de l'atelier, vers 17h |
| J+2 preuve + objection | `email-j2-preuve.ts` | 2 jours après, matin |
| J+5 dernier rappel | `email-j5-dernier-rappel.ts` | 5 jours après, matin |

Chaque fichier exporte `subject`, `html` et `text` : les 3 champs attendus par
`resend.emails.send()`. From : `ExpertsIA <onboarding@expertsia.dev>`
(adresse déjà validée, utilisée par la newsletter et /api/atelier).

## Ciblage

Envoyer uniquement aux inscrits qui ont assisté à la session (ou no-shows pour
une variante dédiée, le template no-show du playbook reste la base). La séquence
suppose que le destinataire a vu l'atelier : ne pas l'envoyer à la liste
newsletter.

## À compléter AVANT le premier envoi

1. `email-j2-preuve.ts` : les 4 champs `[À COMPLÉTER]` du case study. Chiffres
   exacts d'une livraison réelle du portfolio, jamais arrondis au flattant
   (règle du playbook, section 3).
2. `email-j5-dernier-rappel.ts` : le mois d'ouverture de la vague suivante.
3. Les nombres de créneaux : « 2 créneaux restants ce mois » doit correspondre
   au calendrier cal.com réel au moment de l'envoi. Si le compte a changé,
   corriger l'objet ET le corps. Rareté fausse = pas d'envoi.
4. Personnalisation optionnelle : prénom dans le H1 et l'objet de J+0
   (même pattern que la confirmation /api/atelier : `${firstName ? `, ${firstName}` : ''}`).

## Câblage

Pas de route branchée en prod pour l'instant. Deux options au GO :
- envoi manuel via le dashboard Resend (coller html/text/subject) ;
- ou un script `scripts/send-post-atelier.ts` sur le pattern
  `app/api/atelier/route.ts`, déclenché à la main après chaque session.

L'atelier lui-même attend le GO de Cyril : date confirmée + lien visio
(voir docs/atelier-playbook.md, section 2).

## Règles éditoriales appliquées

Vouvoiement partout, zéro emoji, zéro tiret cadratin, pas d'urgence
artificielle, rareté réelle uniquement, le refus est une sortie propre
(chaque email propose une sortie sans achat). Une seule CTA par email :
cal.com/expertsia-audit.
