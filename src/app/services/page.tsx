import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { ServiceGrid } from '@/components/ServiceGrid';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Auto Glass Repair Services',
  description:
    'Impex Auto Glass quote request pages for auto glass repair, replacement, side glass, back glass, and ADAS calibration.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Services</span>
            <h1>Auto glass repair, replacement, and calibration quote requests.</h1>
            <p>
              The service pages are built to keep customers moving toward the quote form while giving search engines a
              clean structure for each service topic.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading">
          <span className="eyebrow">Service menu</span>
          <h2>Choose the service page to edit or expand.</h2>
          <p>Add exact process, pricing factors, warranty details, and real photos when you have them.</p>
        </div>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
