import React from 'react';
import { m } from 'framer-motion';
import { FaCheckCircle, FaAward, FaTruck, FaClock, FaIdCard, FaShieldAlt, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ResponsiveImage from '../components/ResponsiveImage';
import { COMPANY_DETAILS } from '../utils/constants';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.aboutTitle')}
        description={t('seo.aboutDesc')}
        path="/about"
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
            {t('about.pageTitle')}
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
            <span className="text-white">{t('about.breadcrumb')}</span>
          </m.nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white" aria-label="About us">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Image side */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <ResponsiveImage
                  src="https://res.cloudinary.com/dai2g47e4/image/upload/v1784590172/gallery-image-01_k2znzs.jpg"
                  alt="Abu Usman Movers professional team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  widths={[600, 1000, 1600]}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
            </m.div>

            {/* Text side */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.welcomeTo')} <span className="text-primary">{COMPANY_DETAILS.name}</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('about.p2')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <FaAward aria-hidden="true" />, text: t('about.qualityService') },
                  { icon: <FaTruck aria-hidden="true" />, text: t('about.modernFleet') },
                  { icon: <FaClock aria-hidden="true" />, text: t('about.onTimeDelivery') },
                  { icon: <FaCheckCircle aria-hidden="true" />, text: t('about.satisfaction') },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-xl text-accent flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* License Information Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden" aria-label="License information">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-accent font-semibold tracking-wider uppercase mb-2">
              {t('about.licenseSubtitle')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('about.licenseTitle')}
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            {/* License Card */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Top gradient stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-primary-light" aria-hidden="true" />

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* ID Number */}
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group flex items-start gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FaIdCard aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        {t('about.idNumber')}
                      </p>
                      <p className="text-2xl md:text-3xl font-extrabold text-primary tracking-wider">
                        {COMPANY_DETAILS.licenseId}
                      </p>
                    </div>
                  </m.div>

                  {/* License Type */}
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group flex items-start gap-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FaTruck aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        {t('about.licenseType')}
                      </p>
                      <p className="text-2xl md:text-3xl font-extrabold text-orange-600">
                        {t('about.heavyTransport')}
                      </p>
                    </div>
                  </m.div>
                </div>

                {/* Verified Badge */}
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-100"
                >
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-full">
                    <FaShieldAlt className="text-green-500 text-xl" aria-hidden="true" />
                    <span className="font-bold text-green-700">{t('about.verifiedBadge')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-lg" aria-hidden="true" />
                    ))}
                    <span className="ml-2 font-bold text-gray-700">5.0</span>
                  </div>
                </m.div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
};

export default About;
