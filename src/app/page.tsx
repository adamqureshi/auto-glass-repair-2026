import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { LocationLinkGrid } from '@/components/LocationLinkGrid';
import { ServiceGrid } from '@/components/ServiceGrid';
import { JsonLd } from '@/components/JsonLd';
import { conversionPoints, siteConfig } from '@/data/site';
import { mainLocations } from '@/data/locations';

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Glass Repair Quote Requests',
  provider: {
    '@type': 'AutoRepair',
    name: siteConfig.name
  },
  serviceType: 'Auto Glass Repair',
  areaServed: mainLocations.map((location) => `${location.city}, ${location.state}`),
  url: siteConfig.siteUrl
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{siteConfig.leadCta}</span>
            <h1>Auto Glass Repair estimates built for speed.</h1>
            <p className="hero-lede">
              Need a windshield, side glass, back glass, or ADAS calibration quote? Choose the service, enter your ZIP,
              and send your request to Impex Auto Glass for follow-up.
            </p>
            <div className="hero-actions">
              <Link href="#quote" className="button button-yellow">
                Get a Quote
              </Link>
              <Link href="/services" className="button button-outline">
                View Services
              </Link>
            </div>
            <div className="trust-row" aria-label="Service highlights">
              <span>Repair</span>
              <span>Replacement</span>
              <span>ADAS Calibration</span>
            </div>
          </div>

          <div className="hero-form-card">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section-pad section-split">
        <div className="container split-grid">
          <div className="image-card">
            <Image
              src={siteConfig.heroImage}
              alt="Impex Auto Glass mobile glass shop vehicle"
              width={900}
              height={820}
              className="shop-image"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="split-copy">
            <span className="eyebrow">Lead flow</span>
            <h2>Make the quote path obvious.</h2>
            <p>
              The page removes distractions and asks for the details the shop needs first: what glass service the
              customer needs, where they are located, and how to reach them.
            </p>
            <div className="steps-list">
              {conversionPoints.map((point, index) => (
                <div className="step-card" key={point}>
                  <span>{index + 1}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg" id="services">
        <div className="container section-heading">
          <span className="eyebrow">Services</span>
          <h2>Auto glass services customers can request.</h2>
          <p>Keep the choices clear so the lead can move fast and the shop can follow up with the right estimate.</p>
        </div>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <section className="section-pad">
        <div className="container section-heading">
          <span className="eyebrow">Main city targets</span>
          <h2>Location SEO pages for auto glass repair.</h2>
          <p>
            Start with the priority cities, then expand the local content library as you add photos, FAQs, reviews, and
            service-area proof.
          </p>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <section className="section-pad content-slot-section">
        <div className="container content-slot">
          <span className="eyebrow">Content slot</span>
          <h2>Add your best proof here.</h2>
          <p>
            Use this area for real shop photos, insurance details, warranty language, review snippets, mobile service
            notes, or brand-specific ADAS calibration details once you have the content.
          </p>
        </div>
      </section>
    </>
  );
}
