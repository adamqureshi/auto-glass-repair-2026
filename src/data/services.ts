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
      'For chips, cracks, and damaged vehicle glass that may be repairable before the damage spreads.',
    details: [
      'Tell us where the glass is damaged.',
      'Share your vehicle details and ZIP code.',
      'Impex Auto Glass will confirm the best repair option.'
    ]
  },
  {
    slug: 'auto-glass-replacement',
    name: 'Auto Glass Replacement',
    shortName: 'Replacement',
    keyword: 'Auto Glass Replacement',
    summary:
      'For windshields and other vehicle glass that need to be replaced for safety, visibility, or security.',
    details: [
      'Start a quote for damaged or broken auto glass.',
      'Include the vehicle year, make, model, and ZIP code.',
      'The Impex team will help confirm the right replacement.'
    ]
  },
  {
    slug: 'side-glass-replacement',
    name: 'Side Glass Replacement',
    shortName: 'Side Glass',
    keyword: 'Side Glass Replacement',
    summary:
      'For broken door glass, quarter glass, and side windows after break-ins, accidents, or storm damage.',
    details: [
      'Choose driver side or passenger side in the quote form.',
      'Share your vehicle information so the correct glass can be checked.',
      'Get help restoring security and keeping the weather out.'
    ]
  },
  {
    slug: 'back-auto-glass-replacement',
    name: 'Back Auto Glass Replacement',
    shortName: 'Back Glass',
    keyword: 'Back Auto Glass Replacement',
    summary:
      'For rear window and back glass replacement on cars, trucks, SUVs, and vans.',
    details: [
      'Request help for shattered or cracked rear glass.',
      'Include your ZIP code and vehicle details.',
      'Impex can help with the right replacement glass and next steps.'
    ]
  },
  {
    slug: 'adas-forward-facing-camera-calibration',
    name: 'ADAS Forward-Facing Camera Calibration',
    shortName: 'Forward Camera Calibration',
    keyword: 'ADAS Forward-Facing Camera Calibration',
    summary:
      'For vehicles with forward-facing cameras that may need calibration after windshield replacement.',
    details: [
      'Tell us if your vehicle has lane assist, collision warning, or camera-based safety features.',
      'Start a quote so calibration needs can be reviewed with the glass service.',
      'Impex will help confirm the right calibration path for your vehicle.'
    ]
  },
  {
    slug: 'adas-calibration',
    name: 'ADAS Calibration',
    shortName: 'ADAS Calibration',
    keyword: 'ADAS Calibration',
    summary:
      'For advanced driver-assistance system calibration connected to windshield and auto glass work.',
    details: [
      'Request calibration support after windshield replacement.',
      'Share your vehicle information and safety-system details.',
      'Impex will help confirm whether calibration is needed.'
    ]
  }
];

export const primaryService = services[0];
