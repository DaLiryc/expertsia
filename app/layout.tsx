import './globals.css';
import { PostHogWrapper } from '@/components/PostHogProvider';

// Root layout — middleware handles locale detection and redirect.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostHogWrapper>{children}</PostHogWrapper>;
}
