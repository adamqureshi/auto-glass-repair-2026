import Link from 'next/link';
import { services } from '@/data/services';

export function ServiceGrid() {
  return (
    <div className="card-grid services-grid">
      {services.map((service) => (
        <article className="service-card" key={service.slug}>
          <span className="card-kicker">{service.shortName}</span>
          <h3>{service.name}</h3>
          <p>{service.summary}</p>
          <Link href={`/services/${service.slug}`} className="text-link">
            View service
          </Link>
        </article>
      ))}
    </div>
  );
}
