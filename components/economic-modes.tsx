import type { Dictionary } from '@/lib/i18n';

export function EconomicModes({ t }: { t: Dictionary['home']['modes'] }) {
  return (
    <>
      <div className="values-grid modes-grid">
        {t.items.map((mode) => (
          <div key={mode.name} className="value">
            <h3>{mode.name}</h3>
            <p>{mode.economics}</p>
            <p className="mode-current">
              <strong>{t.currentLabel}:</strong> {mode.current}
            </p>
          </div>
        ))}
      </div>
      <div className="privacy-card compliance modes-future">
        <h3>{t.futureTitle}</h3>
        <p>{t.futureBody}</p>
      </div>
    </>
  );
}
