export const siteConfig = {
  name: 'Impex Auto Glass',
  shortName: 'Impex',
  repoName: 'auto-glass-repair-2026',
  primaryKeyword: 'Auto Glass Repair',
  description:
    'Get an auto glass repair or replacement quote from Impex Auto Glass. Windshield repair, windshield replacement, side glass, back glass, and ADAS calibration support.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://auto-glass-repair-2026.vercel.app',
  logo: '/logo-impex-auto-glass.jpg',
  heroImage: '/mobile-glass-shop.jpg',
  ctaLabel: 'Get a Quote',
  leadCta: 'Impex Auto Glass Repair',
  serviceAreaSummary: 'North Carolina and South Carolina',
  phoneDisplay: '(888) 477-0888',
  phoneHref: 'tel:+18884770888',
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
  'Choose the glass service you need.',
  'Enter your vehicle, ZIP code, and contact information.',
  'Impex Auto Glass follows up with your quote and next steps.'
];
