import { COMPANY_DETAILS, SERVICES } from '../utils/constants';

export const BASE_URL = 'https://abuusmanmovers.com';

export const RIYADH_DISTRICTS_LIST = [
  { name: 'Al Malqa', nameAr: 'الملقا' },
  { name: 'Al Narjis', nameAr: 'النرجس' },
  { name: 'Al Yasmin', nameAr: 'الياسمين' },
  { name: 'Al Olaya', nameAr: 'العليا' },
  { name: 'Al Sahafa', nameAr: 'الصحافة' },
  { name: 'Al Rawdah', nameAr: 'الروضة' },
  { name: 'Al Nakheel', nameAr: 'النخيل' },
  { name: 'Hittin', nameAr: 'حطين' },
  { name: 'Al Aqiq', nameAr: 'العقيق' },
  { name: 'Al Hamra', nameAr: 'الحمراء' },
];

export const SAUDI_CITIES_LIST = [
  'Riyadh',
  'Jeddah',
  'Dammam',
  'Al Khobar',
  'Jubail',
  'Dhahran',
  'Mecca',
  'Medina',
  'Taif',
  'Al Kharj',
];

export const SERVICE_TYPES_LIST = [
  'House Moving',
  'Apartment Relocation',
  'Villa Moving',
  'Office Relocation',
  'Corporate Moving',
  'Furniture Relocation',
  'Furniture Dismantling & Assembly',
  'Packing & Unpacking',
  'Bubble Wrap Packing',
  'Dina Moving Truck Services',
  'Heavy Transport & Shifting',
  'نقل عفش بالرياض',
  'نقل اثاث بالمملكة',
  'دينا نقل عفش',
  'فك وتركيب اثاث',
  'تغليف بابلز وكرتون',
  'نقل مكاتب وشركات',
  'نقل فلل وشقق',
  'شحن وتفريغ اثاث',
];

export const HIGH_CONVERTING_FAQS = [
  {
    question: 'How much does moving and packing cost in Riyadh and Saudi Arabia?',
    questionAr: 'كم تبلغ تكلفة نقل وتغليف الأثاث في الرياض والمملكة العربية السعودية؟',
    answer:
      'Moving costs in Riyadh depend on the property size (apartment, villa, or office), volume of furniture, floor level, and distance. Typical residential moves range with competitive flat rates in SAR, including professional dismantling, packing, Dina transport, and reassembly. Contact Abu Usman Movers via WhatsApp at +966 058 223 0098 for a transparent, instant quote with zero hidden charges.',
  },
  {
    question: 'What packing materials do you use to protect furniture and fragile items?',
    questionAr: 'ما هي مواد التغليف التي تستخدمونها لحماية الأثاث والمقتنيات الثمينة؟',
    answer:
      'We use export-grade packing materials including multi-layer bubble wrap, heavy-duty double-wall corrugated carton boxes, stretch wrap film, edge protectors, heavy furniture moving blankets, and specialty adhesive tape to safeguard fragile glassware, electronics, mirrors, and luxury furniture.',
  },
  {
    question: 'Which districts in Riyadh do you provide moving and packing services in?',
    questionAr: 'ما هي أحياء الرياض التي تقدمون فيها خدمات نقل وتغليف العفش؟',
    answer:
      'We serve all districts across Riyadh, including Al Malqa, Al Narjis, Al Yasmin, Al Olaya, Al Sahafa, Al Rawdah, Al Nakheel, Hittin, Al Aqiq, Al Hamra, and surrounding areas. Our local Dina trucks and moving crews provide rapid dispatch with response times between 25 to 35 minutes.',
  },
  {
    question: 'How do I book an Abu Usman Movers Dina truck or moving crew via WhatsApp?',
    questionAr: 'كيف يمكنني حجز دينا نقل أو فريق نقل عفش عبر واتساب؟',
    answer:
      'Booking via WhatsApp is instant and convenient. Simply click our WhatsApp button or message +966 058 223 0098 with your pickup location, destination, and photos or list of furniture. Our customer coordinator will provide an immediate quote and reserve your crew and truck 24/7.',
  },
  {
    question: 'Do you provide professional carpentry, furniture dismantling, and reassembly?',
    questionAr: 'هل تقدمون خدمات نجار محترف لفك وتركيب الأثاث وغرف النوم؟',
    answer:
      'Yes. Our moving crews include skilled carpenters specializing in dismantling and reassembling Ikea furniture, modern bedroom sets, dining tables, modular cabinets, wall-mounted TVs, and curtains, ensuring your furniture is securely installed in your new home.',
  },
  {
    question: 'Do you handle office relocations and commercial moving without business downtime?',
    questionAr: 'هل تقدمون خدمات نقل المكاتب والشركات دون تعطيل العمل؟',
    answer:
      'Absolutely. Abu Usman Movers offers dedicated corporate and commercial moving services across Saudi Arabia. We handle workstations, servers, IT equipment, executive desks, and filing archives with weekend or after-hours schedules to ensure zero business downtime.',
  },
  {
    question: 'What types of Dina trucks do you operate for furniture moving?',
    questionAr: 'ما هي أنواع سيارات الدينا المستخدمة لنقل العفش؟',
    answer:
      'We operate a fleet of modern closed-box Dina trucks and open-bed transport vehicles equipped with safety straps, hydraulic tailgates, and padded interiors to shield your belongings from dust, heat, and transit movement across Riyadh and intercity routes.',
  },
  {
    question: 'Are your moving services and Dina trucks available 24/7, including weekends and holidays?',
    questionAr: 'هل خدمات النقل وسيارات الدينا متاحة على مدار 24 ساعة طوال أيام الأسبوع؟',
    answer:
      'Yes, Abu Usman Movers operates 24 hours a day, 7 days a week, including Fridays, Saturdays, and public holidays. Whether you require an emergency late-night move or a scheduled weekend relocation, our teams are always ready.',
  },
];

