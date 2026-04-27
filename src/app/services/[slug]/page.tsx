import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/CTA';
import { JsonLd } from '@/components/JsonLd';
import { LeadForm } from '@/components/LeadForm';
import { LocationLinkGrid } from '@/components/LocationLinkGrid';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} Quote`,
    description: `${service.summary} Request a quote from Impex Auto Glass.`,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.keyword,
    provider: {
      '@type': 'AutoRepair',
      name: siteConfig.name
    },
    url: `${siteConfig.siteUrl}/services/${service.slug}`
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">{service.keyword}</span>
            <h1>{service.name}</h1>
            <p>{service.summary}</p>
            <ul className="check-list">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <LeadForm defaultService={service.name} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container copy-grid">
          <article className="copy-card large-copy">
            <span className="eyebrow">Content slot</span>
            <h2>Add detailed {service.name.toLowerCase()} content here.</h2>
            <p>
              This placeholder is ready for specific process copy, warranty language, insurance wording, FAQs, pricing
              factors, and real photos. Keep the first two paragraphs focused on the customer problem and the quote
              action.
            </p>
          </article>
          <article className="copy-card">
            <h3>Fast quote details to collect</h3>
            <p>Service needed, ZIP, contact details, vehicle year, make, model, and a short note about the damage.</p>
          </article>
          <article className="copy-card">
            <h3>SEO focus</h3>
            <p>
              Use this page to support the core keyword and link to local pages where customers search by city and state.
            </p>
          </article>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading">
          <span className="eyebrow">Location pages</span>
          <h2>{service.name} near the main service areas.</h2>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <CTA heading={`Need ${service.name.toLowerCase()}?`} />
    </>
  );
}
