import type { Metadata } from 'next';

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
    emoji: '🔍',
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
    emoji: '⚡',
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
    emoji: '🚀',
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
    emoji: '🎓',
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
    emoji: '🔄',
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-cyan-400 font-semibold uppercase tracking-wide text-sm">⚡ Offres et tarifs</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Des missions à durée définie, des livrables clairs, des résultats mesurables.
        </h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl">
          Basés à Bordeaux, nous intervenons partout en France et à distance — le présentiel reste possible quand le projet le justifie. Chaque mission commence par un{' '}
          <a href="https://cal.com/expertsia/audit" className="text-cyan-400 underline underline-offset-4">
            diagnostic gratuit de 15 minutes
          </a>
          .
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKS.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl border p-8 flex flex-col ${
                p.popular ? 'border-cyan-400 bg-slate-900 shadow-lg shadow-cyan-500/10' : 'border-slate-800 bg-slate-900/50'
              }`}
            >
              {p.popular && (
                <span className="mb-3 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  ⭐ Le plus populaire
                </span>
              )}
              <div className="text-3xl">{p.emoji}</div>
              <h2 className="mt-3 text-xl font-bold">{p.name}</h2>
              <p className="mt-2 text-2xl font-extrabold text-cyan-300">{p.price}</p>
              <p className="mt-1 text-sm text-slate-400">{p.delay}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-300">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-cyan-400">✓</span> {it}
                  </li>
                ))}
              </ul>
              <a
                href="https://cal.com/expertsia/audit"
                className="mt-6 inline-block rounded-lg bg-cyan-500 px-5 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
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
              <details key={f.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <summary className="cursor-pointer font-semibold text-slate-100">{f.q}</summary>
                <p className="mt-3 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-transparent p-10">
          <h2 className="text-2xl font-bold">Prêt à identifier vos meilleures opportunités d&apos;automatisation ?</h2>
          <p className="mt-2 text-slate-300">
            15 minutes, gratuit, sans jargon. Vous repartez avec 2-3 pistes concrètes, même si vous ne travaillez pas avec nous ensuite.
          </p>
          <a
            href="https://cal.com/expertsia/audit"
            className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Réserver mon diagnostic gratuit
          </a>
        </section>
      </main>
    </div>
    </>
  );
}
