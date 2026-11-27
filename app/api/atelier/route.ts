import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { escapeHtml } from '@/lib/escape-html';
import { rateLimited } from '@/lib/teardown/security';

const resend = new Resend(process.env.RESEND_API_KEY);

// Atelier registration: confirmation to the registrant + notification to Cyril.
// Same MVP pattern as /api/newsletter (no DB, Resend only). Upgrade path: persist
// registrations in a table when volume justifies it.

// Same email rule as /api/contact and /api/newsletter.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// CR/LF and other control characters would break out of a mail header.
const NO_CONTROL_RE = /^[^\u0000-\u001F\u007F]*$/;

// Every field that reaches an email is validated here before it is used.
const atelierSchema = z.object({
  email: z.string()
    .min(1, 'Email required')
    .max(254, 'Invalid email')
    .regex(EMAIL_RE, 'Invalid email'),
  name: z.string()
    .trim()
    .max(80, 'Name too long (80 characters max)')
    .regex(NO_CONTROL_RE, 'Invalid name')
    .optional(),
  // Honeypot: must stay empty; any value = bot.
  website: z.string().max(500).optional(),
});

// In-memory budgets per rolling hour, per instance (same guard as the teardown
// endpoints): one address cannot be spammed, one IP cannot loop the endpoint.
const RATE_PER_ADDRESS = 3;
const RATE_PER_IP = 10;

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const first = forwarded ? forwarded.split(',')[0].trim() : '';
  const ip = first || (request.headers.get('x-real-ip') || '').trim() || 'unknown';
  return ip.slice(0, 64);
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const parsed = atelierSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid request' },
        { status: 400 }
      );
    }

    const { email, website } = parsed.data;

    // Honeypot: bots filling the hidden field get a silent success.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const firstName = parsed.data.name ?? '';
    const ip = clientIp(request);

    if (
      rateLimited(`atelier:address:${ip}:${email.toLowerCase()}`, RATE_PER_ADDRESS) ||
      rateLimited(`atelier:ip:${ip}`, RATE_PER_IP)
    ) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later or use the contact page.' },
        { status: 429 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'ExpertsIA <onboarding@expertsia.dev>',
      to: [email],
      subject: 'Votre place est réservée : atelier du mercredi 2 décembre, 12h30',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
          <h1 style="color:#e07b39;font-size:22px;">Place réservée${firstName ? `, ${escapeHtml(firstName)}` : ''}</h1>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            <strong>Atelier live : trouvez votre premier cas d'usage IA rentable en 45 minutes.</strong><br>
            Mercredi 2 décembre 2026, 12h30 à 13h15, en ligne.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Le lien de connexion vous sera envoyé par email la veille de la session (mardi 1er décembre). Vous recevrez aussi un rappel le jour même.
          </p>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            En attendant, voici la checklist promise : <strong>les 12 signaux qu'une PME est prête pour l'IA</strong>.
          </p>
          <div style="background:#111a11;border:1px solid #2a3a2a;border-radius:12px;padding:20px;margin:20px 0;">
            <p style="color:#e07b39;font-weight:600;margin:0 0 8px 0;">Travail manuel répétitif</p>
            <ol style="font-size:14px;line-height:1.7;color:#d4cfc7;padding-left:20px;margin:0;">
              <li>Vous répondez plus de 5 fois par semaine au même email.</li>
              <li>Vous copiez-collez entre deux outils plus de 30 minutes par jour.</li>
              <li>Devis ou factures sont préparés à la main.</li>
              <li>Vos rapports hebdomadaires sont assemblés à la main.</li>
            </ol>
            <p style="color:#e07b39;font-weight:600;margin:16px 0 8px 0;">Argent qui dort</p>
            <ol start="5" style="font-size:14px;line-height:1.7;color:#d4cfc7;padding-left:20px;margin:0;">
              <li>Vos devis partent après 48h ou plus.</li>
              <li>Les demandes reçues le week-end restent sans réponse.</li>
              <li>Aucun devis ancien n'est jamais relancé.</li>
              <li>Les questions clients de la nuit attendent le lendemain.</li>
            </ol>
            <p style="color:#e07b39;font-weight:600;margin:16px 0 8px 0;">Dette de décision</p>
            <ol start="9" style="font-size:14px;line-height:1.7;color:#d4cfc7;padding-left:20px;margin:0;">
              <li>Vous ignorez le temps passé par processus.</li>
              <li>Vous décidez au ressenti, faute de données.</li>
              <li>Des outils sont achetés mais jamais déployés.</li>
              <li>Aucune action passée n'a de résultat mesuré.</li>
            </ol>
          </div>
          <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
            Plus vous cochez de cases, plus l'atelier vous fera gagner du temps. Si vous en cochez plus de 8, réservez dès maintenant un <a href="https://www.expertsia.dev/fr/tarifs" style="color:#e07b39;">audit IA (à partir de 1 200 € HT)</a> plutôt qu'une place d'atelier.
          </p>
          <hr style="border:none;border-top:1px solid #2a3a2a;margin:30px 0;">
          <p style="font-size:12px;color:#888;">
            ExpertsIA · Automatisation IA pour PME, Bordeaux et toute la France.<br>
            Vous pouvez vous désinscrire en répondant à cet email.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Atelier confirmation error:', error);
      return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
    }

    // Owner notification: the registrant is registered whatever happens here,
    // so the request still succeeds, but a failure is logged, never ignored.
    const { error: notifyError } = await resend.emails.send({
      from: 'ExpertsIA <onboarding@expertsia.dev>',
      to: ['cyril@expertsia.dev'],
      subject: `[Atelier] Inscription : ${email}${firstName ? ` (${firstName})` : ''}`,
      html: `<p>Nouvelle inscription à l'atelier du 2 décembre.</p><p><strong>${escapeHtml(email)}</strong>${firstName ? ` · ${escapeHtml(firstName)}` : ''}</p>`,
    });
    if (notifyError) {
      console.error('Atelier owner notification error:', notifyError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Atelier error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
