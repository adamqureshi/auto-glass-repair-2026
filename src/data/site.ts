export const siteConfig = {
  name: 'Impex Auto Glass',
  shortName: 'Impex',
  repoName: 'auto-glass-repair',
  primaryKeyword: 'Auto Glass Repair',
  description:
    'Request a fast auto glass repair estimate from Impex Auto Glass. Repair, replacement, side glass, back glass, and ADAS calibration support across priority NC and SC service areas.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://auto-glass-repair.vercel.app',
  logo: '/logo-impex-auto-glass.jpg',
  heroImage: '/mobile-glass-shop.jpg',
  ctaLabel: 'Get a Quote',
  leadCta: 'Impex Auto Glass Repair',
  serviceAreaSummary: 'North Carolina and South Carolina',
  phoneDisplay: '',
  phoneHref: '',
  email: '',
  address: '',
  hours: ''
};

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' }
];

export const conversionPoints = [
  'Tell us the glass problem and ZIP first.',
  'Add your contact details so the shop can follow up.',
  'The lead is sent server-side into the POS workflow when API keys are active.'
];
