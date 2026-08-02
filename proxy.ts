import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Countries that should default to French
const FRENCH_SPEAKING_COUNTRIES = [
  'FR', 'BE', 'CH', 'LU', 'MC', 'CA',  // France + neighbors + Canada
  // Other francophone but lower priority for B2B
  // 'SN', 'CI', 'MA', 'TN', 'DZ', etc.
];

const SUPPORTED_LOCALES = ['en', 'fr'];
const DEFAULT_LOCALE = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if already has a locale prefix
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check for stored language preference (cookie)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return NextResponse.redirect(new URL(`/${cookieLocale}`, request.url));
  }

  // Geo-IP detection via Vercel header
  const country = request.headers.get('x-vercel-ip-country') || '';
  const detectedLocale = FRENCH_SPEAKING_COUNTRIES.includes(country)
    ? 'fr'
    : DEFAULT_LOCALE;

  return NextResponse.redirect(new URL(`/${detectedLocale}`, request.url));
}

export const config = {
  matcher: [
    // Match all paths except static assets
    '/((?!_next|api|.*\\..*).*)',
  ],
};
