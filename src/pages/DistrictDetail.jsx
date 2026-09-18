import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaTruck,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaBoxes,
  FaTools,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { getLocationBySlug, ALL_LOCATIONS } from '../data/jubailLocations';
import { COMPANY_DETAILS } from '../utils/constants';

const DistrictDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const district = getLocationBySlug(slug);

  if (!district) {
    return <Navigate to="/districts" replace />;
  }

  const nearbyDistricts = ALL_LOCATIONS.filter((d) => d.slug !== district.slug).slice(0, 4);

  const targetName = district.nameEn || district.name;
  const targetNameAr = district.nameAr || district.name;

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً شركة أبو عثمان، أريد عرض سعر لنقل العفش في ${targetNameAr} (${district.zoneAr || district.zone}). أرجو تزويدي بالأسعار وأقرب موعد دينا متاح.`
      : `Hello Abu Usman Movers, I need a moving quote for ${targetName} (${district.zone}). Please share pricing and closest Dina truck availability.`
  );

  const whatsappUrl = `https://wa.me/966582230098?text=Hello%20Abu%20Usman%20Movers,%20I%20need%20moving%20services%20in%20${encodeURIComponent(targetName)}`;

  const pageTitle = isAr
    ? `نقل عفش ${targetNameAr} | دينا وفك وتركيب | شركة أبو عثمان بالجبيل`
    : `Movers and Packers in ${targetName} | Abu Usman Movers Jubail`;

  const pageDesc = isAr
    ? `أفضل خدمات نقل وتغليف العفش في ${targetNameAr} (${district.zoneAr || district.zone}). وصول دينا خلال ${district.responseTime || '20-30 دقيقة'}، فك وتركيب غرف نوم، تغليف بابلز، وحجز فوري عبر واتساب.`
    : `Top movers and packers in ${targetName} (${district.zone}). 20-30 min Dina truck dispatch, house shifting, furniture carpentry, bubble wrap & instant WhatsApp booking from Jubail HQ.`;

  const districtFaqs = [
    {
      question: `How fast can Abu Usman Movers arrive in ${targetName}?`,
      questionAr: `ما هي سرعة وصول سيارات الدينا إلى ${targetNameAr}؟`,
      answer: `From our central headquarters at 4356 Riad, 8000, Jubail City Center (35514), our standby Dina trucks reach ${targetName} within ${district.responseTime || '20 to 30 minutes'} with complete moving and packing tools.`,
    },
    {
      question: `Do you provide professional carpentry dismantling and assembly in ${targetName}?`,
      questionAr: `هل توفرون نجارين لفك وتركيب الأثاث في ${targetNameAr}؟`,
      answer: `Yes, our crews in ${targetName} include certified master carpenters who dismantle and reinstall Ikea furniture, custom master bedroom sets, modular closets, dining tables, curtains, and wall-mounted electronics with full hardware preservation.`,
    },
    {
      question: `What is the moving rate for an apartment or villa in ${targetName}?`,
      questionAr: `ما هي أسعار نقل الشقق والفلل في ${targetNameAr}؟`,
      answer: `Moving rates in ${targetName} are competitive flat rates in SAR, based on the volume of furniture, floor level, and required packaging materials. Contact our direct WhatsApp dispatcher at +966 058 223 0098 for an upfront quotation with zero hidden fees.`,
    },
    {
      question: `Do you offer relocation from ${targetName} to other Saudi cities like Riyadh or Dammam?`,
      questionAr: `هل تنقلون الأثاث من ${targetNameAr} إلى مدن المملكة الأخرى كالرياض والدمام؟`,
      answer: `Yes, Abu Usman Movers runs daily express routes connecting Jubail, ${targetName}, Dammam, Khobar, and Riyadh with enclosed weatherproof Dina trucks and full destination assembly.`,
    },
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        path={`/districts/${district.slug}`}
        district={district}
        keywords={[
          `movers in ${targetName.toLowerCase()}`,
          `نقل عفش ${targetNameAr}`,
          `دينا نقل عفش ${targetNameAr}`,
          `شركة نقل اثاث ${targetNameAr}`,
          `packing services ${targetName.toLowerCase()}`,
          `furniture moving ${targetName.toLowerCase()} jubail`,
          `نقل اثاث الجبيل`,
        ]}
        breadcrumbs={[
          { name: 'Home', url: 'https://abuusmanmovers.com' },
          { name: isAr ? 'مناطق التغطية بالجبيل' : 'Jubail & Service Areas', url: 'https://abuusmanmovers.com/districts' },
          { name: isAr ? targetNameAr : targetName, url: `https://abuusmanmovers.com/districts/${district.slug}` },
        ]}
        faq={districtFaqs}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="District Hero">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live Dispatch Badge */}
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-xs md:text-sm mb-4 border border-emerald-500/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {isAr
                  ? `طواقم وسيارات دينا نشطة حالياً في ${targetNameAr} (وصول خلال ${district.responseTime || '20-30 دقيقة'})`
                  : `Active Dina Trucks in ${targetName} (Arrival in ${district.responseTime || '20-30 Mins'})`}
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {isAr
                ? `نقل وتغليف عفش في ${targetNameAr} | شركة أبو عثمان`
                : `Movers and Packers in ${targetName} | Abu Usman Movers`}
            </m.h1>

            <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed">
              {isAr ? district.shortDescAr : district.shortDesc}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                <span>{isAr ? `احجز دينا ${targetNameAr} واتساب` : `Get a Quote on WhatsApp`}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-primary bg-white hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
              >
                <FaPhoneAlt className="text-sm" />
                <span>{isAr ? 'اتصل بالمندوب المباشر' : 'Call Local Dispatcher'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* District Highlights & Stats Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl shrink-0">
                <FaClock />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-semibold">
                  {isAr ? 'متوسط وقت الوصول' : 'Dispatch Time'}
                </span>
                <p className="text-xl font-bold text-gray-900">{district.responseTime || '20-30 Mins'}</p>
                <span className="text-xs text-green-600 font-medium">
                  {isAr ? 'متاح طوال 24 ساعة' : 'Active 24/7 coverage'}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-2xl shrink-0">
                <FaTruck />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-semibold">
                  {isAr ? 'الأسطول المتاح في المنطقة' : 'Local Standby Fleet'}
                </span>
                <p className="text-xl font-bold text-gray-900">{district.trucksOnStandby || 'Enclosed Dina Fleet'}</p>
                <span className="text-xs text-slate-500">
                  {district.crewsAvailable || (isAr ? 'فرق عمل متخصصة' : 'Certified Moving Crews')}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-semibold">
                  {isAr ? 'ضمان الحماية' : 'Service Warranty'}
                </span>
                <p className="text-xl font-bold text-gray-900">
                  {isAr ? 'سلامة 100%' : '100% Safety'}
                </p>
                <span className="text-xs text-slate-500">
                  {isAr ? 'تغليف بابلز وبطانيات مبطنة' : 'Export bubble wrap & blankets'}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features & Moving Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">
                {isAr ? 'خدماتنا المتخصصة' : 'Custom Tailored Services'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {isAr
                  ? `لماذا يفضل سكان ${targetNameAr} خدمات شركة أبو عثمان؟`
                  : `Why Residents in ${targetName} Choose Abu Usman Movers`}
              </h2>
              <ul className="space-y-4">
                {(isAr ? district.highlightsAr || district.highlights : district.highlights)?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" />
                    <span className="text-gray-700 text-base leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landmarks & Service Area Map Box */}
            <div className="bg-gradient-to-br from-slate-900 to-primary p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <span>{isAr ? `تغطية ${targetNameAr} والمناطق المجاورة` : `${targetName} Coverage Areas`}</span>
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {isAr
                  ? `سيارات الدينا المغلقة تغطي كافة قطاعات ${targetNameAr} والشوارع الرئيسية والمجمعات السكنية مع التزام تام بالسلامة.`
                  : `Our transport vehicles serve every sector, residential compound, and avenue across ${targetName} with full protection.`}
              </p>

              {district.landmarks && district.landmarks.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    {isAr ? 'أهم المعالم القريبة المغطاة:' : 'Prominent Landmarks Served:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(isAr ? district.landmarksAr || district.landmarks : district.landmarks).map((lm, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium text-slate-200">
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">{isAr ? 'المقر الإداري الرئيسي' : 'Operations Base'}</span>
                  <span className="text-sm font-semibold text-white">4356 Riad, 8000, Jubail Center</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  {isAr ? 'طلب معاينة مجانية' : 'Book Moving Crew'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District Specific FAQs */}
      <section className="py-16 bg-gray-50 border-b border-gray-100" aria-label="District FAQs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">
              {isAr ? 'الأسئلة الشائعة' : 'Common Questions'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              {isAr
                ? `الأسئلة الشائعة حول نقل الأثاث في ${targetNameAr}`
                : `Frequently Asked Questions About Moving in ${targetName}`}
            </h2>
          </div>

          <div className="space-y-4">
            {districtFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {isAr ? faq.questionAr : faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isAr ? faq.answer : faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Districts Internal Linking Hub */}
      <section className="py-16 bg-white" aria-label="Nearby Locations">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-1 block">
                {isAr ? 'المزيد من مناطق التغطية' : 'Explore More Locations'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {isAr ? 'أحياء ومدن مجاورة نخدمها أيضاً' : 'Nearby Districts & Cities We Also Serve'}
              </h2>
            </div>
            <Link
              to="/districts"
              className="mt-4 md:mt-0 text-accent hover:underline font-semibold text-sm flex items-center gap-1"
            >
              <span>{isAr ? 'عرض كافة الأحياء' : 'View All Locations'}</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyDistricts.map((d) => (
              <Link
                key={d.slug}
                to={`/districts/${d.slug}`}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-gray-700 group-hover:bg-white/20 group-hover:text-white">
                    {d.zone}
                  </span>
                  <FaMapMarkerAlt className="text-accent group-hover:text-accent-light" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">
                  {isAr ? d.nameAr || d.nameEn : d.nameEn || d.name}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-slate-300 mt-1">
                  {d.responseTime ? `${d.responseTime} dispatch` : 'Daily service'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DistrictDetail;
