import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const BASE_URL = 'https://www.expertsia.dev';

export const metadata: Metadata = {
  title: 'Checkout agentique : audit d\'exposition pour marchands e-commerce | ExpertsIA',
  description:
    'Shopify et Google ont activé le checkout par agents IA sur votre boutique sans vous demander. Audit d\'exposition, responsabilité chargeback, guardrails par canal. Diagnostic en 5 jours.',
  alternates: {
    canonical: `${BASE_URL}/fr/commerce-agentique`,
    languages: {
      fr: `${BASE_URL}/fr/commerce-agentique`,
      en: `${BASE_URL}/en/agentic-commerce`,
      'x-default': `${BASE_URL}/fr/commerce-agentique`,
    },
  },
  openGraph: {
    title: 'Checkout agentique : audit d\'exposition pour marchands',
    description:
      'Le checkout IA a été activé sur votre boutique sans consentement. Mappez votre exposition en 5 jours.',
    url: `${BASE_URL}/fr/commerce-agentique`,
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
  robots: 'index, follow',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il désactiver complètement le checkout agentique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pas nécessairement. Découverte et checkout sont deux réglages séparés dans Shopify (Sales channels, puis Agentic). Beaucoup de marchands gardent la découverte active pour capter le trafic IA et coupent seulement le checkout natif, le temps de sécuriser leurs procédures. L\'audit sert précisément à trancher canal par canal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qui est responsable quand un agent IA achète et que l\'acheteur conteste ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le marchand reste merchant of record : la vente, la fraude et le chargeback restent chez lui. Aucun réseau bancaire n\'avait publié de règle de dispute spécifique aux achats agentiques à la mi-2026, et les preuves classiques (historique de clics, empreinte d\'appareil) n\'existent pas dans ce parcours. C\'est le principal risque couvert par nos livrables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Shopify ou Google protègent-ils les marchands ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ils se positionnent comme infrastructure et renvoient la responsabilité au marchand, qui reste merchant of record. Les protections scheme (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) sont en construction mais ne couvrent pas encore le cas général.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce du conseil juridique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. ExpertsIA délivre de la gouvernance opérationnelle : configuration des canaux, procédures, documentation, monitoring. Les clauses contractuelles que nous produisons sont destinées à être revues par votre avocat avant mise en ligne.',
      },
    },
  ],
};

const events = [
  {
    date: '21 septembre 2026',
    title: 'Shopify active le checkout par agent',
    body: 'Shop Pay est activé par défaut pour l\'agent Meta Muse sur les boutiques éligibles. Le réglage opt-out se cache dans Shopify Admin, Sales channels, Agentic. Si vous n\'avez rien touché, votre boutique est concernée.',
  },
  {
    date: '18-22 septembre 2026',
    title: 'Google fait de même dans AI Mode et Gemini',
    body: 'Les marchands concernés ont reçu un email Merchant Center le 22 septembre : les produits éligibles sont inclus automatiquement au checkout natif, « there\'s nothing for you to set up ». L\'achat se termine dans l\'interface Google, sans redirection vers votre site.',
  },
  {
    date: 'Ce que ça change',
    title: 'Vous restez merchant of record',
    body: 'La vente, la fraude et le chargeback restent chez vous, même quand l\'achat se fait dans Gemini ou Muse. Et quand l\'acheteur conteste, les preuves classiques de défense (historique de clics, données comportementales) n\'existent pas dans un parcours agentique.',
  },
];

const risks = [
  {
    title: 'Responsabilité à blanc',
    body: 'À mi-2026, les réseaux bancaires n\'avaient publié aucune règle de dispute pour les achats agentiques. En attendant, le résultat par défaut ne change pas : en tant que marchand d\'enregistrement, la vente, la fraude et le chargeback restent de votre côté de la table.',
  },
  {
    title: 'Chargebacks indéfendables',
    body: 'Visa et Mastercard confirment que vos droits de dispute s\'appliquent toujours. Le problème est ailleurs : vos preuves de défense (historique de clics, données comportementales) pointent vers le serveur de l\'agent, pas vers votre client. Droits intacts, preuves disparues.',
  },
  {
    title: 'Trafic invisible',
    body: 'Seuls 23% des marchands distinguent le trafic IA du trafic humain (enquête PYMNTS/Visa). Si vous ne savez pas quelles ventes viennent d\'agents, vous ne pouvez ni les suivre ni les défendre.',
  },
  {
    title: 'Marque absente des recommandations IA',
    body: 'L\'agent réduit un marché entier à trois options achetables. Ne pas être sélectionné devient un problème de visibilité aussi important que ne pas être sur la première page de Google.',
  },
];

