import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../utils/constants';
import { BASE_URL, buildFullJsonLdGraph } from '../data/seoSchemaData';

const DEFAULT_KEYWORDS = [
  'movers and packers in jubail',
  'jubail movers',
  'نقل عفش بالجبيل',
  'شركة نقل اثاث بالجبيل',
  'دينا نقل عفش بالجبيل',
  'نقل اثاث بالجبيل الصناعية',
  'نقل عفش الجبيل البلد',
  'فك وتركيب اثاث بالجبيل',
  'تغليف اثاث بالجبيل',
  'movers and packers eastern province',
  'نقل اثاث بالمنطقة الشرقية',
  'نقل عفش بالدمام والخبر',
  'نقل عفش من الجبيل الى الرياض',
  'house shifting jubail',
  'furniture moving ksa',
  'abu usman movers',
];

const DEFAULT_IMAGE =
  'https://abuusmanmovers.com/images/og-abu-usman.jpg';

const SEO = ({
  title,
  description,
  path = '',
  image,
  keywords = [],
  author = COMPANY_DETAILS.name,
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  faq = null,
  breadcrumbs = null,
  district = null,
  service = null,
}) => {
  const { i18n } = useTranslation();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;

  const defaultTitle =
    'Movers and Packers in Jubail & Eastern Province | Abu Usman Movers | House & Furniture Relocation';
  const defaultDesc =
    'Professional movers and packers in Jubail & Eastern Province: House shifting, furniture dismantling & assembly, bubble wrap packing, 24/7 Dina trucks & instant WhatsApp booking.';

  const currentTitle = title
    ? title.includes('Abu Usman')
      ? title
      : `${title} | ${COMPANY_DETAILS.name}`
    : defaultTitle;

  const currentDesc = description || defaultDesc;
  const currentImage = image || DEFAULT_IMAGE;

  const combinedKeywords = Array.isArray(keywords) && keywords.length > 0
    ? [...keywords, ...DEFAULT_KEYWORDS.slice(0, 5)].join(', ')
    : typeof keywords === 'string' && keywords.length > 0
    ? keywords
    : DEFAULT_KEYWORDS.join(', ');

  const lat = district?.geo?.lat || district?.lat || COMPANY_DETAILS.coordinates.lat;
  const lng = district?.geo?.lng || district?.lng || COMPANY_DETAILS.coordinates.lng;
  const placeName = district
    ? `${district.nameEn || district.name}, ${district.zone || 'Eastern Province'}, Saudi Arabia`
    : 'Al Jubail, Eastern Province, Saudi Arabia';

  const fullSchema = buildFullJsonLdGraph({
    path: normalizedPath,
    customFaq: faq,
    customBreadcrumbs: breadcrumbs,
    district,
    service,
  });

  return (
    <Helmet>
      {/* Document Meta */}
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={currentDesc} />
      <meta name="keywords" content={combinedKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {/* Local & Geo SEO Tags */}
      <meta name="geo.region" content="SA-04" />
      <meta name="geo.placename" content={placeName} />
      <meta name="geo.position" content={`${lat};${lng}`} />
      <meta name="ICBM" content={`${lat}, ${lng}`} />

      {/* Canonical & Multilingual Hreflang Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="en-SA" href={canonicalUrl} />
      <link rel="alternate" hreflang="ar-SA" href={canonicalUrl} />
      <link rel="alternate" hreflang="en" href={canonicalUrl} />
      <link rel="alternate" hreflang="ar" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph Meta */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY_DETAILS.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDesc} />
      <meta property="og:image" content={currentImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={currentTitle} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_SA' : i18n.language === 'ur' ? 'ur_PK' : 'en_US'} />
      <meta property="og:locale:alternate" content={i18n.language === 'ar' ? 'en_US' : 'ar_SA'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDesc} />
      <meta name="twitter:image" content={currentImage} />

      {/* Structured Data JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(fullSchema)}</script>
    </Helmet>
  );
};

export default React.memo(SEO);
