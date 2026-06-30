import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/CTA';
import { JsonLd } from '@/components/JsonLd';
import { LeadForm } from '@/components/LeadForm';
import { services } from '@/data/services';
import { getLocationBySlug, mainLocations } from '@/data/locations';
import { siteConfig } from '@/data/site';

export function generateStaticParams() {
  return mainLocations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {};
  }

  return {
    title: `Auto Glass Repair in ${location.city}, ${location.state}`,
    description: `Start an auto glass repair quote in ${location.city}, ${location.state}. Impex Auto Glass helps with repair, replacement, side glass, back glass, and ADAS calibration.`,
    alternates: {
      canonical: `/locations/${location.slug}`
    }
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Auto Glass Repair in ${location.city}, ${location.state}`,
    serviceType: 'Auto Glass Repair',
    provider: {
      '@type': 'AutoRepair',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay
    },
    areaServed: `${location.city}, ${location.state}`,
    url: `${siteConfig.siteUrl}/locations/${location.slug}`
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero section-pad compact-hero local-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              {location.city}, {location.state}
            </span>
            <h1>{location.headline}</h1>
            <p>{location.intro}</p>
            <div className="local-proof-row">
              <span>Windshield Repair</span>
              <span>Glass Replacement</span>
              <span>ADAS Calibration</span>
            </div>
          </div>
          <LeadForm locationHint={`${location.city}, ${location.state}`} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container copy-grid">
          <article className="copy-card large-copy">
            <span className="eyebrow">Local Help</span>
            <h2>Need auto glass repair in {location.city}?</h2>
            <p>
              Start with your damaged glass location, vehicle details, and ZIP code. Impex Auto Glass can help with
              repair, replacement, side glass, back glass, and calibration needs in the {location.city} area.
            </p>
          </article>
          <article className="copy-card">
            <h3>Nearby areas</h3>
            <p>{location.nearby?.join(', ') || 'Start a quote and enter your ZIP code to confirm your area.'}</p>
          </article>
          <article className="copy-card">
            <h3>What happens next?</h3>
            <p>After you submit your quote request, Impex Auto Glass will help confirm the repair or replacement details.</p>
          </article>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading align-left">
          <span className="eyebrow">Services in {location.city}</span>
          <h2>Choose the service that matches your damage.</h2>
          <p>Each service page explains what to send so Impex can help with your quote.</p>
        </div>
        <div className="container card-grid services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <span className="card-kicker">{location.city}</span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="text-link">
                View service
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container local-faq">
          <span className="eyebrow">Questions</span>
          <h2>Auto glass repair questions in {location.city}.</h2>
          <details>
            <summary>Can I start an auto glass quote online?</summary>
            <p>Yes. Use the quote form to enter your vehicle, damaged glass, ZIP code, and contact details.</p>
          </details>
          <details>
            <summary>What information should I have ready?</summary>
            <p>Have your vehicle year, make, model, damaged glass location, ZIP code, name, phone, and email ready.</p>
          </details>
          <details>
            <summary>Does windshield replacement require ADAS calibration?</summary>
            <p>
              Some vehicles have cameras or safety systems connected to the windshield. Impex Auto Glass can help confirm
              whether calibration needs to be reviewed for your vehicle.
            </p>
          </details>
        </div>
      </section>

      <CTA heading={`Need auto glass repair in ${location.city}?`} />
    </>
  );
}
