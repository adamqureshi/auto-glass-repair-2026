export type ZipInfo = {
  zip: string;
  city: string;
  state: string;
  stateCode: string;
};

const LOCAL_ZIP_LOOKUP: Record<string, ZipInfo> = {
  '27401': { zip: '27401', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27403': { zip: '27403', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27405': { zip: '27405', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27406': { zip: '27406', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27407': { zip: '27407', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27408': { zip: '27408', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27409': { zip: '27409', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27410': { zip: '27410', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27455': { zip: '27455', city: 'Greensboro', state: 'North Carolina', stateCode: 'NC' },
  '27358': { zip: '27358', city: 'Summerfield', state: 'North Carolina', stateCode: 'NC' },
  '28801': { zip: '28801', city: 'Asheville', state: 'North Carolina', stateCode: 'NC' },
  '28803': { zip: '28803', city: 'Asheville', state: 'North Carolina', stateCode: 'NC' },
  '28804': { zip: '28804', city: 'Asheville', state: 'North Carolina', stateCode: 'NC' },
  '28805': { zip: '28805', city: 'Asheville', state: 'North Carolina', stateCode: 'NC' },
  '28806': { zip: '28806', city: 'Asheville', state: 'North Carolina', stateCode: 'NC' },
  '28739': { zip: '28739', city: 'Hendersonville', state: 'North Carolina', stateCode: 'NC' },
  '28791': { zip: '28791', city: 'Hendersonville', state: 'North Carolina', stateCode: 'NC' },
  '28792': { zip: '28792', city: 'Hendersonville', state: 'North Carolina', stateCode: 'NC' },
  '28202': { zip: '28202', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28203': { zip: '28203', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28204': { zip: '28204', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28205': { zip: '28205', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28206': { zip: '28206', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28207': { zip: '28207', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28208': { zip: '28208', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28209': { zip: '28209', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28210': { zip: '28210', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28211': { zip: '28211', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28212': { zip: '28212', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28213': { zip: '28213', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28214': { zip: '28214', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28215': { zip: '28215', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28216': { zip: '28216', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28217': { zip: '28217', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28226': { zip: '28226', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28227': { zip: '28227', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28262': { zip: '28262', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28269': { zip: '28269', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28270': { zip: '28270', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28273': { zip: '28273', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28277': { zip: '28277', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '28278': { zip: '28278', city: 'Charlotte', state: 'North Carolina', stateCode: 'NC' },
  '27601': { zip: '27601', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27603': { zip: '27603', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27604': { zip: '27604', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27605': { zip: '27605', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27606': { zip: '27606', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27607': { zip: '27607', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27608': { zip: '27608', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27609': { zip: '27609', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27610': { zip: '27610', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27612': { zip: '27612', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27613': { zip: '27613', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27614': { zip: '27614', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27615': { zip: '27615', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27616': { zip: '27616', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' },
  '27617': { zip: '27617', city: 'Raleigh', state: 'North Carolina', stateCode: 'NC' }
};

type ZippopotamResponse = {
  'post code': string;
  places?: Array<{
    'place name': string;
    state: string;
    'state abbreviation': string;
  }>;
};

export async function resolveZipInfo(zip: string): Promise<ZipInfo | null> {
  const normalized = zip.replace(/[^0-9]/g, '').slice(0, 5);

  if (normalized.length !== 5) {
    return null;
  }

  if (LOCAL_ZIP_LOOKUP[normalized]) {
    return LOCAL_ZIP_LOOKUP[normalized];
  }

  try {
    const response = await fetch(`https://api.zippopotam.us/us/${normalized}`, {
      next: { revalidate: 60 * 60 * 24 * 30 }
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as ZippopotamResponse;
    const firstPlace = data.places?.[0];

    if (!firstPlace) {
      return null;
    }

    return {
      zip: normalized,
      city: firstPlace['place name'],
      state: firstPlace.state,
      stateCode: firstPlace['state abbreviation']
    };
  } catch {
    return null;
  }
}
