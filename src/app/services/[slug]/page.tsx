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
    description: `${service.summary} Start a quote with Impex Auto Glass.`,
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
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay
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
            <span className="eyebrow">Start Here</span>
            <h2>Get the right help for your vehicle glass.</h2>
            <p>
              Vehicle glass can look simple from the outside, but the right repair or replacement depends on the damage,
              the vehicle, and the glass location. Use the quote form to share the details so Impex Auto Glass can help
              confirm the next step.
            </p>
          </article>
          <article className="copy-card">
            <h3>What to have ready</h3>
            <p>Your ZIP code, vehicle year, make, model, damaged glass location, name, phone, and email.</p>
          </article>
          <article className="copy-card">
            <h3>Need help now?</h3>
            <p>Start your quote online or call Impex Auto Glass if you are unsure which service to choose.</p>
          </article>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading">
          <span className="eyebrow">Service Areas</span>
          <h2>{service.name} near you.</h2>
          <p>Choose your nearest service area and start a quote.</p>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <CTA heading={`Need ${service.name.toLowerCase()}?`} />
    </>
  );
}
