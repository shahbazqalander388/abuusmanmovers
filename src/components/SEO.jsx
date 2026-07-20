import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../utils/constants';

const SEO = ({ title, description, path = "" }) => {
  const { i18n } = useTranslation();
  const baseUrl = "https://abuusmanmovers.com";
  const canonicalUrl = `${baseUrl}${path}`;

  const defaultTitle = `${COMPANY_DETAILS.name} | ${COMPANY_DETAILS.tagline}`;
  const defaultDesc = "Professional moving, packing, and relocation services in Saudi Arabia. Safe, fast, and reliable house shifting, office moving, and furniture transport.";
  
  const currentTitle = title ? `${title} | ${COMPANY_DETAILS.name}` : defaultTitle;
  const currentDesc = description || defaultDesc;

  // Local Business Schema JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": COMPANY_DETAILS.name,
    "image": `${baseUrl}/logo.png`, 
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": COMPANY_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136, 
      "longitude": 46.7256
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "license": COMPANY_DETAILS.licenseId,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Moving & Relocation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Shifting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Relocation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Assembly & Disassembly"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={currentDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDesc} />
      <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_SA' : i18n.language === 'ur' ? 'ur_PK' : 'en_US'} />
      <meta property="og:site_name" content={COMPANY_DETAILS.name} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={currentDesc} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default React.memo(SEO);
