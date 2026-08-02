import { redirect } from 'next/navigation';

// This page handles the root URL.
// next.config.ts redirects handle geo-IP detection,
// but we need a fallback here in case redirects don't fire.
export default function RootPage() {
  redirect('/en');
}
