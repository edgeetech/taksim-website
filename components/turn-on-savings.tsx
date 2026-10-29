import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';

// The first lines of `taksim mode economy` on a fresh install, verbatim (the same in every language).
const modeOutput = `routing.mode: economy. Applied.
Changed: routing.auto off -> on.
Previous: mode balanced (default), routing.auto off. Undo: \`taksim mode balanced\`.
What this mode maps to:
  ...`;

const reportOutput = `Status: completed
Usage (API-equivalent, list prices <date>): n/a (no priced executions) · priced executions 0 of 0 (n/a) · Opus/Fable share of output tokens: n/a (no token data)
If always default tier: n/a (no priced comparison) · if always strong tier: n/a (no priced comparison)
Taksim selections vs actual: n/a (no requests with both requested and actual model priced) on 0 priced requests (n/a live requests)`;

function Block({ children }: { children: string }) {
  return (
    <div className="docs-command-list">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

/** "Turn on savings": the two paths (API key, Claude subscription) and the check. Shared by the easy install and the install guide. */
export function TurnOnSavings({ locale, title }: { locale: Locale; title: string }) {
  const t = getDictionary(locale).quickStart.savings;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <section id="savings">
      <h2>{title}</h2>
      <p>{rich(t.body)}</p>
      <h3>{t.apiKeyTitle}</h3>
      <p>{rich(t.apiKeyBody)}</p>
      <Block>{'taksim mode economy\ntaksim claude'}</Block>
      <Block>{modeOutput}</Block>
      <h3>{t.subscriptionTitle}</h3>
      <p>{rich(t.subscriptionBody)}</p>
      <Block>{'taksim routing subscription on\ntaksim mode economy'}</Block>
      <h3>{t.checkTitle}</h3>
      <p>{rich(t.checkBody)}</p>
      <Block>{'taksim report weekly'}</Block>
      <Block>{reportOutput}</Block>
    </section>
  );
}
