import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaTruck, FaWhatsapp, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { RIYADH_DISTRICTS } from '../data/districtsData';
import { COMPANY_DETAILS } from '../utils/constants';

const DistrictsHub = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const zones = useMemo(() => {
    const rawZones = Array.from(new Set(RIYADH_DISTRICTS.map((d) => d.zone)));
    return ['all', ...rawZones];
  }, []);

  const filteredDistricts = useMemo(() => {
    return RIYADH_DISTRICTS.filter((d) => {
      const matchesZone = selectedZone === 'all' || d.zone === selectedZone;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.nameAr.includes(query) ||
        d.zone.toLowerCase().includes(query) ||
        d.landmarks.some((lm) => lm.toLowerCase().includes(query));
      return matchesZone && matchesQuery;
    });
  }, [selectedZone, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <SEO
        title={
          isAr
            ? 'أحياء الرياض المغطاة لخدمات نقل العفش | خبراء أبو عثمان'
            : 'Riyadh Districts Coverage | Abu Usman Movers & Packers'
        }
        description={
          isAr
            ? 'تغطية شاملة لكافة أحياء الرياض لنقل وتغليف الأثاث. الملقا، النرجس، الياسمين، العليا، حطين، والعقيق. سيارات دينا سريعة خلال 25 دقيقة وحجز فوري عبر واتساب.'
            : 'Explore Abu Usman Movers full coverage across Riyadh districts: Al Malqa, Al Narjis, Al Yasmin, Al Olaya, Hittin, Al Aqiq & more. Rapid 25-35 min Dina dispatch.'
        }
        path="/districts"
        keywords={[
          'riyadh districts movers',
          'نقل عفش احياء الرياض',
          'دينا نقل شمال الرياض',
          'نقل اثاث الملقا',
          'نقل عفش النرجس',
          'نقل اثاث الياسمين',
          'نقل عفش العليا',
        ]}
        breadcrumbs={[
          { name: 'Home', url: 'https://abuusmanmovers.com' },
          { name: 'Riyadh Districts', url: 'https://abuusmanmovers.com/districts' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Page header">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <m.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4"
          >
            {isAr ? 'تغطية متكاملة لمدينة الرياض' : 'Comprehensive Riyadh Coverage'}
          </m.span>
          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {isAr ? 'أحياء الرياض لخدمات نقل وتغليف الأثاث' : 'Riyadh Districts & Local Moving Hubs'}
          </m.h1>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-6">
            {isAr
              ? 'دينا نقل عفش وطواقم فك وتركيب متمركزة في أهم أحياء الرياض لضمان سرعة الوصول خلال 25-35 دقيقة فقط.'
              : 'Our moving crews and enclosed Dina trucks are stationed strategically across Riyadh to guarantee 25-35 minute dispatch to your doorstep.'}
          </p>
          <div className="flex items-center justify-center gap-2 text-accent-light text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">{isAr ? 'أحياء الرياض' : 'Districts'}</span>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Zone Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedZone === zone
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {zone === 'all'
                    ? isAr
                      ? 'جميع الأحياء'
                      : 'All Districts'
                    : zone}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث باسم الحي أو المعلم...' : 'Search district or landmark...'}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDistricts.map((district) => {
              const whatsappText = encodeURIComponent(
                isAr
                  ? `مرحباً خبراء أبو عثمان، أود الاستفسار عن خدمة نقل العفش في حي ${district.nameAr} بالرياض والحصول على عرض سعر فوري.`
                  : `Hello Abu Usman Movers, I am in ${district.name}, Riyadh and need a free moving quotation.`
              );

              return (
                <m.div
                  key={district.slug}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent uppercase">
                        {isAr ? district.zoneAr : district.zone}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-2">
                        {isAr ? district.nameAr : district.name}
                      </h2>
                      <span className="text-xs text-gray-500">
                        {isAr ? district.name : district.nameAr}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl">
                      <FaMapMarkerAlt />
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs font-medium">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-200">
                      <FaClock className="text-green-600" />
                      {isAr ? `وصول خلال ${district.responseTime}` : `Arrival in ${district.responseTime}`}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
                      <FaTruck className="text-blue-600" />
                      {isAr ? 'دينا متوفرة 24/7' : district.trucksOnStandby}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    {isAr ? district.shortDescAr : district.shortDesc}
                  </p>

                  <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                    <a
                      href={`https://wa.me/9660582230098?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm"
                    >
                      <FaWhatsapp className="text-base" />
                      {isAr ? 'حجز فوري عبر واتساب' : 'WhatsApp Quote'}
                    </a>

                    <Link
                      to={`/districts/${district.slug}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-accent bg-accent/10 hover:bg-accent hover:text-white transition-colors text-sm"
                    >
                      <span>{isAr ? 'تفاصيل الخدمة بالحي' : 'View District Details'}</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-[#07192d] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FaShieldAlt className="text-4xl text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            {isAr
              ? 'ضمان سلامة الأثاث وسرعة التوصيل في كافة أحياء الرياض'
              : '100% Furniture Safety & Punctuality Across Riyadh'}
          </h2>
          <p className="text-slate-300 text-base mb-8">
            {isAr
              ? 'طواقمنا مجهزة بأفضل أدوات الفك والتركيب والتغليف، مع سيارات دينا مغلقة ومجهزة للنقل الآمن في جميع أحياء العاصمة.'
              : 'Our moving crews arrive with export packing supplies, carpentry toolkits, and enclosed trucks to deliver flawless relocation.'}
          </p>
          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:scale-105"
          >
            {isAr ? 'اتصل الآن بفرع الرياض' : 'Call Riyadh Moving Team'}: {COMPANY_DETAILS.phone}
          </a>
        </div>
      </section>
    </>
  );
};

export default DistrictsHub;
