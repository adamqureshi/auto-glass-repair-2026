import type { Metadata } from 'next';
import { LocationLinkGrid } from '@/components/LocationLinkGrid';
import { CTA } from '@/components/CTA';
import { futureServiceAreas, mainLocations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Auto Glass Repair Locations',
  description: 'Main Impex Auto Glass location SEO pages and future NC / SC service area targets.'
};

export default function LocationsPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container narrow-copy">
          <span className="eyebrow">Locations</span>
          <h1>Auto Glass Repair location pages.</h1>
          <p>
            Start with the main city targets below. The expansion list is included so you can build more local pages as
            you add unique local proof, photos, FAQs, and service-area details.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container section-heading align-left">
          <span className="eyebrow">Live main pages</span>
          <h2>Priority city pages in the footer.</h2>
          <p>{mainLocations.length} main pages are ready for local auto glass repair targeting.</p>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading align-left">
          <span className="eyebrow">Expansion list</span>
          <h2>Future NC and SC local pages.</h2>
          <p>
            These are intentionally shown as text until you build unique local pages. Avoid launching dozens of thin pages
            without local proof.
          </p>
        </div>
        <div className="container city-cloud" aria-label="Future service area targets">
          {futureServiceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
