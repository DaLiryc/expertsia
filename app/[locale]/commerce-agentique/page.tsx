import type { Metadata } from 'next';
import Link from 'next/link';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return {
    title: isFr
      ? 'Checkout agentique : audit d\'exposition pour marchands e-commerce | ExpertsIA'
      : 'Agentic checkout: exposure audit for e-commerce merchants | ExpertsIA',
    description: isFr
      ? 'Shopify et Google ont activé le checkout par agents IA sur votre boutique sans vous demander. Audit d\'exposition, responsabilité chargeback, guardrails par canal. Diagnostic en 5 jours.'
      : 'Shopify and Google enabled AI-agent checkout on your store without asking. Exposure audit, chargeback liability mapping, per-channel guardrails. Diagnostic in 5 days.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/commerce-agentique`,
    },
    openGraph: {
      title: isFr
        ? 'Checkout agentique : audit d\'exposition pour marchands'
        : 'Agentic checkout: exposure audit for merchants',
      description: isFr
        ? 'Le checkout IA a été activé sur votre boutique sans consentement. Mappez votre exposition en 5 jours.'
        : 'AI-agent checkout was enabled on your store without consent. Map your exposure in 5 days.',
      url: `${BASE_URL}/${locale}/commerce-agentique`,
      type: 'website',
      siteName: 'ExpertsIA',
      images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
    },
    robots: 'index, follow',
  };
}

