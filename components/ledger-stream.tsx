'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/lib/i18n';

type Verdict = 'sufficient' | 'over' | 'disputed';

type Row = {
  id: number;
  time: string;
  client: string;
  model: string;
  cost: number;
  verdict: Verdict;
  label: keyof Dictionary['ledger']['verdicts'];
};

const templates: Omit<Row, 'id' | 'time'>[] = [
  { client: 'Claude Code', model: 'Opus 5.5', cost: 4.82, verdict: 'over', label: 'sonnetEnough' },
  { client: 'Claude Code', model: 'Sonnet', cost: 1.14, verdict: 'sufficient', label: 'rightSize' },
  { client: 'Claude Code', model: 'Fable 5.1', cost: 7.36, verdict: 'sufficient', label: 'neededTop' },
  { client: 'Claude app', model: 'Opus 5.5', cost: 2.07, verdict: 'over', label: 'haikuEnough' },
  { client: 'Claude Code', model: 'Sonnet', cost: 0.61, verdict: 'sufficient', label: 'rightSize' },
  { client: 'Claude Code', model: 'Opus 5.5', cost: 3.4, verdict: 'disputed', label: 'disagree' },
  { client: 'Claude Code', model: 'Sonnet', cost: 0.92, verdict: 'over', label: 'haikuEnough' },
  { client: 'Claude Code', model: 'Fable 5.1', cost: 5.95, verdict: 'over', label: 'opusEnough' },
  { client: 'Claude Code', model: 'Haiku', cost: 0.08, verdict: 'sufficient', label: 'rightSize' },
  { client: 'Claude app', model: 'Opus 5.5', cost: 2.63, verdict: 'sufficient', label: 'neededOpus' },
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

export function LedgerStream({ t }: { t: Dictionary['ledger'] }) {
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
          {running ? t.recording : t.paused}
        </span>
      </div>
      <div className="ledger-totals">
        <div>
          <small>{t.spend}</small>
          <strong className="tabular" aria-live="off">
            {money.format(total)}
          </strong>
        </div>
        <div>
          <small>{t.counterfactual}</small>
          <strong className="tabular ledger-delta">−45%</strong>
        </div>
        <div>
          <small>{t.overSized}</small>
          <strong className="tabular">{overShare}%</strong>
        </div>
      </div>
      <table className="ledger-table">
        <caption className="sr-only">{t.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.time}</th>
            <th scope="col">{t.client}</th>
            <th scope="col">{t.model}</th>
            <th scope="col" className="num">
              {t.cost}
            </th>
            <th scope="col">{t.verdict}</th>
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
                  {t.verdicts[row.label]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="ledger-note">{t.note}</p>
    </div>
  );
}
