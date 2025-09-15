import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calispec.ai'),
  title: 'Calispec.ai | Gauge Management SaaS for Manufacturing',
  description: 'Calispec.ai is a next-gen SaaS platform for gauge management, calibration, MSA studies, and compliance automation for modern manufacturing.',
  keywords: 'gauge management, calibration software, metrology SaaS, IATF 16949 compliance, MSA studies, quality 4.0',
  openGraph: {
    title: 'Calispec.ai - Next-Gen Gauge Management SaaS',
    description: 'Transform your gauge management with predictive AI, built-in MSA, and full compliance traceability.',
    url: 'https://www.calispec.ai',
    siteName: 'Calispec.ai',
    images: [
      {
        url: 'https://www.calispec.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calispec.ai - Next-Gen Gauge Management SaaS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calispec.ai - Next-Gen Gauge Management SaaS',
    description: 'Transform your gauge management with predictive AI, built-in MSA, and full compliance traceability.',
    images: ['https://www.calispec.ai/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}