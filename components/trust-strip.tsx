'use client';

import { BadgeCheck } from 'lucide-react';
import { useSyncExternalStore } from 'react';

const previewHosts = new Set(['localhost', '127.0.0.1']);

export function TrustStrip() {
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
            Trust &amp; Compliance
          </p>
          <h2>Building the controls serious engineering teams expect.</h2>
        </div>
        <div className="trust-items">
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>SOC 2 — In progress</strong>
              <small>Certification process underway.</small>
            </span>
          </div>
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>ISO 27001 — In progress</strong>
              <small>Certification process underway.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