const tiers = [
  {
    name: 'Diagnostic',
    price: '990 € HT',
    unit: 'one-shot · 5 jours',
    best: false,
    items: [
      'Cartographie des canaux agents actifs sur votre boutique',
      'Carte de responsabilité (merchant of record) par canal',
      'Photo de votre exposition chargeback actuelle',
      'Décision opt-in / opt-out argumentée, canal par canal',
      'Plan d\'action 30 jours',
    ],
  },
  {
    name: 'Gouvernance',
    price: '1 490 € HT',
    unit: 'setup + 490 € HT/mois',
    best: true,
    items: [
      'Tout le diagnostic',
      'Clause pack CGV / T&C pour revue par votre avocat',
      'Playbook de contestation des chargebacks agentiques',
      'Ségrégation du trafic agent dans vos analytics',
      'Monitoring mensuel des canaux et veille réglementaire EU/US',
    ],
  },
  {
    name: 'Pilotage',
    price: 'Sur devis',
    unit: 'marques 5 à 20 M€ de GMV',
    best: false,
    items: [
      'Gouvernance complète',
      'Re-audit trimestriel et dashboard de suivi',
      'Interface avec votre PSP et votre assureur',
      'Reporting direction',
    ],
  },
];

const faqs = [
  {
    q: 'Faut-il désactiver complètement le checkout agentique ?',
    a: 'Pas nécessairement. Découverte et checkout sont deux réglages séparés dans Shopify (Sales channels, puis Agentic). Beaucoup de marchands gardent la découverte active pour capter le trafic IA et coupent seulement le checkout natif, le temps de sécuriser leurs procédures. L\'audit sert précisément à trancher canal par canal.',
  },
  {
    q: 'Qui est responsable quand un agent IA achète et que l\'acheteur conteste ?',
    a: 'Le marchand reste merchant of record : la vente, la fraude et le chargeback restent chez lui. Aucun réseau bancaire n\'avait publié de règle de dispute spécifique aux achats agentiques à la mi-2026, et les preuves classiques (historique de clics, empreinte d\'appareil) n\'existent pas dans ce parcours.',
  },
  {
    q: 'Shopify ou Google protègent-ils les marchands ?',
    a: 'Ils se positionnent comme infrastructure et renvoient la responsabilité au marchand, qui reste merchant of record. Les protections scheme (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) sont en construction mais ne couvrent pas encore le cas général.',
  },
  {
    q: 'Est-ce du conseil juridique ?',
    a: 'Non. ExpertsIA délivre de la gouvernance opérationnelle : configuration des canaux, procédures, documentation, monitoring. Les clauses contractuelles que nous produisons sont destinées à être revues par votre avocat avant mise en ligne.',
  },
];

