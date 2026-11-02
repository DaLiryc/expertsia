import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Make your SaaS agent-callable: x402, MCP, WebMCP | ExpertsIA',
  description:
    'AI agents already pay for API services. We make your API or SaaS callable and payable by agents: x402 endpoint, MCP server, WebMCP tags, openapi.json, registry listings. Audit at €490 excl. VAT in 48 h, live in 2 weeks.',
  alternates: {
    canonical: 'https://www.expertsia.dev/en/agentic-ready',
    languages: {
      fr: 'https://www.expertsia.dev/fr/agentic-ready',
      en: 'https://www.expertsia.dev/en/agentic-ready',
      'x-default': 'https://www.expertsia.dev/fr/agentic-ready',
    },
  },
  openGraph: {
    title: 'Make your SaaS agent-callable · ExpertsIA',
    description:
      'x402 endpoint, MCP server, WebMCP tags, openapi.json, registries. Audit at €490 excl. VAT in 48 h. We run it on our own products, in production.',
    url: 'https://www.expertsia.dev/en/agentic-ready',
    siteName: 'ExpertsIA',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://www.expertsia.dev/og-card.png', width: 1200, height: 630, alt: 'ExpertsIA' }],
  },
};

const agenticJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agent-callable transformation (x402, MCP, WebMCP)',
  provider: { '@type': 'Organization', name: 'ExpertsIA', url: 'https://www.expertsia.dev' },
  description:
    'AI-agent compatibility audit then full transformation: paid x402 endpoint, MCP server, WebMCP tags, openapi.json, registry submissions.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Agent-ready audit',
      price: '490',
      priceCurrency: 'EUR',
      description: 'Full mapping in 48 h: API, MCP, WebMCP, openapi.json, registries, per-call pricing.',
    },
    {
      '@type': 'Offer',
      name: 'Agent-callable transformation',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '2000', priceCurrency: 'EUR' },
      description: 'Full delivery in 2 to 4 weeks depending on your infrastructure.',
    },
  ],
};

const PROOF = [
  {
    name: 'ExpertsIA · growth teardown',
    detail: 'Paid endpoint in production: agents pay $4.90 in USDC on Base (x402 protocol), full audit in 11 seconds.',
  },
  {
    name: 'ChargeGuard · chargeback-risk teardown',
    detail: 'Same architecture on our second product: $9.90 per call, public openapi.json spec, reference MCP servers free to use.',
  },
];

const AUDIT_ITEMS = [
  'Mapping of your existing API: what is already callable, what is missing',
  'Per-call payment model (x402, USDC on Base) and recommended price',
  'MCP server plan: which tools to expose, with which permissions',
  'WebMCP actions to declare on your critical forms (signup, checkout, booking)',
  'openapi.json to produce and registries to list on (x402scan, MCP registries)',
  'Report delivered in 48 h. Credited against the transformation if you proceed.',
];

const BUILD_ITEMS = [
  'Paid x402 endpoint: USDC on Base payments, no account, no API key',
  'Streamable HTTP MCP server for Claude, ChatGPT and every MCP client',
  'Declarative WebMCP tags on your critical forms',
  'openapi.json with payment metadata, readable by registries',
  'Agent-facing documentation: llms.txt, developers page, call guide',
  'Registry submissions and tracking of your first paid calls',
  'Security review: SSRF guards, constant-time key comparison, rate limiting',
];

const FAQ = [
  {
    q: 'What is x402, concretely?',
    a: 'An open protocol backed by Coinbase and adopted by Google in its agent payment protocol (AP2). An agent calls your API, gets a 402 response with the price, pays in USDC on Base, and retries with proof of payment. No account, no card, no API key: the whole commercial relationship fits in three HTTP requests.',
  },
  {
    q: 'How long and how much before it is live?',
    a: 'The audit takes 48 h. Delivery takes 2 to 4 weeks depending on your infrastructure. Expect from €2,000 excl. VAT for a product with a clean API, more if the API has to be built or authentication reworked.',
  },
  {
    q: 'What about my human customers?',
    a: 'They see no change. The agent-callable endpoint adds to your existing product, it does not replace it. Our own sites keep their classic interfaces: the agent layer is an additional sales channel.',
  },
  {
    q: 'Why you rather than a generalist integrator?',
    a: 'Because we run it on our own products, in production, with real payments. Both endpoints above are ours. The pattern is proven: we reproduce it for you in 2 to 4 weeks, security included.',
  },
];

