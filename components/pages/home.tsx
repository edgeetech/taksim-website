import { ClosingNote } from '@/components/closing';
import { SoftwareApplicationJsonLd } from '@/components/json-ld';
import type { Locale } from '@/lib/i18n';

// Taksim is closed as a commercial product (8 November 2026): the home page is the closing note.
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <main className="home">
      <SoftwareApplicationJsonLd locale={locale} />
      <ClosingNote locale={locale} />
    </main>
  );
}
