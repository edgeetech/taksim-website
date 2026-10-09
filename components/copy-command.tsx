'use client';

import { useState } from 'react';

export function CopyCommand({
  command,
  copy,
  copied,
  funnelStep,
}: {
  command: string;
  copy: string;
  copied: string;
  funnelStep?: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <div className="copy-command">
      <pre>
        <code>{command}</code>
      </pre>
      <button
        type="button"
        data-funnel={funnelStep}
        onClick={() => {
          void navigator.clipboard?.writeText(command).then(() => {
            setDone(true);
            setTimeout(() => setDone(false), 2000);
          });
        }}
      >
        {done ? copied : copy}
      </button>
    </div>
  );
}
