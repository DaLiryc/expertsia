# Atelier IA ExpertsIA · Playbook du funnel

Funnel type "creator" appliqué au B2B français : reel/post viral → commentaire qualifiant → DM → page d'inscription → workshop live 45 min → upsell audit 1 200 € HT.
Construit le 10 novembre 2026. Rien n'est déployé : cette page décrit le système et attend le feu de Cyril.

## 1. Le funnel, bout en bout

1. **Post LinkedIn** (comment-gating) : hook + méthode + "commentez ATELIER"
2. **Chaque commentaire "ATELIER"** → réponse DM avec le lien de la page + mention de la checklist
3. **Page d'inscription** `/fr/atelier-audit-ia` : le pitch complet + checklist visible (contenu indexable) + formulaire email
4. **Email de confirmation automatique** (Resend, route `/api/atelier`) : logistics + checklist 12 signaux complète + early upsell honnête ("8 signaux cochés ou plus → réservez l'audit directement")
5. **Rappel J-1** (manuel ou script, template ci-dessous)
6. **Atelier live 45 min** (run-of-show section 3), transition commerciale à la minute 40
7. **Email post-atelier** : offre audit + lien cal.com (template ci-dessous)
8. **No-show** : email de rattrapage honnête (pas de replay) + session suivante

Fichiers livrés :
- `app/fr/atelier-audit-ia/page.tsx` : page argent (Event + FAQ JSON-LD, checklist, formulaire)
- `app/api/atelier/route.ts` : inscription (Resend : confirmation inscrit + notification cyril@)
- `components/AtelierForm.tsx` : formulaire client (mcp-action déclaré)
- `app/sitemap.ts` : route ajoutée (0.9, FR only)
- tsc : exit 0. **Non pushé.**

## 2. Prérequis avant mise en prod (à faire par Cyril)

- [ ] Confirmer la date : mardi 2 décembre 2026, 12h30 à 13h15 (dans la page, l'email de confirmation et le Event JSON-LD : 3 endroits à changer si autre date)
- [ ] Créer l'événement visio : soit un type cal.com "atelier" (https://cal.com/expertsia/atelier, lien utilisé dans l'email de confirmation), soit un lien Meet/Zoom fixe à me donner
- [ ] Valider l'adresse d'envoi Resend (onboarding@expertsia.dev, déjà utilisée par la newsletter)
- [ ] Décider la limite : 25 participants (affichée sur la page) ou autre
- [ ] Go pour le push

## 3. Run-of-show de l'atelier (45 min)

| Minutes | Séquence | Notes d'exécution |
|---|---|---|
| 0-3 | Accueil + règle du jeu | "Vous repartez avec un cas d'usage, pas avec une brochure." Caméra ON, chat ouvert. |
| 3-8 | La méthode des 3 filtres | Volume (fréquence), répétition (variabilité faible), données disponibles. Un cas qui rate un filtre = gadget. |
| 8-15 | Deux livraisons réelles chiffrées | Prendre 2 cases du portfolio : devis automatisé (délai, coût, ROI observé) + réponses clients. Chiffres exacts des livraisons, jamais arrondis au flattant. |
| 15-22 | Checklist des 12 signaux en live | Les participants cochent pendant que tu passes les 3 groupes. Score affiché : "plus de 8 = votre gain est déjà démontré". |
| 22-27 | Débriefing score | 3 buckets : sous 4 (ne pas automatiser encore, régler les processus), 4-8 (1 cas prioritaire), 8+ (audit direct). |
| 27-40 | 3 situations de participants | Choisies dans le chat avant la session (question à l'inscription dans l'email de confirmation). Cadence : 4 min max par situation, verdict net. |
| 40-45 | La transition + clôture | Voir script upsell section 4. Fin précise à 13h15 : la ponctualité EST le pitch de l'automatisation. |

## 4. Script de transition commerciale (minute 40, 90 secondes)

"Vous avez maintenant votre score et votre premier cas d'usage. Deux chemins.

Premier chemin : seul. La checklist est complète, l'email de confirmation contient tout. Vous testez, vous mesurez, vous revenez si besoin.

Deuxième chemin : l'audit. Deux semaines sur vos processus, un plan d'action chiffré processus par processus, le ROI estimé avant d'engager un euro de développement. À partir de 1 200 euros HT. Je prends deux audits en janvier, c'est tout.

