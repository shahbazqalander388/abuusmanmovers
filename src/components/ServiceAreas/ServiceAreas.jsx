import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServiceAreaCard from './ServiceAreaCard';
import { SERVICE_AREAS_DATA } from './serviceAreasData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const ServiceAreas = ({ animateOnScroll = true }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={animateOnScroll ? { opacity: 1, y: 0 } : undefined}
        animate={!animateOnScroll ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-accent font-semibold tracking-wider uppercase mb-2">
          {t('serviceAreas.sectionBadge')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('serviceAreas.whereWeOperate')}{' '}
          <span className="text-accent">{t('serviceAreas.whereWeOperateHighlight')}</span>
        </h2>
        <p className="text-slate-200 text-lg">
          {t('serviceAreas.intro')}
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView={animateOnScroll ? 'visible' : undefined}
        animate={!animateOnScroll ? 'visible' : undefined}
        viewport={{ once: true, margin: '-50px' }}
      >
        {SERVICE_AREAS_DATA.map((city) => (
          <ServiceAreaCard key={city.key} city={city} />
        ))}
      </motion.div>
    </div>
  );
};

export default React.memo(ServiceAreas);
