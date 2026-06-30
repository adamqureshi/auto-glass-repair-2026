import Image from 'next/image';
import Link from 'next/link';
import { mainLocations } from '@/data/locations';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src={siteConfig.logo} alt="Impex Auto Glass" width={220} height={68} className="footer-logo" />
          <p>
            Auto glass repair, replacement, side glass, back glass, and ADAS calibration quotes from Impex Auto Glass.
          </p>
          <Link href="/#quote" className="footer-cta">
            {siteConfig.leadCta} — {siteConfig.ctaLabel}
          </Link>
          {siteConfig.phoneHref ? (
            <a href={siteConfig.phoneHref} className="footer-phone">
              Call {siteConfig.phoneDisplay}
            </a>
          ) : null}
        </div>

        <div>
          <h2>Services</h2>
          <ul className="footer-list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Locations</h2>
          <ul className="footer-list">
            {mainLocations.map((location) => (
              <li key={location.slug}>
                <Link href={`/locations/${location.slug}`}>
                  {location.city}, {location.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Company</h2>
          <ul className="footer-list">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/our-auto-glass-shop">Our Auto Glass Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/locations">Service Areas</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Impex Auto Glass.</span>
        <span>Auto glass quotes made simple.</span>
      </div>
    </footer>
  );
}
