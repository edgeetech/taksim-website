import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';
import { Footer, Header } from '@/components/site-chrome';
import { getDictionary, localePreferenceScript, type Locale } from '@/lib/i18n';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin', 'latin-ext'] });
const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext'],
});

export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: localePreferenceScript }} />
        <a className="skip-link" href="#main-content">
          {getDictionary(locale).chrome.skipToContent}
        </a>
        <Header locale={locale} />
        <div id="main-content">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
