import { Check, Minus, CircleDashed } from 'lucide-react';
import {
  capabilities,
  clientSupport,
  clientSupportFootnote,
  clientSupportSources,
  type SupportCell,
} from '@/lib/client-support';

const stateLabel = {
  yes: 'Supported',
  no: 'Not supported',
  unverified: 'Unverified',
} as const;

function Cell({ cell }: { cell: SupportCell }) {
  const Icon = cell.state === 'yes' ? Check : cell.state === 'unverified' ? CircleDashed : Minus;
  return (
    <td className={`matrix-cell is-${cell.state}`}>
      <span className="matrix-state">
        <Icon size={15} aria-hidden="true" />
        <span>{stateLabel[cell.state]}</span>
      </span>
      {cell.note ? <small>{cell.note}</small> : null}
    </td>
  );
}

export function ClientMatrix() {
  return (
    <div className="matrix-wrap">
      <table className="matrix">
        <caption className="sr-only">What Taksim can do for each coding client</caption>
        <thead>
          <tr>
            <th scope="col">Client</th>
            {capabilities.map((c) => (
              <th scope="col" key={c.key}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clientSupport.map((row) => (
            <tr key={`${row.client}-${row.access}`}>
              <th scope="row">
                <strong>{row.client}</strong>
                <small>{row.access}</small>
              </th>
              {capabilities.map((c) => (
                <Cell cell={row.cells[c.key]} key={c.key} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <dl className="matrix-legend">
        {capabilities.map((c) => (
          <div key={c.key}>
            <dt>{c.label}</dt>
            <dd>{c.description}</dd>
          </div>
        ))}
      </dl>
      <p className="matrix-footnote">
        {clientSupportFootnote} Sources:{' '}
        {clientSupportSources.map((source, index) => (
          <span key={source.href}>
            {index > 0 ? ' and ' : ''}
            <a className="text-link" href={source.href} rel="noreferrer" target="_blank">
              {source.label}
            </a>
          </span>
        ))}
        .
      </p>
    </div>
  );
}
