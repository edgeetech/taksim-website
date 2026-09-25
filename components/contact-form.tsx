'use client';

import Link from 'next/link';
import { type SyntheticEvent, useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => {
      const entry = data.get(key);
      return typeof entry === 'string' ? entry : '';
    };
    const subject = encodeURIComponent(
      `Taksim assessment — ${value('company') || 'team'}`,
    );
    const body = encodeURIComponent(
      `Work email: ${value('email')}\nCompany: ${value('company')}\nTeam size: ${value('team')}\nMonthly AI spend: ${value('spend')}\nCoding-agent tools: ${value('tools')}\nPrivate/local intelligence: ${value('private')}\n\nWhat we want to improve:\n${value('goal')}`,
    );
    window.location.href = `mailto:info@edgee.tech?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Engineering team size
          <select name="team" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>500+</option>
          </select>
        </label>
        <label>
          Approximate monthly AI spend
          <select name="spend" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>&lt; $10k</option>
            <option>$10k–25k</option>
            <option>$25k–50k</option>
            <option>$50k–100k</option>
            <option>$100k+</option>
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
          request. See the <Link href="/privacy">Privacy notice</Link>.
        </span>
      </label>
      <button className="button purple-button" type="submit">
        Request a Taksim assessment
      </button>
      <p className="form-note" aria-live="polite">
        {sent
          ? 'Your email application has opened with the assessment details.'
          : 'This preview securely opens your email application; it does not send form data to a third-party form service.'}
      </p>
    </form>
  );
}
