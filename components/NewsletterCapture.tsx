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
      <div className="text-center py-4">
        <p className="text-[#e07b39] font-semibold">
          {isFr ? '✓ Inscrit ! Vérifiez votre boîte mail.' : '✓ Subscribed! Check your inbox.'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isFr ? 'Votre email professionnel' : 'Your work email'}
          required
          className="flex-1 px-4 py-3 bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-sm focus:outline-none focus:border-[#e07b39] font-sans"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-[#e07b39] text-[#0a0f0a] px-5 py-3 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'submitting'
            ? '...'
            : isFr ? "S'inscrire" : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2 text-center">
          {isFr ? 'Erreur. Réessayez ou écrivez-nous directement.' : 'Error. Please try again or email us.'}
        </p>
      )}
    </div>
  );
}
