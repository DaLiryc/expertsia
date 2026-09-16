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
      ? 'Financer son projet IA : BPI, Osez l\'IA, CPF, OPCO | ExpertsIA'
      : 'Fund your AI project: BPI, CPF, OPCO | ExpertsIA',
    description: isFr
      ? 'Comment financer votre projet IA en France. BPI France, programme Osez l\'IA, CPF, OPCO, aides régionales. Montants, éligibilité, démarches.'
      : 'How to fund your AI project in France. BPI France, CPF, OPCO, regional grants. Amounts, eligibility, steps.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/financer-son-projet-ia`,
    },
    openGraph: {
      title: isFr
        ? 'Financer son projet IA : BPI, Osez l\'IA, CPF, OPCO'
        : 'Fund your AI project: BPI, CPF, OPCO',
      description: isFr
        ? 'Toutes les aides pour financer votre projet d\'IA en France.'
        : 'All available funding for your AI project in France.',
      url: `${BASE_URL}/${locale}/financer-son-projet-ia`,
      type: 'website',
      siteName: 'ExpertsIA',
      images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
    },
    robots: 'index, follow',
  };
}

export default async function FundingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = dictionaries[locale as Locale] || dictionaries.en;

  const isFr = locale === 'fr';

  const fundingSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isFr ? [
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que le programme Osez l\'IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Osez l\'IA est un programme financé par BPI France pour aider les PME à financer leur transformation IA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles aides pour un projet IA en France ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BPI France, CPF, OPCO, aides régionales, et le programme Osez l\'IA.',
        },
      },
    ] : [],
  };

  const aids = isFr ? [
    {
      name: 'BPI France',
      type: 'Prêt + subvention',
      amount: 'Jusqu\'à 100 000€',
      description: 'Prêts à taux réduit et subventions pour les projets de transformation numérique incluant l\'IA. BPI finance l\'audit, le déploiement et la formation.',
      eligibility: 'PME et ETI françaises, projet innovant, bilan financier sain.',
      url: 'https://www.bpifrance.fr',
      best: true,
    },
    {
      name: 'Osez l\'IA',
      type: 'Subvention',
      amount: 'Jusqu\'à 50 000€',
      description: 'Programme spécifique à l\'IA financé par BPI. Couvre l\'audit de maturité IA, l\'expérimentation et le premier déploiement. ExpertsIA est éligible comme prestataire.',
      eligibility: 'PME de 5 à 250 salariés, secteur éligible (industrie, services, commerce).',
      url: 'https://www.bpifrance.fr/catalogue-offres/osez-ia',
    },
    {
      name: 'CPF (Compte Professionnel de Formation)',
      type: 'Formation',
      amount: 'Variable (selon droits acquis)',
      description: 'Finance la formation IA de vos collaborateurs. ExpertsIA propose des formations éligibles au CPF (audit IA, automatisation, prompt engineering).',
      eligibility: 'Tout salarié ou demandeur d\'emploi ayant des droits CPF acquis.',
      url: 'https://www.moncompteformation.gouv.fr',
    },
    {
      name: 'OPCO (Opérateurs de Compétences)',
      type: 'Formation',
      amount: 'Selon branche',
      description: 'Co-finance la formation IA via votre OPCO de branche. Idéal pour former une équipe entière à l\'automatisation ou aux agents IA.',
      eligibility: 'Entreprises < 11 salariés: prise en charge majorée. Selon branche professionnelle.',
      url: 'https://www.opco-net.fr',
    },
    {
      name: 'Aides régionales',
      type: 'Subvention',
      amount: '5 000€ à 80 000€',
      description: 'Les régions (Grand Est, Île-de-France, Auvergne-Rhône-Alpes, etc.) proposent leurs propres dispositifs. La Région Grand Est a un programme "Data IA" dédié.',
      eligibility: 'Selon région. Vérifier auprès de votre conseil régional.',
      url: '',
    },
  ] : [
    {
      name: 'BPI France',
      type: 'Loan + Grant',
      amount: 'Up to €100,000',
      description: 'Low-interest loans and grants for digital transformation projects including AI. Covers audit, deployment, and training.',
      eligibility: 'French SMEs and mid-caps, innovative project, healthy financials.',
      url: 'https://www.bpifrance.fr',
      best: true,
    },
    {
      name: 'CPF (Professional Training Account)',
      type: 'Training',
      amount: 'Variable',
      description: 'Funds AI training for employees. ExpertsIA offers CPF-eligible training programs.',
      eligibility: 'Any French employee with accrued CPF rights.',
      url: 'https://www.moncompteformation.gouv.fr',
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fundingSchema) }}
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
            {isFr ? 'Financement · France · 2026' : 'Funding · France · 2026'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f5f0e8]" style={{ letterSpacing: '-0.03em' }}>
            {isFr ? 'Financer son projet IA' : 'Fund your AI project'}
          </h1>
          <p className="text-xl text-[#b8b3ab] max-w-2xl leading-relaxed font-light">
            {isFr
              ? 'Il existe au moins 5 dispositifs en France pour financer votre projet d\'IA. La plupart des dirigeants ne les connaissent pas. Voici lesquels, combien, et comment y accéder.'
              : 'There are at least 5 funding schemes in France for AI projects. Most business owners don\'t know about them. Here\'s which ones, how much, and how to access them.'}
          </p>
        </header>

        {/* Funding options */}
        <div className="flex flex-col gap-6 mb-16">
          {aids.map((aid, i) => (
            <div
              key={i}
              className={`bg-[#111a11] border rounded-2xl p-8 ${aid.best ? 'border-[#e07b39]/40' : 'border-[#2a3a2a]'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#f5f0e8] mb-1">{aid.name}</h2>
                  <p className="text-sm text-[#e07b39] font-medium">{aid.type}</p>
                </div>
                <span className={`text-right ${aid.best ? 'text-[#e07b39] font-bold' : 'text-[#b8b3ab]'}`}>
                  {aid.amount}
                </span>
              </div>
              <p className="text-[#b8b3ab] mb-4 leading-relaxed">{aid.description}</p>
              <div className="text-sm text-[#b8b3ab] mb-4">
                <span className="text-[#f5f0e8] font-medium">
                  {isFr ? 'Éligibilité : ' : 'Eligibility: '}
                </span>
                {aid.eligibility}
              </div>
              {aid.url && (
                <a
                  href={aid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e07b39] font-medium text-sm hover:underline"
                >
                  {isFr ? 'Site officiel →' : 'Official site →'}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f5f0e8]">
            {isFr ? 'Comment ça marche avec ExpertsIA' : 'How it works with ExpertsIA'}
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-[#e07b39]/10 border border-[#e07b39]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#e07b39] font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f0e8] mb-2">
                  {isFr ? 'Audit gratuit (30 min)' : 'Free audit (30 min)'}
                </h3>
                <p className="text-[#b8b3ab] leading-relaxed">
                  {isFr
                    ? 'On identifie ensemble les cas d\'usage IA prioritaires et le type d\'aide qui correspond à votre situation.'
                    : 'We identify your priority AI use cases and the right funding scheme for your situation.'}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-[#e07b39]/10 border border-[#e07b39]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#e07b39] font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f0e8] mb-2">
                  {isFr ? 'Dossier de financement' : 'Funding application'}
                </h3>
                <p className="text-[#b8b3ab] leading-relaxed">
                  {isFr
                    ? 'On prépare le dossier technique et financier pour BPI, votre OPCO ou votre région. Vous n\'avez pas à naviguer la paperasse seul.'
                    : 'We prepare the technical and financial documentation for BPI, your OPCO, or your region. You don\'t navigate the paperwork alone.'}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-[#e07b39]/10 border border-[#e07b39]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#e07b39] font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f0e8] mb-2">
                  {isFr ? 'Déploiement' : 'Deployment'}
                </h3>
                <p className="text-[#b8b3ab] leading-relaxed">
                  {isFr
                    ? 'Une fois le financement obtenu, on déploie. Audit, automatisation, formation. Le tout cofinancé.'
                    : 'Once funding is secured, we deploy. Audit, automation, training. All co-funded.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-[#111a11] border border-[#2a3a2a] rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#f5f0e8]">
            {isFr ? 'Votre projet est peut-être finançable' : 'Your project might be fundable'}
          </h3>
          <p className="text-[#b8b3ab] mb-6">
            {isFr
              ? 'Réponse sous 24h. Audit gratuit. Sans engagement.'
              : 'Response within 24h. Free audit. No commitment.'}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-block bg-[#e07b39] text-[#0a0f0a] px-8 py-[14px] rounded-lg font-semibold hover:-translate-y-0.5 transition-transform"
          >
            {isFr ? 'Vérifier mon éligibilité' : 'Check my eligibility'}
          </Link>
        </div>
      </div>
    </div>
  );
}
