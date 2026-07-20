import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../../utils/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServiceAreaCard = ({ city }) => {
  const { t } = useTranslation();
  const cityName = t(`serviceAreas.cities.${city.key}.name`);
  const cityDesc = t(`serviceAreas.cities.${city.key}.description`);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm
                 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300
                 hover:border-accent/40 overflow-hidden flex flex-col"
    >
      {/* Top gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${city.gradient}`} aria-hidden="true" />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05), rgba(96,165,250,0.05))' }}
        aria-hidden="true"
      />

      <div className="p-8 flex flex-col flex-1 relative z-10">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-6">
          {/* Location Icon */}
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${city.lightGradient} flex items-center justify-center text-2xl
                        group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary group-hover:text-white
                        transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/25
                        border border-gray-100`}
            aria-hidden="true"
          >
            <FaMapMarkerAlt className={`${city.iconColor} group-hover:text-white transition-colors duration-300`} />
          </div>

          {/* Service Available Badge */}
          <span
            className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full"
            aria-label={t('serviceAreas.serviceAvailable')}
          >
            <FaCheckCircle className="text-green-500" aria-hidden="true" />
            {t('serviceAreas.serviceAvailable')}
          </span>
        </div>

        {/* City emoji + name */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl" role="img" aria-hidden="true">{city.emoji}</span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {cityName}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-sm">
          {cityDesc}
        </p>

        {/* CTA Button */}
        <a
          href={COMPANY_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get a quote for moving services in ${cityName}`}
          className={`inline-flex items-center justify-center gap-2 text-sm font-semibold text-white
                      bg-gradient-to-r ${city.gradient} px-5 py-3 rounded-xl
                      hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5
                      transition-all duration-300 group/btn`}
        >
          <FaWhatsapp className="text-base group-hover/btn:scale-110 transition-transform" aria-hidden="true" />
          {t('serviceAreas.getQuote')}
        </a>
      </div>
    </motion.div>
  );
};

export default React.memo(ServiceAreaCard);
