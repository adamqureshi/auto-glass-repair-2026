export const siteConfig = {
  name: 'Impex Auto Glass',
  shortName: 'Impex',
  repoName: 'auto-glass-repair',
  primaryKeyword: 'Auto Glass Repair',
  description:
    'Start an instant auto glass repair quote with Impex Auto Glass. Repair, replacement, side glass, back glass, and ADAS calibration support across priority NC and SC service areas.',
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
  'Open the instant Impex quote tool from any service or city page.',
  'Enter vehicle, ZIP, glass service, and contact details in the current Omega workflow.',
  'Impex receives the quote request in the system the team already uses every day.'
];
