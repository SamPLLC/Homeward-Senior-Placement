import { cities, type City } from '@/lib/cities';

export type County = {
  name: string;
  slug: string;
  intro: string;
  details: string;
  notes: [string, string, string];
  hospitals: string;
  citySlugs: string[];
};

export const counties: County[] = [
  {
    name: 'Oakland County',
    slug: 'oakland-county',
    intro:
      'Oakland County is the center of most Southeast Michigan senior-living searches we see—Farmington Hills, Novi, Troy, Royal Oak, Bloomfield, Rochester Hills, and the lakes townships west of Pontiac. Families here usually want a short drive for visits and a clear comparison of assisted living versus memory care.',
    details:
      'The county is not one market. Woodward-adjacent cities such as Royal Oak and Birmingham behave differently from I-96 communities like Novi and Wixom, and the lakes townships (West Bloomfield, Commerce, White Lake, Waterford) are different again. We help you compare communities by care, cost, and which side of the county your family can actually visit after work.',
    notes: [
      'The largest concentration of assisted living and memory care we work with in Metro Detroit',
      'Beaumont (Corewell Health) Royal Oak, Troy, and Farmington Hills sit inside this county',
      'If one city is full, neighboring Oakland cities are usually a realistic next look—not a different region',
    ],
    hospitals:
      'Beaumont (Corewell Health) Royal Oak, Troy, and Farmington Hills; Henry Ford West Bloomfield; Ascension Providence Novi; Trinity Health Oakland in Pontiac',
    citySlugs: [
      'farmington-hills',
      'west-bloomfield',
      'bloomfield-hills',
      'bloomfield-township',
      'novi',
      'troy',
      'rochester-hills',
      'rochester',
      'southfield',
      'royal-oak',
      'birmingham',
      'auburn-hills',
      'waterford',
      'commerce-township',
      'white-lake',
      'walled-lake',
      'wixom',
      'south-lyon',
      'milford',
      'madison-heights',
      'ferndale',
      'berkley',
      'oak-park',
      'pontiac',
      'northville',
    ],
  },
  {
    name: 'Wayne County',
    slug: 'wayne-county',
    intro:
      'Wayne County senior-living searches usually start in Livonia, Plymouth, Canton, Northville, Westland, Dearborn, or Dearborn Heights. Families want to stay west of Detroit or in Dearborn, keep doctors they already use, and understand the real monthly cost before they tour.',
    details:
      'Western Wayne (Plymouth, Northville, Livonia, Canton) and downriver-adjacent Dearborn are not interchangeable. Medical access at Trinity Health Livonia and Corewell Health Dearborn, plus visit patterns along I-96, I-275, and Michigan Avenue, change which communities make sense. We compare assisted living, memory care, and licensed adult foster care across those sub-markets so you are not mixing unrelated listings.',
    notes: [
      'Strong inventory of assisted living, memory care, and smaller licensed homes',
      'Trinity Health Livonia and Corewell Health Dearborn are common discharge starting points',
      'Canton, Westland, and Garden City often help when Plymouth or Northville pricing is too high',
    ],
    hospitals: 'Trinity Health Livonia, Corewell Health Dearborn, and nearby Trinity Health Ann Arbor',
    citySlugs: [
      'livonia',
      'plymouth',
      'northville',
      'canton',
      'westland',
      'garden-city',
      'dearborn',
      'dearborn-heights',
    ],
  },
  {
    name: 'Macomb County',
    slug: 'macomb-county',
    intro:
      'Macomb County families often search for senior care that stays on the east side—Sterling Heights, Warren, Clinton Township, Utica, and Shelby Township. Cost, Hall Road access, and remaining close to adult children who already live in Macomb are the usual drivers.',
    details:
      'Macomb has a wide spread of prices and building types, from newer Hall Road campuses in Shelby Township to more affordable licensed homes in Warren. Henry Ford Macomb discharges create time-sensitive searches in Clinton Township. We sort those options by care level first so a lower rate is not missing memory support or medication management.',
    notes: [
      'A practical county when staying east of I-75 is important for family visits',
      'Henry Ford Macomb in Clinton Township is a frequent hospital-to-community starting point',
      'Utica, Shelby Township, and Sterling Heights hold much of the newer assisted living inventory',
    ],
    hospitals: 'Henry Ford Macomb in Clinton Township and Ascension Macomb-Oakland in Warren',
    citySlugs: ['sterling-heights', 'warren', 'utica', 'shelby-township', 'clinton-township'],
  },
  {
    name: 'Washtenaw County',
    slug: 'washtenaw-county',
    intro:
      'Washtenaw County searches are usually about Ann Arbor, Ypsilanti, and Saline—and about staying close to Michigan Medicine or Trinity Health Ann Arbor. Families here often weigh medical access against monthly cost more than families in the outer suburbs.',
    details:
      'Ann Arbor campuses can cost more than Ypsilanti or Saline. That is sometimes worth it for specialist follow-up, and sometimes it is not. We compare assisted living, memory care, and residential care across the county, then look toward Plymouth or Canton if Wayne County inventory is a better fit for budget or visit patterns.',
    notes: [
      'Medical access at Michigan Medicine and Trinity Health Ann Arbor shapes many decisions',
      'Ypsilanti and Saline can offer a lower monthly cost than central Ann Arbor',
      'Plymouth and Canton are close if the right opening is on the Wayne County side of I-275',
    ],
    hospitals: 'Michigan Medicine and Trinity Health Ann Arbor',
    citySlugs: ['ann-arbor', 'ypsilanti', 'saline'],
  },
  {
    name: 'Livingston County',
    slug: 'livingston-county',
    intro:
      'Livingston County families typically want senior care in Brighton or Howell so they can stay in the county rather than moving into Novi or Ann Arbor. Downtown visits, I-96 access, and Trinity Health Livingston are the usual anchors.',
    details:
      'Livingston has fewer campuses than Oakland County, which means we often compare Brighton and Howell against South Lyon, Milford, or Ann Arbor when a specific memory care program or faster opening is needed. We are direct about drive time for adult children who still work in Oakland or Wayne County.',
    notes: [
      'The right county when the family is rooted in Brighton or Howell, not Metro Detroit',
      'Trinity Health Livingston is the local hospital most discharge plans start from',
      'South Lyon, Milford, and Ann Arbor are the usual overflow markets if local care is not the right level',
    ],
    hospitals: 'Trinity Health Livingston in Howell and St. Joseph Mercy Brighton',
    citySlugs: ['brighton', 'howell'],
  },
];

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((county) => county.slug === slug);
}

export function countyPath(slug: string): string {
  return `/counties/${slug}`;
}

export function countyCities(county: County): City[] {
  return county.citySlugs
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city): city is City => Boolean(city));
}

export function countyTitle(county: County): string {
  return `Senior Care in ${county.name}, MI`;
}

export function countyDescription(county: County): string {
  return `Free help finding assisted living, memory care, and residential care in ${county.name}. Homeward Senior Placement compares communities across the county at no cost to families.`;
}
