import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Tarifs — Audit IA, automatisation, RAG, formation | ExpertsIA',
  description:
    'Nos formules : audit IA d\'un processus (à partir de 1 200 € HT), automatisation clé en main, RAG sur vos connaissances, formation IA pour équipes. Livraison en 2 à 4 semaines. Bordeaux et toute la France.',
  alternates: {
    canonical: 'https://www.expertsia.dev/fr/tarifs',
    languages: {
      fr: 'https://www.expertsia.dev/fr/tarifs',
      'x-default': 'https://www.expertsia.dev/fr/tarifs',
    },
  },
  openGraph: {
    title: 'Tarifs ExpertsIA — Audit IA, automatisation, RAG, formation',
    description:
      'Audit IA dès 1 200 € HT, automatisation clé en main dès 2 500 € HT, RAG et formation. Livraison 2 à 4 semaines.',
    url: 'https://www.expertsia.dev/fr/tarifs',
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs ExpertsIA — Audit IA, automatisation, RAG, formation',
    description: 'Audit IA dès 1 200 € HT, automatisation dès 2 500 € HT. Livraison 2 à 4 semaines.',
  },
};

// JSON-LD: les offres pricing en schema.org Offer (citable par les LLM)
export const tarifsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Offres ExpertsIA',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Audit IA',
        description: 'Cartographie des processus, faisabilité IA, plan d\'action chiffré avec ROI estimé.',
        offers: { '@type': 'Offer', price: '1200', priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1200', priceCurrency: 'EUR' } },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Automatisation Starter',
        description: 'Audit d\'un processus cible + 1 automatisation clé en main déployée, documentation complète.',
        offers: { '@type': 'Offer', price: '2500', priceCurrency: 'EUR' },
      },
    },
  ],
};

