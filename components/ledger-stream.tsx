'use client';

import { useEffect, useRef, useState } from 'react';

type Verdict = 'sufficient' | 'over' | 'disputed';

type Row = {
  id: number;
  time: string;
  client: string;
  model: string;
  cost: number;
  verdict: Verdict;
  label: string;
};

const templates: Omit<Row, 'id' | 'time'>[] = [
  { client: 'Claude Code', model: 'Opus 5.5', cost: 4.82, verdict: 'over', label: 'Sonnet was enough' },
  { client: 'Codex', model: 'gpt-5.6', cost: 1.14, verdict: 'sufficient', label: 'Right size' },
  { client: 'Claude Code', model: 'Fable 5.1', cost: 7.36, verdict: 'sufficient', label: 'Needed the top tier' },
  { client: 'Claude app', model: 'Opus 5.5', cost: 2.07, verdict: 'over', label: 'Haiku was enough' },
  { client: 'Claude Code', model: 'Sonnet', cost: 0.61, verdict: 'sufficient', label: 'Right size' },
  { client: 'Claude Code', model: 'Opus 5.5', cost: 3.4, verdict: 'disputed', label: 'Judges disagree' },
  { client: 'Codex', model: 'gpt-5.6', cost: 0.92, verdict: 'over', label: 'Smaller was enough' },
  { client: 'Claude Code', model: 'Fable 5.1', cost: 5.95, verdict: 'over', label: 'Opus was enough' },
  { client: 'Claude Code', model: 'Haiku', cost: 0.08, verdict: 'sufficient', label: 'Right size' },
  { client: 'Claude app', model: 'Opus 5.5', cost: 2.63, verdict: 'sufficient', label: 'Needed Opus' },
];

const VISIBLE = 6;
const START_TOTAL = 1612.4;
const WEEK_CAP = 1780;

function clock(offsetMinutes: number) {
  const minutes = 9 * 60 + 14 + offsetMinutes;
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function makeRow(index: number): Row {
  return { ...templates[index % templates.length], id: index, time: clock(index * 3) };
}

const initialRows = Array.from({ length: VISIBLE }, (_, i) => makeRow(VISIBLE - 1 - i));

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function LedgerStream() {
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [total, setTotal] = useState(START_TOTAL);
  const [running, setRunning] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const nextIndex = useRef(VISIBLE);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const node = rootRef.current;
    if (!node) return;
    let visible = false;
    const sync = () => setRunning(visible && !reduce.matches && document.visibilityState === 'visible');
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(node);
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduce.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      const row = makeRow(nextIndex.current++);
      setRows((current) => [row, ...current].slice(0, VISIBLE));
      setTotal((current) => (current + row.cost > WEEK_CAP ? START_TOTAL : current + row.cost));
    }, 2200);
    return () => window.clearInterval(timer);
  }, [running]);

  const judged = rows.filter((r) => r.verdict !== 'disputed');
  const overShare = Math.round((rows.filter((r) => r.verdict === 'over').length / Math.max(judged.length, 1)) * 100);

  return (
    <div className="ledger" ref={rootRef}>
      <div className="ledger-chrome">
        <span className="ledger-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>taksim ledger</span>
        <span className={running ? 'ledger-live is-live' : 'ledger-live'}>
          {running ? 'recording' : 'paused'}
        </span>
      </div>
      <div className="ledger-totals">
        <div>
          <small>Spend this week, list price</small>
          <strong className="tabular" aria-live="off">
            {money.format(total)}
          </strong>
        </div>
        <div>
          <small>Always-Sonnet counterfactual</small>
          <strong className="tabular ledger-delta">−45%</strong>
        </div>
        <div>
          <small>Over-sized, on screen</small>
          <strong className="tabular">{overShare}%</strong>
        </div>
      </div>
      <table className="ledger-table">
        <caption className="sr-only">Illustrative stream of recorded AI coding turns</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Client</th>
            <th scope="col">Model</th>
            <th scope="col" className="num">
              Cost
            </th>
            <th scope="col">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="ledger-row">
              <td className="tabular muted">{row.time}</td>
              <td>{row.client}</td>
              <td className="model">{row.model}</td>
              <td className="num tabular">{money.format(row.cost)}</td>
              <td>
                <span className={`verdict verdict-${row.verdict}`}>
                  <span className="judges" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  {row.label}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="ledger-note">
        Illustrative stream. Totals modelled on the founder&rsquo;s own week at API-equivalent list prices.
      </p>
    </div>
  );
}
