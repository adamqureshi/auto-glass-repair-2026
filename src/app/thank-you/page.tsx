import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quote Request Received',
  description: 'Your Impex Auto Glass quote request was received.'
};

export default function ThankYouPage() {
  return (
    <section className="page-hero section-pad thank-you-page">
      <div className="container narrow-copy">
        <span className="eyebrow">Request received</span>
        <h1>Thanks. Your quote request was sent.</h1>
        <p>
          The Impex Auto Glass team will follow up using the contact details provided. Add phone number, hours, and what
          to expect next here when you have final business copy.
        </p>
        <div className="hero-actions">
          <Link href="/" className="button button-yellow">
            Back home
          </Link>
          <Link href="/services" className="button button-outline">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