export const buildFullJsonLdGraph = ({
  path = '/',
  customFaq = null,
  customBreadcrumbs = null,
  district = null,
  service = null,
}) => {
  const currentUrl = `${BASE_URL}${path}`;

  // 1. WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: COMPANY_DETAILS.name,
    alternateName: 'خبراء أبو عثمان لنقل وتغليف الأثاث',
    inLanguage: ['en-SA', 'ar-SA'],
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // 2. Organization Schema
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_DETAILS.name,
    alternateName: 'خبراء أبو عثمان لنقل وتغليف الأثاث',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    image: 'https://res.cloudinary.com/dai2g47e4/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1784590173/gallery-image-03_qc3flt.jpg',
    sameAs: [
      COMPANY_DETAILS.facebook,
      COMPANY_DETAILS.googleMaps,
    ].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966-58-223-0098',
        contactType: 'customer service',
        areaServed: 'SA',
        availableLanguage: ['Arabic', 'English', 'Urdu'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  };

  // 3. MovingCompany Schema
  const areaServedEntities = [
    ...RIYADH_DISTRICTS_LIST.map((dist) => ({
      '@type': 'AdministrativeArea',
      name: `${dist.name} District, Riyadh`,
      containedInPlace: {
        '@type': 'City',
        name: 'Riyadh',
      },
    })),
    ...SAUDI_CITIES_LIST.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
    })),
  ];

  const movingCompanySchema = {
    '@type': ['MovingCompany', 'LocalBusiness'],
    '@id': `${BASE_URL}/#movingcompany`,
    name: district ? `${COMPANY_DETAILS.name} - ${district.name}` : COMPANY_DETAILS.name,
    alternateName: district
      ? `خبراء أبو عثمان لنقل الأثاث في حي ${district.nameAr || district.name}`
      : 'خبراء أبو عثمان لنقل وتغليف الأثاث - نقل عفش بالرياض',
    url: currentUrl,
    logo: `${BASE_URL}/favicon.svg`,
    image: 'https://res.cloudinary.com/dai2g47e4/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1784590173/gallery-image-03_qc3flt.jpg',
    telephone: '+966582230098',
    email: COMPANY_DETAILS.email,
    currenciesAccepted: 'SAR',
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, Mada, STC Pay',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: district ? `${district.name} District` : 'King Fahd Road, Olaya',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: district?.postalCode || '12211',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: district?.lat || 24.7136,
      longitude: district?.lng || 46.6753,
    },
    areaServed: areaServedEntities,
    serviceType: SERVICE_TYPES_LIST,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving and Relocation Services Catalog',
      itemListElement: SERVICES.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
          url: `${BASE_URL}/services#service-${idx + 1}`,
        },
      })),
    },
  };

  // 4. BreadcrumbList Schema
  let breadcrumbItems = [];
  if (customBreadcrumbs && customBreadcrumbs.length > 0) {
    breadcrumbItems = customBreadcrumbs;
  } else {
    const parts = path === '/' ? [] : path.split('/').filter(Boolean);
    breadcrumbItems = [{ name: 'Home', url: BASE_URL }];
    let acc = BASE_URL;
    parts.forEach((p) => {
      acc += `/${p}`;
      const formattedName = p
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      breadcrumbItems.push({ name: formattedName, url: acc });
    });
  }

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}#breadcrumb`,
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // 5. FAQPage Schema
  const faqsToUse = customFaq && customFaq.length > 0 ? customFaq : HIGH_CONVERTING_FAQS;
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${currentUrl}#faq`,
    mainEntity: faqsToUse.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const graph = [
    websiteSchema,
    organizationSchema,
    movingCompanySchema,
    breadcrumbSchema,
    faqSchema,
  ];

  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': `${currentUrl}#service`,
      name: service.title,
      description: service.description,
      provider: {
        '@id': `${BASE_URL}/#movingcompany`,
      },
      areaServed: areaServedEntities,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
