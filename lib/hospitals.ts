export type Hospital = {
  name: string;
  slug: string;
  shortName: string;
  city: string;
  system: string;
  intro: string;
  details: string;
  discharge: string;
  paperwork: string;
  nearby: string;
  notes: [string, string, string];
  nearbyCitySlugs: string[];
  relatedGuideSlugs: string[];
};

export const hospitals: Hospital[] = [
  {
    name: 'Corewell Health William Beaumont University Hospital',
    slug: 'corewell-beaumont-royal-oak',
    shortName: 'Beaumont Royal Oak',
    city: 'Royal Oak',
    system: 'Corewell Health',
    intro:
      'A discharge from Beaumont Royal Oak can turn a senior-living decision into a few days of work. Families in Royal Oak, Troy, Birmingham, and Madison Heights often hear that a parent cannot go home safely, then get a list of buildings that may not have openings or may not match the care level.',
    details:
      'This campus sits on Woodward in the middle of dense Oakland County inventory. That is useful and overwhelming at the same time. Royal Oak and Troy have more assisted living and memory care within a short drive than most Metro Detroit hospitals, which means the risk is touring too many unrelated communities before the discharge date. We start with care needs, visit patterns, and which buildings can actually admit—then keep the list short.',
    discharge:
      'Case managers at Beaumont Royal Oak are working a medical timeline: skilled days, therapy progress, and a safe next setting. Medicare may cover a short rehab stay. It does not pay for ongoing assisted living. If rehab is ending this week, the next place has to accept the real picture—mobility, memory, wounds, oxygen, and behavior—not the picture from six months ago. Going home with a patchwork of daytime help is a common path back to the ER after a fall.',
    paperwork:
      'Communities that can admit quickly still need a medication list, recent notes on mobility and cognition, and a sense of who is paying. If those pieces arrive the afternoon of discharge, you will hear “we’ll see.” We help families gather that information in parallel with rehab so Royal Oak, Troy, and Birmingham options can say yes or no while you still have time to look at a second choice.',
    nearby:
      'Families who visit after work usually want to stay near Woodward: Royal Oak, Troy, Birmingham, Berkley, Madison Heights, or Bloomfield Township. A cheaper opening 45 minutes north only helps if someone can actually get there on a weeknight. We treat drive time as part of the care plan.',
    notes: [
      'Built for families leaving Beaumont Royal Oak or a nearby Corewell rehab this week',
      'Royal Oak, Troy, and Birmingham usually form the first short list when visits need to stay local',
      'We check openings and admission rules before you spend a day driving between buildings',
    ],
    nearbyCitySlugs: ['royal-oak', 'troy', 'birmingham', 'madison-heights', 'berkley', 'bloomfield-township'],
    relatedGuideSlugs: [
      'hospital-discharge-to-assisted-living',
      'after-a-fall-next-48-hours',
      'how-long-does-senior-placement-take',
    ],
  },
  {
    name: 'Trinity Health Livonia',
    slug: 'trinity-health-livonia',
    shortName: 'Trinity Health Livonia',
    city: 'Livonia',
    system: 'Trinity Health',
    intro:
      'Trinity Health Livonia (St. Mary Mercy) is one of the most common discharge starting points we see in western Wayne County. Families in Livonia, Plymouth, Farmington Hills, Northville, and Canton often have only a few days to find assisted living, memory care, or a licensed residential care home that can take their loved one.',
    details:
      'I-96 and I-275 make Livonia a midpoint: adult children may live in Farmington Hills while the parent still lives in Plymouth or Canton. That split is why a “nearby” list from the hospital can include buildings the family cannot visit after work. We map the next setting to where people actually live, then compare what Trinity Health Livonia’s discharge notes say the person needs each day.',
    discharge:
      'Livonia discharges often follow a fall, infection, or a rehab stay that is ending. The hospital’s job is a safe next location, not a six-month senior-living plan. If memory changes, overnight needs, or two-person transfers are already in the record, starting in standard assisted living can mean another move. We read the care picture first so you are not signing a lease that the community cannot support.',
    paperwork:
      'Trinity Health Livonia social work will ask for a receiving facility. Communities want medications, weight-bearing status, cognition, and a payer. Western Wayne has a mix of larger campuses and licensed adult foster care homes; the paperwork is similar, the staffing is not. We help you send one clear packet instead of calling ten buildings with incomplete information.',
    nearby:
      'Livonia, Plymouth, Northville, Canton, and Farmington Hills cover most visits from this hospital. Ann Arbor is close if Michigan Medicine specialists are the long-term driver. We only widen the search when a specific memory care program or a faster opening is missing locally.',
    notes: [
      'A frequent starting point after a stay at Trinity Health Livonia or nearby rehab',
      'Livonia, Plymouth, Northville, and Canton are the usual first cities when family is in western Wayne',
      'We match the discharge care level to a setting that can take someone on the needed date',
    ],
    nearbyCitySlugs: ['livonia', 'plymouth', 'farmington-hills', 'northville', 'canton'],
    relatedGuideSlugs: [
      'hospital-discharge-to-assisted-living',
      'assisted-living-vs-memory-care-vs-afc',
      'how-long-does-senior-placement-take',
    ],
  },
  {
    name: 'Henry Ford West Bloomfield Hospital',
    slug: 'henry-ford-west-bloomfield',
    shortName: 'Henry Ford West Bloomfield',
    city: 'West Bloomfield',
    system: 'Henry Ford Health',
    intro:
      'A discharge from Henry Ford West Bloomfield often involves families who want to stay in the lakes townships—West Bloomfield, Bloomfield Hills, Bloomfield Township, Farmington Hills, and Novi—while they sort out assisted living or memory care on a short timeline.',
    details:
      'This hospital sits in a market where culture, language, dining, and visit frequency can matter as much as a vacant apartment. Two communities a few miles apart can differ sharply in price and in how they handle dementia. We help you compare those differences against the discharge plan, not against whichever brochure arrived first.',
    discharge:
      'Henry Ford West Bloomfield case managers are coordinating medical follow-up, therapy, and a place that is safe overnight. If the stay started with a fall, heart issue, or confusion, the next setting has to handle medications and supervision—not only meals and housekeeping. Returning to a large house on the lakes with daytime helpers only is a common reason families are back in the hospital within weeks.',
    paperwork:
      'Expect communities to ask for a medication list, cognitive status, and mobility. West Bloomfield and Bloomfield Township campuses can have waitlists; Commerce Township, Farmington Hills, and Novi sometimes open sooner. We check those openings against care capability so a faster yes is not a weaker program.',
    nearby:
      'West Bloomfield, Bloomfield Hills, Bloomfield Township, Farmington Hills, Novi, and Commerce Township are the usual visit map. Troy and Royal Oak are realistic if the right memory care program sits east of Telegraph. We keep the lakes as home base unless care or timing requires a wider search.',
    notes: [
      'For families leaving Henry Ford West Bloomfield who want to stay in western Oakland County',
      'Culture, visit patterns, and memory support often matter as much as the first available apartment',
      'We compare West Bloomfield, Farmington Hills, and Novi openings against the real care level',
    ],
    nearbyCitySlugs: [
      'west-bloomfield',
      'bloomfield-hills',
      'bloomfield-township',
      'farmington-hills',
      'novi',
      'commerce-township',
    ],
    relatedGuideSlugs: [
      'hospital-discharge-to-assisted-living',
      'when-is-it-time-for-memory-care',
      'after-a-fall-next-48-hours',
    ],
  },
  {
    name: 'Michigan Medicine and Trinity Health Ann Arbor',
    slug: 'michigan-medicine-ann-arbor',
    shortName: 'Ann Arbor hospitals',
    city: 'Ann Arbor',
    system: 'Michigan Medicine and Trinity Health',
    intro:
      'Discharges from Michigan Medicine or Trinity Health Ann Arbor (St. Joseph Mercy) mix medical complexity with a senior-living market that can cost more than the rest of Southeast Michigan. Families in Ann Arbor, Ypsilanti, Saline, and Plymouth need a next setting that can support specialist follow-up without ignoring monthly cost.',
    details:
      'Ann Arbor searches often start because of the hospitals, not because the parent already lives downtown. Adult children may work at the university while the parent still lives in Saline, Ypsilanti, or western Wayne County. Staying next to Michigan Medicine is sometimes worth it. Sometimes Plymouth or Canton is the more sustainable visit-and-budget plan. We make that tradeoff explicit before you tour.',
    discharge:
      'These campuses handle a lot of specialty care: cardiac, neuro, cancer, complex rehab. The discharge note may assume a level of support that a standard assisted living community cannot provide. If there is new cognitive change, wound care, or a high fall risk, we look at memory care or a stronger assisted living program first—and at whether returning to a Washtenaw County house is actually safe.',
    paperwork:
      'Academic medical discharges can include more records than a community is used to reading in one afternoon. We help pull the pieces that change admission: medications, therapy status, cognition, and who is the decision-maker. Trinity Health Ann Arbor and Michigan Medicine social work still need a receiving location. A clear short list is more useful than a spreadsheet of every Ann Arbor building.',
    nearby:
      'Ann Arbor, Ypsilanti, and Saline are the local map. Plymouth and Canton are the usual Wayne County overflow when price or a specific opening is the issue. We keep specialist appointments in view so a cheaper community an hour away does not quietly break the medical plan.',
    notes: [
      'For families leaving Michigan Medicine or Trinity Health Ann Arbor who need a next living arrangement',
      'Ann Arbor pricing is often higher; Ypsilanti, Saline, Plymouth, and Canton can change the math',
      'We match medical follow-up and visit patterns, not only which campus is closest to the hospital',
    ],
    nearbyCitySlugs: ['ann-arbor', 'ypsilanti', 'saline', 'plymouth', 'canton'],
    relatedGuideSlugs: [
      'hospital-discharge-to-assisted-living',
      'assisted-living-cost-michigan',
      'how-long-does-senior-placement-take',
    ],
  },
];

export function getHospitalBySlug(slug: string): Hospital | undefined {
  return hospitals.find((hospital) => hospital.slug === slug);
}

export function hospitalPath(slug: string): string {
  return `/hospitals/${slug}`;
}

export function hospitalTitle(hospital: Hospital): string {
  return `Senior living after a discharge from ${hospital.shortName}`;
}

export function hospitalDescription(hospital: Hospital): string {
  return `Free help finding assisted living or memory care after a stay at ${hospital.name}. Homeward Senior Placement works around Southeast Michigan discharge dates at no cost to families.`;
}
