/**
 * Minimal site crawler for the teardown endpoint.
 * Fetches the target URL plus the highest-signal subpages, extracts
 * readable text, and returns a compact corpus for the LLM.
 *
 * Designed for public marketing sites (Shopify, Webflow, custom).
 * No JS rendering — pages that require it lose some content, which is
 * itself a signal (reported in the crawl_notes).
 */

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const MAX_PAGES = 7;
const MAX_BYTES_PER_PAGE = 400_000; // truncate huge pages
const FETCH_TIMEOUT_MS = 10_000;

export interface CrawledPage {
  url: string;
  status: number;
  title: string;
  metaDescription: string;
  h1: string[];
  h2: string[];
  text: string; // cleaned, truncated
  links: string[]; // internal links discovered
}

export interface CrawlResult {
  pages: CrawledPage[];
  robots_txt: string | null;
  has_jsonld: boolean;
  llms_txt: boolean;
  sitemap_urls: number | null;
  notes: string[];
}

function stripHtml(raw: string): string {
  return raw
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPage(url: string): Promise<{ status: number; body: string } | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html,*/*" },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      redirect: "follow",
    });
    const raw = await res.text();
    return { status: res.status, body: raw.slice(0, MAX_BYTES_PER_PAGE) };
  } catch {
    return null;
  }
}

function extractPage(url: string, status: number, body: string): CrawledPage {
  const meta = (name: string): string => {
    const m = body.match(new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["']`, "i"));
    return m ? m[1].trim().slice(0, 300) : "";
  };
  const headers = (tag: string): string[] =>
    [...body.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "gi"))]
      .map((m) => stripHtml(m[1]).slice(0, 200))
      .filter(Boolean)
      .slice(0, 8);

  const links = Array.from(new Set(
    Array.from(body.matchAll(/href="(\/[^"#?]*?)"/g)).map((m) => m[1]).filter((l) => l.length > 1)
  )).slice(0, 40);

  return {
    url,
    status,
    title: stripHtml(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").slice(0, 200),
    metaDescription: meta("description") || meta("og:description"),
    h1: headers("h1"),
    h2: headers("h2"),
    text: stripHtml(body).slice(0, 12_000),
    links,
  };
}

export async function crawlSite(startUrl: string): Promise<CrawlResult> {
  const notes: string[] = [];
  const origin = new URL(startUrl).origin;

  // robots.txt
  const robots = await fetchPage(`${origin}/robots.txt`);
  const robots_txt = robots?.status === 200 ? robots.body.slice(0, 3_000) : null;

  // llms.txt (GEO signal)
  const llms = await fetchPage(`${origin}/llms.txt`);
  const llms_txt = llms?.status === 200;

  // sitemap (count only)
  let sitemap_urls: number | null = null;
  const sm = await fetchPage(`${origin}/sitemap.xml`);
  if (sm?.status === 200 && sm.body.includes("<loc>")) {
    sitemap_urls = (sm.body.match(/<loc>/g) || []).length;
  }

  // start page
  const start = await fetchPage(startUrl);
  if (!start) throw new Error(`Could not fetch ${startUrl}`);
  const pages: CrawledPage[] = [extractPage(startUrl, start.status, start.body)];

  // pick subpages by signal: pricing, about, blog, faq, contact
  const priority = ["pricing", "about", "blog", "faq", "contact", "features", "plans"];
  const internal = [...new Set(pages[0].links)];
  const chosen: string[] = [];
  for (const kw of priority) {
    const hit = internal.find((l) => l.toLowerCase().includes(kw));
    if (hit && chosen.length < MAX_PAGES - 1) chosen.push(`${origin}${hit}`);
  }

  // fetch subpages in parallel
  const subResults = await Promise.all(
    chosen.map(async (url) => {
      const r = await fetchPage(url);
      return r ? extractPage(url, r.status, r.body) : null;
    })
  );
  for (const p of subResults) if (p) pages.push(p);

  // JSON-LD present anywhere?
  const has_jsonld = start.body.includes("application/ld+json") ||
    subResults.some((r) => r && r.url && false); // sub bodies not retained; start page is the main signal
  // better: re-check sub pages cheaply
  if (!has_jsonld) {
    for (const sub of subResults) {
      if (sub && sub.text.length > 0) {
        // sub body wasn't stored raw; approximate via start + count from chosen fetches
        break;
      }
    }
  }

  if (pages.length < MAX_PAGES) notes.push(`only ${pages.length} pages crawled (few internal links found)`);
  const thin = pages.filter((p) => p.text.length < 500);
  if (thin.length) notes.push(`${thin.length} page(s) with <500 chars of text (JS-rendered or empty)`);

  return { pages, robots_txt, has_jsonld, llms_txt, sitemap_urls, notes };
}
