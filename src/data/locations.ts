export type LocationPage = {
  city: string;
  state: 'NC' | 'SC';
  slug: string;
  headline: string;
  intro: string;
  nearby?: string[];
};

export const mainLocations: LocationPage[] = [
  {
    city: 'Greensboro',
    state: 'NC',
    slug: 'greensboro-nc',
    headline: 'Auto Glass Repair in Greensboro, NC',
    intro:
      'Get a fast auto glass repair quote in Greensboro for windshield repair, replacement, side glass, back glass, or ADAS calibration.',
    nearby: ['High Point', 'Burlington', 'Kernersville', 'Summerfield']
  },
  {
    city: 'Asheville',
    state: 'NC',
    slug: 'asheville-nc',
    headline: 'Auto Glass Repair in Asheville, NC',
    intro:
      'Request an auto glass repair quote in Asheville and let Impex Auto Glass help with the right next step.',
    nearby: ['Hendersonville', 'Boone', 'Hickory']
  },
  {
    city: 'Summerfield',
    state: 'NC',
    slug: 'summerfield-nc',
    headline: 'Auto Glass Repair in Summerfield, NC',
    intro:
      'Start a simple quote request for auto glass repair, replacement, or calibration service in Summerfield.',
    nearby: ['Greensboro', 'Kernersville', 'High Point']
  },
  {
    city: 'Hendersonville',
    state: 'NC',
    slug: 'hendersonville-nc',
    headline: 'Auto Glass Repair in Hendersonville, NC',
    intro:
      'Get help with auto glass repair, replacement, back glass, side glass, and calibration quotes in Hendersonville.',
    nearby: ['Asheville', 'Boone', 'Hickory']
  },
  {
    city: 'Charlotte',
    state: 'NC',
    slug: 'charlotte-nc',
    headline: 'Auto Glass Repair in Charlotte, NC',
    intro:
      'Charlotte drivers can start a fast quote for windshield repair, replacement, side glass, back glass, and calibration.',
    nearby: ['Concord', 'Gastonia', 'Huntersville', 'Matthews']
  },
  {
    city: 'Raleigh',
    state: 'NC',
    slug: 'raleigh-nc',
    headline: 'Auto Glass Repair in Raleigh, NC',
    intro:
      'Raleigh drivers can start an auto glass repair quote and share the vehicle details needed for the right estimate.',
    nearby: ['Cary', 'Durham', 'Apex', 'Wake Forest']
  }
];

export const additionalServiceAreas = [
  'Charlotte, NC',
  'Raleigh, NC',
  'Greensboro, NC',
  'Durham, NC',
  'Winston-Salem, NC',
  'Fayetteville, NC',
  'Cary, NC',
  'Wilmington, NC',
  'High Point, NC',
  'Concord, NC',
  'Asheville, NC',
  'Gastonia, NC',
  'Jacksonville, NC',
  'Chapel Hill, NC',
  'Rocky Mount, NC',
  'Burlington, NC',
  'Wilson, NC',
  'Huntersville, NC',
  'Kannapolis, NC',
  'Apex, NC',
  'Hickory, NC',
  'Goldsboro, NC',
  'Indian Trail, NC',
  'Mooresville, NC',
  'Monroe, NC',
  'Salisbury, NC',
  'Holly Springs, NC',
  'Matthews, NC',
  'Garner, NC',
  'Cornelius, NC',
  'Sanford, NC',
  'Fuquay-Varina, NC',
  'Statesville, NC',
  'Clayton, NC',
  'Kernersville, NC',
  'Mint Hill, NC',
  'Morrisville, NC',
  'Shelby, NC',
  'Carrboro, NC',
  'Lumberton, NC',
  'Kinston, NC',
  'Clemmons, NC',
  'Elizabeth City, NC',
  'Lexington, NC',
  'Boone, NC',
  'Wake Forest, NC',
  'New Bern, NC',
  'Morehead City, NC',
  'Thomasville, NC',
  'Leland, NC',
  'Charleston, SC',
  'Columbia, SC',
  'North Charleston, SC',
  'Mount Pleasant, SC',
  'Rock Hill, SC',
  'Greenville, SC',
  'Summerville, SC',
  'Goose Creek, SC',
  'Sumter, SC',
  'Hilton Head Island, SC',
  'Florence, SC',
  'Spartanburg, SC',
  'Myrtle Beach, SC',
  'Anderson, SC',
  'Greer, SC',
  'Greenwood, SC',
  'Mauldin, SC',
  'Easley, SC',
  'Simpsonville, SC',
  'Aiken, SC',
  'Lexington, SC',
  'Conway, SC',
  'Hanahan, SC',
  'North Augusta, SC',
  'Clemson, SC',
  'Orangeburg, SC',
  'Beaufort, SC',
  'Gaffney, SC',
  'Irmo, SC',
  'Fort Mill, SC',
  'York, SC',
  'Cayce, SC',
  'West Columbia, SC',
  'Port Royal, SC',
  'Travelers Rest, SC',
  'Darlington, SC',
  'Hartsville, SC',
  'Walterboro, SC',
  'Newberry, SC',
  'Laurens, SC',
  'Seneca, SC',
  'Clinton, SC',
  'Cheraw, SC',
  'Bennettsville, SC',
  'Union, SC',
  'Batesburg-Leesville, SC',
  'Georgetown, SC',
  'Camden, SC',
  'Pickens, SC',
  'Loris, SC'
];

export function getLocationBySlug(slug: string) {
  return mainLocations.find((location) => location.slug === slug);
}
