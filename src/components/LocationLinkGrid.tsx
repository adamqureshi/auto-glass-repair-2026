import Link from 'next/link';
import { mainLocations } from '@/data/locations';

export function LocationLinkGrid() {
  return (
    <div className="location-grid">
      {mainLocations.map((location) => (
        <Link className="location-card" key={location.slug} href={`/locations/${location.slug}`}>
          <span>Auto Glass Repair</span>
          <strong>
            {location.city}, {location.state}
          </strong>
        </Link>
      ))}
    </div>
  );
}
