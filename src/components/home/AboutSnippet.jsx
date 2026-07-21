import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../../utils/constants';
import ResponsiveImage from '../../components/ResponsiveImage';

const AboutSnippet = () => {
  const { t } = useTranslation();

  const features = [
    t('home.aboutFeature1'),
    t('home.aboutFeature2'),
    t('home.aboutFeature3'),
    t('home.aboutFeature4')
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 bg-[#102a4b]/90 relative overflow-hidden" aria-label="About summary">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent-light/10 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <m.div 
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
                  <span className="block text-xs font-semibold text-gray-600 uppercase">{t('home.yearsExp')}</span>
                </div>
              </div>
              <ResponsiveImage
                src="https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-03_qc3flt.jpg"
                alt="Movers team"
                className="rounded-2xl w-full h-72 object-cover shadow-lg animate-fade-in"
                loading="eager"
                priority
                widths={[200, 400, 600, 800]}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 400px"
                width={800}
                height={600}
              />
              <ResponsiveImage
                src="https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-05_h5z1jm.jpg"
                alt="Moving boxes"
                className="rounded-2xl w-full h-72 object-cover shadow-lg animate-fade-in"
                loading="lazy"
                widths={[200, 400, 600, 800]}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 400px"
                width={800}
                height={600}
              />
            </div>
          </m.div>

          {/* Text Content */}
          <m.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">{t('home.aboutBadge')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('home.aboutTitle')} <span className="text-accent">{t('home.aboutTitleHighlight')}</span>
            </h2>
            <p className="text-slate-200 mb-8 text-lg leading-relaxed">
              {t('home.aboutDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="">
                  <span className="font-semibold text-slate-200">{feature}</span>
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
          </m.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
