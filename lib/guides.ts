export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  relatedServiceSlugs: string[];
  relatedGuideSlugs: string[];
  published?: string;
  updated?: string;
};

export const GUIDE_AUTHOR = 'Homeward Senior Placement';
export const GUIDE_AUTHOR_ROLE = 'Local senior placement advisors in Southeast Michigan';
export const GUIDE_UPDATED = '2026-10-14';
export const GUIDE_PUBLISHED_EXISTING = '2026-10-08';

export function guidePublished(guide: Guide): string {
  return guide.published ?? GUIDE_PUBLISHED_EXISTING;
}

export function guideUpdated(guide: Guide): string {
  return guide.updated ?? GUIDE_UPDATED;
}

export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const guides: Guide[] = [
  {
    slug: 'assisted-living-cost-michigan',
    title: 'How much does assisted living cost in Michigan?',
    description:
      'Typical assisted living costs in Southeast Michigan, what monthly fees usually include, and how families compare pricing before they tour.',
    intro:
      'Assisted living costs in Michigan vary by city, apartment size, and how much daily help is included. In Southeast Michigan, families should plan for a monthly community fee plus care charges that rise as needs increase. The only way to compare fairly is to look at what is included—not the number on the homepage.',
    sections: [
      {
        heading: 'What families in Metro Detroit usually pay',
        paragraphs: [
          'Private-pay assisted living in Southeast Michigan often falls in a broad range: a more modest community in Macomb or western Wayne County can land lower than a newer campus in Novi, Birmingham, or Ann Arbor. Memory care is usually higher than standard assisted living because of staffing and security.',
          'Treat online averages as a starting point only. Two buildings five miles apart can differ by thousands of dollars a month once care levels, second-person fees, and medication management are added. We gather those numbers for you so you are not comparing a base rate in one city to an all-in rate in another.',
        ],
      },
      {
        heading: 'What the monthly fee usually includes—and what it does not',
        paragraphs: [
          'Most assisted living quotes include an apartment, meals, housekeeping, activities, and some help with daily tasks. They often do not include higher care levels, incontinence supplies, beauty shop services, transportation beyond a set radius, or a second person sharing the apartment.',
          'Ask for a written list of what happens when care needs increase. A community that looks affordable at move-in can become expensive if every extra shower or medication pass is billed separately. That is one of the first things we compare across Oakland, Wayne, Macomb, Washtenaw, and Livingston County communities.',
        ],
      },
      {
        heading: 'How to compare cost without getting lost',
        paragraphs: [
          'Pick a realistic budget, including what savings, a house sale, VA benefits, or long-term care insurance can support for at least 12–24 months. Then compare three to five communities at the same care level. If one building is much cheaper, find out why—older plant, smaller staff, fewer nurses, or a move-in special that expires.',
          'Medicare does not pay for long-term assisted living. Medicaid in Michigan does not work like private assisted living insurance for most families. If benefits are part of the plan, read our guide on paying for senior living and on Medicaid before you sign a contract.',
        ],
      },
    ],
    relatedServiceSlugs: ['assisted-living', 'community-comparisons'],
    relatedGuideSlugs: ['memory-care-cost-metro-detroit', 'how-to-pay-for-senior-living-michigan'],
  },
  {
    slug: 'when-is-it-time-for-memory-care',
    title: 'When is it time for memory care?',
    description:
      'Signs that assisted living or home care may no longer be enough, and how Michigan families decide when memory care is the safer next step.',
    intro:
      'Memory care becomes the right conversation when cognitive changes make a regular home or standard assisted living unsafe. That is a clinical and practical decision, not a moral one. Families in Southeast Michigan often wait too long because they hope a little more home help will be enough.',
    sections: [
      {
        heading: 'Signs families should not ignore',
        paragraphs: [
          'Common turning points include wandering or getting lost, leaving the stove on, medication mistakes, nighttime restlessness, aggression or fear that caregivers cannot redirect, and a spouse who is exhausted or injured from providing care. Weight loss, missed bills, and repeated hospital visits are also signals.',
          'If your loved one already lives in assisted living, ask whether the community can still keep them safe as dementia progresses. Many cannot. A locked door is not the same as a memory care program with trained staff and a structured day.',
        ],
      },
      {
        heading: 'Memory care versus assisted living',
        paragraphs: [
          'Assisted living supports daily tasks while the person can still follow a fairly independent routine. Memory care is designed for Alzheimer’s disease and other dementias: smaller neighborhoods, higher staffing, activities that reduce agitation, and supervision overnight.',
          'Moving earlier, while your loved one can still participate in the transition, is often gentler than moving after a crisis. We help families in cities such as Novi, Farmington Hills, Troy, and Ann Arbor compare programs on staffing and daily structure—not only on photos.',
        ],
      },
      {
        heading: 'How we help you decide',
        paragraphs: [
          'A short conversation about a typical day is more useful than a diagnosis label alone. We look at safety, caregiver strain, and whether a residential care home or a full memory care neighborhood is the better setting. If you are not sure, start with a care assessment and a few targeted tours rather than a dozen unfocused visits.',
        ],
      },
    ],
    relatedServiceSlugs: ['memory-care', 'personalized-care-assessments'],
    relatedGuideSlugs: ['questions-to-ask-memory-care', 'assisted-living-vs-memory-care-vs-afc'],
  },
  {
    slug: 'hospital-discharge-to-assisted-living',
    title: 'Hospital discharge to assisted living in Michigan',
    description:
      'What to do when a hospital or rehab wants a senior living plan this week, including admission paperwork, care level, and safer alternatives to going home.',
    intro:
      'A hospital or rehab discharge date can turn a long-term senior care decision into a 48-hour problem. Families in Metro Detroit hear “they can’t go home” and then get a list of buildings that may not have openings, may not take the care level, or may not be a safe long-term fit.',
    sections: [
      {
        heading: 'Why going home is not always the safer choice',
        paragraphs: [
          'Medicare covers short skilled rehab when criteria are met. It does not pay for long-term assisted living. When skilled days end, families must choose: home with a patchwork of help, a relative’s house, assisted living, memory care, or a licensed residential care home.',
          'Returning home without enough overnight support is a common reason for another fall and readmission. If your loved one was in Corewell Health, Henry Ford, Trinity Health, Michigan Medicine, or Ascension, ask the case manager for the actual care needs—not only a list of phone numbers.',
        ],
      },
      {
        heading: 'What communities need before they can say yes',
        paragraphs: [
          'Most communities want recent clinical information: medications, mobility, memory, wound care, oxygen, and behavior. They also need a financial picture. If those pieces are missing, you will hear “we’ll see” until the day of discharge.',
          'We help families gather that information, check which Southeast Michigan communities can admit on the needed timeline, and compare assisted living versus a higher-acuity setting so you are not placing someone who needs memory care into a building that cannot supervise them.',
        ],
      },
      {
        heading: 'A calmer sequence when you only have a few days',
        paragraphs: [
          'Call a placement advisor as soon as discharge is mentioned, not the afternoon of discharge. We can work in parallel with rehab: care level, budget, cities the family can visit, and real openings. The goal is a safe next setting close enough for family—Farmington Hills, Livonia, Troy, Clinton Township, Ann Arbor, or wherever the support system actually lives.',
        ],
      },
    ],
    relatedServiceSlugs: ['hospital-rehab-transitions', 'assisted-living'],
    relatedGuideSlugs: ['after-a-fall-next-48-hours', 'how-long-does-senior-placement-take'],
  },
  {
    slug: 'assisted-living-vs-memory-care-vs-afc',
    title: 'Assisted living vs. memory care vs. adult foster care in Michigan',
    description:
      'The practical differences between assisted living, memory care, and licensed adult foster care homes, and how to choose the right setting.',
    intro:
      'These three settings are not interchangeable. Choosing the wrong one is how families end up moving twice. In Michigan, adult foster care (AFC) is a licensed small-home model that can look nothing like a large assisted living campus—and memory care is a specialized program, not a marketing label.',
    sections: [
      {
        heading: 'Assisted living',
        paragraphs: [
          'Assisted living is usually apartment-style living with meals, activities, and help with daily tasks. It works when your loved one can still participate in a community, follow directions with reminders, and does not need constant supervision to stay safe.',
          'It is the most searched option in cities such as Novi, Plymouth, Troy, and Rochester Hills. It is the wrong option when wandering, severe confusion, or unsafe behaviors are already happening.',
        ],
      },
      {
        heading: 'Memory care',
        paragraphs: [
          'Memory care is built for dementia: secured environments, staff trained in redirection, and a daily program that reduces agitation. You should ask how many residents each caregiver has, what happens at night, and how the community handles exit-seeking.',
          'Some campuses have a memory care neighborhood attached to assisted living, which can help if needs change. That only helps if the memory care program is actually strong—not just a converted hallway.',
        ],
      },
      {
        heading: 'Adult foster care and residential care homes',
        paragraphs: [
          'Licensed adult foster care homes in Michigan are smaller, often with a handful of residents in a house-like setting. They can be calmer and more personal. They can also have less activity programming and less nurse coverage than a large community.',
          'AFC is worth a serious look when your loved one does better with fewer people, consistent caregivers, and a quieter evening. It is not automatically cheaper or better. We compare licenses, private rooms, and care capability next to assisted living so you can see the real tradeoff.',
        ],
      },
    ],
    relatedServiceSlugs: ['assisted-living', 'memory-care', 'residential-care-homes'],
    relatedGuideSlugs: ['michigan-assisted-living-licensing', 'adult-foster-care-homes-michigan'],
  },
  {
    slug: 'medicaid-assisted-living-michigan',
    title: 'Does Medicaid cover assisted living in Michigan?',
    description:
      'How Michigan Medicaid, waivers, and adult foster care relate to assisted living costs, and why most Metro Detroit communities are still private pay.',
    intro:
      'Most assisted living in Southeast Michigan is private pay. Michigan Medicaid does not work like a simple voucher that fills any apartment you like. Families still need a clear picture of waivers, adult foster care, and what a community will actually accept.',
    sections: [
      {
        heading: 'What Medicaid generally does not do',
        paragraphs: [
          'Medicare does not pay for long-term assisted living. Standard Medicaid in Michigan is also not a blanket payment for private assisted living apartments the way many families hope. If a community tells you “we take Medicaid,” ask which program, after how many months of private pay, and whether a room will actually be available when benefits start.',
          'This is general information, not benefits or legal advice. Rules and openings change. A local advisor, plus the Michigan Department of Health and Human Services or an elder-law attorney when needed, should confirm your specific situation.',
        ],
      },
      {
        heading: 'Waivers, home care, and adult foster care',
        paragraphs: [
          'Michigan’s home- and community-based programs, including the MI Choice Waiver, are designed more around keeping people at home or in certain community settings than around paying a typical private assisted living rate. Some licensed adult foster care homes work with Medicaid; many large assisted living campuses do not.',
          'If Medicaid is likely to be needed within a year, that should shape the short list from day one. Touring only private-pay campuses can waste the only week you have. We help families ask the money questions early so the care setting and the funding plan are not two separate projects.',
        ],
      },
      {
        heading: 'What to do next',
        paragraphs: [
          'Bring a simple picture of income, assets, home ownership, and VA status to the first conversation. We can then compare communities that match both the care need and the likely funding path—and point you to county resources when a waiver or AFC Medicaid bed is the more realistic route.',
        ],
      },
    ],
    relatedServiceSlugs: ['assisted-living', 'residential-care-homes'],
    relatedGuideSlugs: ['how-to-pay-for-senior-living-michigan', 'michigan-assisted-living-licensing'],
  },
  {
    slug: 'how-to-tour-assisted-living',
    title: 'How to tour an assisted living community',
    description:
      'What to look for on an assisted living tour in Michigan, which questions to ask, and how to compare communities after you leave the lobby.',
    intro:
      'A tour is easy to waste. Communities are designed to look good at 10 a.m. The useful visit is the one where you see staffing, smell, sound, and how residents actually spend the afternoon—not only the model apartment.',
    sections: [
      {
        heading: 'Before you go',
        paragraphs: [
          'Know the care need, the budget, and the cities you can visit regularly. Touring eight buildings across Oakland and Wayne County in one weekend usually produces confusion, not clarity. Three well-chosen tours beat ten random ones.',
          'We help families prepare a short list and a question list so you are not thinking of the important questions in the parking lot afterward.',
        ],
      },
      {
        heading: 'What to notice while you are there',
        paragraphs: [
          'Watch how staff speak to residents, how long it takes to get help, whether people are parked in a hallway, and whether the memory care area (if any) feels like a program or a wing that was locked later. Ask to see a regular apartment, not only the staged one.',
          'Stay through a meal if you can. Dining is where staffing shortages and social fit show up. If your loved one will live there, they should see it too when it is safe and appropriate—not be surprised on move-in day.',
        ],
      },
      {
        heading: 'Questions that actually change the decision',
        paragraphs: [
          'What is included in the quoted rate at this care level? What is the caregiver-to-resident ratio on nights and weekends? How do you handle a fall, a hospital return, or increasing dementia? How long do residents typically stay before they have to move out?',
          'Write the answers down in the same format for each community. That is how you compare Farmington Hills to Novi, or Livonia to Plymouth, without relying on who had the better cookies.',
        ],
      },
    ],
    relatedServiceSlugs: ['community-comparisons', 'assisted-living'],
    relatedGuideSlugs: ['questions-to-ask-memory-care', 'assisted-living-cost-michigan'],
  },
  {
    slug: 'when-a-parent-cannot-live-alone',
    title: 'What to do if a parent cannot live alone anymore',
    description:
      'A practical sequence for Michigan families when a parent is no longer safe at home, from the first conversation to a short list of senior living options.',
    intro:
      'The moment a parent cannot live alone is rarely a single event. It is usually a fall, a neighbor’s phone call, burned pans, unpaid bills, or a spouse who cannot keep going. You do not need a perfect plan on day one. You need a safe next step and a short list.',
    sections: [
      {
        heading: 'Stabilize before you shop',
        paragraphs: [
          'If there is an immediate safety issue, handle medical care first. If the crisis is slower—missed medications, isolation, a house that is no longer manageable—start with a clear picture of daily needs: bathing, meals, mobility, memory, overnight supervision, and who can help this week.',
          'Adult children often split into two camps: “they’ll be fine at home with more help” and “they have to move tomorrow.” The truth is usually in between. A care assessment keeps the family from arguing in the abstract.',
        ],
      },
      {
        heading: 'Home care, a relative’s house, or a community',
        paragraphs: [
          'In-home help can buy time if the house is still safe and someone can supervise the helpers. Moving in with a child can work for some families and strain others quickly. Assisted living, memory care, or a licensed residential care home becomes the better path when nights, wandering, or caregiver injury are already in the picture.',
          'Location matters. A parent in White Lake and children in Troy need a different map than a family entirely in Canton. We start with where people actually live, then compare communities in those cities.',
        ],
      },
      {
        heading: 'Make the next week concrete',
        paragraphs: [
          'Pick a decision-maker, gather medications and doctor names, and set a budget range. Then look at three to five options—not thirty tabs. If you want help doing that without a family fee, that is the consultation we offer across Southeast Michigan.',
        ],
      },
    ],
    relatedServiceSlugs: ['personalized-care-assessments', 'community-comparisons'],
    relatedGuideSlugs: ['after-a-fall-next-48-hours', 'when-is-it-time-for-memory-care'],
  },
  {
    slug: 'how-to-pay-for-senior-living-michigan',
    title: 'How to pay for senior living in Michigan',
    description:
      'Private pay, house sale, long-term care insurance, VA Aid and Attendance, and why Medicare is not a long-term assisted living plan.',
    intro:
      'Paying for senior living is usually a mix of savings, income, a house, insurance, and sometimes VA benefits. It is rarely a single check from Medicare. Families who understand that early make cleaner decisions and avoid touring communities they cannot sustain.',
    sections: [
      {
        heading: 'Private pay is still the main path for assisted living',
        paragraphs: [
          'Social Security and a pension rarely cover a full assisted living or memory care bill in Metro Detroit. Families use savings, investments, and often the sale or rental of a home. Some communities want several months of private pay documented before move-in.',
          'Long-term care insurance can help if the policy actually covers assisted living or memory care and the waiting period has been met. Read the policy or have someone who understands it explain the elimination period and daily maximum before you count on it.',
        ],
      },
      {
        heading: 'Veterans and surviving spouses',
        paragraphs: [
          'VA Aid and Attendance can help some wartime veterans and surviving spouses with the cost of care. It is not automatic and it is not instant. If a veteran is in the family, say so in the first conversation so we do not build a short list that ignores a benefit you may qualify for.',
        ],
      },
      {
        heading: 'Medicare, Medicaid, and timing',
        paragraphs: [
          'Medicare may cover a short skilled rehab stay. It does not pay for ongoing assisted living. Medicaid in Michigan is a separate, rules-heavy path that may support some settings and not others. If funds are limited, bring that to the first call. It changes which communities are realistic in Oakland, Wayne, Macomb, Washtenaw, and Livingston counties.',
          'This is not tax, legal, or benefits advice. For complex assets or Medicaid planning, an elder-law attorney is the right next professional. Our job is to match care settings to a budget you can actually maintain.',
        ],
      },
    ],
    relatedServiceSlugs: ['community-comparisons', 'assisted-living'],
    relatedGuideSlugs: ['va-aid-and-attendance-michigan', 'long-term-care-insurance-michigan'],
  },
  {
    slug: 'independent-living-vs-assisted-living',
    title: 'Independent living vs. assisted living',
    description:
      'How independent living differs from assisted living, when à-la-carte help is enough, and when a licensed care setting is the safer choice.',
    intro:
      'Independent living is maintenance-free housing with amenities. Assisted living is housing plus personal care. Families mix them up because both can look like apartments with dining rooms. The difference shows up at 2 a.m. when someone needs help getting to the bathroom.',
    sections: [
      {
        heading: 'Independent living is not a care plan',
        paragraphs: [
          'Independent living can be a good fit when your loved one can manage medications, bathing, and emergencies, and mainly wants less house work and more social life. Some buildings allow outside home-care agencies. That can work until overnight needs or memory changes outgrow a helper who leaves at 7 p.m.',
          'If a salesperson says “you can age in place here,” ask what happens when the resident needs two-person transfers, overnight supervision, or dementia support. Many independent living buildings will require a move.',
        ],
      },
      {
        heading: 'When assisted living is the more honest next step',
        paragraphs: [
          'If your parent already needs daily help with medications, bathing, or dressing, starting in assisted living avoids a second move six months later. Continuum campuses that offer both can still make sense—if you are placed in the right level on day one.',
          'We help families compare independent living, assisted living, and residential care homes in the same conversation so a cheaper independent living rate is not hiding unmet care.',
        ],
      },
    ],
    relatedServiceSlugs: ['assisted-living', 'personalized-care-assessments'],
    relatedGuideSlugs: ['assisted-living-vs-memory-care-vs-afc', 'when-a-parent-cannot-live-alone'],
  },
  {
    slug: 'adult-foster-care-homes-michigan',
    title: 'What is an adult foster care home in Michigan?',
    description:
      'How licensed adult foster care and residential care homes work in Michigan, who they fit, and how they compare with large assisted living communities.',
    intro:
      'Adult foster care (AFC) homes are licensed small-group settings. They can feel like a house rather than a campus. For some seniors in Southeast Michigan, that is exactly right. For others, it is too quiet, too small, or not staffed for the care they need.',
    sections: [
      {
        heading: 'What “licensed” should mean to you',
        paragraphs: [
          'Michigan licenses adult foster care homes and sets rules around capacity and care. You still have to look at the specific home: private versus shared rooms, who is awake overnight, how medications are handled, and how close the home is to family and to hospitals.',
          'A license is the starting point, not the whole decision. We help families compare AFC homes next to assisted living so “smaller” does not get confused with “better” or “cheaper.”',
        ],
      },
      {
        heading: 'Who tends to do well in a residential care home',
        paragraphs: [
          'People who are overwhelmed by long hallways, loud dining rooms, or a large number of residents. People who want the same caregivers most days. People whose families live nearby and visit often, which matters more when there is less built-in activity programming.',
          'It is a weaker fit when your loved one wants a full calendar of events, or needs a secure dementia program that a particular home cannot provide. Memory care in a dedicated neighborhood is sometimes the safer clinical match.',
        ],
      },
      {
        heading: 'How we compare homes in Metro Detroit',
        paragraphs: [
          'We look at the same things we look at in a large community: care, cost, location, and what happens if needs increase. Then we add the AFC-specific questions—house culture, other residents, and whether the setting still works if overnight help becomes essential. Homes in Wayne, Oakland, and Macomb counties vary widely; the county on the license does not tell you enough.',
        ],
      },
    ],
    relatedServiceSlugs: ['residential-care-homes', 'assisted-living'],
    relatedGuideSlugs: ['michigan-assisted-living-licensing', 'assisted-living-vs-memory-care-vs-afc'],
  },
  {
    slug: 'questions-to-ask-memory-care',
    title: 'Questions to ask a memory care community',
    description:
      'A practical list of memory care questions on staffing, safety, daily life, and cost so Michigan families can compare programs—not just buildings.',
    intro:
      'Memory care tours are emotional. A prepared list keeps you from leaving with a brochure and no answers. These questions work in Novi, Royal Oak, Ann Arbor, Sterling Heights, and every other market we serve.',
    sections: [
      {
        heading: 'Staffing and training',
        paragraphs: [
          'How many residents per caregiver on days, evenings, and nights? What dementia-specific training do they require, and how often is it refreshed? Is a nurse in the building overnight? What happens if your loved one is up and walking at 2 a.m.?',
          'If the answers are vague, that is an answer. Strong programs can tell you how they handle exit-seeking, shadowing, and refusal of care without using only the word “family-like.”',
        ],
      },
      {
        heading: 'Safety and the day itself',
        paragraphs: [
          'How is the neighborhood secured? How do they handle outdoor access? What does a typical day look like for someone in early versus middle-stage dementia? Can you see an activity in progress, not a calendar on a wall?',
          'Ask about hospital transfers, falls, and whether the community will keep a resident who becomes more mobile-impaired or more distressed. A move-in is not helpful if a move-out is likely in four months.',
        ],
      },
      {
        heading: 'Cost and the care agreement',
        paragraphs: [
          'What is included at this care level, and what increases the fee? Is there a community fee at move-in? How is notice handled if they determine they can no longer meet needs? Get it in writing.',
          'We attend tours with families when that helps, and we compare answers across communities so you are not relying on whoever was more charming that morning.',
        ],
      },
    ],
    relatedServiceSlugs: ['memory-care', 'community-comparisons'],
    relatedGuideSlugs: ['when-is-it-time-for-memory-care', 'how-to-tour-assisted-living'],
  },
  {
    slug: 'how-long-does-senior-placement-take',
    title: 'How long does senior placement take?',
    description:
      'Typical timelines for senior placement in Southeast Michigan, from a planned move to a hospital discharge that has to happen this week.',
    intro:
      'Placement can take a day or it can take a month. The timeline depends on care level, budget, how quickly the family can tour, and whether communities have openings. Anyone who promises the same speed for every family is not telling you the truth.',
    sections: [
      {
        heading: 'When you have time to plan',
        paragraphs: [
          'If no one is in the hospital, a thoughtful process is often one to three weeks: consultation, a short list, tours, a decision, and paperwork. Memory care waitlists can stretch that. So can a house that has to be sold before the family is comfortable signing.',
          'Starting before a crisis almost always produces a better match. You can decline a community that feels wrong. In a discharge crisis, you may not have that luxury.',
        ],
      },
      {
        heading: 'When the hospital is involved',
        paragraphs: [
          'Hospital and rehab discharges can compress the same work into two to five days. The sequence is the same—needs, budget, openings, paperwork—but there is less room for extra tours. That is when having someone who already knows which Southeast Michigan communities can admit quickly matters.',
          'We aim to show 3–5 tailored options quickly after a consultation, then move as fast as the clinical paperwork and family decision-making allow. You still choose. We keep the list short on purpose.',
        ],
      },
      {
        heading: 'What slows families down',
        paragraphs: [
          'Disagreement among siblings, missing medical information, an unclear budget, and touring too many unrelated buildings. If those are already happening, name them early. A placement process cannot outrun a family that has not decided who is making the call.',
        ],
      },
    ],
    relatedServiceSlugs: ['hospital-rehab-transitions', 'personalized-care-assessments'],
    relatedGuideSlugs: ['hospital-discharge-to-assisted-living', 'after-a-fall-next-48-hours'],
  },
  {
    slug: 'michigan-assisted-living-licensing',
    title: 'How Michigan licenses assisted living, adult foster care, and memory care',
    description:
      'Assisted living is not a Michigan license type. How Homes for the Aged, adult foster care, LARA surveys, and memory care programs actually work for families.',
    intro:
      'Michigan does not license something called “assisted living.” The buildings families tour in Metro Detroit are usually licensed as Homes for the Aged or adult foster care homes, or they are marketing a level of help that may not match a license at all. Memory care is almost always a program inside one of those licenses—not a separate state category. Knowing that changes which questions you ask.',
    sections: [
      {
        heading: 'Assisted living is a marketing term here',
        paragraphs: [
          'The Michigan Department of Licensing and Regulatory Affairs (LARA) licenses Adult Foster Care (AFC) homes and Homes for the Aged (HFA). LARA is explicit: the state does not license “assisted living” or “independent living” as their own categories. A community can still use those words on a website. You should ask which license, if any, it holds, and what that license actually allows.',
          'An Adult Foster Care home provides room, board, personal care, supervision, and protection to 20 or fewer adults. A Home for the Aged provides room, board, and supervised personal care to 21 or more older adults—or to fewer residents when it is a distinct part of a licensed nursing home. Those are the buckets most “assisted living” tours fall into in Oakland, Wayne, Macomb, Washtenaw, and Livingston counties.',
        ],
      },
      {
        heading: 'Memory care is a program, not a separate license',
        paragraphs: [
          'Michigan does not issue a standalone memory care license. A secured dementia neighborhood is typically a program inside an HFA or AFC: extra training, different staffing, a locked or wander-managed environment, and a more structured day. That can be excellent. It can also be a converted hallway with a keypad.',
          'Ask what the license is, then ask how the memory program is staffed at night, how exit-seeking is handled, and whether the community will keep someone as dementia progresses. A locked door is not the same as a program. If you want the tour questions, use our memory care question list alongside this licensing picture.',
        ],
      },
      {
        heading: 'What a LARA survey is useful for',
        paragraphs: [
          'LARA inspects and investigates. Families can look up licensed AFC homes and Homes for the Aged through LARA’s public lookup tools. A survey or complaint investigation is a snapshot: the date, what was cited, whether it was a paperwork miss or a harm issue, and whether the same problem keeps coming back.',
          'A clean survey is not a personality test, and a citation is not always a reason to walk away. Repeat issues around medication, supervision, or unexplained injuries should slow you down. A missing form from two years ago should not. We help families read that difference instead of treating a Google review or a survey PDF as the whole story.',
        ],
      },
      {
        heading: 'Unlicensed and “exempt” settings',
        paragraphs: [
          'Some buildings that look like assisted living are not licensed as HFA or AFC. Independent living with à-la-carte home care is one example. Michigan law also allows certain Homes for the Aged to operate under an exemption if they meet specific requirements. The practical question for a family is not the slogan on the awning. It is: who is awake overnight, who can help with medications, and what happens if needs increase.',
          'This is general information, not legal advice. License rules and lookup tools change. For a specific building, confirm the current license on LARA’s site and ask the community to show it. Our job is to compare care settings in Southeast Michigan so you are not mixing an HFA, a small AFC home, and an unlicensed apartment as if they were the same product.',
        ],
      },
    ],
    relatedServiceSlugs: ['residential-care-homes', 'assisted-living'],
    relatedGuideSlugs: ['adult-foster-care-homes-michigan', 'assisted-living-vs-memory-care-vs-afc'],
    published: '2026-10-14',
    updated: '2026-10-14',
  },
  {
    slug: 'va-aid-and-attendance-michigan',
    title: 'VA Aid and Attendance for assisted living in Michigan',
    description:
      'How VA Aid and Attendance can help wartime veterans and surviving spouses with senior living costs in Southeast Michigan, and why it is not instant.',
    intro:
      'VA Aid and Attendance can help some wartime veterans and surviving spouses pay for assisted living, memory care, or a licensed residential care home. It is not automatic, it is not a Michigan Medicaid program, and it is not a same-week check. Families who mention VA status on the first call get a more honest short list.',
    sections: [
      {
        heading: 'Who this is usually for',
        paragraphs: [
          'Aid and Attendance is a VA pension add-on for veterans who served during a wartime period and for many surviving spouses. The person receiving care generally needs help with daily activities—bathing, dressing, medications, or protection from hazards of daily life—or is housebound. There are also income and net-worth rules. A parent who “was in the service” is not enough by itself; the wartime service and the care need both have to fit.',
          'This is one of the first questions we ask in Metro Detroit because it changes the budget conversation. A family that might only look at the least expensive adult foster care home may have more range if Aid and Attendance is likely. A family counting on a benefit that will not apply should not tour buildings they cannot sustain.',
        ],
      },
      {
        heading: 'It helps with care costs. It is not instant.',
        paragraphs: [
          'Approved benefits can offset part of a monthly assisted living or memory care bill. They do not replace a community’s admission process, and they rarely arrive before a hospital discharge date. Many families pay privately for weeks or months while a claim is pending. If someone tells you the VA will “take care of it by Friday,” get a second opinion.',
          'Paperwork usually includes military service records, medical evidence of the need for aid, and financial information. An accredited VA claims agent, Veterans Service Officer, or attorney who actually does this work is the right filing help. We are not a VA accredited claims office. We will not fill out the claim as if we were.',
        ],
      },
      {
        heading: 'How we use it in a Southeast Michigan search',
        paragraphs: [
          'Tell us in the first conversation if there is a veteran or surviving spouse. We then compare communities that fit the care level and a budget that includes—or does not include—Aid and Attendance. Some families in Oakland and Wayne counties use the benefit to stay closer to children. Others still need a lower-cost licensed home because the benefit will not cover a newer campus rate.',
          'This is general information, not benefits, tax, or legal advice. Eligibility and amounts change. Confirm details with the VA or an accredited representative. Our job is to keep the housing search honest so you are not mixing a hoped-for benefit with a lease you cannot keep.',
        ],
      },
    ],
    relatedServiceSlugs: ['community-comparisons', 'assisted-living'],
    relatedGuideSlugs: ['how-to-pay-for-senior-living-michigan', 'medicaid-assisted-living-michigan'],
    published: '2026-10-14',
    updated: '2026-10-14',
  },
  {
    slug: 'long-term-care-insurance-michigan',
    title: 'Using long-term care insurance for assisted living in Michigan',
    description:
      'How to check whether a long-term care policy covers assisted living or memory care in Michigan, what an elimination period means, and what to bring to the first tour.',
    intro:
      'A long-term care insurance policy can change a Metro Detroit search completely—or not at all. Some policies pay for assisted living and memory care. Some only pay for nursing homes. Some have a waiting period, a daily cap, or a definition of “assisted living” that does not match Michigan’s licenses. Read the policy before you fall in love with a community.',
    sections: [
      {
        heading: 'Get the policy, not the memory of the policy',
        paragraphs: [
          'Families often remember that “there is insurance” and nothing else. The useful facts are: does it cover assisted living, adult foster care, and memory care, or only skilled nursing? What is the daily or monthly maximum? How long do benefits last? What is the elimination period before payments start? Is there inflation protection?',
          'Ask the insurer or the agent of record for a benefits summary in writing. If the insured person has cognitive impairment, a family member with authority should make that call. Guessing from a folder in a drawer is how people tour $8,000 memory care on a policy that pays $150 a day after 90 days.',
        ],
      },
      {
        heading: 'Elimination periods and Michigan timing',
        paragraphs: [
          'An elimination period is a deductible in time. If the policy waits 90 days, someone still has to pay the community for those days. That matters after a hospital stay, when families want to move this week. It also matters if the person is already in assisted living and the clock has not officially started.',
          'Insurers usually want a care need that meets the policy’s trigger—often help with a set number of daily activities, or a cognitive impairment. A community that is not licensed the way the policy expects can create a claim problem. That is one reason we ask about licenses, not only about the word “assisted living” on the sign.',
        ],
      },
      {
        heading: 'How we compare communities when insurance is involved',
        paragraphs: [
          'Bring the daily maximum and the covered settings to the first consultation. We can then short-list Southeast Michigan communities whose real monthly cost is in range after the insurance, rather than showing you campuses that only work if you ignore the cap. If the policy will not cover a small adult foster care home, we will not pretend it will.',
          'This is not insurance advice. Policies differ. The carrier, an employer plan administrator, or a licensed insurance professional should confirm benefits. Our job is to match a care setting in Oakland, Wayne, Macomb, Washtenaw, or Livingston County to a budget you can actually keep once the claim is running.',
        ],
      },
    ],
    relatedServiceSlugs: ['community-comparisons', 'assisted-living'],
    relatedGuideSlugs: ['how-to-pay-for-senior-living-michigan', 'michigan-assisted-living-licensing'],
    published: '2026-10-14',
    updated: '2026-10-14',
  },
  {
    slug: 'memory-care-cost-metro-detroit',
    title: 'How much does memory care cost in Metro Detroit?',
    description:
      'What families in Oakland, Wayne, and nearby counties usually pay for memory care, why it costs more than assisted living, and how to compare quotes honestly.',
    intro:
      'Memory care in Metro Detroit costs more than standard assisted living in the same city because staffing, security, and programming cost more. The gap is often in the range of about $1,000 to $3,000 more per month, but the spread between a licensed home and a newer Oakland County campus can be larger than that. Online averages hide the add-ons that show up after a tour.',
    sections: [
      {
        heading: 'Why memory care is priced higher',
        paragraphs: [
          'A real memory care program needs more people on the floor, especially evenings and nights, plus training, a secured environment, and a day that is built for dementia—not a locked wing with the same calendar as assisted living. Communities charge for that. If a memory care rate looks almost identical to assisted living next door, ask what is actually different besides the keypad.',
          'Base rates usually include an apartment or private room, meals, housekeeping, and a stated care level. They often do not include incontinence supplies, extra medication passes, two-person transfers, a second person in the room, or a community fee at move-in. Those lines are where two “$6,500” quotes stop being comparable.',
        ],
      },
      {
        heading: 'How costs tend to differ by county',
        paragraphs: [
          'Newer campuses in Novi, Bloomfield, Troy, and Ann Arbor often sit at the high end. Western Wayne licensed homes and some Macomb options can land lower, sometimes with less activity programming or fewer nurses on site. Livingston County has fewer campuses, so families in Brighton or Howell sometimes compare against South Lyon or Ann Arbor and have to weigh drive time against price.',
          'Treat any number you see online as a starting point. Two buildings five miles apart in Farmington Hills and Livonia can differ by thousands of dollars a month once care levels are equalized. We gather the all-in number at the care level your loved one needs now—and the next level up—so a move-in special is not the whole story.',
        ],
      },
      {
        heading: 'How to compare without getting lost',
        paragraphs: [
          'Pick a monthly number the family can sustain for at least a year, including insurance or VA help if it is real. Then compare three to five memory care programs on staffing at night, what happens if the person declines, and the written fee schedule. A cheaper community that cannot keep someone safe is not a savings.',
          'Medicare does not pay for long-term memory care. Medicaid in Michigan does not usually buy a private memory care apartment the way families hope. If money is tight, say so early so the short list includes licensed settings that might work—not only the buildings with the nicest lobby. This is not a price quote; it is how we help families compare in Southeast Michigan.',
        ],
      },
    ],
    relatedServiceSlugs: ['memory-care', 'community-comparisons'],
    relatedGuideSlugs: ['assisted-living-cost-michigan', 'questions-to-ask-memory-care'],
    published: '2026-10-14',
    updated: '2026-10-14',
  },
  {
    slug: 'after-a-fall-next-48-hours',
    title: 'What to do in the 48 hours after a parent’s fall',
    description:
      'A practical sequence for Michigan families after a fall: medical care first, then how to decide among home, rehab, assisted living, and memory care without touring a dozen buildings.',
    intro:
      'A fall is how a lot of Metro Detroit senior-living searches start. The next 48 hours are for safety and information, not for signing a lease. You need medical clearance, a picture of daily needs, and one decision-maker—not twelve browser tabs of communities you have never seen.',
    sections: [
      {
        heading: 'Medical care first, shopping later',
        paragraphs: [
          'If the fall just happened, the question is emergency care, not apartments. Head injury, hip pain, new confusion, blood thinners, and an inability to get up are reasons to use the ER or call 911. If your parent is already at Beaumont Royal Oak, Trinity Health Livonia, Henry Ford West Bloomfield, or an Ann Arbor hospital, stay focused on the medical picture until someone can explain weight-bearing status, cognition, and whether they can go home.',
          'A “weakness” discharge note is not a care plan. Ask what help they need at night, whether they can take their own medications, and whether this is the first fall or the third. Those answers decide home-with-help versus assisted living versus memory care. They also decide whether a rehab stay is still appropriate.',
        ],
      },
      {
        heading: 'Do not tour the whole county this weekend',
        paragraphs: [
          'Panic touring is how families end up in the wrong building. Pick a decision-maker, gather the medication list, and name the cities people can actually visit. Then look at three to five options that match the care level—not every community with a vacancy in Oakland and Wayne County.',
          'If the hospital wants a name by Thursday, that is a placement timeline, not a reason to skip the care question. We work that timeline: openings, paperwork, and whether going home overnight is safe. A free consultation in those 48 hours is often worth more than a Saturday of unplanned drop-ins.',
        ],
      },
      {
        heading: 'Home, a child’s house, or a community',
        paragraphs: [
          'Home can work if the house is still safe, someone can supervise, and the fall was a one-time event with a clear medical cause. It is a weaker plan if night-time toileting, wandering, or an exhausted spouse is already in the picture. Moving in with an adult child can be a bridge. It can also injure the caregiver and delay a better setting.',
          'Assisted living, memory care, or a licensed adult foster care home becomes the more honest next step when overnight help is required or another fall is likely. You do not have to decide the rest of someone’s life in two days. You have to decide the next safe setting. We help Southeast Michigan families make that one decision without a family fee.',
        ],
      },
    ],
    relatedServiceSlugs: ['hospital-rehab-transitions', 'personalized-care-assessments'],
    relatedGuideSlugs: ['hospital-discharge-to-assisted-living', 'when-a-parent-cannot-live-alone'],
    published: '2026-10-14',
    updated: '2026-10-14',
  },
];

