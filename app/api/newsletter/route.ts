import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store for MVP (upgrade to DB later)
// In production, use Supabase/D1/KV to persist subscribers
export async function POST(request: Request) {
  try {
    const { email, locale } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Honeypot
    if (request.body && (await request.clone().json().catch(() => ({}))).website) {
      return NextResponse.json({ success: true });
    }

    // Send confirmation email via Resend
    const { error } = await resend.emails.send({
      from: 'ExpertsIA <onboarding@expertsia.dev>',
      to: [email],
      subject: locale === 'fr'
        ? 'Bienvenue dans La Veille IA Décideurs 🔥'
        : 'Welcome to the ExpertsIA Newsletter 🔥',
      html: locale === 'fr'
        ? `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
            <h1 style="color:#e07b39;">Bienvenue ! 👋</h1>
            <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
              Vous êtes maintenant inscrit à <strong>La Veille IA Décideurs</strong>.
              Chaque semaine, vous recevrez :
            </p>
            <ul style="font-size:16px;line-height:1.8;color:#d4cfc7;padding-left:20px;">
              <li>1 actualité IA décryptée (impact business)</li>
              <li>1 outil ou conseil pratique</li>
              <li>1 retour d'expérience ou case study</li>
            </ul>
            <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
              En attendant le prochain numéro, découvrez notre dernier article :
            </p>
            <p style="margin:20px 0;">
              <a href="https://www.expertsia.dev/fr/blog/automatiser-entreprise-ia-2026"
                 style="background:#e07b39;color:#0a0f0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
                Guide : Automatiser son entreprise avec l'IA
              </a>
            </p>
            <hr style="border:none;border-top:1px solid #2a3a2a;margin:30px 0;">
            <p style="font-size:12px;color:#888;">
              ExpertsIA — Automatisation IA pour PME.<br>
              Vous pouvez vous désinscrire à tout moment en répondant à cet email.
            </p>
          </div>
        `
        : `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0a;color:#f5f0e8;padding:40px;">
            <h1 style="color:#e07b39;">Welcome! 👋</h1>
            <p style="font-size:16px;line-height:1.6;color:#d4cfc7;">
              You're now subscribed to the <strong>ExpertsIA Newsletter</strong>.
            </p>
            <p style="font-size:16px;line-height:1.6;color:#d4cfc7;margin:20px 0;">
              <a href="https://www.expertsia.dev/en/blog"
                 style="background:#e07b39;color:#0a0f0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
                Read our latest articles
              </a>
            </p>
            <hr style="border:none;border-top:1px solid #2a3a2a;margin:30px 0;">
            <p style="font-size:12px;color:#888;">
              ExpertsIA — AI Automation for Business.<br>
              You can unsubscribe at any time by replying to this email.
            </p>
          </div>
        `,
    });

    if (error) {
      console.error('Newsletter signup error:', error);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    // Also notify Cyril
    await resend.emails.send({
      from: 'ExpertsIA <onboarding@expertsia.dev>',
      to: ['cyril@expertsia.dev'],
      subject: `[Newsletter] New subscriber: ${email}`,
      html: `<p>New newsletter subscriber:</p><p><strong>${email}</strong></p><p>Locale: ${locale || 'unknown'}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