Ceux que ça intéresse : le lien est dans l'email que vous avez déjà. Je ne reviens pas dessus."

Règles : une seule mention, pas de remise, pas d'urgence artificielle. Le refus est une sortie propre.

## 5. Post LinkedIn de lancement (comment-gating)

Texte du post (à publier via le pipeline LinkedIn existant, le post passe la gate créa) :

---

La plupart des PME n'ont pas un problème d'IA. Elles ont un problème de tri.

Des dizaines d'outils promettent d'automatiser votre entreprise. Trois comptent vraiment. Le reste, ce sont des abonnements qui dorment.

Mardi 2 décembre, 12h30, je présente en live la méthode que j'utilise en audit : 45 minutes, votre situation, un cas d'usage rentable identifié.

Au programme :
· Les 3 filtres qui séparent un cas rentable d'un gadget
· Deux livraisons réelles, chiffrées (coût, délai, retour)
· La checklist des 12 signaux que votre PME est prête pour l'IA

Gratuit, en ligne, sans carte bancaire.

Commentez "ATELIER" et je vous envoie le lien d'inscription.

---

**Premier commentaire** (publié immédiatement après le post) :
Toutes les infos et l'inscription ici : https://www.expertsia.dev/fr/atelier-audit-ia · 25 places.

**Réponse DM type** à chaque commentaire "ATELIER" :
"Envoyé ! Inscription ici : https://www.expertsia.dev/fr/atelier-audit-ia · mardi 2 décembre 12h30, 45 min. Vous recevez la checklist des 12 signaux dès l'inscription."

Mécanique : les commentaires boostent la portée (algorithme), qualifient l'intérêt, et chaque réponse en DM est une notificationLinkedIn naturelle. Vouvoiement partout, zéro emoji, zéro lien dans le corps du post.

## 6. Emails (templates)

**Rappel J-1** (à envoyer mardi 1er décembre 12h30 aux inscrits) :
Objet : "Demain 12h30 : votre atelier (préparez 2 minutes)"
Corps : rappel horaire + lien + consigne : "Répondez à cet email avec votre métier et la tâche qui vous prend le plus de temps. Trois situations seront analysées en direct." + PS : le score des 12 signaux se fait en live.

**Post-atelier (offre, à envoyer le jour même 17h)** :
Objet : "Votre cas d'usage priorisé · et si vous voulez aller plus vite"
Corps : remercier + rappeler les 2 chemins (seul avec la checklist / audit chiffré) + lien cal.com/expertsia/audit + "2 audits pris en janvier". Pas de relance supplémentaire avant janvier.

**No-show (à envoyer le soir même)** :
Objet : "Vous n'avez pas pu venir (pas de replay, voilà pourquoi)"
Corps : "La session est vivante : les situations des participants font la valeur, un enregistrement ne les reproduit pas. La checklist complète est dans votre email d'inscription. Prochaine session : [date]. Ou si votre score sera élevé : audit direct, lien cal."

## 7. Métriques et règles de décision

| Métrique | Où la lire | Seuil de décision |
|---|---|---|
| Commentaires "ATELIER" sur le post | LinkedIn | < 5 = angle à retravailler avant la session 2 |
| Inscriptions (emails reçus sur cyril@) | boîte mail / Resend | < 10 = changer l'heure ou l'angle ; > 25 = liste d'attente + session 2 |
| Présence en live | comptage visio | < 40 % des inscrits = l'horaire est faux, tester 8h30 ou 18h |
| Audits vendus dans les 14 jours | cal.com + banque | 1 = funnel validé ; 0 sur 2 sessions = pivoter l'angle ou tuer |
| Coût du cycle | ~0 € (outils existants) | seule dépense possible : ManyChat si DM manuel devient trop lent |

## 8. Itération prévue

- Session 2 : angle rotatif depuis la série "pièges en prod" (ex : "Le devis qui part à J+3 coûte plus cher que l'IA qui l'envoie en 3 minutes")
- EN version de la page si une demande EN arrive (les règles du repo exigent alors un slug naturel : /en/live-ai-workshop)
- Les commentaires "ATELIER" hors LinkedIn (X, Instagram) : réponse manuelle même template
- Après 2 sessions : automatise le DM via ManyChat si le volume le justifie (l'API IG officielle permet le reply-on-comment ; LinkedIn non, rester manuel là-bas)
