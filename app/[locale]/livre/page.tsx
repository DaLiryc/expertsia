import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';
const BOOKING_URL = 'https://cal.com/expertsia/audit?utm_source=livre&utm_medium=book&utm_campaign=kdp';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return {
    title: isFr
      ? 'Le livre IA pour commerçants et artisans | ExpertsIA'
      : 'AI for shop owners & tradespeople — the book | ExpertsIA',
    description: isFr
      ? 'Gagnez 10 heures par semaine avec l\'intelligence artificielle, sans y connaître rien en informatique. 50 prompts prêts à l\'emploi. Le guide pratique pour commerçants et artisans.'
      : 'Save 10 hours a week with AI, no tech skills required. 50 ready-to-use prompts. The practical guide for shop owners and tradespeople.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/livre`,
    },
    openGraph: {
      title: isFr
        ? 'L\'IA pour commerçants et artisans'
        : 'AI for shop owners & tradespeople',
      description: isFr
        ? 'Gagnez 10 heures par semaine avec l\'IA. 50 prompts prêts à l\'emploi.'
        : 'Save 10 hours a week with AI. 50 ready-to-use prompts.',
      url: `${BASE_URL}/${locale}/livre`,
      type: 'website',
      siteName: 'ExpertsIA',
    },
    robots: 'index, follow',
  };
}

