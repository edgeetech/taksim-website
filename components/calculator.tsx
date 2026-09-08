'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export function SavingsCalculator() {
  const [spend, setSpend] = useState(10000);
  const [privateAvailable, setPrivateAvailable] = useState('not-sure');
  const range = useMemo(() => {
    const factor =
      privateAvailable === 'yes'
        ? [0.16, 0.28]
        : privateAvailable === 'no'
          ? [0.08, 0.18]
          : [0.1, 0.22];
    return factor.map((value) => Math.round((spend * value) / 100) * 100);
  }, [spend, privateAvailable]);
  const money = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <label>
          Monthly AI engineering spend
          <input
            type="number"
            min="1000"
            step="1000"
            value={spend}
            onChange={(event) =>
              setSpend(Math.max(0, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Private or local intelligence available?
          <select
            value={privateAvailable}
            onChange={(event) => setPrivateAvailable(event.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </label>
      </div>
      <output className="calculator-output" aria-live="polite">
        <small>Illustrative optimisation range</small>
        <strong>
          {money(range[0])}–{money(range[1])}
          <em>/ month</em>
        </strong>
        <span>
          {money(range[0] * 12)}–{money(range[1] * 12)} per year
        </span>
        <p>
          Scenario only. Taksim has not analysed your environment, workload, or
          quality requirements.
        </p>
        <Link
          className="button purple-button"
          href="/contact?intent=assessment&source=calculator"
        >
          Analyse my actual AI spend
        </Link>
      </output>
    </div>
  );
}
