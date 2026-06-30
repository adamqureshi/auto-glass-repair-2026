import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Impex Auto Glass or start an auto glass repair quote.'
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h1>Start your auto glass quote.</h1>
            <p>
              Use the quote form to send your vehicle glass details to Impex Auto Glass. You can also call for help if
              you are unsure which service you need.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container copy-grid">
          <article className="copy-card">
            <span className="eyebrow">Call</span>
            <h2>{siteConfig.phoneDisplay || 'Call Impex Auto Glass'}</h2>
            <p>
              {siteConfig.phoneHref ? (
                <a className="text-link inline-link" href={siteConfig.phoneHref}>
                  Call Impex Auto Glass now
                </a>
              ) : (
                'Call Impex Auto Glass for quote help.'
              )}
            </p>
          </article>
          <article className="copy-card">
            <span className="eyebrow">Quote</span>
            <h2>Online quote form</h2>
            <p>Enter your vehicle, damaged glass, ZIP code, name, phone, and email to get started.</p>
          </article>
          <article className="copy-card">
            <span className="eyebrow">Service</span>
            <h2>Repair or replacement</h2>
            <p>Impex Auto Glass can help with windshield repair, replacement, side glass, back glass, and calibration.</p>
          </article>
        </div>
      </section>
    </>
  );
}
