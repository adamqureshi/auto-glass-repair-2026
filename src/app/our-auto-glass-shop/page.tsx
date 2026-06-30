import type { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/CTA';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Auto Glass Shop',
  description: 'Learn about Impex Auto Glass shop and mobile glass service support.'
};

export default function OurAutoGlassShopPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Our Auto Glass Shop</span>
            <h1>Shop and mobile glass service support.</h1>
            <p>
              Impex Auto Glass helps drivers with auto glass repair, replacement, and calibration needs from the first
              quote request through the next step.
            </p>
          </div>
          <div className="image-card small-image-card">
            <Image
              src={siteConfig.heroImage}
              alt="Impex Auto Glass mobile shop"
              width={760}
              height={690}
              className="shop-image"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container copy-grid">
          <article className="copy-card large-copy">
            <span className="eyebrow">Auto Glass Service</span>
            <h2>Get help with damaged vehicle glass.</h2>
            <p>
              Whether your windshield has a chip, a window is broken, or your vehicle needs calibration after glass work,
              start a quote and share the details Impex Auto Glass needs to help.
            </p>
          </article>
          <article className="copy-card">
            <h3>Mobile service</h3>
            <p>Start a quote with your ZIP code so the team can help confirm service options for your area.</p>
          </article>
          <article className="copy-card">
            <h3>Vehicle details</h3>
            <p>Your vehicle year, make, model, and damaged glass location help the team review the right next step.</p>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
