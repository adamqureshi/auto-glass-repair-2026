import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function CTA({ heading = 'Ready for an auto glass repair estimate?' }: { heading?: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">{siteConfig.leadCta}</span>
          <h2 id="cta-heading">{heading}</h2>
          <p>Start with the service you need and your ZIP. Impex Auto Glass will follow up with the quote details.</p>
        </div>
        <Link href="/#quote" className="button button-yellow">
          {siteConfig.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
