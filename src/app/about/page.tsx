import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Impex Auto Glass and the auto glass repair quote process.'
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">About Us</span>
            <h1>Impex Auto Glass helps customers move from damaged glass to a clear next step.</h1>
            <p>
              This page is ready for your company story, team information, shop details, service standards, and proof
              that helps customers trust the quote process.
            </p>
            <div className="hero-actions">
              <Link href="/#quote" className="button button-yellow">
                Get a Quote
              </Link>
              <Link href="/our-auto-glass-shop" className="button button-outline">
                Our Auto Glass Shop
              </Link>
            </div>
          </div>
          <div className="image-card">
            <Image
              src={siteConfig.heroImage}
              alt="Impex Auto Glass service vehicle"
              width={900}
              height={820}
              className="shop-image"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container copy-grid">
          <article className="copy-card large-copy">
            <span className="eyebrow">Content slot</span>
            <h2>Add the Impex Auto Glass story here.</h2>
            <p>
              Add founder background, years in business, certifications, service standards, safety practices, warranty
              details, insurance support, and any differentiators that should appear across the site.
            </p>
          </article>
          <article className="copy-card">
            <h3>Trust proof</h3>
            <p>Use this block for reviews, badges, partner logos, photos, or before-and-after examples.</p>
          </article>
          <article className="copy-card">
            <h3>Service promise</h3>
            <p>Add response time, service-area expectations, and what happens after a lead is submitted.</p>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
