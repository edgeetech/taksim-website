'use client';

import { BadgeCheck } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import type { Dictionary } from '@/lib/i18n';

const previewHosts = new Set(['localhost', '127.0.0.1']);

export function TrustStrip({ t }: { t: Dictionary['chrome']['trust'] }) {
  const visible = useSyncExternalStore(
    () => () => undefined,
    () => {
      const hostname = window.location.hostname;
      return previewHosts.has(hostname) || hostname.endsWith('.chatgpt.site');
    },
    () => false,
  );

  if (!visible) return null;

  return (
    <section className="trust-strip" aria-labelledby="trust-heading">
      <div className="shell trust-inner">
        <div>
          <p className="eyebrow" id="trust-heading">
            {t.eyebrow}
          </p>
          <h2>{t.title}</h2>
        </div>
        <div className="trust-items">
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>{t.soc2}</strong>
              <small>{t.underway}</small>
            </span>
          </div>
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>{t.iso}</strong>
              <small>{t.underway}</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
