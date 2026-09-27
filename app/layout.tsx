import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VENTURA AI | Business Navigator & Operating System',
  description:
    'Turn an idea into a business with Ventura AI. Discover, validate, plan, finance, legal, build, launch and grow using one intelligent platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
