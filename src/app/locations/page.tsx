import type { Metadata } from 'next';
import { LocationLinkGrid } from '@/components/LocationLinkGrid';
import { CTA } from '@/components/CTA';
import { additionalServiceAreas, mainLocations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Auto Glass Repair Locations',
  description: 'Impex Auto Glass service areas for auto glass repair, replacement, and calibration quotes.'
};

export default function LocationsPage() {
  return (
    <>
      <section className="page-hero section-pad compact-hero">
        <div className="container narrow-copy">
          <span className="eyebrow">Locations</span>
          <h1>Auto Glass Repair Service Areas.</h1>
          <p>
            Start an auto glass quote for your area. Impex Auto Glass helps drivers with repair, replacement, back glass,
            side glass, and ADAS calibration needs.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container section-heading align-left">
          <span className="eyebrow">Main Areas</span>
          <h2>Choose your nearest service area.</h2>
          <p>These are the main areas for starting an Impex Auto Glass quote online.</p>
        </div>
        <div className="container">
          <LocationLinkGrid />
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="container section-heading align-left">
          <span className="eyebrow">More Areas</span>
          <h2>Additional North Carolina and South Carolina areas.</h2>
          <p>Do not see your city listed above? Start a quote and enter your ZIP code.</p>
        </div>
        <div className="container city-cloud" aria-label="Additional service areas">
          {additionalServiceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
