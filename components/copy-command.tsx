'use client';

import { useState } from 'react';

export function CopyCommand({
  command,
  copy,
  copied,
}: {
  command: string;
  copy: string;
  copied: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <div className="copy-command">
      <pre>
        <code>{command}</code>
      </pre>
      <button
        type="button"
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
