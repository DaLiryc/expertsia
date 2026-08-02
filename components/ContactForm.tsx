'use client';

import { useState } from 'react';

interface ContactFormProps {
  locale: string;
  labels: {
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
}

export default function ContactForm({ locale, labels }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      website: formData.get('website'), // honeypot
      locale,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Server error');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email cyril@expertsia.dev directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-4 max-w-md mx-auto items-center py-10">
        <div className="w-16 h-16 bg-gradient-to-br from-[#e07b39] to-[#d4a574] rounded-full flex items-center justify-center text-3xl">
          ✓
        </div>
        <p className="text-[#f5f0e8] text-lg font-semibold text-center">
          {locale === 'fr'
            ? 'Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.'
            : 'Thank you! Your message has been sent. We\'ll get back to you within 24h.'}
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />
      <input
        type="text"
        name="name"
        placeholder={labels.namePlaceholder}
        required
        className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
      />
      <input
        type="email"
        name="email"
        placeholder={labels.emailPlaceholder}
        required
        className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
      />
      <input
        type="text"
        name="company"
        placeholder={labels.companyPlaceholder}
        className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans"
      />
      <textarea
        name="message"
        placeholder={labels.messagePlaceholder}
        required
        className="px-4 py-[15px] bg-[#1a261a] border border-[#2a3a2a] rounded-lg text-[#f5f0e8] text-base focus:outline-none focus:border-[#e07b39] w-full font-sans min-h-[150px] resize-y"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(224,123,57,0.15)] border-none self-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting'
          ? '...'
          : labels.submit}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">{errorMsg}</p>
      )}
    </form>
  );
}