const chapters = [
  { n: '01', fr: 'L\'audit des 10 heures : trouvez vos tâches automatisables en 30 minutes', en: 'The 10-hour audit: find your automatable tasks in 30 minutes' },
  { n: '02', fr: 'Votre assistant commercial : devis, relances et fiches produits en minutes', en: 'Your sales assistant: quotes, follow-ups and product sheets in minutes' },
  { n: '03', fr: 'Votre accueil 24/7 : avis clients, questions récurrentes, messagerie', en: 'Your 24/7 front desk: reviews, FAQs, messaging' },
  { n: '04', fr: 'Votre marketer : un mois de contenu local en une après-midi', en: 'Your marketer: a month of local content in one afternoon' },
  { n: '05', fr: 'Votre back-office : factures, prises de rendez-vous, stock', en: 'Your back office: invoices, bookings, inventory' },
  { n: '06', fr: 'Les automatisations qui tournent seules : Make, n8n et WhatsApp', en: 'Automations that run themselves: Make, n8n and WhatsApp' },
  { n: '07', fr: 'Les 50 prompts prêts à l\'emploi, adaptés à votre métier', en: 'The 50 ready-to-use prompts, tailored to your trade' },
  { n: '08', fr: 'Plan de déploiement en 7 jours', en: 'The 7-day rollout plan' },
  { n: '09', fr: 'Ce que ça change : cas réels avec des chiffres', en: 'What it changes: real cases with numbers' },
  { n: '10', fr: 'Aller plus loin : quand faire appel à un pro', en: 'Going further: when to call a pro' },
];

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;
  const isFr = locale === 'fr';

  return (
    <div className="min-h-screen relative">
      <div className="noise-overlay" aria-hidden="true" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-4 bg-[rgba(10,15,10,0.72)] backdrop-blur-[20px] border-b border-[#1e2a1e]/60">
        <Logo />
        <a href={`/${locale}`} className="btn-primary">
          {isFr ? 'ExpertsIA' : 'ExpertsIA'}
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-16 pb-16 md:pt-24 md:pb-20 max-w-4xl mx-auto text-center">
        <p className="text-[#e07b39] font-medium text-sm tracking-widest uppercase mb-4">
          {isFr ? 'Le livre — été 2026' : 'The book — summer 2026'}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f2efe7] leading-tight mb-6">
          {isFr ? (
            <>L&apos;Intelligence Artificielle pour commerçants et artisans</>
          ) : (
            <>AI for shop owners &amp; tradespeople</>
          )}
        </h1>
        <p className="text-lg md:text-xl text-[#b8b3ab] leading-relaxed mb-8 max-w-2xl mx-auto">
          {isFr
            ? 'Gagnez 10 heures par semaine sans y connaître rien en informatique. 50 prompts prêts à l\'emploi, adaptés à votre métier.'
            : 'Save 10 hours a week, no tech skills required. 50 ready-to-use prompts, tailored to your trade.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#notify" className="btn-primary">
            {isFr ? 'Être prévenu de la sortie' : 'Get notified at launch'}
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-[#2a3a2a] hover:border-[#e07b39]/50 text-[#d8d3c8] hover:text-[#e07b39] font-medium transition-colors whitespace-nowrap">
            {isFr ? 'Réserver un audit gratuit' : 'Book a free audit'}
          </a>
        </div>
        <p className="text-sm text-[#6f6a62] mt-6">
          {isFr
            ? 'Écrit par Cyril Marchand, fondateur d\'ExpertsIA. Basé sur des projets réels avec de vrais commerces.'
            : 'Written by Cyril Marchand, founder of ExpertsIA. Based on real projects with real shops.'}
        </p>
      </section>

      {/* What you get */}
      <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f2efe7] mb-10 text-center">
          {isFr ? 'Ce que vous saurez faire' : 'What you\'ll be able to do'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              fr: 'Un mois de contenu en une après-midi',
              subFr: 'Posts, emails, fiches produits — générés puis corrigés par vous',
              en: 'A month of content in one afternoon',
              subEn: 'Posts, emails, product sheets — generated then fixed by you',
            },
            {
              fr: 'Vos devis et relances en minutes',
              subFr: 'Les prompts exacts pour chaque situation client',
              en: 'Quotes and follow-ups in minutes',
              subEn: 'The exact prompts for every client situation',
            },
            {
              fr: 'Des automatisations qui tournent seules',
              subFr: 'Sans code : Make, n8n, WhatsApp Business',
              en: 'Automations that run themselves',
              subEn: 'No code: Make, n8n, WhatsApp Business',
            },
          ].map((item, i) => (
            <div key={i} className="border border-[#1e2a1e] rounded-2xl p-6 bg-[rgba(20,30,20,0.35)]">
              <h3 className="text-[#e07b39] font-semibold text-lg mb-2">
                {isFr ? item.fr : item.en}
              </h3>
              <p className="text-[#b8b3ab] text-sm leading-relaxed">
                {isFr ? item.subFr : item.subEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="px-6 md:px-10 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f2efe7] mb-10 text-center">
          {isFr ? 'Au sommaire' : 'Table of contents'}
        </h2>
        <ol className="space-y-4">
          {chapters.map((c) => (
            <li key={c.n} className="flex gap-4 items-baseline border-b border-[#1e2a1e]/60 pb-4">
              <span className="text-[#e07b39] font-mono text-sm">{c.n}</span>
              <span className="text-[#d8d3c8]">{isFr ? c.fr : c.en}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Notify CTA */}
      <section id="notify" className="px-6 md:px-10 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f2efe7] mb-4">
          {isFr ? 'Sortie prévue : automne 2026' : 'Coming: autumn 2026'}
        </h2>
        <p className="text-[#b8b3ab] mb-8">
          {isFr
            ? 'Laissez votre email pour recevoir le premier chapitre gratuit dès sa sortie.'
            : 'Leave your email to get the first chapter free at launch.'}
        </p>
        <form action="/api/newsletter" method="POST" className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            name="email"
            required
            placeholder={isFr ? 'Votre email' : 'Your email'}
            className="flex-1 px-4 py-3 rounded-xl bg-[rgba(20,30,20,0.6)] border border-[#2a3a2a] text-[#f2efe7] placeholder:text-[#6f6a62] focus:outline-none focus:border-[#e07b39]"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            {isFr ? 'Chapitre 1 gratuit' : 'Free chapter 1'}
          </button>
        </form>
        <p className="text-xs text-[#6f6a62] mt-4">
          {isFr ? 'Un email à la sortie, rien d\'autre. Pas de spam.' : 'One email at launch, nothing else. No spam.'}
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2a1e]/60 px-6 md:px-10 py-8 text-center">
        <p className="text-sm text-[#6f6a62]">
          ExpertsIA · {isFr ? 'Le livre arrive sur Amazon (KDP) à l\'automne 2026' : 'The book lands on Amazon (KDP) in autumn 2026'}
        </p>
      </footer>
    </div>
  );
}
