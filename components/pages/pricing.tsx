import { ClosingNote } from '@/components/closing';
import type { Locale } from '@/lib/i18n';

// The former pricing page. Old links land on the closing note: there are no plans, prices or sales.
export function PricingPage({ locale }: { locale: Locale }) {
  return (
    <main className="home">
      <ClosingNote locale={locale} />
    </main>
  );
}
