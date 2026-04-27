import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero section-pad thank-you-page">
      <div className="container narrow-copy">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The page you requested does not exist yet.</p>
        <Link href="/" className="button button-yellow">
          Go home
        </Link>
      </div>
    </section>
  );
}
