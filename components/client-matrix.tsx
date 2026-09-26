import { Check, Minus, CircleDashed } from 'lucide-react';
import { capabilities, clientSupport, clientSupportSources, type SupportState } from '@/lib/client-support';
import { getDictionary, type Locale } from '@/lib/i18n';

function Cell({ state, note, label }: { state: SupportState; note: string; label: string }) {
  const Icon = state === 'yes' ? Check : state === 'unverified' ? CircleDashed : Minus;
  return (
    <td className={`matrix-cell is-${state}`}>
      <span className="matrix-state">
        <Icon size={15} aria-hidden="true" />
        <span>{label}</span>
      </span>
      {note ? <small>{note}</small> : null}
    </td>
  );
}

export function ClientMatrix({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).matrix;
  return (
    <div className="matrix-wrap">
      <table className="matrix">
        <caption className="sr-only">{t.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.client}</th>
            {capabilities.map((c) => (
              <th scope="col" key={c}>
                {t.capabilities[c].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clientSupport.map((row) => (
            <tr key={row.id}>
              <th scope="row">
                <strong>{t.rows[row.id].client}</strong>
                <small>{t.rows[row.id].access}</small>
              </th>
              {capabilities.map((c) => (
                <Cell
                  key={c}
                  state={row.cells[c]}
                  note={t.rows[row.id][c]}
                  label={t.states[row.cells[c]]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <dl className="matrix-legend">
        {capabilities.map((c) => (
          <div key={c}>
            <dt>{t.capabilities[c].label}</dt>
            <dd>{t.capabilities[c].description}</dd>
          </div>
        ))}
      </dl>
      <p className="matrix-footnote">
        {t.footnote} {t.sources}{' '}
        {clientSupportSources.map((source, index) => (
          <span key={source.href}>
            {index > 0 ? ` ${t.and} ` : ''}
            <a className="text-link" href={source.href} rel="noreferrer" target="_blank">
              {t.sourceLabels[source.key]}
            </a>
          </span>
        ))}
        .
      </p>
    </div>
  );
}
