'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_exceptions: true,
    // Disable cookies for RGPD compliance — use anonymous ID in localStorage
    persistence: 'localStorage',
    autocapture: false, // We'll track events manually
  });
}

export function PostHogWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track key events on page load
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="#contact"]') || target.closest('button[type="submit"]')) {
        const isFrench = window.location.pathname.startsWith('/fr');
        posthog.capture('cta_clicked', {
          locale: isFrench ? 'fr' : 'en',
          page: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
