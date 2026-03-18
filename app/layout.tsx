import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: 'ExpertsIA - AI Business Transformation',
  description: 'AI Business Transformation for Startups & Corporations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
