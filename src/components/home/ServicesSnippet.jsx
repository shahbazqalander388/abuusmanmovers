import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruckMoving, FaBuilding, FaHome, FaBoxOpen, FaCouch, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Map icons to services based on Key
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

const displayServiceKeys = [
  'houseShifting',
  'apartmentMoving',
  'villaMoving',
  'officeRelocation',
  'furnitureMoving',
  'packing',
];

const ServicesSnippet = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="scroll-mt-24 py-24 bg-[#102a4b]/80" aria-label="Services overview">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">{t('home.servicesBadge')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-slate-200 text-lg">
              {t('home.servicesDesc')}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayServiceKeys.map((key) => (
            <motion.div 
              key={key}
              variants={itemVariants}
              className="bg-[#0f2b5a]/90 rounded-2xl p-8 shadow-sm border border-slate-700 card-hover group flex flex-col justify-between"
            >
              <div>
                <div 
                  className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                >
                  {getServiceIcon(key)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`services.items.${key}.title`)}</h3>
                <p className="text-slate-300 mb-6 line-clamp-3">
                  {t(`services.items.${key}.description`)}
                </p>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 font-semibold text-sky-200 group-hover:text-sky-100 transition-colors"
              >
                {t('home.readMoreAbout', { service: t(`services.items.${key}.title`) })}{' '}
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 font-bold text-white border-2 border-white/80 px-8 py-3 rounded-full transition-all hover:bg-white hover:text-primary"
            aria-label={t('home.viewAllServices')}
          >
            {t('home.viewAllServices')}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSnippet;
