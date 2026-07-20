import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../../utils/constants';

const AboutSnippet = () => {
  const { t } = useTranslation();

  const features = [
    t('home.aboutFeature1'),
    t('home.aboutFeature2'),
    t('home.aboutFeature3'),
    t('home.aboutFeature4')
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 bg-white relative overflow-hidden" aria-label="About summary">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent-light/10 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-10">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-accent">10+</span>
                  <span className="block text-xs font-semibold text-gray-500 uppercase">{t('home.yearsExp')}</span>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Movers team" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg transform translate-y-8 animate-fade-in"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1578509378619-a1b7e4526d7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Moving boxes" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg transform -translate-y-4 animate-fade-in"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">{t('home.aboutBadge')}</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('home.aboutTitle')} <span className="text-accent">{t('home.aboutTitleHighlight')}</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('home.aboutDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-accent text-xl flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 font-bold text-white bg-primary px-8 py-4 rounded-full transition-all hover:bg-primary-light hover:shadow-lg hover:-translate-y-1 group"
              aria-label={t('home.discoverMore')}
            >
              {t('home.discoverMore')}
              <FaArrowRight className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
