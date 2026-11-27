import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AtelierForm from '@/components/AtelierForm';

export const metadata: Metadata = {
  title: 'Atelier IA gratuit · 45 minutes live pour PME | ExpertsIA',
  description:
    'Session live gratuite : repartez avec votre premier cas d\u2019usage IA rentable, chiffré et priorisé. 45 minutes, en ligne, pour dirigeants de PME. Mercredi 2 décembre 2026, 12h30.',
  alternates: {
    canonical: 'https://www.expertsia.dev/fr/atelier-audit-ia',
    languages: {
      fr: 'https://www.expertsia.dev/fr/atelier-audit-ia',
      'x-default': 'https://www.expertsia.dev/fr/atelier-audit-ia',
    },
  },
  openGraph: {
    title: 'Atelier IA gratuit · Votre premier cas d\u2019usage rentable en 45 minutes',
    description:
      'Session live gratuite pour dirigeants de PME : méthode, exemples chiffrés, plan d\u2019action. Mercredi 2 décembre 2026, 12h30.',
    url: 'https://www.expertsia.dev/fr/atelier-audit-ia',
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier IA gratuit · 45 minutes live pour PME',
    description: 'Votre premier cas d\u2019usage IA rentable, chiffré et priorisé. Mercredi 2 décembre, 12h30.',
  },
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Atelier live : trouvez votre premier cas d\u2019usage IA rentable en 45 minutes',
  description:
    'Session en ligne gratuite pour dirigeants de PME : méthode de sélection des cas d\u2019usage IA, exemples chiffrés réels, plan d\u2019action individuel.',
  startDate: '2026-12-02T12:30:00+01:00',
  endDate: '2026-12-02T13:15:00+01:00',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://www.expertsia.dev/fr/atelier-audit-ia',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://www.expertsia.dev/fr/atelier-audit-ia',
  },
  organizer: {
    '@type': 'Organization',
    name: 'ExpertsIA',
    url: 'https://www.expertsia.dev',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'L\u2019atelier est-il vraiment gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. La session de 45 minutes est gratuite et sans engagement. Nous présentons la méthode et des exemples réels. Si vous voulez aller plus vite, notre audit payant (à partir de 1 200 € HT) est présenté à la fin, sans insistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des connaissances techniques ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. L\u2019atelier est conçu pour des dirigeants et des responsables d\u2019exploitation sans profil technique. Aucun code, aucun jargon : des processus, des heures gagnées et des euros.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un replay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. La session est vivante : une partie des 45 minutes répond aux situations réelles des participants inscrits. Les inscrits qui ne peuvent pas venir reçoivent la checklist et peuvent réserver la session suivante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la session et comment ça se passe ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '45 minutes en visioconférence : 25 minutes de méthode et d\u2019exemples, 15 minutes d\u2019analyse de situations réelles des participants, 5 minutes de questions. Vous recevez le lien de connexion par email après inscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il après l\u2019atelier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous repartez avec votre checklist complétée et un premier cas d\u2019usage priorisé. Si vous souhaitez un plan d\u2019action chiffré sur vos propres processus, l\u2019audit IA (à partir de 1 200 € HT) est l\u2019étape suivante.',
      },
    },
  ],
};

const signaux = [
  {
    group: 'Travail manuel répétitif',
    items: [
      'Vous répondez plus de 5 fois par semaine au même email.',
      'Vous copiez-collez entre deux outils plus de 30 minutes par jour.',
      'Vos devis ou factures sont préparés à la main.',
      'Vos rapports hebdomadaires sont assemblés à la main.',
    ],
  },
  {
    group: 'Argent qui dort',
    items: [
      'Vos devis partent après 48 heures ou plus.',
      'Les demandes reçues le week-end restent sans réponse.',
      'Aucun devis ancien n\u2019est jamais relancé.',
      'Les questions clients de la nuit attendent le lendemain.',
    ],
  },
  {
    group: 'Dette de décision',
    items: [
      'Vous ignorez le temps réellement passé par processus.',
      'Vous décidez au ressenti, faute de données.',
      'Des outils sont achetés mais jamais déployés.',
      'Aucune action passée n\u2019a de résultat mesuré.',
    ],
  },
];

const deroule = [
  {
    time: '0-5 min',
    title: 'La méthode de tri',
    text: 'Les 3 filtres qui séparent un cas d\u2019usage rentable d\u2019un gadget : volume, répétition, données disponibles.',
  },
  {
    time: '5-15 min',
    title: 'Deux cas réels chiffrés',
    text: 'Une automatisation de devis livrée en 3 semaines et un assistant de réponses clients : heures gagnées, coût, retour réel.',
  },
  {
    time: '15-25 min',
    title: 'Le test des 12 signaux',
    text: 'Vous passez la checklist sur votre propre entreprise et repartez avec votre score.',
  },
  {
    time: '25-40 min',
    title: 'Vos situations, en direct',
    text: 'Trois situations de participants analysées en live : ce qui est automatisable, ce qui ne l\u2019est pas, par quoi commencer.',
  },
  {
    time: '40-45 min',
    title: 'Votre prochaine étape',
    text: 'Vous choisissez : avancer seul avec la checklist, ou un audit chiffré sur vos processus.',
  },
];

