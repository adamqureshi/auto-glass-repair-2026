import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function CTA({ heading = 'Need an auto glass quote?' }: { heading?: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">{siteConfig.leadCta}</span>
          <h2 id="cta-heading">{heading}</h2>
          <p>Start your quote online or call Impex Auto Glass for help with your damaged vehicle glass.</p>
        </div>
        <div className="cta-actions">
          <Link href="/#quote" className="button button-yellow">
            {siteConfig.ctaLabel}
          </Link>
          {siteConfig.phoneHref ? (
            <a href={siteConfig.phoneHref} className="button button-outline">
              Call {siteConfig.phoneDisplay}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
