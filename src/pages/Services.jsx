import React from 'react';
import { m } from 'framer-motion';
import { FaTruckMoving, FaBuilding, FaHome, FaBoxOpen, FaCouch, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { COMPANY_DETAILS } from '../utils/constants';

const SERVICE_KEYS = [
  'houseShifting',
  'apartmentMoving',
  'villaMoving',
  'officeRelocation',
  'furnitureMoving',
  'packing',
  'loadingUnloading',
  'furnitureAssembly',
  'heavyTransport',
];

const getServiceIcon = (key) => {
  const iconMap = {
    houseShifting: <FaHome />,
    villaMoving: <FaHome />,
    officeRelocation: <FaBuilding />,
    packing: <FaBoxOpen />,
    furnitureMoving: <FaCouch />,
    furnitureAssembly: <FaCouch />,
  };
  return iconMap[key] || <FaTruckMoving />;
};

const Services = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <SEO
        title={t('seo.servicesTitle')}
        description={t('seo.servicesDesc')}
        path="/services"
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Page header">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('services.pageTitle')}
          </m.h1>
          <m.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-accent-light"
            aria-label="Breadcrumb"
          >
            <span>{t('navbar.home')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-white">{t('services.breadcrumb')}</span>
          </m.nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50" aria-label="Services list">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('services.whatWeOffer')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('services.intro')}
            </p>
          </div>

          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {SERVICE_KEYS.map((key) => (
              <m.div
                key={key}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                >
                  {getServiceIcon(key)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow">
                  {t(`services.items.${key}.description`)}
                </p>
                <a
                  href={COMPANY_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get a quote for ${t(`services.items.${key}.title`)}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-accent bg-accent/10 hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" aria-hidden="true" />
                  {t('services.getQuote')}
                </a>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
};

export default Services;
