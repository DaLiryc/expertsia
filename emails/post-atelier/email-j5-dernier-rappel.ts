// Email J+5 · post-atelier : dernier rappel, rareté réelle.
// Resend-compatible : passer `subject`, `html` et `text` à resend.emails.send().
// From : ExpertsIA <onboarding@expertsia.dev>
// AVANT ENVOI : vérifier que le nombre de créneaux restants correspond au
// calendrier réel. Si ce n'est plus 2, corriger objet + corps. La rareté doit
// être vraie : si les créneaux sont partis, envoyer plutôt la variante complet
// (voir README). Pas de relance après cet email.

export const emailPostAtelierJ5 = {
  subject: "2 créneaux d'audit restent ce mois · dernier email sur le sujet",
  text: `Bonjour,

C'est mon dernier email sur l'audit, après celui-ci je ne reviens plus vers vous sur le sujet.

Il reste 2 créneaux d'audit ce mois-ci. C'est le calendrier réel, pas une compte à rebours. Quand ils sont pris, la prochaine vague ouvre en [À COMPLÉTER : mois suivant].

Pour rappel, l'audit : deux semaines sur vos processus, un plan d'action chiffré processus par processus, le ROI estimé avant d'engager un euro de développement. À partir de 1 200 € HT.

Si votre score d'atelier est au-dessus de 8, c'est le moment : https://cal.com/expertsia-audit

S'il est en dessous, ou si le moment n'est pas bon : la checklist reste dans votre email d'inscription, elle fonctionne sans nous. Et vous pouvez écrire à cette adresse quand votre situation change, je réponds.

Cyril · ExpertsIA

ExpertsIA · Automatisation IA pour PME, Bordeaux et toute la France.
Vous pouvez vous désinscrire en répondant à cet email.`,
  html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
          <h1 style="color:#e07b39;font-size:22px;">Dernier email sur le sujet</h1>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            C'est mon dernier email sur l'audit. Après celui-ci, je ne reviens plus vers vous sur le sujet.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Il reste <strong style="color:#e07b39;">2 créneaux d'audit ce mois-ci</strong>. C'est le
            calendrier réel, pas un compte à rebours. Quand ils sont pris, la prochaine vague ouvre
            en [À COMPLÉTER : mois suivant].
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Pour rappel, l'audit : deux semaines sur vos processus, un plan d'action chiffré
            processus par processus, le ROI estimé avant d'engager un euro de développement.
            À partir de 1 200 € HT.
          </p>
          <p style="margin:24px 0;">
            <a href="https://cal.com/expertsia-audit"
               style="background:#e07b39;color:#0a0f0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
              Réserver un créneau d'audit
            </a>
          </p>
          <p style="font-size:15px;line-height:1.6;color:#d4cfc7;">
            Si votre score d'atelier est au-dessus de 8, c'est le moment. S'il est en dessous, ou si
            le moment n'est pas bon : la checklist reste dans votre email d'inscription, elle
            fonctionne sans nous. Et vous pouvez répondre à cet email quand votre situation change,
            je lis les réponses.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Cyril · ExpertsIA
          </p>
          <hr style="border:none;border-top:1px solid #2a3a2a;margin:30px 0;">
          <p style="font-size:12px;color:#888;">
            ExpertsIA · Automatisation IA pour PME, Bordeaux et toute la France.<br>
            Vous pouvez vous désinscrire en répondant à cet email.
          </p>
        </div>
      `,
};
