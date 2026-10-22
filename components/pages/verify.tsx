import Link from 'next/link';
import { Rich } from '@/components/rich';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';
import { doctorExcerpt, endpoints, homeFiles, outsideFiles, watchCommands } from '@/lib/verify';

function Code({ children, label }: { children: string; label: string }) {
  return (
    <section className="verify-code" tabIndex={0} aria-label={label}>
      <pre>
        <code>{children}</code>
      </pre>
    </section>
  );
}

export function VerifyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).verify;
  const rich = (text: string) => <Rich text={text} locale={locale} />;
  const hostFallback: Record<string, string> = t.network.hostFallback;
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.lede}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell verify">
          <p className="notice">
            <strong>{t.summaryLabel}</strong> {rich(t.summary)}
          </p>

          <h2 id="files">{t.files.title}</h2>
          <p>{rich(t.files.lede)}</p>
          <h3>{rich(t.files.homeLabel)}</h3>
          <section className="matrix-wrap verify-table" tabIndex={0} aria-label={t.files.title}>
            <table className="matrix">
              <caption className="sr-only">{t.files.homeLabel}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.files.columns.path}</th>
                  <th scope="col">{t.files.columns.holds}</th>
                </tr>
              </thead>
              <tbody>
                {homeFiles.map((file) => (
                  <tr key={file.id}>
                    <th scope="row">
                      <code>{file.path}</code>
                    </th>
                    <td>{rich(t.files.home[file.id])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <h3>{rich(t.files.outsideLabel)}</h3>
          <section className="matrix-wrap verify-table" tabIndex={0} aria-label={t.files.outsideLabel}>
            <table className="matrix">
              <caption className="sr-only">{t.files.outsideLabel}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.files.columns.path}</th>
                  <th scope="col">{t.files.columns.holds}</th>
                </tr>
              </thead>
              <tbody>
                {outsideFiles.map((file) => (
                  <tr key={file.id}>
                    <th scope="row">
                      <code>{file.path}</code>
                    </th>
                    <td>{rich(t.files.outside[file.id])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <p>{rich(t.files.reads)}</p>
          <p>{rich(t.files.uninstall)}</p>

          <h2 id="network">{t.network.title}</h2>
          <p>{rich(t.network.lede)}</p>
          <section className="matrix-wrap verify-table" tabIndex={0} aria-label={t.network.title}>
            <table className="matrix verify-network">
              <caption className="sr-only">{t.network.title}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.network.columns.endpoint}</th>
                  <th scope="col">{t.network.columns.when}</th>
                  <th scope="col">{t.network.columns.sent}</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint) => (
                  <tr key={endpoint.id}>
                    <th scope="row">
                      {endpoint.host ? <code>{endpoint.host}</code> : hostFallback[endpoint.id]}
                    </th>
                    <td>{rich(t.network.rows[endpoint.id].when)}</td>
                    <td>{rich(t.network.rows[endpoint.id].sent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <h2 id="watch">{t.watch.title}</h2>
          <p>{t.watch.lede}</p>
          <h3>{t.watch.windowsLabel}</h3>
          <p>{rich(t.watch.windows)}</p>
          <Code label={t.watch.windowsLabel}>{watchCommands.powershell}</Code>
          <h3>{t.watch.netstatLabel}</h3>
          <p>{rich(t.watch.netstat)}</p>
          <Code label={t.watch.netstatLabel}>{watchCommands.netstat}</Code>
          <h3>{t.watch.resmonLabel}</h3>
          <p>{rich(t.watch.resmon)}</p>
          <Code label={t.watch.resmonLabel}>{watchCommands.resmon}</Code>
          <h3>{t.watch.lsofLabel}</h3>
          <p>{rich(t.watch.lsof)}</p>
          <Code label={t.watch.lsofLabel}>{watchCommands.lsof}</Code>
          <h3>{t.watch.expectTitle}</h3>
          <ul className="verify-list">
            {t.watch.expect.map((item) => (
              <li key={item}>{rich(item)}</li>
            ))}
          </ul>

          <h2 id="doctor">{rich(t.doctor.title)}</h2>
          <p>{rich(t.doctor.body)}</p>
          <Code label={t.doctor.label}>{watchCommands.doctor}</Code>
          <Code label={t.doctor.label}>{doctorExcerpt}</Code>
          <p>{t.doctor.note}</p>

          <h2 id="limits">{t.limits.title}</h2>
          <p>{rich(t.limits.body)}</p>
          <p>
            <Link className="text-link" href={localePath(locale, '/privacy')}>
              {t.limits.privacy}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
