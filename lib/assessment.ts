import { cities, getCityBySlug } from '@/lib/cities';

export const PRIORITY_CITY_SLUGS = [
  'farmington-hills',
  'farmington',
  'novi',
  'southfield',
  'royal-oak',
  'birmingham',
  'troy',
  'bloomfield-hills',
  'west-bloomfield',
  'rochester-hills',
  'pontiac',
  'oak-park',
  'ferndale',
  'berkley',
  'clawson',
  'madison-heights',
  'auburn-hills',
  'walled-lake',
  'commerce-township',
  'white-lake',
  'waterford',
  'clarkston',
  'lake-orion',
  'oxford',
  'holly',
  'milford',
  'orchard-lake',
  'franklin',
  'beverly-hills',
  'huntington-woods',
  'pleasant-ridge',
  'lathrup-village',
  'keego-harbor',
] as const;

export const OTHER_CITY_CHOICES = ['Not sure yet', 'Outside Oakland County'] as const;

export const CARE_NEEDS = [
  {
    value: 'Assisted living',
    hint: 'Help with meals, medication, bathing, or dressing, while keeping an apartment-style setting.',
  },
  {
    value: 'Memory care',
    hint: 'Alzheimer’s or another dementia, and safety or wandering is the main concern.',
  },
  {
    value: 'Independent living',
    hint: 'Mostly independent, and ready to leave the house for meals, activities, or less upkeep.',
  },
  {
    value: 'Residential care home',
    hint: 'A smaller, house-like setting with fewer residents.',
  },
  {
    value: 'Leaving the hospital or rehab',
    hint: 'A discharge date is already on the calendar.',
  },
  {
    value: 'Not sure yet',
    hint: 'Something has to change, and you want help sorting the options.',
  },
] as const;

export const TIMELINES = [
  { value: 'This week', hint: 'A discharge, an unsafe night, or a decision that cannot wait.' },
  { value: 'Within a month', hint: 'There is a little time, and you want tours on the calendar.' },
  { value: '1–3 months', hint: 'You are planning ahead and want a realistic short list.' },
  { value: 'Just researching', hint: 'No move date yet. You want to understand the options.' },
] as const;

export const BUDGETS = [
  { value: 'Under $4,000 / month', hint: 'Cost is the tightest constraint.' },
  { value: '$4,000–$6,000 / month', hint: 'Start with communities in this monthly band.' },
  { value: '$6,000–$8,000 / month', hint: 'There is room for more care or a newer community.' },
  { value: 'Over $8,000 / month', hint: 'Care and location matter more than finding the lowest rate.' },
  { value: 'Prefer to discuss', hint: 'We will talk it through on the call. This is not a price quote.' },
] as const;

const CONTACT_CARE = 'General question';
const CONTACT_TIMELINE = 'Not specified';
const CONTACT_BUDGET = 'Not specified';
const CONTACT_CITY = 'Not specified';

export type LeadInput = {
  name: string;
  phone: string;
  email: string;
  city: string;
  careNeed: string;
  timeline: string;
  budget: string;
  notes: string;
  source: 'assessment' | 'contact';
};

export type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
};

export type CityOption = {
  slug: string;
  name: string;
  group: 'priority' | 'more';
};

export function assessmentCityOptions(): CityOption[] {
  const priority: CityOption[] = [];
  for (const slug of PRIORITY_CITY_SLUGS) {
    const city = getCityBySlug(slug);
    if (city) {
      priority.push({ slug: city.slug, name: city.name, group: 'priority' });
    }
  }

  const prioritySlugs = new Set<string>(PRIORITY_CITY_SLUGS);
  const more = cities
    .filter((city) => city.countySlug === 'oakland-county' && !prioritySlugs.has(city.slug))
    .map((city) => ({ slug: city.slug, name: city.name, group: 'more' as const }));

  const northville = getCityBySlug('northville');
  if (northville && !prioritySlugs.has(northville.slug) && !more.some((city) => city.slug === northville.slug)) {
    more.push({ slug: northville.slug, name: northville.name, group: 'more' });
  }

  return [...priority, ...more];
}

export function cityNameForSlug(slug: string | undefined): string {
  if (!slug) return '';
  return getCityBySlug(slug)?.name ?? '';
}

function clean(value: unknown, max: number): string {
  return String(value ?? '')
    .replace(/\u0000/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function digits(value: string): string {
  return value.replace(/\D/g, '');
}

export function parseLeadBody(body: unknown): { ok: true; value: LeadInput } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Enter your details and try again.' };
  }

  const record = body as Record<string, unknown>;
  if (clean(record.company, 200)) {
    return { ok: false, error: 'honeypot' };
  }

  const source = record.source === 'contact' ? 'contact' : 'assessment';
  const name = clean(record.name, 80);
  const phone = clean(record.phone, 30);
  const email = clean(record.email, 120);
  const city = clean(record.city, 80);
  const careNeed = clean(record.careNeed, 80);
  const timeline = clean(record.timeline, 40);
  const budget = clean(record.budget, 40);
  const notes = String(record.notes ?? '')
    .replace(/\u0000/g, '')
    .trim()
    .slice(0, 2000);

  if (name.length < 2) {
    return { ok: false, error: 'Enter your name.' };
  }

  const phoneDigits = digits(phone);
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { ok: false, error: 'Enter a phone number we can call, including area code.' };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Enter a valid email, or leave it blank.' };
  }

  const cityNames = new Set([
    ...assessmentCityOptions().map((city) => city.name),
    ...OTHER_CITY_CHOICES,
    CONTACT_CITY,
  ]);
  if (!cityNames.has(city)) {
    return { ok: false, error: 'Choose a city in Oakland County.' };
  }

  const careValues = new Set<string>([...CARE_NEEDS.map((item) => item.value), CONTACT_CARE]);
  if (!careValues.has(careNeed)) {
    return { ok: false, error: 'Choose the kind of care you are looking for.' };
  }

  const timelineValues = new Set<string>([...TIMELINES.map((item) => item.value), CONTACT_TIMELINE]);
  if (!timelineValues.has(timeline)) {
    return { ok: false, error: 'Choose a timeline.' };
  }

  const budgetValues = new Set<string>([...BUDGETS.map((item) => item.value), CONTACT_BUDGET, '']);
  if (!budgetValues.has(budget)) {
    return { ok: false, error: 'Choose a budget band, or say you would rather discuss it.' };
  }

  if (source === 'assessment' && !budget) {
    return { ok: false, error: 'Choose a budget band, or say you would rather discuss it.' };
  }

  return {
    ok: true,
    value: {
      name,
      phone,
      email,
      city,
      careNeed,
      timeline,
      budget: budget || CONTACT_BUDGET,
      notes,
      source,
    },
  };
}