export default function CommerceAgentiquePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteNav locale='fr' />
      <div className='min-h-screen bg-[#0a0f0a] text-[#f5f0e8]'>
        <main className='mx-auto max-w-4xl px-6 py-20'>
          {/* Header */}
          <header className='mb-16'>
            <p className='inline-flex items-center gap-2 text-[#e07b39] text-xs md:text-sm font-medium mb-6 px-4 py-2 rounded-full border border-[#e07b39]/20 bg-[#e07b39]/5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#e07b39]' />
              Commerce agentique · E-commerce · 2026
            </p>
            <h1 className='text-4xl md:text-5xl font-bold mb-6' style={{ letterSpacing: '-0.03em' }}>
              Le checkout agentique a été activé sur votre boutique. Sans qu'on vous demande.
            </h1>
            <p className='text-xl text-[#b8b3ab] max-w-2xl leading-relaxed font-light'>
              Le 21 septembre 2026, Shopify a activé le paiement par agents IA (Meta Muse) par défaut. Le 22, Google a enrôlé les produits Shopify éligibles dans son checkout natif AI Mode et Gemini. Vous restez responsable des ventes, de la fraude et des chargebacks. On audite votre exposition en 5 jours.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-6'>
              <a
                href='https://cal.com/expertsia/audit'
                className='inline-block rounded-lg bg-[#e07b39] px-6 py-3 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
              >
                Réserver mon diagnostic →
              </a>
              <a href='#offres' className='text-sm text-[#b8b3ab] hover:text-[#e07b39] transition-colors'>
                Voir les offres
              </a>
            </div>
          </header>

          {/* Timeline */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Ce qui s'est passé</h2>
            <div className='flex flex-col gap-6'>
              {events.map((e, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <p className='text-[#e07b39] text-sm font-medium mb-2'>{e.date}</p>
                  <h3 className='text-xl font-bold mb-3'>{e.title}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{e.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Risks */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Pourquoi c'est un problème maintenant</h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {risks.map((r, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <h3 className='text-lg font-bold mb-3'>{r.title}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Offers */}
          <section id='offres' className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Nos offres gouvernance agentique</h2>
            <div className='flex flex-col gap-6'>
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative bg-[#111a11] border rounded-2xl p-8 ${tier.best ? 'border-[#e07b39]/60' : 'border-[#2a3a2a]'}`}
                >
                  {tier.best && (
                    <span className='absolute -top-3 left-8 rounded-full border border-[#e07b39]/40 bg-[#0a0f0a] px-3 py-1 text-xs font-semibold text-[#e07b39]'>
                      Recommandé
                    </span>
                  )}
                  <div className='flex items-start justify-between mb-6'>
                    <div>
                      <h3 className='text-2xl font-bold mb-1'>{tier.name}</h3>
                      <p className='text-sm text-[#e07b39] font-medium'>{tier.unit}</p>
                    </div>
                    <span className={`text-right text-lg ${tier.best ? 'text-[#e07b39] font-bold' : 'font-semibold'}`}>
                      {tier.price}
                    </span>
                  </div>
                  <ul className='flex flex-col gap-2'>
                    {tier.items.map((item, j) => (
                      <li key={j} className='text-[#b8b3ab] flex gap-3 leading-relaxed'>
                        <span className='text-[#e07b39]'>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className='text-sm text-[#b8b3ab] mt-6'>
              Le montant du diagnostic est déduit du setup Gouvernance si vous enchaînez. Grille générale des prestations sur la{' '}
              <Link href='/fr/tarifs' className='text-[#e07b39] hover:underline'>
                page tarifs
              </Link>
              .
            </p>
          </section>

          {/* Why now */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>Pourquoi maintenant</h2>
            <div className='flex flex-col gap-4 text-[#b8b3ab] leading-relaxed'>
              <p>
                Le CFPB américain a confirmé en janvier 2026 que les achats passés par un agent relèvent du régime de dispute existant. Amex a lancé en avril sa protection pour les agents enregistrés, et Visa et Mastercard construisent leurs frameworks. Les règles se réécrivent en ce moment, sans les marchands.
              </p>
              <p>
                En Europe, PSD3 est voté mais renvoie les paiements agentiques à une révision ultérieure. Le vide réglementaire durera encore un à deux ans. Les audits de gouvernance seront productisés par les plateformes et les grands cabinets d'ici 6 à 18 mois : les marques qui se structurent maintenant paieront le prix de l'expertise, pas celui de la crise.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8'>FAQ</h2>
            <div className='flex flex-col gap-6'>
              {faqs.map((f, i) => (
                <div key={i} className='bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8'>
                  <h3 className='text-lg font-bold mb-3'>{f.q}</h3>
                  <p className='text-[#b8b3ab] leading-relaxed'>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className='p-8 bg-[#111a11] border border-[#2a3a2a] rounded-2xl text-center'>
            <h3 className='text-2xl font-bold mb-3'>
              Sachez où vous en êtes avant que le premier chargeback tombe
            </h3>
            <p className='text-[#b8b3ab] mb-6'>
              Diagnostic livré en 5 jours. Réponse sous 24h. Sans engagement.
            </p>
            <a
              href='https://cal.com/expertsia/audit'
              className='inline-block bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform'
            >
              Réserver mon diagnostic
            </a>
          </div>

          {/* Disclaimer */}
          <p className='text-xs text-[#b8b3ab]/70 mt-10 leading-relaxed'>
            ExpertsIA fournit des services de gouvernance opérationnelle et ne délivre pas de conseil juridique. Les documents contractuels produits dans le cadre de nos missions sont destinés à être revus et validés par le conseil juridique du client. Informations vérifiées le 28 septembre 2026.
          </p>
        </main>
        <SiteFooter locale='fr' />
      </div>
    </>
  );
}
