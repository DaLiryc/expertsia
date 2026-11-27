// Email J+0 · post-atelier : récap + offre audit.
// Resend-compatible : passer `subject`, `html` et `text` à resend.emails.send().
// From : ExpertsIA <onboarding@expertsia.dev>

export const emailPostAtelierJ0 = {
  subject: "Le récap de votre atelier · votre score et les deux chemins",
  text: `Merci d'avoir participé à l'atelier.

Ce que vous emportez :
· La méthode des 3 filtres : volume, répétition, données disponibles. Un cas qui rate un filtre est un gadget.
· La checklist des 12 signaux (déjà dans votre email d'inscription).
· Votre score : sous 4, réglez d'abord vos processus. Entre 4 et 8, un cas prioritaire. Plus de 8, votre gain est déjà démontré.

Premier chemin : seul. La checklist est complète, vous testez, vous mesurez.

Deuxième chemin : l'audit. Deux semaines sur vos processus, un plan d'action chiffré processus par processus, le ROI estimé avant d'engager un euro de développement. À partir de 1 200 € HT.

Réserver un créneau d'audit : https://cal.com/expertsia-audit

Si votre score est resté sous 8, gardez la checklist. L'audit ne sert à rien tant que les processus ne sont pas posés.

À votre service,
Cyril · ExpertsIA

ExpertsIA · Automatisation IA pour PME, Bordeaux et toute la France.
Vous pouvez vous désinscrire en répondant à cet email.`,
  html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
          <h1 style="color:#e07b39;font-size:22px;">Merci d'avoir participé à l'atelier</h1>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Vous voilà avec votre score et un cas d'usage priorisé. Voici ce que vous emportez.
          </p>
          <div style="background:#111a11;border:1px solid #2a3a2a;border-radius:12px;padding:20px;margin:20px 0;">
            <p style="color:#e07b39;font-weight:600;margin:0 0 8px 0;">Les 3 filtres</p>
            <p style="font-size:15px;line-height:1.7;color:#d4cfc7;margin:0;">
              Volume (fréquence), répétition (variabilité faible), données disponibles.
              Un cas qui rate un filtre est un gadget : ne l'automatisez pas.
            </p>
            <p style="color:#e07b39;font-weight:600;margin:16px 0 8px 0;">Votre score</p>
            <p style="font-size:15px;line-height:1.7;color:#d4cfc7;margin:0;">
              Sous 4 : réglez d'abord vos processus, l'automatisation attendra.
              Entre 4 et 8 : un cas prioritaire, c'est tout ce qu'il vous faut pour démarrer.
              Plus de 8 : votre gain est déjà démontré, la question est l'ordre d'exécution.
            </p>
            <p style="color:#e07b39;font-weight:600;margin:16px 0 8px 0;">La checklist</p>
            <p style="font-size:15px;line-height:1.7;color:#d4cfc7;margin:0;">
              Les 12 signaux sont dans votre email d'inscription. Ils restent utilisables sans nous.
            </p>
          </div>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            <strong>Les deux chemins.</strong> Le premier : seul. Vous testez, vous mesurez, vous revenez si besoin.
            Le second : l'audit. Deux semaines sur vos processus, un plan d'action chiffré processus par
            processus, le ROI estimé avant d'engager un euro de développement. À partir de 1 200 € HT.
          </p>
          <p style="margin:24px 0;">
            <a href="https://cal.com/expertsia-audit"
               style="background:#e07b39;color:#0a0f0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
              Réserver un créneau d'audit
            </a>
          </p>
          <p style="font-size:15px;line-height:1.6;color:#d4cfc7;">
            Une remarque honnête : si votre score est resté sous 8, gardez la checklist.
            L'audit ne sert à rien tant que les processus ne sont pas posés.
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
