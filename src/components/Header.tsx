import Image from 'next/image';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/data/site';

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Impex Auto Glass home">
          <Image
            src={siteConfig.logo}
            alt="Impex Auto Glass"
            width={220}
            height={68}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {siteConfig.phoneHref ? (
            <a href={siteConfig.phoneHref} className="header-phone">
              {siteConfig.phoneDisplay}
            </a>
          ) : null}
          <Link href="/#quote" className="header-cta">
            {siteConfig.ctaLabel}
          </Link>
        </div>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <div className="mobile-menu-panel">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            {siteConfig.phoneHref ? <a href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a> : null}
            <Link href="/#quote" className="mobile-cta">
              {siteConfig.ctaLabel}
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
