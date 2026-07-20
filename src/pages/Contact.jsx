import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import GoogleMap from '../components/GoogleMap';
import { COMPANY_DETAILS } from '../utils/constants';

const Contact = ({ compact = false, showSeo = true, sectionId = 'contact' }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}. %0AContact: ${formData.phone} %0AEmail: ${formData.email} %0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${COMPANY_DETAILS.phone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <>
      {showSeo && (
        <SEO
          title={t('seo.contactTitle')}
          description={t('seo.contactDesc')}
          path="/contact"
        />
      )}

      {!compact && (
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Page header">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('contact.pageTitle')}
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
            <span className="text-white">{t('contact.breadcrumb')}</span>
          </motion.nav>
        </div>
        </section>
      )}

      {/* Main Content */}
      <section id={sectionId} className={`scroll-mt-24 py-20 bg-gray-50 ${compact ? 'pt-16' : ''}`} aria-label="Contact information and form">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.getInTouch')}</h2>
              <p className="text-gray-600 mb-10 text-lg">
                {t('contact.intro')}
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl flex-shrink-0" aria-hidden="true">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('contact.ourLocation')}</h4>
                    <p className="text-gray-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl flex-shrink-0" aria-hidden="true">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('contact.phoneNumber')}</h4>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-gray-600 hover:text-primary transition-colors block mb-1"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl flex-shrink-0" aria-hidden="true">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('contact.emailAddress')}</h4>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{t('contact.followUs')}</h4>
                <div className="flex gap-4">
                  <a
                    href={COMPANY_DETAILS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    <FaFacebookF className="text-xl" aria-hidden="true" />
                  </a>
                  <a
                    href={COMPANY_DETAILS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="text-2xl" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.yourName')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.phone')}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.yourMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      aria-required="true"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl w-full md:w-auto self-start hover:-translate-y-0.5"
                  >
                    {t('contact.submitButton')}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Google Map */}
      <section className="scroll-mt-24 px-4 py-8 md:px-6 lg:px-8 bg-gray-50" aria-label="Our location on Google Maps">
        <div className="container mx-auto">
          <GoogleMap />
        </div>
      </section>
    </>
  );
};

export default Contact;
