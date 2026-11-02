import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Rendre votre SaaS agent-callable : x402, MCP, WebMCP | ExpertsIA',
  description:
    'Vos clients sont de plus en plus des agents IA. Nous rendons votre API ou votre SaaS appelable et payable par les agents : endpoint x402, serveur MCP, balises WebMCP, openapi.json, inscription aux registres. Audit 490 € HT en 48 h, mise en service 2 semaines.',
  alternates: {
    canonical: 'https://www.expertsia.dev/fr/agentic-ready',
    languages: {
      fr: 'https://www.expertsia.dev/fr/agentic-ready',
      en: 'https://www.expertsia.dev/en/agentic-ready',
      'x-default': 'https://www.expertsia.dev/fr/agentic-ready',
    },
  },
  openGraph: {
    title: 'Rendre votre SaaS agent-callable · ExpertsIA',
    description:
      'Endpoint x402, serveur MCP, balises WebMCP, openapi.json, registres. Audit 490 € HT en 48 h. Nous le faisons sur nos propres produits, en production.',
    url: 'https://www.expertsia.dev/fr/agentic-ready',
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
};

const agenticJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mise en agent-callable (x402, MCP, WebMCP)',
  provider: { '@type': 'Organization', name: 'ExpertsIA', url: 'https://www.expertsia.dev' },
  areaServed: 'FR',
  description:
    'Audit de compatibilité agents IA puis transformation complète : endpoint payant x402, serveur MCP, balises WebMCP, openapi.json, inscription aux registres.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Audit agentic-ready',
      price: '490',
      priceCurrency: 'EUR',
      description: 'Cartographie complète en 48 h : API, MCP, WebMCP, openapi.json, registres, pricing per-call.',
    },
    {
      '@type': 'Offer',
      name: 'Transformation agent-callable',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '2000',
        priceCurrency: 'EUR',
      },
      description: 'Mise en service complète en 2 à 4 semaines selon votre infrastructure.',
    },
  ],
};

const PROOF = [
  {
    name: 'ExpertsIA · teardown growth',
    detail: 'Endpoint payant en production : les agents paient 4,90 $ en USDC sur Base (protocole x402), audit complet en 11 secondes.',
  },
  {
    name: 'ChargeGuard · teardown risque de chargeback',
    detail: 'Même architecture sur notre second produit : 9,90 $ par appel, spécification openapi.json publique, serveurs MCP de référence en accès libre.',
  },
];

const AUDIT_ITEMS = [
  'Cartographie de votre API : ce qui est déjà appelable, ce qui manque',
  'Choix du modèle de paiement par appel (x402, USDC sur Base) et du prix recommandé',
  'Plan du serveur MCP : quelles exposer comme outils, avec quels droits',
  'Actions WebMCP déclarables sur vos formulaires (signup, achat, réservation)',
  'openapi.json à produire et registres où vous inscrire (x402scan, registres MCP)',
  'Rapport remis en 48 h. Crédité sur la transformation si vous continuez avec nous.',
];

const BUILD_ITEMS = [
  'Endpoint payant x402 : paiement USDC sur Base, sans compte, sans clé API',
  'Serveur MCP streamable HTTP pour Claude, ChatGPT et tous les clients MCP',
  'Balises WebMCP déclaratives sur vos formulaires critiques',
  'openapi.json avec métadonnées de paiement, lisible par les registres',
  'Documentation orientée agents : llms.txt, page développeurs, guide d\'appel',
  'Inscription aux registres et mesure des premiers appels payants',
  'Revue de sécurité : garde-fous SSRF, comparaison de clés en temps constant, rate limiting',
];