const PACKS = [
  {
    id: 'audit',
    name: 'Audit IA',
    price: 'à partir de 1 200 € HT',
    delay: '1 journée terrain + rapport sous 1 semaine',
    items: [
      'Cartographie de vos processus et identification des 3 à 5 chantiers à fort impact',
      'Analyse de faisabilité IA (données, outils, équipe)',
      'Plan d\'action chiffré avec ROI estimé par chantier',
      'Restitution de 2h avec votre équipe de direction',
    ],
  },
  {
    id: 'starter',
    name: 'Automatisation Starter',
    price: 'à partir de 2 500 € HT',
    delay: 'Livraison en 2 semaines',
    popular: true,
    items: [
      'Audit d\'un processus cible (1 journée)',
      '1 automatisation clé en main déployée dans vos outils',
      'Documentation complète',
      'Formation de l\'équipe (2h)',
      'Support 30 jours inclus',
    ],
  },
  {
    id: 'growth',
    name: 'Pack Growth',
    price: 'à partir de 6 000 € HT',
    delay: 'Livraison en 4 semaines',
    items: [
      'Cartographie complète de vos processus',
      '3 automatisations interconnectées',
      'Agent IA interne personnalisé',
      'RAG sur vos connaissances métier',
      'Dashboard de pilotage',
      'Formation équipe + support 60 jours',
    ],
  },
  {
    id: 'formation',
    name: 'Formation IA',
    price: 'à partir de 1 500 € HT / jour',
    delay: 'Format 1 à 3 jours, sur site ou distanciel',
    items: [
      'Dirigeants : comprendre l\'IA, décider, arbitrer',
      'Équipes : outils concrets sur VOS cas d\'usage',
      'Commerciaux / support : prompts et agents au quotidien',
      'Support pédagogique remis à chaque participant',
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: 'à partir de 1 200 € HT / mois',
    delay: 'Sans engagement minimum',
    items: [
      'Maintenance de vos automatisations et agents',
      '1 nouvelle automatisation par mois',
      'Support illimité (email / Slack)',
      'Rapport mensuel des gains réalisés',
    ],
  },
];

const FAQ = [
  {
    q: 'Intervenez-vous uniquement sur Bordeaux ?',
    a: 'Nous sommes basés à Bordeaux et intervenons partout en France. 80% des missions se font très bien à distance, avec des ateliers sur site quand le projet le justifie (lancement, formation des équipes, contextes sensibles).',
  },
  {
    q: 'Par quoi commencer ?',
    a: 'Par l\'audit. En une journée de terrain et un rapport sous une semaine, vous savez quels processus automatiser en premier, ce que ça coûte et ce que ça rapporte. Le diagnostic initial de 15 minutes est gratuit.',
  },
  {
    q: 'Faut-il changer d\'outils ?',
    a: 'Non. Nous travaillons dans vos outils existants : Microsoft 365, Google Workspace, Notion, n8n, Make, HubSpot, votre CRM ou ERP. On augmente ce qui existe, on ne remplace pas.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Oui. Pour les projets sensibles, nous déployons des RAG et agents sur vos serveurs ou chez un hébergeur européen. Vos données ne quittent jamais votre périmètre sans validation écrite.',
  },
];

export default function TarifsPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tarifsJsonLd) }}
      />
      <SiteNav locale="fr" />
    <div className="min-h-screen bg-[#0a0f0a] text-[#f5f0e8]">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-[#e07b39] font-semibold uppercase tracking-wide text-sm">Offres et tarifs</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Des missions à durée définie, des livrables clairs, des résultats mesurables.
        </h1>
        <p className="mt-4 text-lg text-[#b8b3ab] max-w-3xl">
          Basés à Bordeaux, nous intervenons partout en France et à distance — le présentiel reste possible quand le projet le justifie. Chaque mission commence par un{' '}
          <a href="https://cal.com/expertsia/audit" className="text-[#e07b39] underline underline-offset-4">
            diagnostic gratuit de 15 minutes
          </a>
          .
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {PACKS.map((p) => (
            <div
              key={p.id}
              className={`flex w-full flex-col rounded-2xl border p-8 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                p.popular
                  ? 'border-[#e07b39] bg-[#111a11] shadow-lg shadow-[#e07b39]/10'
                  : 'border-[#2a3a2a] bg-[#111a11]/60'
              }`}
            >
              {p.popular && (
                <span className="mb-3 inline-block self-start rounded-full border border-[#e07b39]/40 px-3 py-1 text-xs font-semibold text-[#e07b39]">
                  Le plus demandé
                </span>
              )}
              <h2 className="text-xl font-bold text-[#f5f0e8]">{p.name}</h2>
              <p className="mt-2 bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text text-2xl font-extrabold text-transparent">
                {p.price}
              </p>
              <p className="mt-1 text-sm text-[#b8b3ab]">{p.delay}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-[#d8d3c8]">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[#e07b39]">✓</span> {it}
                  </li>
                ))}
              </ul>
              <a
                href="https://cal.com/expertsia/audit"
                className="mt-6 inline-block rounded-lg bg-[#e07b39] px-5 py-3 text-center font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform"
              >
                Réserver le diagnostic gratuit
              </a>
            </div>
          ))}
        </div>

        <section className="mt-24">
          <h2 className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6">
                <summary className="cursor-pointer font-semibold text-[#f5f0e8] list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[#e07b39] mr-2">→</span>{f.q}
                </summary>
                <p className="mt-3 text-[#b8b3ab]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-[#2a3a2a] bg-gradient-to-r from-[#e07b39]/10 to-transparent p-10">
          <h2 className="text-2xl font-bold">Prêt à identifier vos meilleures opportunités d&apos;automatisation ?</h2>
          <p className="mt-2 text-[#b8b3ab]">
            15 minutes, gratuit, sans jargon. Vous repartez avec 2-3 pistes concrètes, même si vous ne travaillez pas avec nous ensuite.
          </p>
          <a
            href="https://cal.com/expertsia/audit"
            className="mt-6 inline-block rounded-lg bg-[#e07b39] px-6 py-3 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform"
          >
            Réserver mon diagnostic gratuit
          </a>
        </section>
      </main>
    </div>
    <SiteFooter locale="fr" />
    </>
  );
}
