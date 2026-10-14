export type City = {
  name: string;
  slug: string;
  county: string;
  nearby: string[];
  intro: string;
  details: string;
  notes: [string, string, string];
};

export const cities: City[] = [
  {
    name: 'Farmington Hills',
    slug: 'farmington-hills',
    county: 'Oakland County',
    nearby: ['west-bloomfield', 'novi', 'livonia', 'southfield'],
    intro:
      'Farmington Hills families often need senior care that stays close to children and grandchildren in Oakland County. We help you compare assisted living, memory care, and home care options along the 12 Mile, Orchard Lake, and Grand River corridors.',
    details:
      'This is one of Metro Detroit’s larger suburbs, so availability, pricing, and care levels can vary widely from one community to the next. A local advisor can narrow the list to places that fit your loved one’s routine, budget, and medical needs—then coordinate tours so you are not starting from scratch.',
    notes: [
      'Strong mix of assisted living and memory care near major roads and medical offices',
      'Good option when adult children live in Farmington, West Bloomfield, or Novi',
      'We verify pricing, waitlists, and what daily care actually includes',
    ],
  },
  {
    name: 'Northville',
    slug: 'northville',
    county: 'Wayne and Oakland counties',
    nearby: ['plymouth', 'novi', 'livonia', 'canton'],
    intro:
      'Northville families often want senior living that still feels like a small downtown community. We look at assisted living, memory care, and in-home support in Northville and nearby Plymouth and Novi.',
    details:
      'Many people searching here want a quieter setting, easy visits from family, and communities that are not far from downtown Northville. We compare care levels, social programs, and costs so you can tour a short list instead of driving all over western Wayne County.',
    notes: [
      'Fits families who want a smaller-town feel with Metro Detroit access',
      'Nearby Plymouth and Novi add more assisted living and memory care choices',
      'We help match budget, mobility needs, and how often family can visit',
    ],
  },
  {
    name: 'Plymouth',
    slug: 'plymouth',
    county: 'Wayne County',
    nearby: ['northville', 'canton', 'livonia', 'ann-arbor'],
    intro:
      'Plymouth is a common starting point for families who want senior care close to Kellogg Park, local churches, and relatives in western Wayne County. We compare assisted living, memory care, and home care in Plymouth and the surrounding townships.',
    details:
      'Some families want to stay in Plymouth itself; others are open to Northville, Canton, or Livonia if the care, price, or availability is a better fit. We explain those tradeoffs clearly and set up tours around your schedule.',
    notes: [
      'Walkable downtown makes it easier for spouses and adult children to visit',
      'Solid nearby options if Plymouth communities are full or above budget',
      'We review memory care security, staffing, and daily structure when needed',
    ],
  },
  {
    name: 'Livonia',
    slug: 'livonia',
    county: 'Wayne County',
    nearby: ['farmington-hills', 'plymouth', 'canton', 'novi'],
    intro:
      'Livonia is one of the most searched cities in Wayne County for assisted living and home care. We help families compare communities near I-96, I-275, and major medical corridors so the next step is local and realistic.',
    details:
      'Because Livonia is large, two buildings a few miles apart can feel very different in price, staffing, and activities. We shortlist places that match your loved one’s care needs, then go with you to ask the questions that are easy to miss on a first tour.',
    notes: [
      'Wide range of assisted living, independent living, and home care options',
      'Convenient for families commuting from Farmington Hills, Plymouth, or Dearborn',
      'We check availability quickly so you are not calling communities one by one',
    ],
  },
  {
    name: 'West Bloomfield',
    slug: 'west-bloomfield',
    county: 'Oakland County',
    nearby: ['bloomfield-hills', 'bloomfield-township', 'farmington-hills', 'novi'],
    intro:
      'West Bloomfield families often look for senior care that balances privacy, cultural fit, and higher levels of support. We compare assisted living, memory care, and home care around the lakes and throughout western Oakland County.',
    details:
      'People searching here may want a quieter residential setting, kosher or culturally familiar dining, or a community close to family in Farmington Hills and Bloomfield. We help you compare those details—not just the brochure amenities—before you tour.',
    notes: [
      'Many families want a close match on culture, language, and daily routine',
      'Memory care demand can be high; we check waitlists and respite options',
      'Nearby Bloomfield Hills, Bloomfield Township, Farmington Hills, and Novi expand the list when timing is tight',
    ],
  },
  {
    name: 'Bloomfield Hills',
    slug: 'bloomfield-hills',
    county: 'Oakland County',
    nearby: ['bloomfield-township', 'west-bloomfield', 'troy', 'royal-oak'],
    intro:
      'Bloomfield Hills families often want senior care that stays close to home, Woodward, and relatives in Birmingham, Troy, and West Bloomfield. We compare assisted living, memory care, and home care in Bloomfield Hills and the surrounding Oakland County communities.',
    details:
      'This is a smaller city, so the right fit may be in Bloomfield Hills itself or a few minutes away in Bloomfield Township, Birmingham, or Troy. We help you compare care level, privacy, and monthly cost before you tour, so you are not starting with a long, unmatched list.',
    notes: [
      'A strong match when family wants to stay near Cranbrook, Woodward, and local churches',
      'Bloomfield Township, West Bloomfield, and Troy add more assisted living and memory care options nearby',
      'We check waitlists and what daily care actually includes before you visit',
    ],
  },
  {
    name: 'Bloomfield Township',
    slug: 'bloomfield-township',
    county: 'Oakland County',
    nearby: ['bloomfield-hills', 'west-bloomfield', 'troy', 'farmington-hills'],
    intro:
      'Bloomfield Township families often search for senior care that stays in Oakland County, close to Telegraph, Square Lake, and nearby Bloomfield Hills. We help you compare assisted living, memory care, and home care in Bloomfield Township and the communities around it.',
    details:
      'Township searches can mix Bloomfield Hills, West Bloomfield, Birmingham, and Troy results. We sort that out with a short conversation about needs, budget, and how far family can travel, then set up tours only at places that can actually take your loved one.',
    notes: [
      'Useful when you want to stay close to Bloomfield Hills without limiting yourself to one city',
      'West Bloomfield and Troy are close if memory care availability is tight locally',
      'We compare in-home support and community living so a move happens only if it is the right next step',
    ],
  },
  {
    name: 'Novi',
    slug: 'novi',
    county: 'Oakland County',
    nearby: ['northville', 'farmington-hills', 'west-bloomfield', 'livonia'],
    intro:
      'Novi is a frequent search for families who want newer senior living communities with easy access to I-96, 12 Oaks, and nearby Northville. We help you compare assisted living, memory care, and home care in Novi and western Oakland County.',
    details:
      'Newer buildings can look similar online. The differences show up in staffing, memory care design, move-in specials, and what is actually included in the monthly fee. We gather that information for you and tour only the communities that fit.',
    notes: [
      'Popular with families who want a newer community and easy highway access',
      'Northville, Farmington Hills, and Livonia add extra choices nearby',
      'We compare all-in pricing so monthly costs are not a surprise later',
    ],
  },
  {
    name: 'Ann Arbor',
    slug: 'ann-arbor',
    county: 'Washtenaw County',
    nearby: ['plymouth', 'canton', 'northville', 'livonia'],
    intro:
      'Ann Arbor families often need senior care that stays close to University of Michigan hospitals, adult children in town, or a long-time Washtenaw County home. We compare assisted living, memory care, and home care in Ann Arbor and nearby communities.',
    details:
      'Medical access, walkability, and continuum-of-care campuses matter more here than in many suburbs. We help you weigh Ann Arbor options against nearby Plymouth, Saline, or Ypsilanti when price, availability, or the right memory care program is a better match.',
    notes: [
      'Helpful when hospital follow-up and specialist visits are part of daily life',
      'Independent living through memory care can be compared on one short list',
      'We coordinate tours around family schedules in Ann Arbor and Metro Detroit',
    ],
  },
  {
    name: 'Troy',
    slug: 'troy',
    county: 'Oakland County',
    nearby: ['bloomfield-hills', 'royal-oak', 'rochester-hills', 'southfield'],
    intro:
      'Troy is a hub for Oakland County families searching for assisted living and memory care close to work, Big Beaver, and nearby Royal Oak or Rochester Hills. We compare local communities and home care so you can stay close without guessing.',
    details:
      'Troy has a wide spread of buildings, from smaller residences to larger campuses. We look at care level, transportation, and how easy it is for family to visit after work, then set up a focused set of tours.',
    notes: [
      'Convenient for families living or working along the I-75 corridor',
      'Nearby Royal Oak, Rochester Hills, and Sterling Heights add more options',
      'We help you compare memory care programs, not just location and photos',
    ],
  },
  {
    name: 'Sterling Heights',
    slug: 'sterling-heights',
    county: 'Macomb County',
    nearby: ['troy', 'rochester-hills', 'royal-oak', 'southfield'],
    intro:
      'Sterling Heights is one of Macomb County’s largest cities, and families here often want senior care that stays affordable and close to relatives. We compare assisted living, memory care, and home care throughout Sterling Heights and nearby Troy and Utica.',
    details:
      'Search results can mix very different care levels and price points. We sort that out with a short conversation about needs and budget, then show you communities that actually have availability.',
    notes: [
      'Often a fit for families who want Macomb County to remain home',
      'Good range of mid-priced assisted living and home care options',
      'We confirm what care is included before you tour or put down a deposit',
    ],
  },
  {
    name: 'Rochester Hills',
    slug: 'rochester-hills',
    county: 'Oakland County',
    nearby: ['troy', 'sterling-heights', 'royal-oak', 'farmington-hills'],
    intro:
      'Rochester Hills families often look for senior living close to downtown Rochester, local parks, and adult children in northern Oakland County. We help compare assisted living, memory care, and home care in Rochester Hills and nearby Rochester.',
    details:
      'Some people want a quieter residential campus; others need stronger memory care or easier access to specialists in Troy. We map those needs to real openings so you are not touring communities that cannot take your loved one.',
    notes: [
      'Popular when family wants to stay near Rochester’s downtown and churches',
      'Memory care and higher-acuity support can be compared alongside assisted living',
      'Troy and Sterling Heights are close if timing or budget requires a wider search',
    ],
  },
  {
    name: 'Canton',
    slug: 'canton',
    county: 'Wayne County',
    nearby: ['plymouth', 'livonia', 'ann-arbor', 'northville'],
    intro:
      'Canton Township families often search for senior care that stays west of Detroit, close to Ford Road, I-275, and relatives in Plymouth or Westland. We compare assisted living, memory care, and home care in Canton and nearby communities.',
    details:
      'Canton has grown quickly, and options range from in-home help to full assisted living. We help you decide whether staying in Canton, moving toward Plymouth, or looking in Livonia is the better fit for care, cost, and family visits.',
    notes: [
      'Convenient for multi-generation families in western Wayne County',
      'Home care can be a first step when a full move feels too soon',
      'We check availability in Canton, Plymouth, and Livonia at the same time',
    ],
  },
  {
    name: 'Southfield',
    slug: 'southfield',
    county: 'Oakland County',
    nearby: ['farmington-hills', 'royal-oak', 'troy', 'west-bloomfield'],
    intro:
      'Southfield is a practical search for families who want senior care near Telegraph, 10 Mile, and the I-696 corridor. We compare assisted living, memory care, and home care in Southfield and neighboring Oakland County cities.',
    details:
      'Southfield’s mix of established communities and nearby medical offices makes it a strong option when adult children commute from Detroit, Farmington Hills, or Royal Oak. We help you compare buildings on care, staffing, and true monthly cost—not just location.',
    notes: [
      'Central for families coming from Detroit, Oak Park, or western Oakland County',
      'Useful when you need faster placement and multiple communities in a short drive',
      'We review memory care security and daily programming when that is the priority',
    ],
  },
  {
    name: 'Royal Oak',
    slug: 'royal-oak',
    county: 'Oakland County',
    nearby: ['troy', 'southfield', 'rochester-hills', 'farmington-hills'],
    intro:
      'Royal Oak families often want senior care close to downtown, Beaumont, and adult children who already live in the city. We compare assisted living, memory care, and home care in Royal Oak and nearby Troy and Southfield.',
    details:
      'Space is tighter here than in many suburbs, so the right fit may be a smaller residence in Royal Oak or a campus a few minutes north in Troy. We help you weigh walkability, medical access, and care level before you spend a weekend touring.',
    notes: [
      'Good when frequent visits from family in downtown Royal Oak matter most',
      'Nearby Troy and Southfield add more assisted living and memory care inventory',
      'We help you ask about staffing, activities, and what happens if care needs increase',
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function cityPath(slug: string): string {
  return `/areas/${slug}`;
}

export function cityTitle(city: City): string {
  return `Senior Care in ${city.name}, MI`;
}

export function cityDescription(city: City): string {
  return `Free local help finding assisted living, memory care, and home care in ${city.name}, Michigan. Homeward Senior Placement compares options in ${city.county} at no cost to families.`;
}
