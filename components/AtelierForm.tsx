'use client';

import { useState } from 'react';

export default function AtelierForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Read the form before the first await (currentTarget is null afterwards).
    const form = e.currentTarget as HTMLFormElement;
    const honeypot = String(new FormData(form).get('website') ?? '');
    setStatus('submitting');

    try {
      const res = await fetch('/api/atelier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // `website` is the honeypot: the server treats any value as a bot.
        body: JSON.stringify({ email, name, website: honeypot }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-6 max-w-xl mx-auto">
        <p className="text-[#e07b39] text-base font-medium">
          C&rsquo;est noté. Vérifiez votre boîte mail : vous y trouvez le lien de la session et la checklist des 12 signaux.
        </p>
        <p className="text-[#d4cfc7] text-sm mt-3">
          Un imprévu ? Répondez simplement à l&rsquo;email de confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-6 max-w-xl mx-auto space-y-4"
      data-mcp-action="register-atelier"
      data-mcp-description="Register for the free live ExpertsIA workshop: find your first profitable AI use case in 45 minutes. You receive the meeting link and a 12-signal readiness checklist by email."
      data-mcp-params='{"required": ["email"], "optional": ["name"]}'
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="name"
          aria-label="Votre prénom (optionnel)"
          data-mcp-param="name"
          value={name}
          maxLength={80}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre prénom (optionnel)"
          className="flex-1 bg-[#0a0f0a] border border-[#2a3a2a] rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#888] focus:border-[#e07b39] focus:outline-none"
        />
        <input
          type="email"
          name="email"
          aria-label="Votre email professionnel"
          data-mcp-param="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email professionnel"
          required
          className="flex-1 bg-[#0a0f0a] border border-[#2a3a2a] rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#888] focus:border-[#e07b39] focus:outline-none"
        />
      </div>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#e07b39] text-[#0a0f0a] font-semibold rounded-lg px-6 py-3 hover:bg-[#c96a2e] transition-colors disabled:opacity-50"
      >
        {status === 'submitting' ? 'Inscription en cours…' : 'Réserver ma place gratuite'}
      </button>
      {status === 'error' && (
        <p className="text-[#d4cfc7] text-sm">
          Une erreur est survenue. Écrivez-nous directement via la page contact.
        </p>
      )}
      <p className="text-[#888] text-xs">
        Session live de 45 minutes. Aucune carte demandée. Vous recevez le lien de connexion et la checklist par email.
      </p>
    </form>
  );
}
