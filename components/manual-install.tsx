import { Rich } from '@/components/rich';
import { getDictionary, type Locale } from '@/lib/i18n';
import { release } from '@/lib/release';

const windowsCheck = `Get-FileHash .\\taksim-connector-win-x64.zip -Algorithm SHA256
Select-String taksim-connector-win-x64.zip .\\SHA256SUMS.txt`;

const macCheck = `shasum -a 256 taksim-connector-osx-arm64.tar.gz
grep taksim-connector-osx-arm64.tar.gz SHA256SUMS.txt`;

/** Collapsible: check the downloaded archive against SHA256SUMS.txt yourself before running anything. */
export function ManualInstall({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).quickStart.manual;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  return (
    <div className="docs-command-list" id="manual">
      <details>
        <summary>{t.title}</summary>
        <p>{rich(t.body)}</p>
        <p>
          <strong>{t.windowsTitle}</strong>
        </p>
        <pre>
          <code>{windowsCheck}</code>
        </pre>
        <p>{rich(t.windowsAfter)}</p>
        {release.supportsMac ? (
          <>
            <p>
              <strong>{t.macTitle}</strong>
            </p>
            <pre>
              <code>{macCheck}</code>
            </pre>
            <p>{rich(t.macAfter)}</p>
          </>
        ) : null}
        <p>{rich(t.after)}</p>
      </details>
    </div>
  );
}
