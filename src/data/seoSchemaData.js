import { COMPANY_DETAILS, SERVICES } from '../utils/constants';
import { jubailDistricts, nearbyCities } from './jubailLocations';

export const BASE_URL = 'https://abuusmanmovers.com';

export const JUBAIL_DISTRICTS_LIST = jubailDistricts.map((d) => ({
  name: d.nameEn,
  nameAr: d.nameAr,
  zone: d.zone,
  zoneAr: d.zoneAr,
}));

export const SAUDI_CITIES_LIST = [
  'Jubail',
  'Jubail Industrial City',
  'Dammam',
  'Al Khobar',
  'Dhahran',
  'Ras Tanura',
  'Safwa',
  'Qatif',
  'Saihat',
  'Ras Al Khair',
  'Nariyah',
  'Buqayq',
  'Al Khafji',
  'Al Ahsa',
  'Riyadh',
  'Jeddah',
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
  'نقل عفش بالجبيل',
  'نقل اثاث بالجبيل الصناعية',
  'نقل عفش الجبيل البلد',
  'دينا نقل عفش بالجبيل',
  'نقل اثاث بالمنطقة الشرقية',
  'نقل عفش بالدمام والخبر',
  'نقل عفش من الجبيل الى الرياض',
  'فك وتركيب اثاث بالجبيل',
  'تغليف بابلز وكرتون',
  'نقل مكاتب وشركات',
  'نقل فلل وشقق',
  'شحن وتفريغ اثاث',
];

export const FAQ_PRIMARY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas does Abu Usman Movers cover from Al Jubail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based in Jubail City Center (Postal Code 35514), we provide complete relocation services across all Jubail Industrial City districts (Fanateer, Deffi, Jalmudah), Jubail Balad, and express moves to Ras Tanura, Qatif, Dammam, Khobar, Ras Al Khair, Khafji, and Riyadh."
      }
    },
    {
      "@type": "Question",
      "name": "هل توفر شركة ابو عثمان دينا نقل عفش مجهزة وفنيين فك وتركيب بالجبيل؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نوفر دينا نقل عفش مقفلة ومجهزة لحماية الأثاث من الغبار مع نجارين وفنيين محترفين لفك وتركيب وتغليف الأثاث بالكرتون والفقاعات على مدار 24 ساعة."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can a moving truck arrive in Jubail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our moving crews and Dina trucks are stationed locally across Jubail and can arrive at your location within 30 to 45 minutes of booking confirmation."
      }
    }
  ]
};

export const HIGH_CONVERTING_FAQS = [
  {
    question: 'What areas does Abu Usman Movers cover from Al Jubail?',
    questionAr: 'ما هي المناطق التي تغطيها شركة ابو عثمان لنقل العفش انطلاقاً من الجبيل؟',
    answer:
      'Based in Jubail City Center (Postal Code 35514), we provide complete relocation services across all Jubail Industrial City districts (Fanateer, Deffi, Jalmudah), Jubail Balad, and express moves to Ras Tanura, Qatif, Dammam, Khobar, Ras Al Khair, Khafji, and Riyadh.',
  },
  {
    question: 'Does Abu Usman Movers provide equipped Dina moving trucks and carpentry technicians in Jubail?',
    questionAr: 'هل توفر شركة ابو عثمان دينا نقل عفش مجهزة وفنيين فك وتركيب بالجبيل؟',
    answer:
      'نعم، نوفر دينا نقل عفش مقفلة ومجهزة لحماية الأثاث من الغبار مع نجارين وفنيين محترفين لفك وتركيب وتغليف الأثاث بالكرتون والفقاعات على مدار 24 ساعة.',
  },
  {
    question: 'How quickly can a moving truck arrive in Jubail?',
    questionAr: 'ما هي سرعة وصول سيارة دينا نقل العفش في الجبيل؟',
    answer:
      'Our moving crews and Dina trucks are stationed locally across Jubail and can arrive at your location within 30 to 45 minutes of booking confirmation.',
  },
  {
    question: 'How much does moving and packing cost in Jubail and the Eastern Province?',
    questionAr: 'كم تبلغ تكلفة نقل وتغليف الأثاث في الجبيل والمنطقة الشرقية؟',
    answer:
      'Moving costs in Jubail and the Eastern Province depend on property size (apartment, villa, or office), volume of furniture, floor level, and destination distance. With our central headquarters at 4356 Riad, 8000, Jubail City Center, we provide competitive flat rates in SAR, including professional dismantling, bubble wrapping, enclosed Dina transport, and reassembly. Contact Abu Usman Movers on WhatsApp at +966 058 223 0098 for an instant, transparent quote.',
  },
  {
    question: 'What packing materials do you use to protect luxury furniture and appliances?',
    questionAr: 'ما هي مواد التغليف المستخدمة لحماية الأثاث والأجهزة الكهربائية؟',
    answer:
      'We use export-grade packing materials including multi-layer bubble wrap, heavy-duty double-wall corrugated carton boxes, heavy furniture moving blankets, stretch film, edge corner protectors, and heavy-duty tape to ensure zero scratches or transit damage.',
  },
  {
    question: 'Do you provide professional carpenters for dismantling and installing bedroom sets and kitchens?',
    questionAr: 'هل توفرون نجارين محترفين لفك وتركيب غرف النوم والمطابخ؟',
    answer:
      'Yes, all our moving teams include skilled master carpenters specialized in dismantling and reinstalling Ikea, Italian, and custom bedroom sets, modular closets, dining tables, kitchen cupboards, curtains, and wall shelves.',
  },
  {
    question: 'Do you offer inter-city moving from Jubail to Riyadh, Dammam, and Jeddah?',
    questionAr: 'هل توفرون خدمات النقل بين المدن من الجبيل إلى الرياض والدمام وجدة؟',
    answer:
      'Yes, Abu Usman Movers runs scheduled daily trips and express routes between Jubail, Dammam, Khobar, and Riyadh (450 km), as well as long-distance moves to Jeddah and Western Province with enclosed GPS-tracked Dina trucks.',
  },
  {
    question: 'Are your moving services and Dina trucks available 24/7 in Jubail?',
    questionAr: 'هل خدمات النقل وسيارات الدينا متوفرة 24 ساعة طوال أيام الأسبوع في الجبيل؟',
    answer:
      'Yes, we operate 24 hours a day, 7 days a week, including weekends and public holidays. Our emergency dispatch team is always available for immediate and scheduled moves.',
  },
];

