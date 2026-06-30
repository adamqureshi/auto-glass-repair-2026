import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { ServiceGrid } from '@/components/ServiceGrid';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Auto Glass Repair Services',
  description:
    'Impex Auto Glass services include auto glass repair, windshield replacement, side glass, back glass, and ADAS calibration.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Services</span>
            <h1>Auto glass repair, replacement, and calibration.</h1>
            <p>
              Choose the service that matches your vehicle glass damage and start a quote with Impex Auto Glass.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading">
          <span className="eyebrow">Service Menu</span>
          <h2>What do you need help with?</h2>
          <p>From small chips to full replacement and calibration, start with the service below.</p>
        </div>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
