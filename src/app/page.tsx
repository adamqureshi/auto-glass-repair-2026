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
  name: 'Auto Glass Repair Quotes',
  provider: {
    '@type': 'AutoRepair',
    name: siteConfig.name,
    telephone: siteConfig.phoneDisplay
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
            <h1>Fast Auto Glass Repair Quotes.</h1>
            <p className="hero-lede">
              Get help with windshield repair, auto glass replacement, side glass, back glass, and ADAS calibration.
              Start your quote online and Impex Auto Glass will help you with the next step.
            </p>
            <div className="hero-actions">
              <Link href="#quote" className="button button-yellow">
                Get a Quote
              </Link>
              {siteConfig.phoneHref ? (
                <a href={siteConfig.phoneHref} className="button button-outline">
                  Call {siteConfig.phoneDisplay}
                </a>
              ) : (
                <Link href="/services" className="button button-outline">
                  View Services
                </Link>
              )}
            </div>
            <div className="trust-row" aria-label="Service highlights">
              <span>Windshield Repair</span>
              <span>Glass Replacement</span>
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
            <span className="eyebrow">How it works</span>
            <h2>Tell us what happened to your glass.</h2>
            <p>
              A chip, crack, shattered window, or camera calibration need can interrupt your day. The quote form keeps
              the first step simple so Impex can help you move forward.
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
          <h2>Choose the auto glass service you need.</h2>
          <p>Start with the service that best matches your damage, then enter your vehicle and ZIP code.</p>
        </div>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <section className="section-pad">
        <div className="container section-heading">
          <span className="eyebrow">Service Areas</span>
          <h2>Auto glass repair help near you.</h2>
          <p>Start a quote for one of the main service areas below.</p>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <section className="section-pad content-slot-section">
        <div className="container content-slot">
          <span className="eyebrow">Why Impex Auto Glass</span>
          <h2>Clear quote. Clear next step.</h2>
          <p>
            Impex Auto Glass helps drivers with windshield repair, full replacement, side glass, back glass, and ADAS
            calibration. Start online, share the details, and the team will help confirm what your vehicle needs.
          </p>
        </div>
      </section>
    </>
  );
}