export default async function AgenticGovernancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;

  const isFr = locale === 'fr';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isFr ? [
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
    ] : [
      {
        '@type': 'Question',
        name: 'Should I turn agentic checkout off completely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. Discovery and checkout are separate settings in Shopify (Sales channels, then Agentic). Many merchants keep discovery on to capture AI traffic and only switch off native checkout while they secure their procedures. The audit exists to make that call channel by channel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is liable when an AI agent buys and the buyer disputes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The merchant stays merchant of record: the sale, the fraud, and the chargeback stay with them. No card network had published an agent-specific dispute rule as of mid-2026, and classic evidence (click trails, device fingerprints) does not exist in this journey. That is the main risk our deliverables cover.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Shopify or Google protect merchants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They position themselves as infrastructure and leave liability with the merchant, who stays merchant of record. Scheme protections (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) are being built but do not yet cover the general case.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this legal advice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ExpertsIA delivers operational governance: channel configuration, procedures, documentation, monitoring. Contract clauses we produce are meant to be reviewed by your lawyer before going live.',
        },
      },
    ],
  };

  const events = isFr ? [
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
  ] : [
    {
      date: 'September 21, 2026',
      title: 'Shopify turned on agent checkout',
      body: 'Shop Pay was enabled by default for Meta\'s Muse agent on eligible stores. The opt-out setting hides in Shopify Admin, Sales channels, Agentic. If you never touched it, your store is in.',
    },
    {
      date: 'September 18-22, 2026',
      title: 'Google did the same in AI Mode and Gemini',
      body: 'Affected merchants received a Merchant Center email on September 22: eligible products are automatically included in native checkout, "there\'s nothing for you to set up". The purchase completes inside Google\'s interface, with no redirect to your site.',
    },
    {
      date: 'What it means',
      title: 'You are still merchant of record',
      body: 'The sale, the fraud, and the chargeback stay with you, even when the purchase happens inside Gemini or Muse. And when the buyer disputes, the classic defense evidence (click trails, behavioral data) does not exist in an agentic journey.',
    },
  ];

  const risks = isFr ? [
    {
      title: 'Responsabilité à blanc',
      body: 'Aucune règle de dispute spécifique aux achats agentiques côté réseaux bancaires à la mi-2026. Une étude Darwinium auprès de 500 professionnels du risque ne trouve aucun consensus sur qui doit payer quand l\'agent se trompe.',
    },
    {
      title: 'Chargebacks indéfendables',
      body: 'Dans un parcours agentique, pas d\'historique de clics, pas de données comportementales, et l\'empreinte d\'appareil est celle de l\'agent, pas de votre client. Sans préparation, un chargeback agentique se perd par défaut.',
    },
    {
      title: 'Trafic invisible',
      body: 'Seuls 23% des marchands distinguent le trafic IA du trafic humain (enquête PYMNTS/Visa). Si vous ne savez pas quelles ventes viennent d\'agents, vous ne pouvez ni les suivre ni les défendre.',
    },
    {
      title: 'Marque absente des recommandations IA',
      body: 'L\'agent réduit un marché entier à trois options achetables. Ne pas être sélectionné devient un problème de visibilité aussi important que ne pas être sur la première page de Google.',
    },
  ] : [
    {
      title: 'Blank-slate liability',
      body: 'No card network had an agent-specific dispute rule as of mid-2026. A Darwinium survey of 500 risk professionals found no consensus on who pays when the agent gets it wrong.',
    },
    {
      title: 'Undefendable chargebacks',
      body: 'In an agentic journey there is no click trail, no behavioral data, and the device fingerprint belongs to the agent, not your customer. Without preparation, an agentic chargeback is lost by default.',
    },
    {
      title: 'Invisible traffic',
      body: 'Only 23% of merchants can tell AI traffic from human traffic (PYMNTS/Visa survey). If you cannot tell which sales come from agents, you can neither track nor defend them.',
    },
    {
      title: 'Brand missing from AI recommendations',
      body: 'The agent shrinks a whole market to three buyable options. Not being selected becomes as much of a visibility problem as not ranking on page one of Google.',
    },
  ];

  const tiers = isFr ? [
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
  ] : [
    {
      name: 'Diagnostic',
      price: '€990 excl. VAT',
      unit: 'one-off · 5 days',
      best: false,
      items: [
        'Map of agent channels active on your store',
        'Merchant-of-record liability map per channel',
        'Snapshot of your current chargeback exposure',
        'Argued opt-in / opt-out decision, channel by channel',
        '30-day action plan',
      ],
    },
    {
      name: 'Governance',
      price: '€1,490 excl. VAT',
      unit: 'setup + €490/mo',
      best: true,
      items: [
        'Everything in Diagnostic',
        'ToS / T&C clause pack for your lawyer to review',
        'Agentic chargeback dispute playbook',
        'Agent traffic segregation in your analytics',
        'Monthly channel monitoring and EU/US regulatory watch',
      ],
    },
    {
      name: 'Steering',
      price: 'Custom quote',
      unit: 'brands with €5-20M GMV',
      best: false,
      items: [
        'Full governance',
        'Quarterly re-audit and tracking dashboard',
        'Interface with your PSP and insurer',
        'Board reporting',
      ],
    },
  ];

  const faqs = isFr ? [
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
  ] : [
    {
      q: 'Should I turn agentic checkout off completely?',
      a: 'Not necessarily. Discovery and checkout are separate settings in Shopify (Sales channels, then Agentic). Many merchants keep discovery on to capture AI traffic and only switch off native checkout while they secure their procedures. The audit exists to make that call channel by channel.',
    },
    {
      q: 'Who is liable when an AI agent buys and the buyer disputes?',
      a: 'The merchant stays merchant of record: the sale, the fraud, and the chargeback stay with them. No card network had published an agent-specific dispute rule as of mid-2026, and classic evidence (click trails, device fingerprints) does not exist in this journey.',
    },
    {
      q: 'Do Shopify or Google protect merchants?',
      a: 'They position themselves as infrastructure and leave liability with the merchant, who stays merchant of record. Scheme protections (Amex Agent Purchase Protection, Visa Intelligent Commerce, Mastercard Agent Pay) are being built but do not yet cover the general case.',
    },
    {
      q: 'Is this legal advice?',
      a: 'No. ExpertsIA delivers operational governance: channel configuration, procedures, documentation, monitoring. Contract clauses we produce are meant to be reviewed by your lawyer before going live.',
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[60px] py-4 bg-[rgba(10,15,10,0.9)] backdrop-blur-[10px] border-b border-[#2a3a2a]">
        <Link href={`/${locale}`}>
          <span className="text-[#f5f0e8] font-bold text-xl">ExpertsIA</span>
        </Link>
        <Link
          href={`/${locale}`}
          className="text-[#b8b3ab] hover:text-[#e07b39]"
        >
          ← {isFr ? 'Retour au site' : 'Back to site'}
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        {/* Header */}
        <header className="mb-16">
          <p className="inline-flex items-center gap-2 text-[#e07b39] text-xs md:text-sm font-medium mb-6 px-4 py-2 rounded-full border border-[#e07b39]/20 bg-[#e07b39]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39]" />
            {isFr ? 'Commerce agentique · E-commerce · 2026' : 'Agentic commerce · E-commerce · 2026'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f5f0e8]" style={{ letterSpacing: '-0.03em' }}>
            {isFr
              ? 'Le checkout agentique a été activé sur votre boutique. Sans qu\'on vous demande.'
              : 'Agentic checkout was switched on in your store. Nobody asked you.'}
          </h1>
          <p className="text-xl text-[#b8b3ab] max-w-2xl leading-relaxed font-light">
            {isFr
              ? 'Le 21 septembre 2026, Shopify a activé le paiement par agents IA (Meta Muse) par défaut. Le 22, Google a enrôlé les produits Shopify éligibles dans son checkout natif AI Mode et Gemini. Vous restez responsable des ventes, de la fraude et des chargebacks. On audite votre exposition en 5 jours.'
              : 'On September 21, 2026, Shopify enabled AI-agent payments (Meta Muse) by default. On the 22nd, Google enrolled eligible Shopify products into native checkout in AI Mode and Gemini. You still own the sales, the fraud, and the chargebacks. We map your exposure in 5 days.'}
          </p>
        </header>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">
            {isFr ? 'Ce qui s\'est passé' : 'What happened'}
          </h2>
          <div className="flex flex-col gap-6">
            {events.map((e, i) => (
              <div key={i} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8">
                <p className="text-[#e07b39] text-sm font-medium mb-2">{e.date}</p>
                <h3 className="text-xl font-bold text-[#f5f0e8] mb-3">{e.title}</h3>
                <p className="text-[#b8b3ab] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">
            {isFr ? 'Pourquoi c\'est un problème maintenant' : 'Why this is a problem now'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((r, i) => (
              <div key={i} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#f5f0e8] mb-3">{r.title}</h3>
                <p className="text-[#b8b3ab] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">
            {isFr ? 'Nos offres gouvernance agentique' : 'Our agentic governance offers'}
          </h2>
          <div className="flex flex-col gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-[#111a11] border rounded-2xl p-8 ${tier.best ? 'border-[#e07b39]/40' : 'border-[#2a3a2a]'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#f5f0e8] mb-1">{tier.name}</h3>
                    <p className="text-sm text-[#e07b39] font-medium">{tier.unit}</p>
                  </div>
                  <span className={`text-right text-lg ${tier.best ? 'text-[#e07b39] font-bold' : 'text-[#f5f0e8] font-semibold'}`}>
                    {tier.price}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {tier.items.map((item, j) => (
                    <li key={j} className="text-[#b8b3ab] flex gap-3 leading-relaxed">
                      <span className="text-[#e07b39]">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#b8b3ab] mt-6">
            {isFr
              ? 'Le montant du diagnostic est déduit du setup Gouvernance si vous enchaînez. Grille générale des prestations sur la page tarifs.'
              : 'The diagnostic fee is credited against the Governance setup if you continue. General pricing on our pricing page.'}{' '}
            <Link href={`/${locale === 'fr' ? 'fr/tarifs' : 'en/book'}`} className="text-[#e07b39] hover:underline">
              {isFr ? 'Voir les tarifs' : 'See pricing'}
            </Link>
          </p>
        </section>

        {/* Why now */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">
            {isFr ? 'Pourquoi maintenant' : 'Why now'}
          </h2>
          <div className="flex flex-col gap-4 text-[#b8b3ab] leading-relaxed">
            <p>
              {isFr
                ? 'Le CFPB américain a confirmé en janvier 2026 que les achats passés par un agent relèvent du régime de dispute existant. Amex a lancé en avril sa protection pour les agents enregistrés, et Visa et Mastercard construisent leurs frameworks. Les règles se réécrivent en ce moment, sans les marchands.'
                : 'The US CFPB confirmed in January 2026 that agent-placed purchases fall under the existing dispute regime. Amex launched protection for registered agents in April, and Visa and Mastercard are building their frameworks. The rules are being rewritten right now, without merchants at the table.'}
            </p>
            <p>
              {isFr
                ? 'En Europe, PSD3 est voté mais renvoie les paiements agentiques à une révision ultérieure. Le vide réglementaire durera encore un à deux ans. Les audits de gouvernance seront productisés par les plateformes et les grands cabinets d\'ici 6 à 18 mois : les marques qui se structurent maintenant paieront le prix de l\'expertise, pas celui de la crise.'
                : 'In Europe, PSD3 passed but defers agentic payments to a later review. The regulatory vacuum will last another year or two. Platform and Big-Four productized audits will arrive within 6 to 18 months: brands that get structured now pay for expertise, not for crisis.'}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">FAQ</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#111a11] border border-[#2a3a2a] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#f5f0e8] mb-3">{f.q}</h3>
                <p className="text-[#b8b3ab] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-[#111a11] border border-[#2a3a2a] rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#f5f0e8]">
            {isFr ? 'Sachez où vous en êtes avant que le premier chargeback tombe' : 'Know where you stand before the first chargeback lands'}
          </h3>
          <p className="text-[#b8b3ab] mb-6">
            {isFr
              ? 'Diagnostic livré en 5 jours. Réponse sous 24h. Sans engagement.'
              : 'Diagnostic delivered in 5 days. Response within 24h. No commitment.'}
          </p>
          <Link
            href={`/${locale}/book`}
            className="inline-block bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform"
          >
            {isFr ? 'Réserver mon diagnostic' : 'Book my diagnostic'}
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#b8b3ab]/70 mt-10 leading-relaxed">
          {isFr
            ? 'ExpertsIA fournit des services de gouvernance opérationnelle et ne délivre pas de conseil juridique. Les documents contractuels produits dans le cadre de nos missions sont destinés à être revus et validés par le conseil juridique du client. Informations vérifiées le 28 septembre 2026.'
            : 'ExpertsIA provides operational governance services and does not provide legal advice. Contract documents produced during our engagements are meant to be reviewed and approved by the client\'s legal counsel. Information verified September 28, 2026.'}
        </p>
      </div>
    </div>
  );
}
