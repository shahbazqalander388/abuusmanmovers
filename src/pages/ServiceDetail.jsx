import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaTruckMoving,
  FaShieldAlt,
  FaClock,
  FaBoxes,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { getServiceBySlug, CORE_SERVICES } from '../data/servicesData';
import { COMPANY_DETAILS } from '../utils/constants';

const ServiceDetail = ({ serviceSlug: propSlug }) => {
  const params = useParams();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const currentSlug = propSlug || params.slug;
  const service = getServiceBySlug(currentSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً خبراء أبو عثمان، أود الاستفسار عن خدمة ${service.titleAr} في الرياض والحصول على عرض سعر فوري.`
      : `Hello Abu Usman Movers, I am inquiring about your ${service.title} in Saudi Arabia. Please provide a quote and availability.`
  );

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        path={`/${service.slug}`}
        keywords={service.keywords}
        service={service}
        breadcrumbs={[
          { name: 'Home', url: 'https://abuusmanmovers.com' },
          { name: 'Services', url: 'https://abuusmanmovers.com/services' },
          { name: service.title, url: `https://abuusmanmovers.com/${service.slug}` },
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Service Header">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <m.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-xs md:text-sm mb-4"
          >
            {isAr ? 'خدمة نقل متخصصة ومضمونة' : 'Certified Moving Solutions'}
          </m.span>

          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            {isAr ? service.headlineAr : service.headline}
          </m.h1>

          <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
            {isAr ? service.descriptionAr : service.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/9660582230098?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span>{isAr ? 'احجز الخدمة عبر واتساب' : 'Book Service on WhatsApp'}</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-primary bg-white hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
            >
              <FaPhoneAlt className="text-sm" />
              <span>{isAr ? 'اتصل الآن' : 'Call For Free Quote'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Highlights & Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {isAr ? 'ما تتضمنه الخدمة' : 'Service Scope'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {isAr ? 'مميزات الخدمة وضمانات الجودة' : 'What Is Included in This Service'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(isAr ? service.featuresAr : service.features).map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/40 transition-all flex items-start gap-3"
              >
                <FaCheckCircle className="text-emerald-500 text-xl shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Abu Usman Movers for this service */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <FaClock className="text-3xl text-accent mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">24/7 Service</h3>
              <p className="text-gray-500 text-xs">Always ready for emergency and scheduled moves.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <FaTruckMoving className="text-3xl text-emerald-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Enclosed Trucks</h3>
              <p className="text-gray-500 text-xs">Dust & heat-proof padded Dina transport.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <FaBoxes className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Premium Wrap</h3>
              <p className="text-gray-500 text-xs">Export-grade bubble wrap and thick cartons.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <FaShieldAlt className="text-3xl text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Zero Damage</h3>
              <p className="text-gray-500 text-xs">100% item safety and professional handling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking other services */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isAr ? 'خدمات نقل إضافية قد تهمك' : 'Explore Other Moving Services'}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {isAr
              ? 'حلول شاملة للنقل السكني والتجاري في الرياض والمملكة العربية السعودية.'
              : 'Complete residential and corporate relocation solutions across Saudi Arabia.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all text-center group"
              >
                <span className="block font-bold text-gray-900 text-sm group-hover:text-accent transition-colors">
                  {isAr ? item.titleAr : item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
