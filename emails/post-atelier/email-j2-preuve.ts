// Email J+2 · post-atelier : preuve + objection « je peux le faire moi-même ».
// Resend-compatible : passer `subject`, `html` et `text` à resend.emails.send().
// From : ExpertsIA <onboarding@expertsia.dev>
// AVANT ENVOI : remplacer les champs [À COMPLÉTER] par les chiffres exacts d'une
// livraison réelle du portfolio (même case que celle présentée à l'atelier).
// Chiffres exacts, jamais arrondis au flattant.

export const emailPostAtelierJ2 = {
  subject: "« Je peux le faire moi-même » : ce que ça coûte vraiment",
  text: `Bonjour,

Une livraison du portfolio, chiffres réels :
· Cas : [À COMPLÉTER : le cas, ex. devis automatisé]
· Avant : [À COMPLÉTER : délai et coût observés avant]
· Après : [À COMPLÉTER : délai et coût observés après]
· ROI observé : [À COMPLÉTER]

Voilà ce qu'une livraison bien cadrée produit. Et voilà ce qui vous attend si le cas est mal choisi : des semaines d'intégration sur un gadget.

Sur « je peux le faire moi-même » : vous avez raison. La checklist est faite pour ça, les 3 filtres aussi. Testez seul, c'est un bon chemin.

Ce que l'audit achète n'est pas le développement. C'est le tri : choisir le bon cas, le chiffrer avant d'engager un euro, écarter les gadgets avant qu'ils coûtent des semaines. Le mauvais cas coûte plus cher que l'audit.

Si vous voulez ce tri sur vos propres processus : https://cal.com/expertsia-audit
À partir de 1 200 € HT, deux semaines, un plan d'action chiffré.

Si vous préférez avancer seul, la checklist suffit. C'est une sortie propre.

Cyril · ExpertsIA

ExpertsIA · Automatisation IA pour PME, Bordeaux et toute la France.
Vous pouvez vous désinscrire en répondant à cet email.`,
  html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
          <h1 style="color:#e07b39;font-size:22px;">Une livraison réelle, chiffres exacts</h1>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Une livraison du portfolio, celle dont on a parlé à l'atelier :
          </p>
          <div style="background:#111a11;border:1px solid #2a3a2a;border-radius:12px;padding:20px;margin:20px 0;">
            <p style="font-size:15px;line-height:1.8;color:#d4cfc7;margin:0;">
              Cas : <strong style="color:#e07b39;">[À COMPLÉTER : le cas, ex. devis automatisé]</strong><br>
              Avant : [À COMPLÉTER : délai et coût observés]<br>
              Après : [À COMPLÉTER : délai et coût observés]<br>
              ROI observé : [À COMPLÉTER : le chiffre exact]
            </p>
          </div>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Voilà ce qu'une livraison bien cadrée produit. Et voilà ce qui vous attend si le cas
            est mal choisi : des semaines d'intégration sur un gadget.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            <strong>Sur « je peux le faire moi-même ».</strong> Vous avez raison. La checklist est
            faite pour ça, les 3 filtres aussi. Testez seul, c'est un bon chemin.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Ce que l'audit achète n'est pas le développement. C'est le tri : choisir le bon cas,
            le chiffrer avant d'engager un euro, écarter les gadgets avant qu'ils coûtent des
            semaines. Le mauvais cas coûte plus cher que l'audit.
          </p>
          <p style="margin:24px 0;">
            <a href="https://cal.com/expertsia-audit"
               style="background:#e07b39;color:#0a0f0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
              Réserver un créneau d'audit
            </a>
          </p>
          <p style="font-size:15px;line-height:1.6;color:#d4cfc7;">
            À partir de 1 200 € HT, deux semaines, un plan d'action chiffré. Et si vous préférez
            avancer seul, la checklist suffit. C'est une sortie propre.
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
