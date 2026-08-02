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
      website: formData.get('website'),
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
      setErrorMsg(locale === 'fr'
        ? 'Erreur. Écrivez-nous directement à cyril@expertsia.dev'
        : 'Error. Email us directly at cyril@expertsia.dev');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#e07b39]/10 border border-[#e07b39]/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-[#e07b39]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-[#f5f0e8] text-lg font-semibold mb-2">
          {locale === 'fr' ? 'Message envoyé !' : 'Message sent!'}
        </p>
        <p className="text-[#b8b3ab] text-sm font-light">
          {locale === 'fr'
            ? 'Nous vous répondrons sous 24h ouvrées.'
            : "We'll get back to you within 24 business hours."}
        </p>
      </div>
    );
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] opacity-0"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs text-[#b8b3ab] mb-2 font-medium tracking-wide">
              {labels.namePlaceholder}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs text-[#b8b3ab] mb-2 font-medium tracking-wide">
              {labels.companyPlaceholder}
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="form-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs text-[#b8b3ab] mb-2 font-medium tracking-wide">
            {labels.emailPlaceholder}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs text-[#b8b3ab] mb-2 font-medium tracking-wide">
            {labels.messagePlaceholder}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="form-input resize-y min-h-[120px]"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting'
            ? '...'
            : labels.submit}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center mt-4">{errorMsg}</p>
      )}
    </form>
  );
}