const FAQ = [
  {
    q: 'C\'est quoi x402, concrètement ?',
    a: 'Un protocole ouvert porté par Coinbase et adopté par Google dans son protocole de paiement agent (AP2). Un agent appelle votre API, reçoit une réponse 402 avec le prix, paie en USDC sur Base, et renvoie sa requête avec la preuve de paiement. Ni compte, ni carte, ni clé API : la relation commerciale tient en trois requêtes HTTP.',
  },
  {
    q: 'Combien de temps et d\'argent avant que ce soit en ligne ?',
    a: 'L\'audit prend 48 h. La mise en service prend 2 à 4 semaines selon votre infrastructure. Comptez à partir de 2 000 € HT pour un produit déjà doté d\'une API propre, davantage si l\'API doit être créée ou si l\'authentification doit être repensée.',
  },
  {
    q: 'Mes clients humains ?',
    a: 'Ils ne voient rien changer. L\'endpoint agent-callable s\'ajoute à votre produit existant, il ne le remplace pas. Nos propres sites gardent leurs interfaces classiques : la couche agent est un canal de vente supplémentaire.',
  },
  {
    q: 'Pourquoi vous plutôt qu\'un integrateur généraliste ?',
    a: 'Parce que nous le pratiquons sur nos propres produits, en production, avec de vrais paiements. Les deux endpoints cités plus haut tournent chez nous. Le pattern est éprouvé : nous le reproduisons chez vous en 2 à 4 semaines, sécurité comprise.',
  },
];

