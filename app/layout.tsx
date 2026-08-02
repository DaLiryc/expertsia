import './globals.css';

// Root layout — middleware handles locale detection and redirect.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
