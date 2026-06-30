import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Impex Auto Glass and start an auto glass repair or replacement quote.'
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">About Us</span>
            <h1>Auto glass help when your vehicle glass is damaged.</h1>
            <p>
              Impex Auto Glass helps drivers move from chipped, cracked, or broken glass to a clear repair or replacement
              next step.
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
            <span className="eyebrow">Impex Auto Glass</span>
            <h2>Repair, replacement, and calibration support.</h2>
            <p>
              From windshield chips and cracks to full glass replacement and ADAS calibration needs, Impex Auto Glass
              helps customers get the information needed for the right quote.
            </p>
          </article>
          <article className="copy-card">
            <h3>What we help with</h3>
            <p>Windshield repair, auto glass replacement, side glass, back glass, and ADAS calibration.</p>
          </article>
          <article className="copy-card">
            <h3>Start online</h3>
            <p>Use the quote form to share your vehicle, ZIP code, damaged glass, and contact details.</p>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
