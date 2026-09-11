import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer, Header } from '@/components/site-chrome';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taksim.edgee.tech'),
  title: {
    default: 'Taksim — Intelligence Control Plane for Coding Agents',
    template: '%s — Taksim',
  },
  description:
    'Govern local, private, cloud, and provider-native intelligence for coding agents. Preserve the quality bar and verify engineering outcomes with evidence.',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
