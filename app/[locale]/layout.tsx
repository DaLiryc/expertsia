import type { Metadata } from 'next';
import { dictionaries, type Locale } from '@/lib/dictionaries';

const BASE_URL = 'https://www.expertsia.dev';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale] || dictionaries.en;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: 'Cyril Marchand' }],
    robots: 'index, follow',
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'fr': `${BASE_URL}/fr`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${BASE_URL}/${locale}`,
      siteName: 'ExpertsIA',
      type: 'website',
      images: [{ url: `${BASE_URL}/og-card.png`, width: 1200, height: 630, alt: 'ExpertsIA' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${BASE_URL}/og-card.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = dictionaries[locale as Locale] || dictionaries.en;

  // Schema.org structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ExpertsIA',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: dict.meta.description,
    founder: {
      '@type': 'Person',
      name: 'Cyril Marchand',
      jobTitle: 'AI Consultant & Founder',
      url: 'https://www.linkedin.com/in/marchandcyril/',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Business Process Automation',
      'Machine Learning',
      'Data Science',
      'AI Training',
      'RAG Systems',
      'Process Optimization',
    ],
    offers: dict.services.items.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ExpertsIA',
    url: BASE_URL,
    inLanguage: locale,
  };

  // Brand schema (Microsoft AEO/GEO pilier 1) — entite brand separee.
  const brandSchema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'ExpertsIA',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'ExpertsIA is an AI consulting agency based in Bordeaux, France, helping SMBs audit processes, deploy agentic automations, and train their teams.',
  };

  // Dreamdata (B2B attribution) — snippets fournis par le dashboard, install head standard.
  // Script 1: principal (respecte le consent mode GTM si present, sinon init basique).
  // Script 2: CL = collecte cookieless, always-on.
  const DREAMDATA_MAIN = `!function(){"use strict";var a="dreamdata",t="dreamdata-analytics",e=!1;function i(a){if(function(){try{var a=window&&window.localStorage&&window.localStorage.getItem("DD_DEBUGGER");return"true"===a||"1"===a}catch(a){return!1}}())try{var t=window.console,e=Array.prototype.slice.call(arguments,1),i=t&&t[a]?t[a]:t&&t.log?t.log:null;i&&i.apply(t,e)}catch(a){return}}var dreamdata=window[a]=window[a]||[];if(!dreamdata.initialize)if(dreamdata.invoked)i("warn","Dreamdata snippet included twice.");else{dreamdata.invoked=!0,dreamdata.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"],dreamdata.factory=function(t){return function(){if(window[a].initialized)return window[a][t].apply(window[a],arguments);var e=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(t)>-1){var i=document.querySelector("link[rel='canonical']");e.push({__t:"bpc",c:i&&i.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}return e.unshift(t),dreamdata.push(e),dreamdata}};for(var r=0;r<dreamdata.methods.length;r++){var n=dreamdata.methods[r];dreamdata[n]=dreamdata.factory(n)}dreamdata.load=function(e,i){var r=document.createElement("script");r.id=t,r.type="text/javascript",r.async=!0,r.setAttribute("data-global-dreamdata-analytics-key",a),r.src="https://cdn.dreamdata.cloud/scripts/analytics/next/dreamdata.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n),dreamdata._loadOptions=i},dreamdata._writeKey="1524a0a5-26d8-414e-b431-22b099c74c41",dreamdata.SNIPPET_VERSION="dreamdata-2.2.6",dreamdata.init=function(){try{if(e)return void i("warn","Dreamdata already initialized, skipping duplicate initialization");dreamdata.load("1524a0a5-26d8-414e-b431-22b099c74c41", {"googleEnhancedConversions":true,"formTracking":{"html":true},"intentSources":{"autoGroup":true}}),dreamdata.page(),e=!0}catch(a){i("error","Failed to initialize Dreamdata:",a&&a.message)}},function(){try{if(e)return;if(i("log","✅ dataLayer",window.dataLayer),i("log","✅ google_tag_data",window.google_tag_data),!window.dataLayer||!window.google_tag_data)return void dreamdata.init();if(window.google_tag_data&&window.google_tag_data.ics&&window.google_tag_data.ics.entries&&window.google_tag_data.ics.entries.analytics_storage&&!0===window.google_tag_data.ics.entries.analytics_storage.update||function(){try{var a=localStorage.getItem("framerCookiesConsentMode");if(!a)return!1;var t=JSON.parse(a);return!!t&&!0===t.analytics}catch(a){return!1}}())return i("log","✅ Consent with GTM analytics_storage in google_tag_data granted, initializing Dreamdata"),void dreamdata.init();var a=window.dataLayer.push;window.dataLayer.push=function(){var r=Array.prototype.slice.call(arguments);i("log","✅ DataLayer Change Detected:",r[0]);var n=r[0];return n&&3===n.length&&"consent"===n[0]&&n[2]&&n[2].analytics_storage&&("denied"===n[2].analytics_storage&&(i("log","❌ Consent with GTM analytics_storage in dataLayer denied, removing Dreamdata script"),function(){e=!1;var a=document.getElementById(t);a&&a.remove()}()),"granted"===n[2].analytics_storage&&(i("log","✅ Consent with GTM analytics_storage in dataLayer granted, initializing Dreamdata"),dreamdata.init())),a.apply(this,r)}}catch(a){i("error","Error in initialization logic, falling back to basic init:",a&&a.message),dreamdata.init()}}()}}();`;
  const DREAMDATA_CL = `!function(){if(!window.dreamdata||!window.dreamdata.initialized){if(window.dreamdata){var e=document.getElementById("dreamdata-analytics");if(e&&e.type&&"text/javascript"==e.type)return}var a="dreamdata-cl",dreamdata=window[a]=window[a]||[];if(!dreamdata.initialize)if(dreamdata.invoked)window.console&&console.error&&console.error("Dreamdata CL snippet included twice.");else{dreamdata.invoked=!0,dreamdata.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"],dreamdata.factory=function(e){return function(){if(window[a].initialized)return window[a][e].apply(window[a],arguments);var t=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var r=document.querySelector("link[rel='canonical']");t.push({__t:"bpc",c:r&&r.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}return t.unshift(e),dreamdata.push(t),dreamdata}};for(var t=0;t<dreamdata.methods.length;t++){var r=dreamdata.methods[t];dreamdata[r]=dreamdata.factory(r)}dreamdata.load=function(e,t){var r=document.createElement("script");r.id="dreamdata-analytics-cl",r.type="text/javascript",r.async=!0,r.setAttribute("data-global-dreamdata-cl-analytics-key",a),r.src="https://cdn.drda.io/scripts/analytics/next/dreamdata.cl.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i),dreamdata._loadOptions=t},dreamdata._writeKey="1524a0a5-26d8-414e-b431-22b099c74c41",dreamdata.SNIPPET_VERSION="dreamdata-cl-2.0.0",dreamdata.load("1524a0a5-26d8-414e-b431-22b099c74c41"),dreamdata.page()}}}();`;


  return (
    <html lang={locale}>
      <head>
        {/* hreflang: set ONCE via generateMetadata alternates.languages.
            Manual <link> tags removed Sep 2 — they duplicated the metadata
            ones (every hreflang appeared 2x per page, seo report finding). */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* WebMCP discovery: machine-readable list of agent-completable actions */}
        <link rel="mcp-actions" href="/mcp-actions.json" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        {/* Dreamdata: script principal (consent-aware) + collecte cookieless CL */}
        <script id="init-dreamdata" dangerouslySetInnerHTML={{ __html: DREAMDATA_MAIN }} />
        <script id="init-dreamdata-cl" dangerouslySetInnerHTML={{ __html: DREAMDATA_CL }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
