'use client';

import Link from 'next/link';
import { type SyntheticEvent, useEffect, useRef, useState } from 'react';
import { localePath, type Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n';

const supportEmail = 'info@edgee.tech';

const intents = ['pro', 'team', 'security'] as const;

type Intent = (typeof intents)[number];
export type ContactCopy = Dictionary['contact']['form'];

function isIntent(value: string | null): value is Intent {
  return intents.some((intent) => intent === value);
}

export function ContactForm({ locale, copy }: { locale: Locale; copy: ContactCopy }) {
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
    const requested = value('intent');
    const intentLabel = isIntent(requested) ? copy.intents[requested] : copy.mail.fallback;
    const { mail } = copy;
    const subject = encodeURIComponent(`Taksim: ${intentLabel}${value('company') ? ` (${value('company')})` : ''}`);
    const body = encodeURIComponent(
      `${mail.request}: ${intentLabel}\n${mail.email}: ${value('email')}\n${mail.company}: ${value('company')}\n${mail.teamSize}: ${value('team')}\n${mail.spend}: ${value('spend')}\n${mail.tools}: ${value('tools')}\n${mail.private}: ${value('private')}\n\n${mail.goal}:\n${value('goal')}`,
    );
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        {copy.need}
        <select name="intent" required defaultValue="" ref={intentSelect}>
          <option value="" disabled>
            {copy.selectRequest}
          </option>
          {intents.map((id) => (
            <option key={id} value={id}>
              {copy.intents[id]}
            </option>
          ))}
        </select>
      </label>
      <div className="form-grid">
        <label>
          {copy.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          {copy.company}
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          {copy.teamSize}
          <select name="team" required defaultValue="">
            <option value="" disabled>
              {copy.selectRange}
            </option>
            <option>1</option>
            <option>2–4</option>
            <option>5–10</option>
            <option>11–50</option>
            <option>50+</option>
          </select>
        </label>
        <label>
          {copy.spend}
          <select name="spend" required defaultValue="">
            <option value="" disabled>
              {copy.selectRange}
            </option>
            <option>&lt; $500</option>
            <option>$500–2k</option>
            <option>$2–10k</option>
            <option>$10k+</option>
            <option>{copy.spendNone}</option>
          </select>
        </label>
      </div>
      <label>
        {copy.tools}
        <input
          name="tools"
          placeholder={copy.toolsPlaceholder}
          required
        />
      </label>
      <label>
        {copy.private}
        <select name="private" defaultValue={copy.unsure}>
          <option>{copy.yes}</option>
          <option>{copy.no}</option>
          <option>{copy.unsure}</option>
        </select>
      </label>
      <label>
        {copy.goal}
        <textarea
          name="goal"
          rows={5}
          placeholder={copy.goalPlaceholder}
        />
      </label>
      <label className="check-label">
        <input type="checkbox" required />{' '}
        <span>
          {copy.agreeBefore}
          <Link href={localePath(locale, '/privacy')}>{copy.agreeLink}</Link>
          {copy.agreeAfter}
        </span>
      </label>
      <button className="button purple-button" type="submit">
        {copy.submit}
      </button>
      <p className="form-note" aria-live="polite">
        {sent ? copy.noteSent : copy.noteIdle}
      </p>
      <p className="form-note">
        {copy.noMail} <code>{supportEmail}</code>{' '}
        <button className="button button-small button-secondary" type="button" onClick={copyAddress}>
          {copied ? copy.copied : copy.copy}
        </button>
      </p>
    </form>
  );
}
