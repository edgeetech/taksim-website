import type { Metadata } from 'next';
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';
import { Footer, Header } from '@/components/site-chrome';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taksim.edgee.tech'),
  title: {
    default: 'Taksim — A sufficiency ledger for AI coding',
    template: '%s — Taksim',
  },
  description:
    'Taksim keeps a local ledger of your AI coding sessions: which model ran each turn, what it cost, and whether a cheaper model would have been enough.',
  icons: {
    icon: [{ url: '/taksim-icon-v1.svg', type: 'image/svg+xml' }],
    shortcut: '/taksim-icon-v1.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
