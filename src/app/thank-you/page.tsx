import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

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
        <p>Impex Auto Glass will use your contact details to help with your quote and next steps.</p>
        <div className="hero-actions">
          <Link href="/" className="button button-yellow">
            Back home
          </Link>
          {siteConfig.phoneHref ? (
            <a href={siteConfig.phoneHref} className="button button-outline">
              Call {siteConfig.phoneDisplay}
            </a>
          ) : (
            <Link href="/services" className="button button-outline">
              View services
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
