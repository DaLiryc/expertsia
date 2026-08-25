import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';
const BOOKING_URL = 'https://cal.com/expertsia/audit';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return {
    title: isFr
      ? 'Réserver un audit IA gratuit | ExpertsIA'
      : 'Book a free AI audit | ExpertsIA',
    description: isFr
      ? '30 minutes avec un expert pour identifier vos automatisations à plus fort impact. Gratuit, sans engagement. Réponse sous 48h.'
      : '30 minutes with an expert to identify your highest-impact automations. Free, no commitment. Reply within 48h.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/book`,
    },
    openGraph: {
      title: isFr ? 'Réserver un audit IA gratuit' : 'Book a free AI audit',
      description: isFr
        ? '30 minutes pour identifier vos automatisations à plus fort impact.'
        : '30 minutes to identify your highest-impact automations.',
      url: `${BASE_URL}/${locale}/book`,
      type: 'website',
      siteName: 'ExpertsIA',
    },
    robots: 'index, follow',
  };
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;
  const isFr = locale === 'fr';

  const steps = [
    {
      n: '1',
      fr: 'Vous réservez un créneau de 30 minutes',
      en: 'You book a 30-minute slot',
    },
    {
      n: '2',
      fr: 'On passe vos processus en revue ensemble',
      en: 'We review your processes together',
    },
    {
      n: '3',
      fr: 'Vous repartez avec 3 automatisations prioritaires, chiffrées',
      en: 'You leave with 3 prioritized, costed automations',
    },
  ];

  const points = [
    { fr: 'Gratuit, sans engagement', en: 'Free, no commitment' },
    { fr: 'Visio ou téléphone', en: 'Video or phone' },
    { fr: 'Réponse sous 48h', en: 'Reply within 48h' },
    { fr: 'Code & données restent chez vous', en: 'Code & data stay yours' },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="noise-overlay" aria-hidden="true" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-4 bg-[rgba(10,15,10,0.72)] backdrop-blur-[20px] border-b border-[#1e2a1e]/60">
        <Logo />
        <a href={`/${locale}`} className="btn-primary">
          {isFr ? 'Retour au site' : 'Back to site'}
        </a>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16 max-w-4xl mx-auto text-center">
        <p className="text-[#e07b39] font-medium text-sm tracking-widest uppercase mb-4">
          {isFr ? 'Audit gratuit — 30 minutes' : 'Free audit — 30 minutes'}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f2efe7] leading-tight mb-6">
          {isFr ? (
            <>Réservez votre audit IA</>
          ) : (
            <>Book your AI audit</>
          )}
        </h1>
        <p className="text-lg md:text-xl text-[#b8b3ab] leading-relaxed mb-8 max-w-2xl mx-auto">
          {isFr
            ? 'Un expert passe vos processus en revue et identifie où l\'IA vous fait gagner le plus de temps, avec des chiffres.'
            : 'An expert reviews your processes and pinpoints where AI saves you the most time, with numbers.'}
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
          {isFr ? 'Choisir un créneau' : 'Pick a time slot'}
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-8 text-sm text-[#b8b3ab]">
          {points.map((p, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-[#e07b39]">✓</span>
              {isFr ? p.fr : p.en}
            </li>
          ))}
        </ul>
      </section>

      {/* How it goes */}
      <section className="px-6 md:px-10 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f2efe7] mb-10 text-center">
          {isFr ? 'Comment ça se passe' : 'How it goes'}
        </h2>
        <ol className="space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5 items-baseline border-b border-[#1e2a1e]/60 pb-6">
              <span className="text-[#e07b39] font-mono text-xl">{s.n}</span>
              <span className="text-[#d8d3c8] text-lg">{isFr ? s.fr : s.en}</span>
            </li>
          ))}
        </ol>
        <div className="text-center mt-10">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            {isFr ? 'Réserver mon audit gratuit' : 'Book my free audit'}
          </a>
          <p className="text-xs text-[#6f6a62] mt-4">
            cal.com/expertsia/audit
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2a1e]/60 px-6 md:px-10 py-8 text-center">
        <p className="text-sm text-[#6f6a62]">
          {isFr
            ? 'Vous venez du livre ? RDV sur la page dédiée : '
            : 'Coming from the book? Use the dedicated page: '}
          <a href={`/${locale}/livre`} className="text-[#e07b39] hover:underline">
            /{isFr ? 'livre' : 'livre'}
          </a>
        </p>
      </footer>
    </div>
  );
}
