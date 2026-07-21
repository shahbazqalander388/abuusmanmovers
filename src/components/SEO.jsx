import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS, SERVICES, NAV_LINKS } from '../utils/constants';

const baseUrl = 'https://abuusmanmovers.com';

const buildBreadcrumbs = (path) => {
  const parts = path === '/' ? [''] : path.split('/').filter(Boolean);
  const crumbs = [{ name: COMPANY_DETAILS.name, url: baseUrl }];
  let acc = baseUrl;
  parts.forEach((p) => {
    acc += `/${p}`;
    crumbs.push({ name: p.replace(/-/g, ' '), url: acc });
  });
  return crumbs;
};

const buildServiceSchema = () => {
  return SERVICES.map((s, idx) => ({
    '@type': 'Service',
    'serviceType': s.title,
    'description': s.description,
    'provider': { '@type': 'LocalBusiness', 'name': COMPANY_DETAILS.name },
    'url': `${baseUrl}/services#service-${idx + 1}`,
  }));
};

const buildOrganization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': COMPANY_DETAILS.name,
  'url': baseUrl,
  'logo': `${baseUrl}/favicon.svg`,
  'contactPoint': [{ '@type': 'ContactPoint', 'telephone': COMPANY_DETAILS.phone, 'contactType': 'customer service' }],
});

const defaultLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_DETAILS.name,
  image: `${baseUrl}/favicon.svg`,
  '@id': baseUrl,
  url: baseUrl,
  telephone: COMPANY_DETAILS.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 24.7136, longitude: 46.7256 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
};

const SEO = ({ title, description, path = '', image, keywords = [], author = COMPANY_DETAILS.name, robots = 'index,follow', faq = null }) => {
  const { i18n } = useTranslation();
  const canonicalUrl = `${baseUrl}${path}`;

  const defaultTitle = `${COMPANY_DETAILS.name} | ${COMPANY_DETAILS.tagline}`;
  const defaultDesc = 'Professional moving, packing, and relocation services in Saudi Arabia. Safe, fast, and reliable house shifting, office moving, and furniture transport.';
  const currentTitle = title ? `${title} | ${COMPANY_DETAILS.name}` : defaultTitle;
  const currentDesc = description || defaultDesc;

  // Combined JSON-LD
  const jsonLd = [defaultLocalBusiness, buildOrganization(), {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_DETAILS.name,
    url: baseUrl,
    potentialAction: { '@type': 'SearchAction', 'target': `${baseUrl}/?s={search_term_string}`, 'query-input': 'required name=search_term_string' }
  }];

  // Add breadcrumb
  const crumbs = buildBreadcrumbs(path || '/');
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url }))
  };
  jsonLd.push(breadcrumbSchema);

  // Services
  jsonLd.push({ '@context': 'https://schema.org', '@graph': buildServiceSchema() });

  // FAQ
  if (Array.isArray(faq) && faq.length) {
    const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
    jsonLd.push(faqSchema);
  }

  return (
    <Helmet>
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={currentDesc} />
      <meta name="keywords" content={(Array.isArray(keywords) ? keywords.join(', ') : keywords) || "moving, movers, relocation, house shifting, office moving, Saudi Arabia"} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDesc} />
      <meta property="og:site_name" content={COMPANY_DETAILS.name} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_SA' : i18n.language === 'ur' ? 'ur_PK' : 'en_US'} />
      <meta property="og:image" content={image || `${baseUrl}/favicon.svg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={COMPANY_DETAILS.twitter || ''} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDesc} />
      <meta name="twitter:image" content={image || `${baseUrl}/favicon.svg`} />

      {/* Icons & Manifest */}
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnects */}
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default React.memo(SEO);
