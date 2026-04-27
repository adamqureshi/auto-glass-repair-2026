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
    description: `Request an auto glass repair quote in ${location.city}, ${location.state}. Impex Auto Glass handles repair, replacement, side glass, back glass, and ADAS calibration quote requests.`,
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
      name: siteConfig.name
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
            <span className="eyebrow">{location.city}, {location.state}</span>
            <h1>{location.headline}</h1>
            <p>{location.intro}</p>
            <div className="local-proof-row">
              <span>Fast ZIP intake</span>
              <span>Repair + replacement</span>
              <span>ADAS calibration</span>
            </div>
          </div>
          <LeadForm locationHint={`${location.city}, ${location.state}`} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container copy-grid">
          <article className="copy-card large-copy">
            <span className="eyebrow">Local SEO content slot</span>
            <h2>Build out unique {location.city} auto glass repair content here.</h2>
            <p>
              Add local photos, landmarks served, neighborhood notes, common vehicle glass issues, reviews from nearby
              customers, and clear proof that Impex Auto Glass serves {location.city}. Keep the form and quote CTA close
              to the top.
            </p>
          </article>
          <article className="copy-card">
            <h3>Nearby areas</h3>
            <p>{location.nearby?.join(', ') || 'Add nearby city and neighborhood targets here.'}</p>
          </article>
          <article className="copy-card">
            <h3>Customer next step</h3>
            <p>Choose the repair need, enter the ZIP, then share name, email, and phone so the shop can follow up.</p>
          </article>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading align-left">
          <span className="eyebrow">Services in {location.city}</span>
          <h2>Quote requests this page can capture.</h2>
        </div>
        <div className="container card-grid services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <span className="card-kicker">{location.city}</span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="text-link">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container local-faq">
          <span className="eyebrow">FAQ content slots</span>
          <h2>Questions to answer for {location.city} customers.</h2>
          <details>
            <summary>Can Impex Auto Glass help with auto glass repair in {location.city}?</summary>
            <p>Add the confirmed service area details and response expectations here.</p>
          </details>
          <details>
            <summary>What information should customers send for a quote?</summary>
            <p>Service type, ZIP, name, phone, email, vehicle year, make, model, and damage notes.</p>
          </details>
          <details>
            <summary>Does ADAS calibration matter after windshield replacement?</summary>
            <p>Add your approved ADAS calibration explanation and safety language here.</p>
          </details>
        </div>
      </section>

      <CTA heading={`Need auto glass repair in ${location.city}?`} />
    </>
  );
}
