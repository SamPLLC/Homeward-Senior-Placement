export type City = {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  nearby: string[];
  intro: string;
  details: string;
  notes: [string, string, string];
  hospitals: string;
  setting: string;
};

export const cities: City[] = [
  {
    name: 'Farmington Hills',
    slug: 'farmington-hills',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['farmington', 'southfield', 'novi', 'west-bloomfield'],
    intro:
      'Farmington Hills families often need senior care that stays close to children and grandchildren in Oakland County. We help you compare assisted living, memory care, and residential care options along the 12 Mile, Orchard Lake, and Grand River corridors.',
    details:
      'This is one of Metro Detroit’s larger suburbs, so availability, pricing, and care levels can vary widely from one community to the next. A local advisor can narrow the list to places that fit your loved one’s routine, budget, and medical needs—then coordinate tours so you are not starting from scratch.',
    notes: [
      'Strong mix of assisted living and memory care near major roads and medical offices',
      'Good option when adult children live in Farmington, West Bloomfield, or Novi',
      'We verify pricing, waitlists, and what daily care actually includes',
    ],
    hospitals: 'Corewell Health Farmington Hills Hospital and nearby Henry Ford West Bloomfield',
    setting: 'The 12 Mile, Orchard Lake, and Grand River corridors give families a lot of buildings to sort through in a short drive.',
  },
  {
    name: 'Northville',
    slug: 'northville',
    county: 'Wayne and Oakland counties',
    countySlug: 'wayne-county',
    nearby: ['plymouth', 'novi', 'livonia', 'canton'],
    intro:
      'Northville families often want senior living that still feels like a small downtown community. We look at assisted living, memory care, and licensed residential care in Northville and nearby Plymouth and Novi.',
    details:
      'Many people searching here want a quieter setting, easy visits from family, and communities that are not far from downtown Northville. We compare care levels, social programs, and costs so you can tour a short list instead of driving all over western Wayne County.',
    notes: [
      'Fits families who want a smaller-town feel with Metro Detroit access',
      'Nearby Plymouth and Novi add more assisted living and memory care choices',
      'We help match budget, mobility needs, and how often family can visit',
    ],
    hospitals: 'Trinity Health Livonia and Ascension Providence Hospital in Novi',
    setting: 'Downtown Northville and the surrounding township make visit frequency a real part of the decision, not an afterthought.',
  },
  {
    name: 'Plymouth',
    slug: 'plymouth',
    county: 'Wayne County',
    countySlug: 'wayne-county',
    nearby: ['northville', 'canton', 'livonia', 'ann-arbor'],
    intro:
      'Plymouth is a common starting point for families who want senior care close to Kellogg Park, local churches, and relatives in western Wayne County. We compare assisted living, memory care, and residential care in Plymouth and the surrounding townships.',
    details:
      'Some families want to stay in Plymouth itself; others are open to Northville, Canton, or Livonia if the care, price, or availability is a better fit. We explain those tradeoffs clearly and set up tours around your schedule.',
    notes: [
      'Walkable downtown makes it easier for spouses and adult children to visit',
      'Solid nearby options if Plymouth communities are full or above budget',
      'We review memory care security, staffing, and daily structure when needed',
    ],
    hospitals: 'Trinity Health Livonia and Trinity Health Ann Arbor',
    setting: 'Kellogg Park and the downtown walkability are often why families want to stay in Plymouth rather than move farther east.',
  },
  {
    name: 'Livonia',
    slug: 'livonia',
    county: 'Wayne County',
    countySlug: 'wayne-county',
    nearby: ['farmington-hills', 'plymouth', 'canton', 'northville'],
    intro:
      'Livonia is one of the most searched cities in Wayne County for assisted living and memory care. We help families compare communities near I-96, I-275, and Trinity Health Livonia so the next step is local and realistic.',
    details:
      'Because Livonia is large, two buildings a few miles apart can feel very different in price, staffing, and activities. We shortlist places that match your loved one’s care needs, then go with you to ask the questions that are easy to miss on a first tour.',
    notes: [
      'Wide range of assisted living, residential care, and memory care options',
      'Convenient for families commuting from Farmington Hills, Plymouth, or Northville',
      'We check availability quickly so you are not calling communities one by one',
    ],
    hospitals: 'Trinity Health Livonia (St. Mary Mercy)',
    setting: 'I-96 and I-275 make Livonia a practical midpoint for families spread across western Wayne and southern Oakland County.',
  },
  {
    name: 'West Bloomfield',
    slug: 'west-bloomfield',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['orchard-lake', 'keego-harbor', 'farmington-hills', 'bloomfield-hills'],
    intro:
      'West Bloomfield families often look for senior care that balances privacy, cultural fit, and higher levels of support. We compare assisted living, memory care, and residential care around the lakes and throughout western Oakland County.',
    details:
      'People searching here may want a quieter residential setting, culturally familiar dining, or a community close to family in Farmington Hills and Bloomfield. We help you compare those details—not just the brochure amenities—before you tour.',
    notes: [
      'Many families want a close match on culture, language, and daily routine',
      'Memory care demand can be high; we check waitlists and respite options',
      'Nearby Bloomfield Hills, Farmington Hills, and Novi expand the list when timing is tight',
    ],
    hospitals: 'Henry Ford West Bloomfield Hospital',
    setting: 'The lakes, Orchard Lake Road, and a mix of established neighborhoods make “close to home” mean something specific here.',
  },
  {
    name: 'Bloomfield Hills',
    slug: 'bloomfield-hills',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['franklin', 'beverly-hills', 'birmingham', 'west-bloomfield'],
    intro:
      'Bloomfield Hills families often want senior care that stays close to home, Woodward, and relatives in Birmingham, Troy, and West Bloomfield. We compare assisted living, memory care, and residential care in Bloomfield Hills and the surrounding Oakland County communities.',
    details:
      'This is a smaller city, so the right fit may be in Bloomfield Hills itself or a few minutes away in Bloomfield Township, Birmingham, or Troy. We help you compare care level, privacy, and monthly cost before you tour, so you are not starting with a long, unmatched list.',
    notes: [
      'A strong match when family wants to stay near Cranbrook, Woodward, and local churches',
      'Bloomfield Township, West Bloomfield, and Troy add more assisted living and memory care options nearby',
      'We check waitlists and what daily care actually includes before you visit',
    ],
    hospitals: 'Corewell Health Troy Hospital and Beaumont (Corewell Health) Royal Oak',
    setting: 'Woodward, Cranbrook, and a compact city limit mean many searches expand into Bloomfield Township within a few minutes.',
  },
  {
    name: 'Bloomfield Township',
    slug: 'bloomfield-township',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['bloomfield-hills', 'west-bloomfield', 'birmingham', 'troy'],
    intro:
      'Bloomfield Township families often search for senior care that stays in Oakland County, close to Telegraph, Square Lake, and nearby Bloomfield Hills. We help you compare assisted living, memory care, and residential care in Bloomfield Township and the communities around it.',
    details:
      'Township searches can mix Bloomfield Hills, West Bloomfield, Birmingham, and Troy results. We sort that out with a short conversation about needs, budget, and how far family can travel, then set up tours only at places that can actually take your loved one.',
    notes: [
      'Useful when you want to stay close to Bloomfield Hills without limiting yourself to one city',
      'West Bloomfield and Troy are close if memory care availability is tight locally',
      'We compare in-home support and community living so a move happens only if it is the right next step',
    ],
    hospitals: 'Corewell Health Troy Hospital and Henry Ford West Bloomfield Hospital',
    setting: 'Telegraph, Square Lake, and Woodward-adjacent neighborhoods put several cities in a 15-minute radius.',
  },
  {
    name: 'Novi',
    slug: 'novi',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['northville', 'farmington-hills', 'west-bloomfield', 'wixom'],
    intro:
      'Novi is a frequent search for families who want newer senior living communities with easy access to I-96, Twelve Oaks, and nearby Northville. We help you compare assisted living, memory care, and residential care in Novi and western Oakland County.',
    details:
      'Newer buildings can look similar online. The differences show up in staffing, memory care design, move-in specials, and what is actually included in the monthly fee. We gather that information for you and tour only the communities that fit.',
    notes: [
      'Popular with families who want a newer community and easy highway access',
      'Northville, Farmington Hills, and Wixom add extra choices nearby',
      'We compare all-in pricing so monthly costs are not a surprise later',
    ],
    hospitals: 'Ascension Providence Hospital in Novi',
    setting: 'I-96, Twelve Oaks, and a cluster of newer campuses make Novi a high-comparison market, not a one-building decision.',
  },
  {
    name: 'Ann Arbor',
    slug: 'ann-arbor',
    county: 'Washtenaw County',
    countySlug: 'washtenaw-county',
    nearby: ['ypsilanti', 'saline', 'plymouth', 'canton'],
    intro:
      'Ann Arbor families often need senior care that stays close to University of Michigan hospitals, adult children in town, or a long-time Washtenaw County home. We compare assisted living, memory care, and residential care in Ann Arbor and nearby communities.',
    details:
      'Medical access, walkability, and continuum-of-care campuses matter more here than in many suburbs. We help you weigh Ann Arbor options against nearby Plymouth, Saline, or Ypsilanti when price, availability, or the right memory care program is a better match.',
    notes: [
      'Helpful when hospital follow-up and specialist visits are part of daily life',
      'Independent living through memory care can be compared on one short list',
      'We coordinate tours around family schedules in Ann Arbor and Metro Detroit',
    ],
    hospitals: 'Michigan Medicine and Trinity Health Ann Arbor',
    setting: 'Campus, hospital, and downtown life make medical access and walkability bigger factors here than in most suburbs.',
  },
  {
    name: 'Troy',
    slug: 'troy',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['clawson', 'birmingham', 'royal-oak', 'rochester-hills'],
    intro:
      'Troy is a hub for Oakland County families searching for assisted living and memory care close to work, Big Beaver, and nearby Royal Oak or Rochester Hills. We compare local communities and residential care so you can stay close without guessing.',
    details:
      'Troy has a wide spread of buildings, from smaller residences to larger campuses. We look at care level, transportation, and how easy it is for family to visit after work, then set up a focused set of tours.',
    notes: [
      'Convenient for families living or working along the I-75 corridor',
      'Nearby Royal Oak, Rochester Hills, and Birmingham add more options',
      'We help you compare memory care programs, not just location and photos',
    ],
    hospitals: 'Corewell Health Troy Hospital',
    setting: 'Big Beaver, I-75, and after-work visit patterns shape which Troy communities families actually use.',
  },
  {
    name: 'Sterling Heights',
    slug: 'sterling-heights',
    county: 'Macomb County',
    countySlug: 'macomb-county',
    nearby: ['troy', 'shelby-township', 'clinton-township', 'rochester'],
    intro:
      'Sterling Heights is one of Macomb County’s largest cities, and families here often want senior care that stays affordable and close to relatives. We compare assisted living, memory care, and residential care throughout Sterling Heights and nearby Troy and Clinton Township.',
    details:
      'Search results can mix very different care levels and price points. We sort that out with a short conversation about needs and budget, then show you communities that actually have availability.',
    notes: [
      'Often a fit for families who want Macomb County to remain home',
      'Good range of mid-priced assisted living and residential care options',
      'We confirm what care is included before you tour or put down a deposit',
    ],
    hospitals: 'Henry Ford Macomb and Ascension Macomb-Oakland Hospital',
    setting: 'Hall Road, Van Dyke, and a large residential grid make “nearby” mean a lot of buildings that still need sorting.',
  },
  {
    name: 'Rochester Hills',
    slug: 'rochester-hills',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['rochester', 'lake-orion', 'auburn-hills', 'troy'],
    intro:
      'Rochester Hills families often look for senior living close to downtown Rochester, local parks, and adult children in northern Oakland County. We help compare assisted living, memory care, and residential care in Rochester Hills and nearby Rochester.',
    details:
      'Some people want a quieter residential campus; others need stronger memory care or easier access to specialists in Troy. We map those needs to real openings so you are not touring communities that cannot take your loved one.',
    notes: [
      'Popular when family wants to stay near Rochester’s downtown and churches',
      'Memory care and higher-acuity support can be compared alongside assisted living',
      'Troy and Shelby Township are close if timing or budget requires a wider search',
    ],
    hospitals: 'Corewell Health (Crittenton) in Rochester and Corewell Health Troy Hospital',
    setting: 'Parks, Rochester Road, and downtown Rochester visits are often part of what “staying local” means here.',
  },
  {
    name: 'Canton',
    slug: 'canton',
    county: 'Wayne County',
    countySlug: 'wayne-county',
    nearby: ['plymouth', 'northville', 'livonia', 'ypsilanti'],
    intro:
      'Canton Township families often search for senior care that stays west of Detroit, close to Ford Road, I-275, and relatives in Plymouth or Livonia. We compare assisted living, memory care, and residential care in Canton and nearby communities.',
    details:
      'Canton has grown quickly, and options range from smaller licensed homes to full assisted living. We help you decide whether staying in Canton, moving toward Plymouth, or looking in Livonia is the better fit for care, cost, and family visits.',
    notes: [
      'Convenient for multi-generation families in western Wayne County',
      'A smaller residential care home can be a first look when a large campus feels like too much',
      'We check availability in Canton, Plymouth, and Livonia at the same time',
    ],
    hospitals: 'Trinity Health Livonia and Trinity Health Ann Arbor',
    setting: 'Ford Road and I-275 put Canton between Plymouth’s downtown and Livonia’s medical-adjacent inventory.',
  },
  {
    name: 'Royal Oak',
    slug: 'royal-oak',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['berkley', 'clawson', 'pleasant-ridge', 'ferndale'],
    intro:
      'Royal Oak families often want senior care close to downtown, Beaumont, and adult children who already live in the city. We compare assisted living, memory care, and residential care in Royal Oak and nearby Troy and Berkley.',
    details:
      'Space is tighter here than in many suburbs, so the right fit may be a smaller residence in Royal Oak or a campus a few minutes north in Troy. We help you weigh walkability, medical access, and care level before you spend a weekend touring.',
    notes: [
      'Good when frequent visits from family in downtown Royal Oak matter most',
      'Nearby Troy, Berkley, and Madison Heights add more inventory',
      'We help you ask about staffing, activities, and what happens if care needs increase',
    ],
    hospitals: 'Beaumont (Corewell Health) William Beaumont University Hospital in Royal Oak',
    setting: 'Downtown Royal Oak and the Beaumont campus make medical access and walkability the usual starting point.',
  },
  {
    name: 'Birmingham',
    slug: 'birmingham',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['beverly-hills', 'bloomfield-hills', 'franklin', 'royal-oak'],
    intro:
      'Birmingham families often want senior living that stays close to downtown, Woodward, and adult children who work along Big Beaver. We compare assisted living, memory care, and smaller residential settings in Birmingham and neighboring Bloomfield Hills and Troy.',
    details:
      'Inventory inside Birmingham itself is limited. Many searches end in Bloomfield Township, Troy, or Royal Oak once care level and monthly cost are clear. We make that tradeoff explicit so you are not surprised on the second tour.',
    notes: [
      'Downtown Birmingham visits are often the reason families want to stay this close',
      'Bloomfield Hills and Troy usually add the next openings when Birmingham is full',
      'We compare privacy, care, and cost before you look at a long list of campuses',
    ],
    hospitals: 'Corewell Health Troy Hospital and Beaumont (Corewell Health) Royal Oak',
    setting: 'A compact downtown and Woodward frontage mean “Birmingham” searches often include the first ring of neighboring cities.',
  },
  {
    name: 'Rochester',
    slug: 'rochester',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['rochester-hills', 'auburn-hills', 'troy', 'shelby-township'],
    intro:
      'Rochester families often look for senior care within a short drive of downtown, local churches, and relatives in Rochester Hills. We compare assisted living, memory care, and licensed residential care around Rochester and northern Oakland County.',
    details:
      'The city is small, so the right community may sit in Rochester Hills or toward Auburn Hills. We keep downtown Rochester in the picture—visit frequency, familiar shops, and medical follow-up—while matching the actual care level your loved one needs.',
    notes: [
      'A fit when staying near downtown Rochester is part of quality of life',
      'Rochester Hills usually offers a wider set of assisted living and memory care campuses',
      'We check which buildings can support higher care if needs increase after move-in',
    ],
    hospitals: 'Corewell Health (Crittenton) in Rochester',
    setting: 'Downtown Rochester and the Paint Creek area make a “short visit” the standard families are trying to keep.',
  },
  {
    name: 'Auburn Hills',
    slug: 'auburn-hills',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['pontiac', 'lake-orion', 'rochester-hills', 'troy'],
    intro:
      'Auburn Hills families often need senior living that stays near I-75, Oakland University, and relatives commuting from Rochester Hills or Troy. We compare assisted living, memory care, and residential care in Auburn Hills and the surrounding north Oakland communities.',
    details:
      'This market sits between Rochester Hills campuses and Bloomfield Township or Troy options that can differ in price and care level. We help you compare those differences against care, not just the highway exit.',
    notes: [
      'Practical for families who work along I-75 and want a short evening visit',
      'Rochester Hills and Troy add more memory care inventory when Auburn Hills is limited',
      'We confirm staffing and included care so a lower rate is not missing essential help',
    ],
    hospitals: 'Corewell Health (Crittenton) in Rochester and Trinity Health Oakland in Pontiac',
    setting: 'I-75, Oakland University, and a commercial corridor sit next to quieter residential pockets that families still want to stay near.',
  },
  {
    name: 'Commerce Township',
    slug: 'commerce-township',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['milford', 'keego-harbor', 'walled-lake', 'white-lake'],
    intro:
      'Commerce Township families often want senior living that stays west of the lakes, close to Haggerty, Union Lake, and relatives in Walled Lake or West Bloomfield. We compare assisted living, memory care, and smaller licensed homes in Commerce and neighboring communities.',
    details:
      'This area sits between more expensive West Bloomfield options and farther-west Wixom or South Lyon campuses. We help you compare those price and care differences so a longer drive is only on the table if it actually improves the fit.',
    notes: [
      'Useful when family is rooted around Union Lake, Haggerty, and Walled Lake schools',
      'West Bloomfield and Wixom often complete the short list if Commerce openings are limited',
      'We compare both campus living and house-like adult foster care',
    ],
    hospitals: 'Henry Ford West Bloomfield Hospital and Huron Valley-Sinai in Commerce Township',
    setting: 'Huron Valley-Sinai, the lakes, and Haggerty Road put medical access and family visits in the same conversation.',
  },
  {
    name: 'White Lake',
    slug: 'white-lake',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['waterford', 'clarkston', 'commerce-township', 'walled-lake'],
    intro:
      'White Lake families often look for senior care that stays in northwest Oakland County rather than moving down to bigger campuses in Novi or Troy. We compare assisted living, memory care, and licensed residential care in White Lake, Commerce Township, and Walled Lake.',
    details:
      'Options are more spread out here. Some families do well in a smaller licensed home; others need a full memory care program that may sit in Commerce Township or toward Walled Lake. We map that honestly against how often relatives can visit.',
    notes: [
      'A fit for families who want to remain in the lakes-and-township part of Oakland County',
      'Commerce Township and Walled Lake usually add the next communities when White Lake is thin',
      'We match care level first, then distance, so a closer home is not under-equipped',
    ],
    hospitals: 'Huron Valley-Sinai in Commerce Township and Trinity Health Oakland in Pontiac',
    setting: 'M-59, the lakes, and a township layout mean the right community may be local even if it is not inside White Lake’s exact borders.',
  },
  {
    name: 'Walled Lake',
    slug: 'walled-lake',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['keego-harbor', 'commerce-township', 'novi', 'west-bloomfield'],
    intro:
      'Walled Lake families often want senior living close to the lake, Maple Road, and relatives in Commerce Township or Novi. We compare assisted living, memory care, and residential care around Walled Lake and western Oakland County.',
    details:
      'The city is small, so most short lists include Commerce Township, Novi, or Wixom. We keep Walled Lake as the center of visits and daily life, then compare which nearby community actually has the right care and a realistic monthly cost.',
    notes: [
      'Good when family wants to stay in the Walled Lake / Commerce schools area',
      'Novi often adds newer campuses if a more structured memory care program is needed',
      'We explain the drive-time tradeoff before you spend a Saturday touring',
    ],
    hospitals: 'Huron Valley-Sinai and Ascension Providence Hospital in Novi',
    setting: 'Maple Road, the lake, and a compact downtown make nearby Commerce and Novi the usual overflow markets.',
  },
  {
    name: 'Wixom',
    slug: 'wixom',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['novi', 'walled-lake', 'commerce-township', 'south-lyon'],
    intro:
      'Wixom families often search for senior care along I-96 that stays between Novi and South Lyon. We compare assisted living, memory care, and licensed residential care in Wixom and the western Oakland communities around it.',
    details:
      'Wixom itself has fewer name-brand campuses than Novi, which is why many searches expand west to South Lyon or east to Novi. We help you compare those options on care and cost, not just which highway exit looks convenient.',
    notes: [
      'Practical for families living or working along I-96 between Novi and Brighton',
      'Novi and South Lyon usually complete the list when Wixom openings are limited',
      'We check whether a farther campus actually offers better memory care or just a newer lobby',
    ],
    hospitals: 'Ascension Providence Hospital in Novi and Huron Valley-Sinai',
    setting: 'I-96 and the Novi–South Lyon stretch make Wixom a midpoint search, not a dead end.',
  },
  {
    name: 'South Lyon',
    slug: 'south-lyon',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['wixom', 'novi', 'brighton', 'northville'],
    intro:
      'South Lyon families often want senior living that stays in the southwestern corner of Oakland County, close to downtown, local churches, and relatives who also use Novi or Brighton. We compare assisted living, memory care, and smaller residential homes in South Lyon and nearby towns.',
    details:
      'This is a smaller market. The right care may be in South Lyon, toward Wixom, or into Livingston County around Brighton. We compare those counties’ pricing and programs so you know why a slightly longer drive might be worth it—or not.',
    notes: [
      'A fit when family wants a smaller-town setting rather than a Novi-style campus',
      'Wixom and Brighton add more assisted living and memory care if local homes cannot meet the care level',
      'We keep visit distance honest; a cheaper community an hour away is not always a win',
    ],
    hospitals: 'St. Joseph Mercy Brighton / Trinity Health Livingston and Ascension Providence Novi',
    setting: 'A small downtown and the Pontiac Trail / 10 Mile area sit between Oakland and Livingston options.',
  },
  {
    name: 'Brighton',
    slug: 'brighton',
    county: 'Livingston County',
    countySlug: 'livingston-county',
    nearby: ['howell', 'south-lyon', 'wixom', 'ann-arbor'],
    intro:
      'Brighton families often need senior care that stays in Livingston County, close to downtown, I-96, and relatives who also shop and work along Grand River. We compare assisted living, memory care, and residential care in Brighton and nearby Howell.',
    details:
      'Brighton sits between Oakland County campuses and Ann Arbor medical care. Some families want to stay in Livingston; others need Michigan Medicine access in Ann Arbor. We compare those priorities against real openings and monthly cost.',
    notes: [
      'A strong search when the family is rooted in Livingston County, not Oakland',
      'Howell adds more options; Ann Arbor adds medical access if specialists are the driver',
      'We compare Livingston pricing against Novi or South Lyon so you see the tradeoff clearly',
    ],
    hospitals: 'Trinity Health Livingston and St. Joseph Mercy Brighton, with Michigan Medicine a short drive south',
    setting: 'Grand River, I-96, and a walkable downtown make Brighton the Livingston County hub for a lot of family visits.',
  },
  {
    name: 'Howell',
    slug: 'howell',
    county: 'Livingston County',
    countySlug: 'livingston-county',
    nearby: ['brighton', 'south-lyon', 'wixom', 'ann-arbor'],
    intro:
      'Howell families often want senior living that stays in the county seat, close to downtown, local churches, and Trinity Health Livingston. We compare assisted living, memory care, and licensed residential care in Howell and nearby Brighton.',
    details:
      'Howell is farther from Metro Detroit campuses, which is either the point or a problem depending on where adult children live. We match care to visit patterns: stay in Howell if family is local; look toward Brighton or even Ann Arbor if medical access or a specific memory care program is missing.',
    notes: [
      'Fits families who live, work, and worship in Howell and want to keep that intact',
      'Brighton is the usual next city when Howell does not have the right memory care opening',
      'We are direct about drive time for children coming from Oakland or Wayne County',
    ],
    hospitals: 'Trinity Health Livingston in Howell',
    setting: 'The county seat, Grand River, and a true downtown still define what “local” means for Howell families.',
  },
  {
    name: 'Madison Heights',
    slug: 'madison-heights',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['clawson', 'royal-oak', 'troy', 'ferndale'],
    intro:
      'Madison Heights families often want senior care along I-75 and 13 Mile that stays close to Royal Oak, Troy, and relatives in Sterling Heights. We compare assisted living, memory care, and residential care in Madison Heights and the first ring of Oakland and Macomb cities.',
    details:
      'The city is geographically small and densely built, so the right community may sit in Troy, Royal Oak, or Sterling Heights. We treat Madison Heights as the home base for visits and then compare neighboring inventory on care and cost.',
    notes: [
      'A practical search for families living along John R, 13 Mile, and I-75',
      'Troy and Royal Oak add more assisted living and memory care campuses',
      'Sterling Heights can add more Macomb County options if budget is the constraint',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak and Ascension Macomb-Oakland',
    setting: 'I-75 and 13 Mile put Madison Heights between Royal Oak medical access and Sterling Heights inventory.',
  },
  {
    name: 'Ferndale',
    slug: 'ferndale',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['pleasant-ridge', 'huntington-woods', 'oak-park', 'royal-oak'],
    intro:
      'Ferndale families often want senior living close to Nine Mile, Woodward, and adult children who already live in the city or in Royal Oak. We compare assisted living, memory care, and smaller residential settings in Ferndale and neighboring Oak Park, Berkley, and Royal Oak.',
    details:
      'Ferndale itself has limited large-campus inventory. Most families end up comparing nearby Royal Oak or Oak Park once the care level is clear. We keep downtown Ferndale visit habits in the plan so the next community is still a short drive.',
    notes: [
      'Good when frequent visits from family in Ferndale or Royal Oak are the priority',
      'Royal Oak and Berkley usually add the next assisted living and memory care openings',
      'We look at smaller licensed homes when a large campus feels like the wrong social fit',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak',
    setting: 'Nine Mile and Woodward make Ferndale a visit-heavy search that often lands in the next city over.',
  },
  {
    name: 'Berkley',
    slug: 'berkley',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['huntington-woods', 'clawson', 'royal-oak', 'ferndale'],
    intro:
      'Berkley families often look for senior care that stays in the 12 Mile and Coolidge area, close to Royal Oak hospitals and relatives in Ferndale or Birmingham. We compare assisted living, memory care, and residential care in Berkley and the surrounding Woodward-adjacent cities.',
    details:
      'Berkley is residential and compact. The short list usually includes Royal Oak and sometimes Birmingham or Oak Park. We help you compare those cities on care, not just which one has the more familiar street names.',
    notes: [
      'A fit when the family is already using Beaumont Royal Oak and wants a short trip back',
      'Royal Oak and Ferndale are the usual neighboring markets',
      'We compare smaller homes against campuses if your loved one does better in a quieter setting',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak',
    setting: '12 Mile, Coolidge, and a tight residential grid keep Berkley searches close to Royal Oak.',
  },
  {
    name: 'Oak Park',
    slug: 'oak-park',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['huntington-woods', 'lathrup-village', 'southfield', 'ferndale'],
    intro:
      'Oak Park families often need senior living that stays near Coolidge, 10 Mile, and relatives in Ferndale or Royal Oak. We compare assisted living, memory care, and licensed residential care in Oak Park and neighboring Oakland County cities.',
    details:
      'Oak Park searches often overlap Ferndale and Royal Oak results. We start with care needs and cultural or faith preferences, then look at which nearby community can actually meet them on a budget the family can maintain.',
    notes: [
      'Useful when family is based along Coolidge between 8 Mile and 11 Mile',
      'Ferndale and Royal Oak typically add more community inventory',
      'We take dining, faith, and visiting patterns seriously in the match, not as extras',
    ],
    hospitals: 'Ascension Providence Southfield and Beaumont (Corewell Health) Royal Oak',
    setting: 'Coolidge and 10 Mile put Oak Park between western Oakland campuses and the Woodward-adjacent cities.',
  },
  {
    name: 'Shelby Township',
    slug: 'shelby-township',
    county: 'Macomb County',
    countySlug: 'macomb-county',
    nearby: ['sterling-heights', 'clinton-township', 'rochester', 'rochester-hills'],
    intro:
      'Shelby Township families often search for senior care along Hall Road and 26 Mile, close to Sterling Heights and relatives in Rochester. We compare assisted living, memory care, and residential care in Shelby Township and northern Macomb County.',
    details:
      'This township has grown quickly and now holds a mix of newer campuses and smaller homes. We compare what is included in the monthly fee, how memory care is staffed, and whether staying in Macomb still meets the medical picture.',
    notes: [
      'One of Macomb County’s most active senior-living search areas',
      'Sterling Heights and Clinton Township complete most short lists',
      'We compare newer buildings carefully; new does not always mean better staffing',
    ],
    hospitals: 'Henry Ford Macomb and Corewell Health in Rochester',
    setting: 'Hall Road, 26 Mile, and rapid township growth created a lot of inventory that still has to be matched to care.',
  },
  {
    name: 'Clinton Township',
    slug: 'clinton-township',
    county: 'Macomb County',
    countySlug: 'macomb-county',
    nearby: ['sterling-heights', 'shelby-township', 'rochester', 'troy'],
    intro:
      'Clinton Township families often need senior care close to Henry Ford Macomb, Groesbeck, and relatives across central Macomb County. We compare assisted living, memory care, and licensed residential care in Clinton Township, Sterling Heights, and Mount Clemens.',
    details:
      'Hospital follow-up is a frequent reason families start here. We look at which communities can support the discharge plan, how far adult children can drive, and whether a smaller adult foster care home or a larger campus is the safer next step.',
    notes: [
      'A natural search after a stay at Henry Ford Macomb',
      'Sterling Heights and Shelby Township add more campus-style assisted living',
      'We work on hospital-to-community timing when the discharge date is already set',
    ],
    hospitals: 'Henry Ford Macomb Hospital in Clinton Township',
    setting: 'Groesbeck, Hall Road, and the hospital campus make Clinton Township a medical-access search as much as a housing search.',
  },
  {
    name: 'Ypsilanti',
    slug: 'ypsilanti',
    county: 'Washtenaw County',
    countySlug: 'washtenaw-county',
    nearby: ['ann-arbor', 'canton', 'saline', 'plymouth'],
    intro:
      'Ypsilanti families often look for senior care that stays in Washtenaw County, close to Trinity Health Ann Arbor, EMU, and relatives who also use Ann Arbor or Canton. We compare assisted living, memory care, and residential care in Ypsilanti and neighboring communities.',
    details:
      'Cost in Ypsilanti can look different from downtown Ann Arbor, which is why many families start here. We compare those savings against care quality and how often family from Ann Arbor or Wayne County can visit.',
    notes: [
      'A practical Washtenaw County search when Ann Arbor pricing is out of reach',
      'Ann Arbor adds medical-campus options; Canton adds Wayne County inventory',
      'We check whether a lower rate still includes the medication and memory support you need',
    ],
    hospitals: 'Trinity Health Ann Arbor (St. Joseph Mercy) on the Ypsilanti / Ann Arbor line',
    setting: 'Washtenaw Avenue, I-94, and the hospital campus sit between Ann Arbor pricing and Wayne County alternatives.',
  },
  {
    name: 'Saline',
    slug: 'saline',
    county: 'Washtenaw County',
    countySlug: 'washtenaw-county',
    nearby: ['ann-arbor', 'ypsilanti', 'canton', 'plymouth'],
    intro:
      'Saline families often want senior living that keeps a small-city feel, close to downtown, US-12, and relatives who work in Ann Arbor. We compare assisted living, memory care, and licensed residential care in Saline and nearby Washtenaw County communities.',
    details:
      'Saline is smaller than Ann Arbor, so the right memory care or higher-staffing option may sit north in Ann Arbor or toward Ypsilanti. We help you keep Saline as home base for visits while matching the actual clinical need.',
    notes: [
      'A fit when the family wants to stay in southern Washtenaw County',
      'Ann Arbor is the usual next look for a broader set of campuses and specialists',
      'We will not stretch a Saline-only search if the care level is not available locally',
    ],
    hospitals: 'Michigan Medicine and Trinity Health Ann Arbor, about a short drive north',
    setting: 'Downtown Saline and US-12 make this a southern Washtenaw search with Ann Arbor as the medical overflow.',
  },
  {
    name: 'Farmington',
    slug: 'farmington',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['farmington-hills', 'livonia', 'novi', 'franklin'],
    intro:
      'Farmington is the smaller city on Grand River, not the larger suburb of Farmington Hills around it. Families who say “Farmington” often mean downtown, Shiawassee, or Riley Park, and they want a parent close enough that a weekday visit is still easy.',
    details:
      'Most assisted living and memory care inventory sits in Farmington Hills rather than inside Farmington’s city limits. We sort that out on the first call so you are not touring a campus that is “Farmington” only in a mailing address. Livonia is the other nearby look when Oakland County pricing or availability does not fit.',
    notes: [
      'A downtown Farmington search is different from a Farmington Hills corridor search',
      'Farmington Hills usually supplies the campuses; Farmington is the visit anchor',
      'We say so when a community is outside the city, before you drive there',
    ],
    hospitals: 'Corewell Health Farmington Hills Hospital, a short drive into Farmington Hills',
    setting: 'Grand River, Shiawassee, and a compact downtown sit inside a much larger Farmington Hills search area.',
  },
  {
    name: 'Southfield',
    slug: 'southfield',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['farmington-hills', 'lathrup-village', 'oak-park', 'beverly-hills'],
    intro:
      'Southfield families usually want senior care that stays near the Lodge, Telegraph, or Evergreen, close to work and to Ascension Providence. The city is large enough that the Civic Center, 12 Mile, and the northwestern corner are not the same search.',
    details:
      'Southfield borders Farmington Hills, Lathrup Village, Oak Park, Beverly Hills, and Franklin. A community five minutes toward Farmington Hills can be a better care match than one deeper in Southfield, and the reverse is true when Providence follow-up is the reason you are looking here. We compare those drives against care level and monthly cost.',
    notes: [
      'Useful when family works along the Lodge, Telegraph, or Northwestern Highway',
      'Providence Hospital makes this a common discharge starting point',
      'Farmington Hills and Oak Park are the usual next cities if Southfield openings are thin',
    ],
    hospitals: 'Ascension Providence Hospital in Southfield',
    setting: 'The Lodge, Telegraph, Evergreen, and the Civic Center split Southfield into more than one market.',
  },
  {
    name: 'Pontiac',
    slug: 'pontiac',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['auburn-hills', 'waterford', 'bloomfield-hills', 'clarkston'],
    intro:
      'Pontiac is the Oakland County seat, and families here often start because of Trinity Health Oakland or McLaren Oakland, not because they want a campus in Troy. Woodward, Wide Track, and M-59 are the landmarks that keep a parent close to doctors and to relatives already in the city.',
    details:
      'Downtown Pontiac, the hospital corridors, and the neighborhoods toward Auburn Hills or Waterford do not share one set of buildings. If the right memory care or assisted living opening is not in Pontiac, Waterford and Auburn Hills are usually a shorter, more realistic next look than Birmingham or Novi. We will say when a farther community is only “nicer,” not safer.',
    notes: [
      'A practical search after a stay at Trinity Health Oakland or McLaren Oakland',
      'Waterford and Auburn Hills are the nearby cities we check when Pontiac is full',
      'We match care and visit distance before we talk about a move across the county',
    ],
    hospitals: 'Trinity Health Oakland and McLaren Oakland, both in Pontiac',
    setting: 'Woodward, downtown, and M-59 put the hospitals and the neighboring townships in the same short drive.',
  },
  {
    name: 'Clawson',
    slug: 'clawson',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['royal-oak', 'troy', 'madison-heights', 'berkley'],
    intro:
      'Clawson is a small residential city between Royal Oak and Troy, centered on 14 Mile and Crooks. Families searching here usually want to keep that downtown and those school and church ties, not relocate a parent to a bigger campus an hour away.',
    details:
      'Large assisted living and memory care buildings are limited inside Clawson itself. The honest short list usually adds Troy to the north and Royal Oak to the south, sometimes Madison Heights if budget is the constraint. We keep Clawson as the place family will drive from, then compare which neighboring city actually has the care level.',
    notes: [
      'A fit when 14 Mile and downtown Clawson are the visit pattern you want to keep',
      'Troy and Royal Oak hold most of the nearby assisted living and memory care',
      'We do not stretch a Clawson-only list if the needed care is not in the city',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak and Corewell Health Troy Hospital',
    setting: '14 Mile and Crooks put Clawson between Royal Oak’s hospital and Troy’s campuses.',
  },
  {
    name: 'Waterford',
    slug: 'waterford',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['pontiac', 'clarkston', 'white-lake', 'auburn-hills'],
    intro:
      'Waterford Township is a lakes community — Cass, Pontiac, Elizabeth, and the others — spread along Dixie Highway and M-59. Families here often want a parent to stay on the north side of Oakland County instead of moving down to Novi or Troy.',
    details:
      '“Waterford” can mean very different drive times depending on which lake you start from. Some families do well in a smaller licensed home nearby. Others need a memory care program that may sit toward Pontiac, Clarkston, or White Lake. We map the opening to the actual driveway, not to the township name alone.',
    notes: [
      'A strong search when the family is rooted around the lakes and Dixie Highway',
      'Pontiac hospitals are the usual medical anchor',
      'Clarkston and White Lake are the next towns when Waterford does not have the care level',
    ],
    hospitals: 'Trinity Health Oakland and McLaren Oakland in neighboring Pontiac',
    setting: 'Dixie Highway, M-59, and a chain of lakes make Waterford a township search, not a single downtown.',
  },
  {
    name: 'Clarkston',
    slug: 'clarkston',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['waterford', 'lake-orion', 'oxford', 'pontiac'],
    intro:
      'Clarkston searches usually mean the village downtown and the Independence Township neighborhoods around Sashabaw, Dixie, and I-75. Families want to stay in northern Oakland County, where a move to a southern suburb can feel like leaving home.',
    details:
      'The village is small, so assisted living and memory care may sit in the township or a few minutes toward Waterford, Lake Orion, or Oxford. We treat “close to downtown Clarkston” as a real requirement and tell you when an opening is too far for the visits you described.',
    notes: [
      'Village and Independence Township are one search for most families, and we say which is which',
      'Waterford and Lake Orion are the usual wider look',
      'I-75 makes Auburn Hills possible, but only if the care there is actually better',
    ],
    hospitals: 'Trinity Health Oakland in Pontiac, with Corewell Health in Rochester a longer drive east',
    setting: 'The village downtown, Sashabaw, and Dixie Highway sit in a township that is much larger than the village.',
  },
  {
    name: 'Lake Orion',
    slug: 'lake-orion',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['oxford', 'rochester-hills', 'auburn-hills', 'clarkston'],
    intro:
      'Lake Orion families usually want senior care within a short drive of the village and the lake, along M-24, rather than a campus in Troy. Orion Township is the wider area most listings actually sit in.',
    details:
      'The village itself is small. Rochester Hills adds more assisted living and memory care to the south, Oxford adds a smaller-town option to the north, and Auburn Hills sits on the way toward I-75. We compare those three against how often someone can get back to the lake for a visit.',
    notes: [
      'Downtown Lake Orion and the lake are the reason families start here',
      'Rochester Hills is the usual place a larger memory care program shows up',
      'We separate the village from Orion Township so the address is not a surprise',
    ],
    hospitals: 'Corewell Health (Crittenton) in Rochester and Trinity Health Oakland in Pontiac',
    setting: 'M-24 and the village sit between Oxford and the Rochester Hills campuses.',
  },
  {
    name: 'Oxford',
    slug: 'oxford',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['lake-orion', 'clarkston', 'rochester-hills', 'holly'],
    intro:
      'Oxford is at the northeast edge of Oakland County. Families searching downtown Oxford usually want to stay in that village, on M-24, instead of moving a parent toward the busier Rochester or Troy markets.',
    details:
      'Inventory is thinner here than in Rochester Hills. Lake Orion is the closest wider look, and Rochester Hills is the place we check when a secured memory care program or a faster opening is the real need. We are direct about drive time back to Oxford before that farther community goes on the list.',
    notes: [
      'A fit when downtown Oxford and the surrounding township are home',
      'Lake Orion is the first neighboring village we compare',
      'A Rochester Hills campus is a tradeoff, not the default',
    ],
    hospitals: 'Corewell Health (Crittenton) in Rochester',
    setting: 'Downtown Oxford and M-24 are the northeast corner of the county, with more open land than the southern suburbs.',
  },
  {
    name: 'Holly',
    slug: 'holly',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['clarkston', 'oxford', 'waterford', 'white-lake'],
    intro:
      'Holly is the northwest corner of Oakland County, a village with a historic downtown at Battle Alley, close to I-75 and the Genesee County line. Families here are often trying not to send a parent south into the Novi or Troy markets.',
    details:
      'Senior living inside Holly is limited. Clarkston is the Oakland County town we usually check next, and some families also look north toward Fenton when the care level is not available on the Oakland side. We will not pretend Holly has a row of campuses. If the right opening is a longer drive, we say how long.',
    notes: [
      'A village search, not a suburban campus search',
      'Clarkston is the usual next Oakland County look',
      'Fenton is across the county line and only belongs on the list if the care is actually there',
    ],
    hospitals: 'Trinity Health Oakland in Pontiac, with Genesee County hospitals north of the county line',
    setting: 'Battle Alley, the village, and I-75 put Holly between northern Oakland County and Fenton.',
  },
  {
    name: 'Milford',
    slug: 'milford',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['commerce-township', 'white-lake', 'brighton', 'walled-lake'],
    intro:
      'Milford families usually want senior care close to the village downtown, the Huron River, and Main Street, not a move to a Novi campus. The village and Milford Township are both part of what people mean when they search the name.',
    details:
      'Options inside the village are limited. Commerce Township and White Lake are the Oakland County communities we compare next, and Brighton comes up when a family is willing to cross into Livingston County. Kensington and the river are why people want to stay; we treat visit distance as part of the decision.',
    notes: [
      'Downtown Milford is the anchor, even when the community is in the township',
      'Commerce Township and White Lake usually complete a local short list',
      'We flag a Brighton option as a different county before you tour it',
    ],
    hospitals: 'Huron Valley-Sinai in Commerce Township and Henry Ford West Bloomfield Hospital',
    setting: 'Main Street, the Huron River, and the township around the village sit west of Commerce and the lakes.',
  },
  {
    name: 'Orchard Lake',
    slug: 'orchard-lake',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['west-bloomfield', 'keego-harbor', 'bloomfield-hills', 'farmington-hills'],
    intro:
      'Orchard Lake Village is a small city wrapped around the lake, inside the larger West Bloomfield area. Families searching here want a parent near the water and near relatives on Orchard Lake Road, not a generic Oakland County list.',
    details:
      'There is not a cluster of senior campuses inside the village limits. West Bloomfield holds most of the assisted living and memory care a family will actually tour, with Keego Harbor and sometimes Bloomfield Hills as other short drives. We use Orchard Lake as the home base and say plainly when a community is in West Bloomfield.',
    notes: [
      'The lake and the village are the search, even though the buildings are usually next door',
      'West Bloomfield is where most comparable communities sit',
      'Keego Harbor is the other small city families often want to stay near',
    ],
    hospitals: 'Henry Ford West Bloomfield Hospital',
    setting: 'The lake and Orchard Lake Road sit inside West Bloomfield’s larger senior-living market.',
  },
  {
    name: 'Franklin',
    slug: 'franklin',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['farmington-hills', 'bloomfield-hills', 'southfield', 'beverly-hills'],
    intro:
      'Franklin Village is a small historic village on Franklin Road, between Farmington Hills and the Bloomfield communities. Families here often want privacy and a short drive back to the village green, and they already know the village itself will not hold a large campus.',
    details:
      'The practical tour list is Farmington Hills to the west and Bloomfield or Bingham Farms and Beverly Hills to the east. We start with care needs and how often someone can visit, then pick the side of Franklin that fits. A longer drive to Birmingham or Novi is only on the list if Franklin’s neighbors cannot meet the care level.',
    notes: [
      'The village is the home base; the communities are in the cities around it',
      'Farmington Hills and Bloomfield are the two directions we compare first',
      'We keep the list short so you are not touring the whole Woodward corridor',
    ],
    hospitals: 'Corewell Health Farmington Hills Hospital and Henry Ford West Bloomfield Hospital',
    setting: 'Franklin Road and the village green sit between Farmington Hills and Bloomfield.',
  },
  {
    name: 'Beverly Hills',
    slug: 'beverly-hills',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['birmingham', 'royal-oak', 'southfield', 'bloomfield-hills'],
    intro:
      'Beverly Hills is the village along Southfield Road and 13 Mile, between Birmingham and Royal Oak. Families searching here want a parent close to that residential grid, and they are usually open to the next city over once the care level is clear.',
    details:
      'The village does not have a set of large senior campuses inside its limits. Birmingham, Bloomfield Hills, and Royal Oak are the three places a Beverly Hills search actually goes. We compare those on staffing, memory care, and monthly cost, using 13 Mile as the drive you are trying to keep short.',
    notes: [
      '13 Mile and Southfield Road are the visit pattern to protect',
      'Birmingham and Royal Oak are the usual neighboring inventories',
      'Southfield is the other direction when Providence or a western address fits better',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak and Corewell Health Troy Hospital',
    setting: 'Southfield Road and 13 Mile put the village between Birmingham and Royal Oak.',
  },
  {
    name: 'Huntington Woods',
    slug: 'huntington-woods',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['berkley', 'oak-park', 'royal-oak', 'ferndale'],
    intro:
      'Huntington Woods is a small city on the Woodward corridor, between Oak Park, Berkley, and Royal Oak, near 11 Mile. Adult children who live here usually want a parent close enough for a short evening visit, not a move to a far suburban campus.',
    details:
      'Senior housing inside Huntington Woods is limited. Royal Oak and Berkley are the first places we look, with Oak Park and Ferndale as other short drives. Beaumont Royal Oak is the hospital most of these families already use, so medical follow-up stays part of the match.',
    notes: [
      'A Woodward-corridor search anchored at 11 Mile',
      'Royal Oak and Berkley hold more of the assisted living and memory care',
      'We look at a smaller licensed home when a large campus is the wrong fit',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak',
    setting: '11 Mile and the Woodward edge keep Huntington Woods between Oak Park and Royal Oak.',
  },
  {
    name: 'Pleasant Ridge',
    slug: 'pleasant-ridge',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['ferndale', 'royal-oak', 'huntington-woods', 'oak-park'],
    intro:
      'Pleasant Ridge is one of the smallest cities in Oakland County, a few blocks along Woodward between Ferndale and Royal Oak. Families here are not going to find a senior campus inside the city, and the useful search is the one that admits that.',
    details:
      'We use Pleasant Ridge as the place family lives and visits from. Royal Oak is the first look for assisted living and memory care, Ferndale and Huntington Woods are the other short drives, and Berkley comes up when 12 Mile is an easy trip. The goal is a community you can reach without planning the afternoon around it.',
    notes: [
      'The city is the home base, not the place the building will be',
      'Royal Oak is the usual first tour list',
      'Ferndale is the other direction when a smaller setting or a closer Woodward address fits',
    ],
    hospitals: 'Beaumont (Corewell Health) Royal Oak',
    setting: 'Woodward and Ridge Road put Pleasant Ridge in a gap between Ferndale and Royal Oak.',
  },
  {
    name: 'Lathrup Village',
    slug: 'lathrup-village',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['southfield', 'oak-park', 'beverly-hills', 'farmington-hills'],
    intro:
      'Lathrup Village is a small city tucked against Southfield near 11 Mile, Southfield Road, and I-696. Families searching here want a parent close to that pocket, between Southfield’s hospitals and the Woodward cities to the east.',
    details:
      'There is little senior-living inventory inside Lathrup Village. Southfield is the first place we look, especially when Ascension Providence is part of care, and Oak Park or Beverly Hills can be the better drive depending on which side of the village family lives on. We compare those cities on care, not on which name sounds closest.',
    notes: [
      '11 Mile and Southfield Road are the local anchors',
      'Southfield holds more of the nearby communities and the hospital',
      'Oak Park is the other short list when family is already on that side',
    ],
    hospitals: 'Ascension Providence Hospital in Southfield and Beaumont (Corewell Health) Royal Oak',
    setting: 'I-696, Southfield Road, and 11 Mile put Lathrup Village between Southfield and Oak Park.',
  },
  {
    name: 'Keego Harbor',
    slug: 'keego-harbor',
    county: 'Oakland County',
    countySlug: 'oakland-county',
    nearby: ['orchard-lake', 'west-bloomfield', 'commerce-township', 'walled-lake'],
    intro:
      'Keego Harbor is a small city on Cass Lake, between Orchard Lake, West Bloomfield, and Sylvan Lake. Families here want the lake towns to stay the center of visits, which is a different search from a Novi or Troy campus.',
    details:
      'The city is too small to hold many senior communities. West Bloomfield is where most assisted living and memory care tours end up, Commerce Township is the western option, and Orchard Lake is often the other place family is driving from. We keep Cass Lake as the reference point and drop any community that makes a casual visit unlikely.',
    notes: [
      'Cass Lake is the reason for the search',
      'West Bloomfield supplies most of the comparable communities',
      'Commerce Township is the next look when a western Oakland setting fits better',
    ],
    hospitals: 'Henry Ford West Bloomfield Hospital and Huron Valley-Sinai in Commerce Township',
    setting: 'Cass Lake Road and a very small city limit sit inside the larger West Bloomfield and Commerce markets.',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function cityPath(slug: string): string {
  return `/areas/${slug}`;
}

export function startPath(slug?: string): string {
  return slug ? `/start?city=${encodeURIComponent(slug)}` : '/start';
}

export function cityTitle(city: City): string {
  return `Senior Care in ${city.name}, MI`;
}

export function cityDescription(city: City): string {
  return `Free local help finding assisted living, memory care, and residential care in ${city.name}, Michigan. Homeward Senior Placement compares options in ${city.county} at no cost to families.`;
}

export function citiesInCounty(countySlug: string): City[] {
  return cities.filter((city) => city.countySlug === countySlug || (countySlug === 'oakland-county' && city.slug === 'northville') || (countySlug === 'wayne-county' && city.slug === 'northville'));
}
