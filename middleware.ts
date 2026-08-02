import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if already has a locale prefix
  const hasLocale = pathname === '/en' || pathname.startsWith('/en/') ||
                    pathname === '/fr' || pathname.startsWith('/fr/');

  if (hasLocale) {
    return NextResponse.next();
  }

  // Geo-IP detection via Vercel header
  const country = request.headers.get('x-vercel-ip-country') || '';
  const isFrench = ['FR', 'BE', 'CH', 'LU', 'MC', 'CA'].includes(country);
  const locale = isFrench ? 'fr' : 'en';

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}
