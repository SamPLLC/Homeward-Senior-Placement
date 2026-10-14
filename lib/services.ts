export type Service = {
  name: string;
  slug: string;
  summary: string;
  paragraphs: string[];
  points: [string, string, string];
};

export const services: Service[] = [
  {
    name: 'Personalized Care Assessments',
    slug: 'personalized-care-assessments',
    summary:
      'Every senior has different care requirements, lifestyle preferences, and financial considerations. We take the time to understand your loved one’s situation before recommending potential living arrangements.',
    paragraphs: [
      'Every senior has different care requirements, lifestyle preferences, and financial considerations. We take the time to understand your loved one’s situation before recommending potential living arrangements.',
      'Our consultations consider daily living needs, mobility, memory care requirements, preferred accommodations, location, and budget.',
      'That first conversation is free and has no obligation. We listen to what a typical day looks like now, what is getting harder, and what your family wants to preserve—independence, familiar routines, proximity to relatives, or a specific level of medical support. From there, we can suggest living arrangements that actually match those needs instead of a generic list of openings.',
    ],
    points: [
      'We start with your loved one’s daily needs, not a brochure of communities',
      'Location, budget, mobility, and memory care are all part of the same conversation',
      'You leave with a clearer picture of which type of care to look at next',
    ],
  },
  {
    name: 'Assisted Living Placement',
    slug: 'assisted-living',
    summary:
      'We help families identify assisted living communities that provide an appropriate balance of independence, comfort, and personal care.',
    paragraphs: [
      'We help families identify assisted living communities that provide an appropriate balance of independence, comfort, and personal care.',
      'From assistance with daily activities to medication management and social engagement, we help you understand what different communities offer and which options may best suit your loved one.',
      'Assisted living is often the right step when a senior still wants a private apartment and a social routine, but needs help with meals, bathing, dressing, or medications. Communities can look similar online. We compare staffing, included services, activities, and true monthly cost so you can tour a short list with a clear sense of what you are seeing.',
    ],
    points: [
      'Balance independence with help for meals, medication, and daily activities',
      'We explain what is included versus what costs extra before you tour',
      'A good match considers personality and social life, not only care level',
    ],
  },
  {
    name: 'Memory Care Placement',
    slug: 'memory-care',
    summary:
      'Choosing a community for a loved one living with Alzheimer’s disease or dementia requires special consideration.',
    paragraphs: [
      'Choosing a community for a loved one living with Alzheimer’s disease or dementia requires special consideration.',
      'We help families explore memory care options, comparing safety features, supervision, specialized programming, staff training, and individual care capabilities.',
      'Our goal is to help families make informed decisions about supportive environments for loved ones experiencing cognitive decline.',
      'Memory care is not the same as assisted living with a locked door. We look at how staff are trained, how wandering is prevented, how daily programs are structured, and whether the community can support your loved one as needs change. That makes the tours more useful and the decision less overwhelming.',
    ],
    points: [
      'Safety, supervision, and staff training matter as much as the building itself',
      'We compare specialized programming and how care is delivered day to day',
      'Families get a clearer sense of which environments can support cognitive decline',
    ],
  },
  {
    name: 'Residential Care Home Placement',
    slug: 'residential-care-homes',
    summary:
      'For seniors who may prefer a smaller, more personal living environment, residential care homes can be an alternative to larger assisted living communities.',
    paragraphs: [
      'For seniors who may prefer a smaller, more personal living environment, residential care homes can be an alternative to larger assisted living communities.',
      'We help families explore licensed residential care settings, including adult foster care homes, and compare their services, accommodations, and care capabilities.',
      'A smaller home can feel more like a house than a campus: fewer residents, a quieter routine, and more consistent caregivers. That is a strong option for some people and the wrong fit for others. We help you compare licensed adult foster care and residential care homes against larger assisted living so the choice is based on care, setting, and personality—not just availability.',
    ],
    points: [
      'Smaller licensed homes can feel more personal than a large community',
      'We compare adult foster care and residential care settings side by side',
      'Services, accommodations, and care capabilities are reviewed before you visit',
    ],
  },
  {
    name: 'Hospital & Rehabilitation Transition Assistance',
    slug: 'hospital-rehab-transitions',
    summary:
      'When a loved one is preparing to leave a hospital or rehabilitation center, finding an appropriate living arrangement can become time-sensitive.',
    paragraphs: [
      'When a loved one is preparing to leave a hospital or rehabilitation center, finding an appropriate living arrangement can become time-sensitive.',
      'We help families explore available senior living options, understand community admission requirements, and coordinate next steps to support a smoother transition.',
      'Discharge dates move quickly, and going home without enough support can lead to another hospital stay. We work around that timeline: which communities can admit soon, what paperwork they need, and whether assisted living, memory care, or a residential care home is the safer next step. You stay focused on your loved one; we help organize the options.',
    ],
    points: [
      'Built for families facing a hospital or rehab discharge deadline',
      'We check admission requirements and which communities can take someone soon',
      'The goal is a safer next setting, not a rushed guess under pressure',
    ],
  },
  {
    name: 'Community Comparisons & Placement Coordination',
    slug: 'community-comparisons',
    summary:
      'Selecting a senior living community involves more than finding an available room. We help families compare communities and navigate the placement process.',
    paragraphs: [
      'Selecting a senior living community involves more than finding an available room.',
      'We help families compare communities based on care services, monthly costs, accommodations, amenities, and personal preferences.',
      'Our assistance can include arranging community tours, preparing questions for providers, and helping families navigate the placement process.',
      'Once a short list is in place, we stay with you through the details: scheduling tours, comparing what you saw, and helping you think through contracts, move-in timing, and follow-up questions. The point is a confident decision, not a pile of unrelated brochures.',
    ],
    points: [
      'Compare care, cost, accommodations, amenities, and personal preferences in one place',
      'We can arrange tours and help you prepare questions for each community',
      'Placement support continues through the decision, not just the first phone call',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function serviceTitle(service: Service): string {
  return service.name;
}

export function serviceDescription(service: Service): string {
  return `${service.summary} Free senior placement help from Homeward Senior Placement in Southeast Michigan.`;
}
