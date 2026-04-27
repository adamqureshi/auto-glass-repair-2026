export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  details: string[];
  keyword: string;
};

export const services: Service[] = [
  {
    slug: 'auto-glass-repair',
    name: 'Auto Glass Repair',
    shortName: 'Repair',
    keyword: 'Auto Glass Repair',
    summary:
      'For chips, cracks, and damaged vehicle glass where a repair may be the fastest option.',
    details: [
      'Capture the damage type and ZIP quickly.',
      'Route the lead to the shop for estimate follow-up.',
      'Use this page as the primary SEO target for the head keyword.'
    ]
  },
  {
    slug: 'auto-glass-replacement',
    name: 'Auto Glass Replacement',
    shortName: 'Replacement',
    keyword: 'Auto Glass Replacement',
    summary:
      'For windshields or other auto glass that need replacement instead of repair.',
    details: [
      'Helpful when damage is severe or in a critical driver-view area.',
      'Add OEM/aftermarket, insurance, and warranty content when available.',
      'Works with the same fast quote form.'
    ]
  },
  {
    slug: 'side-glass-replacement',
    name: 'Side Glass Replacement',
    shortName: 'Side Glass',
    keyword: 'Side Glass Replacement',
    summary:
      'For broken door glass, quarter glass, and side windows that need replacement.',
    details: [
      'Useful for vandalism, break-ins, and accident damage leads.',
      'Add cleanup and mobile service copy later if offered.',
      'Collects vehicle details so the shop can identify the right glass.'
    ]
  },
  {
    slug: 'back-auto-glass-replacement',
    name: 'Back Auto Glass Replacement',
    shortName: 'Back Glass',
    keyword: 'Back Auto Glass Replacement',
    summary:
      'For rear window and back glass replacement quote requests.',
    details: [
      'Designed for customers who need rear glass help fast.',
      'Add defroster, antenna, and hatchback/SUV details as content later.',
      'Pairs with ZIP decode to confirm service area.'
    ]
  },
  {
    slug: 'adas-forward-facing-camera-calibration',
    name: 'ADAS Forward-Facing Camera Calibration',
    shortName: 'Forward Camera Calibration',
    keyword: 'ADAS Forward-Facing Camera Calibration',
    summary:
      'For vehicles that need camera calibration after windshield replacement or glass service.',
    details: [
      'Targets vehicles with forward-facing cameras and safety systems.',
      'Add make/model requirements and calibration process details later.',
      'Lets the customer identify calibration needs during quote intake.'
    ]
  },
  {
    slug: 'adas-calibration',
    name: 'ADAS Calibration',
    shortName: 'ADAS Calibration',
    keyword: 'ADAS Calibration',
    summary:
      'For driver-assistance system calibration quote requests tied to auto glass work.',
    details: [
      'Useful for lane assist, adaptive cruise, and other camera-based systems.',
      'Add dynamic/static calibration details once confirmed.',
      'Supports conversion from replacement pages where calibration may be required.'
    ]
  }
];

export const primaryService = services[0];
