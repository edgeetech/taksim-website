import Link from 'next/link';
export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>That page is not here.</h1>
          <p>
            The address may have changed. Continue with the product overview or
            technical documentation.
          </p>
          <div className="button-row">
            <Link className="button" href="/">
              Go home
            </Link>
            <Link className="button button-secondary" href="/docs">
              Read the docs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