export const COMPANY_PRIMARY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Abu Usman Movers",
  "alternateName": "شركة ابو عثمان لنقل العفش بالجبيل",
  "url": "https://abuusmanmovers.com",
  "telephone": "+966582230098",
  "email": "abuusman.movers966@gmail.com",
  "priceRange": "$$",
  "image": "https://abuusmanmovers.com/images/og-abu-usman.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4356 Riad, 8000, Jubail City Center",
    "addressLocality": "Al Jubail",
    "addressRegion": "Eastern Province",
    "postalCode": "35514",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.0055,
    "longitude": 49.6582
  },
  "areaServed": [
    { "@type": "City", "name": "Al Jubail" },
    { "@type": "AdministrativeArea", "name": "Jubail Industrial City" },
    { "@type": "City", "name": "Ras Tanura" },
    { "@type": "City", "name": "Qatif" },
    { "@type": "City", "name": "Ras Al Khair" },
    { "@type": "City", "name": "Dammam" },
    { "@type": "City", "name": "Khobar" },
    { "@type": "City", "name": "Dhahran" },
    { "@type": "City", "name": "Nariyah" },
    { "@type": "City", "name": "Al Khafji" },
    { "@type": "City", "name": "Al Ahsa" },
    { "@type": "City", "name": "Riyadh" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
};

export const CORE_AREA_SERVED = COMPANY_PRIMARY_SCHEMA.areaServed;

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
  const areaServedEntities = district
    ? [
        {
          '@type': district.isDistrict ? 'AdministrativeArea' : 'City',
          name: district.nameEn || district.name,
          containedInPlace: {
            '@type': 'City',
            name: 'Al Jubail',
          },
        },
        ...CORE_AREA_SERVED,
      ]
    : CORE_AREA_SERVED;

  const movingCompanySchema = {
    '@type': ['MovingCompany', 'LocalBusiness'],
    '@id': `${BASE_URL}/#movingcompany`,
    name: district ? `${COMPANY_DETAILS.name} - ${district.nameEn || district.name}` : COMPANY_DETAILS.name,
    alternateName: district
      ? `شركة ابو عثمان لنقل العفش وتغليف الأثاث - ${district.nameAr || district.name}`
      : COMPANY_PRIMARY_SCHEMA.alternateName,
    url: currentUrl,
    logo: `${BASE_URL}/favicon.svg`,
    image: 'https://abuusmanmovers.com/images/og-abu-usman.jpg',
    telephone: '+966582230098',
    email: COMPANY_DETAILS.email,
    currenciesAccepted: 'SAR',
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, Mada, STC Pay',
    openingHoursSpecification: COMPANY_PRIMARY_SCHEMA.openingHoursSpecification,
    address: {
      '@type': 'PostalAddress',
      streetAddress: district ? `${district.nameEn || district.name} District` : '4356 Riad, 8000, Jubail City Center',
      addressLocality: district ? (district.zone?.includes('Jubail') ? 'Al Jubail' : district.nameEn || district.name) : 'Al Jubail',
      addressRegion: 'Eastern Province',
      postalCode: district?.postalCode || '35514',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: district?.geo?.lat || district?.lat || 27.0055,
      longitude: district?.geo?.lng || district?.lng || 49.6582,
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
