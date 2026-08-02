import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, locale } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Honeypot field — bots fill this, humans don't see it
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'cyril@expertsia.dev';

    const { data, error } = await resend.emails.send({
      from: 'ExpertsIA Contact <onboarding@expertsia.dev>',
      to: [contactEmail],
      replyTo: email,
      subject: `[Contact] New inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>New contact form submission</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name:</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email:</td><td>${escapeHtml(email)}</td></tr>
          ${company ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Company:</td><td>${escapeHtml(company)}</td></tr>` : ''}
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Locale:</td><td>${escapeHtml(locale || 'en')}</td></tr>
        </table>
        <h3 style="margin-top:20px;">Message:</h3>
        <div style="background:#f5f5f5;padding:16px;border-radius:8px;font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(message)}</div>
        <hr style="margin-top:20px;border:none;border-top:1px solid #ddd;">
        <p style="font-size:12px;color:#888;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