export default function AtelierAuditIa() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#f5f0e8]">
      <SiteNav locale="fr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="max-w-4xl mx-auto px-4 pt-16 pb-20">
        <section className="text-center">
          <span className="inline-block bg-[#111a11] border border-[#e07b39] text-[#e07b39] text-sm font-medium rounded-full px-4 py-1.5 mb-6">
            Session live gratuite · 45 minutes · Places limitées
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Trouvez votre premier cas d&rsquo;usage IA rentable en 45 minutes
          </h1>
          <p className="text-[#d4cfc7] text-lg mt-5 max-w-2xl mx-auto">
            Mercredi 2 décembre 2026, 12h30 à 13h15, en ligne. Pour dirigeants de PME, commerces et artisans.
            Sans jargon technique : des processus, des heures gagnées et des euros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#inscription"
              className="bg-[#e07b39] text-[#0a0f0a] font-semibold rounded-lg px-8 py-3 hover:bg-[#c96a2e] transition-colors"
            >
              Réserver ma place gratuite
            </a>
            <a
              href="/fr/tarifs"
              className="border border-[#2a3a2a] text-[#d4cfc7] rounded-lg px-8 py-3 hover:border-[#e07b39] transition-colors"
            >
              Voir les formules d&rsquo;accompagnement
            </a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Ce que vous repartez avec</h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
              <p className="text-[#e07b39] font-semibold">Un cas d&rsquo;usage priorisé</p>
              <p className="text-[#d4cfc7] text-sm mt-2">
                Le processus de votre entreprise qui mérite l&rsquo;IA en premier, choisi avec la méthode des 3 filtres.
              </p>
            </div>
            <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
              <p className="text-[#e07b39] font-semibold">Votre score des 12 signaux</p>
              <p className="text-[#d4cfc7] text-sm mt-2">
                La checklist complète, passée sur votre entreprise : elle dit noir sur blanc où vous perdez du temps.
              </p>
            </div>
            <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
              <p className="text-[#e07b39] font-semibold">Des chiffres réels</p>
              <p className="text-[#d4cfc7] text-sm mt-2">
                Coûts et délais observés sur des livraisons faites : ce que coûte vraiment une automatisation, ce qu&rsquo;elle rapporte.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Le déroulé, minute par minute</h2>
          <div className="mt-6 space-y-3">
            {deroule.map((d) => (
              <div key={d.time} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5 flex gap-4">
                <span className="text-[#e07b39] font-semibold text-sm whitespace-nowrap w-20">{d.time}</span>
                <div>
                  <p className="font-semibold">{d.title}</p>
                  <p className="text-[#d4cfc7] text-sm mt-1">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Pour qui</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
              <p className="text-[#e07b39] font-semibold mb-3">Fait pour vous si</p>
              <ul className="text-[#d4cfc7] text-sm space-y-2 list-disc list-inside">
                <li>Vous dirigez une PME, un commerce ou un atelier.</li>
                <li>Vos équipes passent des heures sur des tâches répétitives.</li>
                <li>Vous avez déjà testé un outil IA sans résultat convaincant.</li>
                <li>Vous voulez des chiffres avant de dépenser un euro.</li>
              </ul>
            </div>
            <div className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
              <p className="text-[#d4cfc7] font-semibold mb-3 opacity-70">Pas fait pour vous si</p>
              <ul className="text-[#d4cfc7] text-sm space-y-2 list-disc list-inside opacity-70">
                <li>Vous cherchez une formation certifiante ou un diplôme.</li>
                <li>Vous voulez du code sur mesure sans processus identifié.</li>
                <li>Vous attendez une démonstration de produits précis.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Les 12 signaux qu&rsquo;une PME est prête pour l&rsquo;IA</h2>
          <p className="text-[#d4cfc7] mt-3">
            Vous les passerez en live pendant la session. Chaque signal coché est du temps ou de l&rsquo;argent qui dort.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {signaux.map((g) => (
              <div key={g.group} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
                <p className="text-[#e07b39] font-semibold">{g.group}</p>
                <ul className="text-[#d4cfc7] text-sm mt-3 space-y-2 list-disc list-inside">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="inscription" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-center">Réservez votre place</h2>
          <p className="text-[#d4cfc7] text-center mt-3 max-w-xl mx-auto">
            Mercredi 2 décembre 2026, 12h30 à 13h15. Session limitée à 25 participants pour garder du temps
            pour vos questions.
          </p>
          <div className="mt-8">
            <AtelierForm />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-3">
            {faqJsonLd.mainEntity.map((q) => (
              <details key={q.name} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-5">
                <summary className="font-semibold cursor-pointer">{q.name}</summary>
                <p className="text-[#d4cfc7] text-sm mt-3">{q.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold">Vous voulez aller plus vite ?</h2>
          <p className="text-[#d4cfc7] mt-3 max-w-2xl mx-auto">
            L&rsquo;atelier vous donne la méthode et un premier cas d&rsquo;usage. L&rsquo;audit IA donne un plan
            d&rsquo;action chiffré sur vos propres processus, avec le ROI estimé processus par processus.
            À partir de 1 200 € HT, livré en 2 à 4 semaines.
          </p>
          <a
            href="/fr/tarifs"
            className="inline-block mt-6 border border-[#e07b39] text-[#e07b39] font-semibold rounded-lg px-8 py-3 hover:bg-[#e07b39] hover:text-[#0a0f0a] transition-colors"
          >
            Découvrir l&rsquo;audit IA
          </a>
        </section>
      </main>
      <SiteFooter locale="fr" />
    </div>
  );
}