export const guideTopics: { name: string; description: string; slugs: string[] }[] = [
  {
    name: 'Paying for care',
    description: 'Cost, insurance, VA benefits, and Medicaid in Michigan.',
    slugs: [
      'assisted-living-cost-michigan',
      'memory-care-cost-metro-detroit',
      'how-to-pay-for-senior-living-michigan',
      'va-aid-and-attendance-michigan',
      'long-term-care-insurance-michigan',
      'medicaid-assisted-living-michigan',
    ],
  },
  {
    name: 'Hospital, rehab, and crisis',
    description: 'Discharge deadlines, falls, and how long placement actually takes.',
    slugs: [
      'hospital-discharge-to-assisted-living',
      'after-a-fall-next-48-hours',
      'how-long-does-senior-placement-take',
      'when-a-parent-cannot-live-alone',
    ],
  },
  {
    name: 'Choosing a setting',
    description: 'Assisted living, memory care, adult foster care, and how to tour.',
    slugs: [
      'assisted-living-vs-memory-care-vs-afc',
      'when-is-it-time-for-memory-care',
      'adult-foster-care-homes-michigan',
      'independent-living-vs-assisted-living',
      'how-to-tour-assisted-living',
      'questions-to-ask-memory-care',
    ],
  },
  {
    name: 'Michigan rules',
    description: 'How LARA licenses senior living, and what “memory care” legally is not.',
    slugs: ['michigan-assisted-living-licensing'],
  },
];

export const featuredGuideSlugs = [
  'assisted-living-cost-michigan',
  'memory-care-cost-metro-detroit',
  'hospital-discharge-to-assisted-living',
  'michigan-assisted-living-licensing',
  'after-a-fall-next-48-hours',
  'va-aid-and-attendance-michigan',
];


export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function guidePath(slug: string): string {
  return `/guides/${slug}`;
}
