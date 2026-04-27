import type { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/CTA';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Auto Glass Shop',
  description: 'Shop information placeholder for Impex Auto Glass.'
};

export default function OurAutoGlassShopPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Our Auto Glass Shop</span>
            <h1>Shop content space for photos, process, and customer proof.</h1>
            <p>
              Use this page for in-shop service information, mobile glass shop details, team photos, service bays,
              calibration equipment, and customer trust content.
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
            <span className="eyebrow">Content slot</span>
            <h2>Add your shop details here.</h2>
            <p>
              Add the shop address, photos, hours, waiting area notes, calibration setup, mobile unit description, and
              anything that helps customers feel confident before requesting a quote.
            </p>
          </article>
          <article className="copy-card">
            <h3>Photos to add</h3>
            <p>Exterior, shop bays, mobile van, calibration area, technician action shots, and finished work.</p>
          </article>
          <article className="copy-card">
            <h3>Details to add</h3>
            <p>Hours, service radius, warranty, insurance claim help, and preferred customer contact process.</p>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
