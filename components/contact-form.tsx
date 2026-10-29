'use client';

import Link from 'next/link';
import { type SyntheticEvent, useEffect, useRef, useState } from 'react';
import { localePath, type Locale } from '@/lib/i18n/config';

const supportEmail = 'info@edgee.tech';

const intents = [
  { id: 'pro', label: 'Pro founding seat' },
  { id: 'team', label: 'Team pilot' },
  { id: 'security', label: 'Security question' },
] as const;

type Intent = (typeof intents)[number]['id'];

function isIntent(value: string | null): value is Intent {
  return intents.some((intent) => intent.id === value);
}

export function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const intentSelect = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('intent');
    if (isIntent(requested) && intentSelect.current) intentSelect.current.value = requested;
  }, []);
  function copyAddress() {
    void navigator.clipboard?.writeText(supportEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => {
      const entry = data.get(key);
      return typeof entry === 'string' ? entry : '';
    };
    const intentLabel = intents.find((item) => item.id === value('intent'))?.label ?? 'Contact';
    const subject = encodeURIComponent(`Taksim: ${intentLabel}${value('company') ? ` (${value('company')})` : ''}`);
    const body = encodeURIComponent(
      `Request: ${intentLabel}\nWork email: ${value('email')}\nCompany: ${value('company')}\nTeam size: ${value('team')}\nMonthly AI spend: ${value('spend')}\nCoding-agent tools: ${value('tools')}\nPrivate/local intelligence: ${value('private')}\n\nWhat we want to improve:\n${value('goal')}`,
    );
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        What do you need?
        <select name="intent" required defaultValue="" ref={intentSelect}>
          <option value="" disabled>
            Select a request
          </option>
          {intents.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className="form-grid">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Company (optional)
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Engineering team size
          <select name="team" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>1</option>
            <option>2–4</option>
            <option>5–10</option>
            <option>11–50</option>
            <option>50+</option>
          </select>
        </label>
        <label>
          Approximate monthly AI spend
          <select name="spend" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>&lt; $500</option>
            <option>$500–2k</option>
            <option>$2–10k</option>
            <option>$10k+</option>
            <option>Prefer not to say</option>
          </select>
        </label>
      </div>
      <label>
        Primary coding-agent tools
        <input
          name="tools"
          placeholder="Claude Code, Codex, Copilot…"
          required
        />
      </label>
      <label>
        Private or local intelligence available?
        <select name="private" defaultValue="Not sure">
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </label>
      <label>
        What are you trying to improve?
        <textarea
          name="goal"
          rows={5}
          placeholder="Spend visibility, policy, quality evidence, private capacity…"
        />
      </label>
      <label className="check-label">
        <input type="checkbox" required />{' '}
        <span>
          I agree that EdgeeTech may use these details to respond to this
          request. See the <Link href={localePath(locale, '/privacy')}>Privacy notice</Link>.
        </span>
      </label>
      <button className="button purple-button" type="submit">
        Send by email
      </button>
      <p className="form-note" aria-live="polite">
        {sent
          ? 'Your email application has opened with the details. If nothing opened, copy the address below and send them yourself.'
          : 'This opens your email application with the details filled in; it does not send form data to a third-party form service.'}
      </p>
      <p className="form-note">
        No mail client? Write to <code>{supportEmail}</code>{' '}
        <button className="button button-small button-secondary" type="button" onClick={copyAddress}>
          {copied ? 'Copied' : 'Copy address'}
        </button>
      </p>
    </form>
  );
}
