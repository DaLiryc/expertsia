'use client';

import { useState } from 'react';

interface NewsletterCaptureProps {
  locale: string;
}

export default function NewsletterCapture({ locale }: NewsletterCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const isFr = locale === 'fr';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="text-[#e07b39] text-sm font-medium py-2">
        {isFr ? '✓ Inscrit ! Vérifiez votre boîte mail.' : '✓ Subscribed! Check your inbox.'}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={isFr ? 'Votre email professionnel' : 'Your work email'}
        required
        className="form-input flex-1 text-sm"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary text-sm whitespace-nowrap disabled:opacity-50"
      >
        {status === 'submitting' ? '...' : isFr ? "S'inscrire" : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2 absolute">
          {isFr ? 'Erreur. Réessayez.' : 'Error. Try again.'}
        </p>
      )}
    </form>
  );
}