export default function AgenticReadyPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenticJsonLd) }}
      />
      <SiteNav locale='en' />
      <div className='min-h-screen bg-[#0a0f0a] text-[#f5f0e8]'>
        <main className='mx-auto max-w-6xl px-6 py-20'>
          <p className='text-[#e07b39] font-semibold uppercase tracking-wide text-sm'>New revenue channel</p>
          <h1 className='mt-3 text-4xl md:text-5xl font-bold leading-tight'>
            AI agents already pay for API services. Is yours callable?
          </h1>
          <p className='mt-4 text-lg text-[#b8b3ab] max-w-3xl'>
            An AI agent does not fill forms or create accounts. It calls an API, pays per call, moves on. The x402
            protocol makes that payment possible, Google adopted it in its agent payment protocol (AP2), and the
            x402scan registry already lists hundreds of services. We make your product callable and payable by these
            agents, in 2 to 4 weeks.
          </p>

          <section className='mt-16 rounded-2xl border border-[#2a3a2a] bg-[#111a11]/60 p-8'>
            <h2 className='text-2xl font-bold'>The proof: we run it on our own products</h2>
            <p className='mt-3 text-[#b8b3ab]'>
              No theory. Two of our SaaS products are agent-callable in production, with real USDC payments on Base.
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
              Public specifications:{' '}
              <a href='https://www.trychargeguard.com/openapi.json' className='text-[#e07b39] underline underline-offset-4'>
                trychargeguard.com/openapi.json
              </a>{' '}
              and{' '}
              <a href='https://www.expertsia.dev/openapi.json' className='text-[#e07b39] underline underline-offset-4'>
                expertsia.dev/openapi.json
              </a>
            </p>
            <div className='mt-8 border-t border-[#2a3a2a] pt-6'>
              <h3 className='font-semibold text-[#f5f0e8]'>What this delivery includes, verifiable in one click</h3>
              <ul className='mt-4 grid gap-2 text-sm text-[#d8d3c8] md:grid-cols-2'>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    4 paid x402 endpoints in production (2 full teardowns, 2 entry snapshots) :{' '}
                    <a href='https://www.trychargeguard.com/api/teardown' className='text-[#e07b39] underline underline-offset-4'>402 verifiable here</a>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>Two streamable HTTP MCP servers (4 reason-code and deadline tools on ChargeGuard)</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    A public npm CLI :{' '}
                    <a href='https://www.npmjs.com/package/chargeguard' className='text-[#e07b39] underline underline-offset-4'>npmjs.com/package/chargeguard</a>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>A public read-only API with no account required (reason codes, deadlines), 24h cache</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>Full security review: 50+ vulnerabilities closed, SSRF protection, constant-time key comparison, rate limiting</span>
                </li>
                <li className='flex gap-2'>
                  <span className='text-[#e07b39]'>✓</span>
                  <span>
                    The pattern guide, open with no email gate :{' '}
                    <a href='/en/blog/make-your-saas-agent-callable-x402-guide-2026' className='text-[#e07b39] underline underline-offset-4'>read the guide</a>
                  </span>
                </li>
              </ul>
              <p className='mt-4 text-xs text-[#8a8a8a]'>
                ChargeGuard is our own product, not a client engagement: we show what we would apply to your
                product, with the same security and documentation standards.
              </p>
            </div>
          </section>

          <div className='mt-14 grid gap-6 lg:grid-cols-2'>
            <div className='flex flex-col rounded-2xl border border-[#2a3a2a] bg-[#111a11]/60 p-8'>
              <h2 className='text-xl font-bold'>Step 1: Agent-ready audit</h2>
              <p className='mt-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text'>
                €490 excl. VAT
              </p>
              <p className='mt-1 text-sm text-[#b8b3ab]'>Report delivered in 48 h</p>
              <ul className='mt-5 flex-1 space-y-2 text-sm text-[#d8d3c8]'>
                {AUDIT_ITEMS.map((it) => (
                  <li key={it} className='flex gap-2'>
                    <span className='text-[#e07b39]'>✓</span> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col rounded-2xl border border-[#e07b39] bg-[#111a11] p-8 shadow-lg shadow-[#e07b39]/10'>
              <h2 className='text-xl font-bold'>Step 2: Agent-callable transformation</h2>
              <p className='mt-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#e07b39] to-[#d4a574] bg-clip-text'>
                from €2,000 excl. VAT
              </p>
              <p className='mt-1 text-sm text-[#b8b3ab]'>Delivery in 2 to 4 weeks depending on your infrastructure</p>
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
            <h2 className='text-2xl font-bold'>Frequently asked questions</h2>
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
            <h2 className='text-3xl font-bold'>Let&rsquo;s talk about your product</h2>
            <p className='mx-auto mt-3 max-w-2xl text-[#b8b3ab]'>
              Send us the link to your API or your site. We answer within 24 h with our honest read: either the agent
              channel makes sense for you, or we tell you straight.
            </p>
            <a
              href='mailto:cyril@expertsia.dev?subject=Agent-ready%20audit'
              className='mt-6 inline-block rounded-lg bg-[#e07b39] px-8 py-4 font-semibold text-[#0a0f0a] hover:-translate-y-0.5 transition-transform'
            >
              Request the €490 audit
            </a>
            <p className='mt-4 text-sm text-[#b8b3ab]'>cyril@expertsia.dev · remote, worldwide</p>
          </section>
        </main>
        <SiteFooter locale='en' />
      </div>
    </>
  );
}
