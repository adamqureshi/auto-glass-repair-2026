import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Impex Auto Glass or request an auto glass repair quote.'
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h1>Request an auto glass repair quote and let the shop follow up.</h1>
            <p>
              Use the instant quote tool to keep the customer inside the Omega workflow Impex already uses. Add direct phone,
              address, hours, and team contact details below when you have them.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container copy-grid">
          <article className="copy-card">
            <span className="eyebrow">Content slot</span>
            <h2>Phone</h2>
            <p>Add the business phone number here.</p>
          </article>
          <article className="copy-card">
            <span className="eyebrow">Content slot</span>
            <h2>Address</h2>
            <p>Add shop address and service area details here.</p>
          </article>
          <article className="copy-card">
            <span className="eyebrow">Content slot</span>
            <h2>Hours</h2>
            <p>Add hours and same-day/next-day follow-up expectations here.</p>
          </article>
        </div>
      </section>
    </>
  );
}