export default function AgenticReadyPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenticJsonLd) }}
      />
      <SiteNav locale='fr' />
      <div className='min-h-screen bg-[#0a0f0a] text-[#f5f0e8]'>
        <main className='mx-auto max-w-6xl px-6 py-20'>
          <p className='text-[#e07b39] font-semibold uppercase tracking-wide text-sm'>Nouveau canal de revenus</p>
          <h1 className='mt-3 text-4xl md:text-5xl font-bold leading-tight'>
            Les agents IA paient déjà pour des services API. Le vôtre est-il appelable ?
          </h1>
          <p className='mt-4 text-lg text-[#b8b3ab] max-w-3xl'>
            Un agent IA ne remplit pas de formulaire et ne crée pas de compte. Il appelle une API, paie à
            l&rsquo;appel, passe au suivant. Le protocole x402 rend ce paiement possible, Google l&rsquo;a adopté dans
            son protocole de paiement agent (AP2), et le registre x402scan référence déjà plusieurs centaines de
            services. Nous rendons votre produit appelable et payable par ces agents, en 2 à 4 semaines.
          </p>

          <section className='mt-16 rounded-2xl border border-[#2a3a2a] bg-[#111a11]/60 p-8'>
            <h2 className='text-2xl font-bold'>La preuve : nous le faisons sur nos propres produits</h2>
            <p className='mt-3 text-[#b8b3ab]'>
              Pas de théorie. Deux de nos SaaS sont agent-callables en production, avec de vrais paiements en USDC
              sur Base.
            </p>
            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {PROOF.map((p) => (
                <div key={p.name} className='rounded-xl border border-[#2a3a2a] bg-[#0a0f0a] p-6'>
                  <h3 className='font-semibold text-[#e07b39]'>{p.name}</h3>
                  <p className='mt-2 text-sm text-[#d8d3c8]'>{p.detail}</p>
                </div>
              ))}
            </div>
            <p className='mt-4 text-sm text-[#b8b3ab]'>
              Spécifications publiques :{' '}
              <a href='https://www.trychargeguard.com/openapi.json' className='text-[#e07b39] underline underline-offset-4'>
                trychargeguard.com/openapi.json
              </a>{' '}
              et{' '}
              <a href='https://www.expertsia.dev/openapi.json' className='text-[#e07b39] underline underline-offset-4'>
                expertsia.dev/openapi.json
              </a>
            </p>
            <div className='mt-8 border-t border-[#2a3a2a] pt-6'>
              <h3 className='font-semibold text-[#f5f0e8]'>Ce que cette réalisation inclut, vérifiable en un clic</h3>
              <ul className='mt-4 grid gap-2 text-sm text-[#d8d3c8] md:grid-cols-2'>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    4 endpoints payants x402 en production (2 teardowns complets, 2 snapshots d&apos;entrée) :{' '}
                    <a href='https://www.trychargeguard.com/api/teardown' className='text-[#e07b39] underline underline-offset-4'>402 vérifiable ici</a>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>Deux serveurs MCP streamable HTTP (4 outils reason codes et deadlines côté ChargeGuard)</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    Un CLI npm public :{' '}
                    <a href='https://www.npmjs.com/package/chargeguard' className='text-[#e07b39] underline underline-offset-4'>npmjs.com/package/chargeguard</a>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>Une API publique read-only sans compte (reason codes, deadlines), cache 24h</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>Revue de sécurité complète : 50+ vulnérabilités fermées, protection SSRF, comparaison de clés en temps constant, rate limiting</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    Le guide du pattern, ouvert et sans email :{' '}
                    <a href='/fr/blog/rendre-saas-agent-callable-x402-guide-2026' className='text-[#e07b39] underline underline-offset-4'>lire le guide</a>
                  </span>
                </li>
              </ul>
              <p className='mt-4 text-xs text-[#8a8a8a]'>
                ChargeGuard est notre propre produit, pas une mission client : nous montrons ce que nous appliquerions
                chez vous, avec les mêmes standards de sécurité et de documentation.
              </p>
            </div>
          </section>

          <div className='mt-14 grid gap-6 lg:grid-cols-2'>
            <div className='flex flex-col rounded-2xl border border-[#2a3a2a] bg-[#111a11]/60 p-8'>
              <h2 className='text-xl font-bold'>Étape 1 : Audit agentic-ready</h2>
              <p className='mt-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text'>
                490 € HT
              </p>
              <p className='mt-1 text-sm text-[#b8b3ab]'>Rapport remis en 48 h</p>
              <ul className='mt-5 flex-1 space-y-2 text-sm text-[#d8d3c8]'>
                {AUDIT_ITEMS.map((it) => (
                  <li key={it} className='flex gap-2'>
                    <span className='text-[#e07b39]'>✓</span> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col rounded-2xl border border-[#e07b39] bg-[#111a11] p-8 shadow-lg shadow-[#e07b39]/10'>
              <h2 className='text-xl font-bold'>Étape 2 : Mise en agent-callable</h2>
              <p className='mt-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text'>
                à partir de 2 000 € HT
              </p>
              <p className='mt-1 text-sm text-[#b8b3ab]'>Livraison en 2 à 4 semaines selon votre infrastructure</p>
              <ul className='mt-5 flex-1 space-y-2 text-sm text-[#d8d3c8]'>
                {BUILD_ITEMS.map((it) => (
                  <li key={it} className='flex gap-2'>
                    <span className='text-[#e07b39]'>✓</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className='mt-24'>
            <h2 className='text-2xl font-bold'>Questions fréquentes</h2>
            <div className='mt-6 space-y-6'>
              {FAQ.map((f) => (
                <div key={f.q} className='rounded-xl border border-[#2a3a2a] bg-[#111a11]/60 p-6'>
                  <h3 className='font-semibold text-[#f5f0e8]'>{f.q}</h3>
                  <p className='mt-2 text-sm text-[#b8b3ab]'>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-24 rounded-2xl border border-[#e07b39]/40 bg-[#111a11] p-10 text-center'>
            <h2 className='text-3xl font-bold'>Parlons de votre produit</h2>
            <p className='mx-auto mt-3 max-w-2xl text-[#b8b3ab]'>
              Envoyez le lien de votre API ou de votre site. Nous répondons sous 24 h avec notre lecture honnête :
              soit le canal agent a du sens pour vous, soit nous vous le disons franchement.
            </p>
            <a
              href='mailto:cyril@expertsia.dev?subject=Audit%20agentic-ready'
              className='mt-6 inline-block rounded-lg bg-[#e07b39] px-8 py-4 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
            >
              Demander l&rsquo;audit à 490 € HT
            </a>
            <p className='mt-4 text-sm text-[#b8b3ab]'>
              cyril@expertsia.dev · Bordeaux et toute la France, à distance
            </p>
          </section>
        </main>
        <SiteFooter locale='fr' />
      </div>
    </>
  );
}
