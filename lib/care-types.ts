import type { City } from '@/lib/cities';

export type CareType = {
  slug: string;
  name: string;
  noun: string;
  serviceSlug: string;
  guideSlug: string;
  metaName: string;
  intro: (city: City) => string;
  details: (city: City) => string;
  points: (city: City) => [string, string, string];
  countyIntro: (countyName: string, cityNames: string) => string;
  countyDetails: (countyName: string) => string;
};

export const careTypes: CareType[] = [
  {
    slug: 'assisted-living',
    name: 'Assisted Living',
    noun: 'assisted living',
    serviceSlug: 'assisted-living',
    guideSlug: 'assisted-living-vs-memory-care-vs-afc',
    metaName: 'Assisted living',
    intro: (city) =>
      `Assisted living in ${city.name} is for seniors who still want a private apartment and a daily routine, but need help with meals, medication, bathing, or dressing. Families here often want a community that is easy to visit and close to ${city.hospitals}.`,
    details: (city) =>
      `${city.setting} That mix means two buildings a few miles apart can feel very different in staffing, activities, and monthly cost. We compare what is actually included, how medication is managed, and whether the social life fits your loved one—then tour only the ${city.name} and nearby options that match.`,
    points: (city) => [
      `Help with daily activities while keeping as much independence as possible in ${city.name}`,
      `We compare true monthly cost, not just the advertised rate, across ${city.county}`,
      `A good match considers personality and visit patterns, not only a vacant apartment`,
    ],
    countyIntro: (countyName, cityNames) =>
      `Assisted living in ${countyName} covers a wide range of buildings, from smaller residences to larger campuses in ${cityNames}. Families usually want a clear comparison of care, cost, and how far relatives will drive for visits.`,
    countyDetails: (countyName) =>
      `Because ${countyName} is large, availability and pricing change by city. We narrow the list to communities that can actually support your loved one’s daily needs, then help you tour without spending a week on unvetted leads.`,
  },
  {
    slug: 'memory-care',
    name: 'Memory Care',
    noun: 'memory care',
    serviceSlug: 'memory-care',
    guideSlug: 'when-is-it-time-for-memory-care',
    metaName: 'Memory care',
    intro: (city) =>
      `Memory care in ${city.name} is a specialized setting for Alzheimer’s disease and other dementias—not simply assisted living with a locked door. Families searching here often need secure supervision, trained staff, and a community close to ${city.hospitals} for follow-up care.`,
    details: (city) =>
      `${city.setting} We look at how wandering is prevented, how the day is structured, and whether the program can support your loved one as needs change. If ${city.name} waitlists are long, we also check nearby ${city.county} communities with earlier openings.`,
    points: (city) => [
      `Safety, staffing, and specialized programming matter as much as the ${city.name} address`,
      `We compare memory care capabilities, not just photos and a secure entrance`,
      `Nearby cities in ${city.county} can be a better fit when timing is tight`,
    ],
    countyIntro: (countyName, cityNames) =>
      `Memory care in ${countyName} is one of the most time-sensitive searches families make. We compare secure programs in ${cityNames} based on staffing, daily structure, and whether the community can support changing cognitive needs.`,
    countyDetails: (countyName) =>
      `Demand for memory care in ${countyName} can outpace openings. We check waitlists, respite options, and neighboring cities so you are not touring communities that cannot take your loved one.`,
  },
  {
    slug: 'residential-care-homes',
    name: 'Residential Care Homes',
    noun: 'residential care homes',
    serviceSlug: 'residential-care-homes',
    guideSlug: 'adult-foster-care-homes-michigan',
    metaName: 'Residential care homes',
    intro: (city) =>
      `Residential care homes and licensed adult foster care in ${city.name} are smaller, house-like settings—often a better fit than a large campus when your loved one wants fewer residents and more consistent caregivers.`,
    details: (city) =>
      `${city.setting} We compare licensed homes in and around ${city.name} for care capability, private vs. shared rooms, and how close the setting is to family and to ${city.hospitals}. Smaller does not automatically mean better; we help you weigh that against assisted living if a fuller activity program is the priority.`,
    points: (city) => [
      `A quieter, more personal alternative to large ${city.name} assisted living communities`,
      `We review licenses, accommodations, and what care the home can actually provide`,
      `Useful when your loved one is overwhelmed by a big building or a long hallway`,
    ],
    countyIntro: (countyName, cityNames) =>
      `Residential care homes in ${countyName} give families a smaller-scale option alongside traditional assisted living. We help you compare licensed adult foster care and residential settings in ${cityNames}.`,
    countyDetails: (countyName) =>
      `In ${countyName}, these homes vary widely in size, medical support, and cost. We sort licensed options by care level and location so you can see whether a house-like setting or a larger community is the better match.`,
  },
  {
    slug: 'hospital-rehab-transitions',
    name: 'Hospital & Rehab Transitions',
    noun: 'hospital and rehab transitions',
    serviceSlug: 'hospital-rehab-transitions',
    guideSlug: 'hospital-discharge-to-assisted-living',
    metaName: 'Hospital and rehab discharge help',
    intro: (city) =>
      `When a loved one is discharging from ${city.hospitals} or a nearby rehab, the search for senior living in ${city.name} becomes a deadline. We help families find a safe next setting before the discharge date, not after a rushed guess.`,
    details: (city) =>
      `${city.setting} We check which ${city.name} and ${city.county} communities can admit soon, what paperwork they need, and whether assisted living, memory care, or a residential care home is the more stable next step. You stay focused on your loved one; we organize the options.`,
    points: (city) => [
      `Built for ${city.name} families facing a hospital or rehab discharge this week`,
      `We verify admission requirements and real openings, not just marketing waitlists`,
      `The goal is a safer next setting close enough for family to visit`,
    ],
    countyIntro: (countyName, cityNames) =>
      `Hospital and rehab discharges in ${countyName} often leave families only a few days to find the next living arrangement. We help compare communities in ${cityNames} that can admit on a short timeline.`,
    countyDetails: (countyName) =>
      `We work around ${countyName} hospital and rehab discharge dates: care level, paperwork, and which communities can take someone soon enough to avoid an unsafe return home.`,
  },
];

export function getCareTypeBySlug(slug: string): CareType | undefined {
  return careTypes.find((care) => care.slug === slug);
}

export function cityCarePath(citySlug: string, careSlug: string): string {
  return `/areas/${citySlug}/${careSlug}`;
}

export function countyCarePath(countySlug: string, careSlug: string): string {
  return `/counties/${countySlug}/${careSlug}`;
}
