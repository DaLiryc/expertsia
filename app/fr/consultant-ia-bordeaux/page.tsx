import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Consultant IA à Bordeaux — PME et ETI | ExpertsIA',
  description:
    'Cyril Marchand, consultant IA basé à Bordeaux. Audit IA dès 1 200 € HT, automatisation de processus, agents IA et formation pour PME. Interventions sur site à Bordeaux et partout en France.',
  alternates: {
    canonical: 'https://www.expertsia.dev/fr/consultant-ia-bordeaux',
  },
  openGraph: {
    title: 'Consultant IA à Bordeaux — PME et ETI | ExpertsIA',
    description:
      'Audit IA dès 1 200 € HT, automatisation, agents IA, formation. Basés à Bordeaux, interventions dans toute la France.',
    url: 'https://www.expertsia.dev/fr/consultant-ia-bordeaux',
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultant IA à Bordeaux — PME et ETI | ExpertsIA',
    description: 'Audit IA dès 1 200 € HT, automatisation, agents IA. Bordeaux et toute la France.',
  },
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ExpertsIA',
  description:
    "Cabinet de conseil IA basé à Bordeaux. Audit IA, automatisation de processus, agents IA et formation pour PME et ETI. Intervient à Bordeaux et dans toute la France.",
  url: 'https://www.expertsia.dev/fr/consultant-ia-bordeaux',
  areaServed: [
    { '@type': 'City', name: 'Bordeaux' },
    { '@type': 'Country', name: 'France' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bordeaux',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.837789,
    longitude: -0.57918,
  },
  priceRange: '1200 EUR - 12000 EUR',
  founder: {
    '@type': 'Person',
    name: 'Cyril Marchand',
    jobTitle: 'Consultant IA & Fondateur',
    sameAs: [
      'https://www.linkedin.com/in/marchandcyril/',
      'https://github.com/DaLiryc',
    ],
  },
  knowsAbout: [
    'Intelligence artificielle',
    'Automatisation de processus',
    'Agents IA',
    'RAG',
    'Data science',
    'Formation IA',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Intervenez-vous uniquement à Bordeaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous sommes basés à Bordeaux et intervenons dans toute la France. Les missions locales se font sur site, les autres à distance, avec des ateliers présentiels quand le projet le justifie.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un consultant IA à Bordeaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chez ExpertsIA, l'audit IA démarre à 1 200 € HT pour une journée de terrain et un rapport d'action chiffré. Une automatisation clé en main démarre à 2 500 € HT, livrée en 2 semaines. Les tarifs détaillés sont publics sur la page tarifs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels outils utilisez-vous chez vos clients bordelais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les vôtres. Microsoft 365, Google Workspace, Notion, n8n, Make, HubSpot, votre CRM ou ERP. Nous construisons dans votre environnement existant, vous restez propriétaire de tout à la fin.",
      },
    },
    {
      '@type': 'Question',
      name: 'En combien de temps voit-on des résultats ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'audit livre un plan chiffré en une semaine. La première automatisation est en production en 2 semaines (Pack Starter) ou 4 semaines (Pack Growth). Les gains sont mesurés et documentés dès le premier mois.",
      },
    },
  ],
};

const SERVICES = [
  {
    title: 'Audit IA',
    text: "Une journée dans vos locaux, un rapport sous une semaine : quels processus automatiser en premier, combien ça coûte, combien ça rapporte.",
    price: 'dès 1 200 € HT',
    href: '/fr/tarifs',
  },
  {
    title: 'Automatisation de processus',
    text: "Vos tâches répétitives (relances, reporting, saisie, onboarding) automatisées dans vos outils actuels, livrées clé en main avec formation.",
    price: 'dès 2 500 € HT',
    href: '/fr/tarifs',
  },
  {
    title: 'Agents IA et RAG',
    text: "Un agent qui répond à vos clients, un RAG qui interroge vos documents métier. Déployés sur votre infrastructure ou chez un hébergeur européen.",
    price: 'sur devis',
    href: '/fr/tarifs',
  },
  {
    title: 'Formation IA',
    text: "Dirigeants, équipes métier, commerciaux : des sessions sur vos cas d'usage réels, pas de la théorie. Support remis à chaque participant.",
    price: 'dès 1 500 € HT / jour',
    href: '/fr/tarifs',
  },
];

export default function ConsultantIaBordeauxPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav locale="fr" />
      <div className="min-h-screen bg-[#0a0f0a] text-[#f5f0e8]">
        <main className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-[#e07b39] font-semibold uppercase tracking-wide text-sm">Bordeaux · Nouvelle-Aquitaine</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Consultant IA à Bordeaux pour PME et ETI
          </h1>
          <p className="mt-5 text-lg text-[#b8b3ab]">
            ExpertsIA accompagne les PME de Bordeaux et de Nouvelle-Aquitaine dans l'adoption concrète de l'IA : audit, automatisation de processus, agents IA et formation. Fondé par Cyril Marchand, data scientist et ancien opérateur e-commerce. Le premier pas coûte 15 minutes : un{' '}
            <a href="https://cal.com/expertsia/audit" className="text-[#e07b39] underline underline-offset-4">
              diagnostic gratuit
            </a>{' '}
            pour identifier vos chantiers à plus fort impact.
          </p>

          <div className="mt-10 rounded-xl border border-[#2a3a2a] bg-[#111a11] p-6 text-[#d8d3c8]">
            <p>
              <strong className="text-[#f5f0e8]">Basés à Bordeaux, présents dans toute la France.</strong> Les missions bordelaises se font sur site, de la cartographie des processus à la formation des équipes. Partout ailleurs, nous travaillons à distance avec des ateliers présentiels au lancement.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold">Ce que nous faisons</h2>
          <div className="mt-6 grid gap-4">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="block rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6 transition-colors hover:border-[#e07b39]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <span className="bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text text-sm font-semibold text-transparent whitespace-nowrap">{s.price}</span>
                </div>
                <p className="mt-2 text-[#b8b3ab]">{s.text}</p>
              </a>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold">Qui intervient</h2>
          <div className="mt-6 rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6">
            <p className="text-[#d8d3c8]">
              <strong className="text-[#f5f0e8]">Cyril Marchand</strong>, fondateur. Data scientist de formation, il a piloté des opérations e-commerce avant de se consacrer au conseil IA. Auteur du livre « L'IA pour Commerçants et Artisans », formateur Le Wagon Bordeaux. Il conçoit et délivre chaque mission lui-même : pas d'intermédiaire, pas de junior envoyé sur votre projet.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: 'Intervenez-vous uniquement à Bordeaux ?',
                a: 'Nous sommes basés à Bordeaux et intervenons dans toute la France. Les missions locales se font sur site, les autres à distance, avec des ateliers présentiels quand le projet le justifie.',
              },
              {
                q: 'Combien coûte un consultant IA à Bordeaux ?',
                a: "L'audit IA démarre à 1 200 € HT pour une journée de terrain et un rapport d'action chiffré. Une automatisation clé en main démarre à 2 500 € HT, livrée en 2 semaines. Le détail est sur la page tarifs.",
              },
              {
                q: 'Quels outils utilisez-vous ?',
                a: "Les vôtres. Microsoft 365, Google Workspace, Notion, n8n, Make, HubSpot, votre CRM ou ERP. Nous construisons dans votre environnement, vous restez propriétaire de tout à la fin.",
              },
              {
                q: 'En combien de temps voit-on des résultats ?',
                a: "L'audit livre un plan chiffré en une semaine. La première automatisation est en production en 2 à 4 semaines. Les gains sont mesurés et documentés dès le premier mois.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6">
                <h3 className="font-semibold text-[#f5f0e8]">{f.q}</h3>
                <p className="mt-2 text-[#b8b3ab]">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#e07b39]/30 bg-gradient-to-r from-[#e07b39]/10 to-transparent p-8 text-center">
            <h2 className="text-2xl font-bold">Parlons de vos processus</h2>
            <p className="mt-3 text-[#b8b3ab]">
              15 minutes pour identifier vos automatisations à plus fort impact. Gratuit, sans engagement.
            </p>
            <a
              href="https://cal.com/expertsia/audit"
              className="mt-6 inline-block rounded-lg bg-[#e07b39] px-8 py-3 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform"
            >
              Réserver un diagnostic gratuit
            </a>
          </div>

          <div className="mt-12 text-center text-sm text-[#7a756d]">
            <a href="/fr/tarifs" className="hover:text-[#e07b39]">Voir les tarifs détaillés</a>
            {' · '}
            <a href="/fr/blog/consultant-ia-bordeaux-2026" className="hover:text-[#e07b39]">Comment choisir un consultant IA à Bordeaux</a>
            {' · '}
            <a href="/fr/financer-son-projet-ia" className="hover:text-[#e07b39]">Financer son projet IA (BPI, Osez l'IA, OPCO)</a>
          </div>
        </main>
      </div>
      <SiteFooter locale="fr" />
    </>
  );
}
