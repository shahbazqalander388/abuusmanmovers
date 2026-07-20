import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ServiceAreas from '../components/ServiceAreas/ServiceAreas.jsx';
import { COMPANY_DETAILS } from '../utils/constants';

const ServiceAreasPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.serviceAreasTitle')}
        description={t('seo.serviceAreasDesc')}
        path="/service-areas"
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Page header">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('serviceAreas.pageTitle')}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-accent-light"
            aria-label="Breadcrumb"
          >
            <span>{t('navbar.home')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-white">{t('serviceAreas.breadcrumb')}</span>
          </motion.nav>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden" aria-label="Service areas">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ServiceAreas animateOnScroll={false} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('serviceAreas.ctaTitle')}
            </h2>
            <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
              {t('serviceAreas.ctaDesc')}
            </p>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call us at ${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-10 rounded-full
                         hover:bg-accent-light hover:text-white transition-all hover:scale-105 shadow-lg"
            >
              <FaPhoneAlt aria-hidden="true" />
              {t('serviceAreas.callNow')}: {COMPANY_DETAILS.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;
