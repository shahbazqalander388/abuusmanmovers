import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaTruck, FaWhatsapp, FaArrowRight, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { ALL_LOCATIONS } from '../data/jubailLocations';
import { COMPANY_DETAILS } from '../utils/constants';

const DistrictsHub = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const zones = useMemo(() => {
    const rawZones = Array.from(new Set(ALL_LOCATIONS.map((d) => d.zone).filter(Boolean)));
    return ['all', ...rawZones];
  }, []);

  const getZoneLabel = (zone) => {
    if (zone === 'all') return isAr ? 'جميع المناطق والأحياء' : 'All Areas & Districts';
    if (zone === 'Jubail Industrial') return isAr ? 'الجبيل الصناعية' : 'Jubail Industrial';
    if (zone === 'Jubail Balad') return isAr ? 'الجبيل البلد' : 'Jubail Balad';
    if (zone === 'Eastern Province') return isAr ? 'المنطقة الشرقية' : 'Eastern Province';
    if (zone === 'Inter-City Route') return isAr ? 'خطوط النقل بين المدن' : 'Inter-City Routes';
    return zone;
  };

  const filteredDistricts = useMemo(() => {
    return ALL_LOCATIONS.filter((d) => {
      const matchesZone = selectedZone === 'all' || d.zone === selectedZone;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        d.name.toLowerCase().includes(query) ||
        (d.nameEn && d.nameEn.toLowerCase().includes(query)) ||
        (d.nameAr && d.nameAr.includes(query)) ||
        (d.zone && d.zone.toLowerCase().includes(query)) ||
        (d.zoneAr && d.zoneAr.includes(query)) ||
        (d.landmarks && d.landmarks.some((lm) => lm.toLowerCase().includes(query))) ||
        (d.landmarksAr && d.landmarksAr.some((lm) => lm.includes(query)));
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
            ? 'أحياء الجبيل والمنطقة الشرقية المغطاة لنقل العفش | شركة أبو عثمان'
            : 'Jubail & Eastern Province Moving Coverage Hub | Abu Usman Movers'
        }
        description={
          isAr
            ? 'المقر الرئيسي لشركة أبو عثمان في وسط البلد الجبيل (35514). تغطية شاملة لكافة أحياء الجبيل الصناعية والبلد ومدن الشرقية (الدمام، الخبر، الظهران، رأس تنورة) والرياض. وصول فوري وسيارت دينا مغلقة.'
            : 'Abu Usman Movers headquarters in Jubail City Center (35514). Full coverage across Jubail Industrial, Jubail Balad, Eastern Province (Dammam, Khobar, Dhahran, Ras Tanura) & express routes to Riyadh.'
        }
        path="/districts"
        keywords={[
          'movers in jubail',
          'نقل عفش بالجبيل',
          'نقل اثاث الجبيل الصناعية',
          'نقل عفش الفناتير',
          'نقل عفش الدفي',
          'نقل اثاث جلمودة',
          'نقل عفش وسط البلد الجبيل',
          'دينا نقل عفش الجبيل',
          'نقل عفش من الجبيل الى الرياض',
          'شركة نقل اثاث بالمنطقة الشرقية',
        ]}
        breadcrumbs={[
          { name: 'Home', url: 'https://abuusmanmovers.com' },
          { name: isAr ? 'مناطق التغطية بالجبيل' : 'Jubail & Service Areas', url: 'https://abuusmanmovers.com/districts' },
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4 border border-accent/30"
          >
            {isAr ? 'المقر الرئيسي بالجبيل — مركز العمليات اللوجستية' : 'Jubail City Center HQ — Regional Logistics Hub'}
          </m.span>
          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {isAr ? 'أحياء الجبيل ومناطق تغطية نقل العفش' : 'Jubail Districts & Regional Moving Coverage Hub'}
          </m.h1>
          <p className="text-slate-200 text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
            {isAr
              ? 'انطلاقاً من مقرنا في وسط البلد الجبيل (4356 طريق الرياض، 8000، الرمز البريدي 35514)، نوفر أسرع وصول لسيارات الدينا المغلقة وطواقم النجارين المتمرسين لكافة أحياء الجبيل الصناعية ومدن المنطقة الشرقية والرياض.'
              : 'Headquartered at 4356 Riad, 8000, Jubail City Center (Postal Code: 35514), Abu Usman Movers provides rapid enclosed Dina truck dispatch and master carpentry across Jubail Industrial City, Jubail Balad, neighboring Eastern Province cities, and express inter-city routes to Riyadh.'}
          </p>
          <div className="flex items-center justify-center gap-2 text-accent-light text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">{isAr ? 'مناطق التغطية بالجبيل' : 'Jubail & Service Areas'}</span>
          </div>
        </div>
      </section>

      {/* Verified Physical Headquarters Trust Bar */}
      <section className="bg-slate-900 text-white py-4 border-b border-slate-800 text-xs md:text-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <FaMapMarkerAlt className="text-accent" />
            <span className="font-semibold text-white">{isAr ? 'المقر الفعلي المعتمد:' : 'Verified Physical Address:'}</span>
            <span>{COMPANY_DETAILS.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">{isAr ? 'الإحداثيات: 27.0055, 49.6582' : 'GPS: 27.0055, 49.6582'}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-white hover:text-accent font-bold transition-colors">
              {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
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
                  {getZoneLabel(zone)}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث باسم الحي أو المدينة أو المعلم...' : 'Search district, city or landmark...'}
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
              const targetName = district.nameEn || district.name;
              const targetNameAr = district.nameAr || district.name;
              const whatsappText = `https://wa.me/966582230098?text=Hello%20Abu%20Usman%20Movers,%20I%20need%20moving%20services%20in%20${encodeURIComponent(targetName)}`;

              return (
                <m.div
                  key={district.slug}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent uppercase">
                          {isAr ? district.zoneAr || district.zone : district.zone}
                        </span>
                        {district.distance && (
                          <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {district.distance}
                          </span>
                        )}
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">
                          {isAr ? targetNameAr : targetName}
                        </h2>
                        <span className="text-xs text-gray-500">
                          {isAr ? targetName : targetNameAr}
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
                        {isAr ? `وصول: ${district.responseTime || '20-30 دقيقة'}` : `Arrival: ${district.responseTime || '20-30 Mins'}`}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
                        <FaTruck className="text-blue-600" />
                        {district.trucksOnStandby || (isAr ? 'دينا متوفرة 24/7' : '24/7 Dina Fleet')}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {isAr ? district.shortDescAr : district.shortDesc}
                    </p>

                    {/* Key Landmarks */}
                    {district.landmarks && district.landmarks.length > 0 && (
                      <div className="mb-6">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                          {isAr ? 'أبرز المعالم المغطاة:' : 'Key Locations Served:'}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(isAr ? district.landmarksAr || district.landmarks : district.landmarks).map((lm, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                              {lm}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions: View Details & Get Quote */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                    <Link
                      to={`/districts/${district.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors"
                    >
                      <span>{isAr ? 'تفاصيل الحي' : 'Full Details'}</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                    <a
                      href={whatsappText}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-sm"
                      aria-label={`Get a quote for moving in ${targetName}`}
                    >
                      <FaWhatsapp className="text-base" />
                      <span>{isAr ? 'عرض سعر' : 'Get a Quote'}</span>
                    </a>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>
    </>
  );
};

export default DistrictsHub;
