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
import { getDistrictBySlug, RIYADH_DISTRICTS } from '../data/districtsData';
import { COMPANY_DETAILS } from '../utils/constants';

const DistrictDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const district = getDistrictBySlug(slug);

  if (!district) {
    return <Navigate to="/districts" replace />;
  }

  const nearbyDistricts = RIYADH_DISTRICTS.filter((d) => d.slug !== district.slug).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً خبراء أبو عثمان، أريد عرض سعر لنقل العفش في حي ${district.nameAr}، الرياض. أرجو تزويدي بالأسعار وأقرب موعد دينا متاح.`
      : `Hello Abu Usman Movers, I need a moving quote for ${district.name} District, Riyadh. Please share pricing and closest Dina truck availability.`
  );

  const pageTitle = isAr
    ? `نقل عفش حي ${district.nameAr} بالرياض | دينا وفك وتركيب | خبراء أبو عثمان`
    : `Movers and Packers in ${district.name}, Riyadh | Abu Usman Movers`;

  const pageDesc = isAr
    ? `أفضل خدمات نقل وتغليف العفش في حي ${district.nameAr} بالرياض. وصول دينا خلال ${district.responseTime}، فك وتركيب غرف نوم، تغليف بابلز، وحجز فوري عبر واتساب.`
    : `Top movers and packers in ${district.name}, Riyadh. 25-30 min Dina truck dispatch, house shifting, furniture carpentry, bubble wrap & instant WhatsApp booking.`;

  const districtFaqs = [
    {
      question: `How fast can Abu Usman Movers arrive in ${district.name}, Riyadh?`,
      questionAr: `ما هي سرعة وصول سيارات الدينا إلى حي ${district.nameAr} بالرياض؟`,
      answer: `We have active moving crews and enclosed Dina trucks stationed in ${district.name} providing emergency and scheduled arrival within ${district.responseTime}.`,
    },
    {
      question: `Do you provide furniture dismantling and assembly in ${district.name}?`,
      questionAr: `هل توفرون نجارين لفك وتركيب الأثاث في حي ${district.nameAr}؟`,
      answer: `Yes, our teams include skilled master carpenters who dismantle and reinstall Ikea furniture, large bedroom sets, dining tables, curtains, and wall shelves with full hardware protection.`,
    },
    {
      question: `What is the moving rate for an apartment or villa in ${district.name}?`,
      questionAr: `ما هي أسعار نقل الشقق والفلل في حي ${district.nameAr}؟`,
      answer: `Moving rates in ${district.name} are competitive and transparent in SAR, determined by the volume of items, number of bedrooms, and packing materials requested. Contact our WhatsApp support for an instant quote.`,
    },
    {
      question: `Can you deliver furniture from ${district.name} to another Saudi city?`,
      questionAr: `هل تنقلون الأثاث من حي ${district.nameAr} إلى مدن المملكة الأخرى؟`,
      answer: `Yes, we operate daily intercity routes from ${district.name}, Riyadh to Jeddah, Dammam, Khobar, Jubail, Mecca, Medina, and all Saudi regions in enclosed, weatherproof Dina trucks.`,
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
          `movers in ${district.name.toLowerCase()}`,
          `نقل عفش حي ${district.nameAr}`,
          `دينا نقل عفش ${district.nameAr}`,
          `شركة نقل اثاث ${district.nameAr}`,
          `packing services ${district.name.toLowerCase()}`,
          `furniture moving ${district.name.toLowerCase()} riyadh`,
        ]}
        breadcrumbs={[
          { name: 'Home', url: 'https://abuusmanmovers.com' },
          { name: 'Riyadh Districts', url: 'https://abuusmanmovers.com/districts' },
          { name: district.name, url: `https://abuusmanmovers.com/districts/${district.slug}` },
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
                  ? `طواقم وسيارات دينا نشطة حالياً في حي ${district.nameAr} (وصول خلال ${district.responseTime})`
                  : `Active Dina Trucks in ${district.name} (Arrival in ${district.responseTime})`}
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {isAr
                ? `نقل وتغليف عفش في حي ${district.nameAr} بالرياض`
                : `Movers and Packers in ${district.name}, Riyadh`}
            </m.h1>

            <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed">
              {isAr ? district.shortDescAr : district.shortDesc}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/9660582230098?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                <span>{isAr ? `احجز دينا حي ${district.nameAr} واتساب` : `WhatsApp ${district.name} Crew`}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
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
                <p className="text-xl font-bold text-gray-900">{district.responseTime}</p>
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
                  {isAr ? 'سيارات النقل في الحي' : 'Local Standby Fleet'}
                </span>
                <p className="text-xl font-bold text-gray-900">{district.trucksOnStandby}</p>
                <span className="text-xs text-slate-500">
                  {isAr ? district.crewsAvailable : district.crewsAvailable}
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

          {/* Detailed Features & Services for this District */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold uppercase text-xs tracking-wider">
                {isAr ? `خدماتنا في حي ${district.nameAr}` : `Specialized Relocation`}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {isAr
                  ? `لماذا يفضل سكان حي ${district.nameAr} خدمات أبو عثمان؟`
                  : `Why Residents in ${district.name} Choose Abu Usman Movers`}
              </h2>
              <div className="space-y-4">
                {(isAr ? district.highlightsAr : district.highlights).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-emerald-500 text-lg shrink-0 mt-1" />
                    <span className="text-gray-700 text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase mr-2">
                  {isAr ? 'معالم قريبة مغطاة:' : 'Key Landmarks:'}
                </span>
                {(isAr ? district.landmarksAr : district.landmarks).map((landmark, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                  >
                    <FaMapMarkerAlt className="text-accent text-[10px]" />
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Capabilities Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <FaBoxes className="text-3xl text-accent mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {isAr ? 'تغليف متقدم' : 'Bubble Packing'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'طبقات بابلز وكراتين لحماية الزجاج والأجهزة الحساسة.'
                    : 'Multi-layer bubble wrap & cartons safeguarding fragile glassware.'}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <FaTools className="text-3xl text-emerald-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {isAr ? 'نجار فك وتركيب' : 'Carpentry Services'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'فك وتركيب احترافي لغرف النوم، الدواليب والمطابخ.'
                    : 'Expert master carpenters for bedrooms, wardrobes & TV mounts.'}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <FaTruck className="text-3xl text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {isAr ? 'دينا مغلقة حديثة' : 'Closed Dina Trucks'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'شاحنات دينا نظيفة تحمي أثاثك من حرارة وغبار الرياض.'
                    : 'Padded, weather-tight Dina trucks shielding furniture from dust.'}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <FaClock className="text-3xl text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {isAr ? 'خدمة 24 ساعة' : '24/7 Availability'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'جاهزون دائماً للنقل الفوري أو المجدول في أي وقت.'
                    : 'Round-the-clock emergency and scheduled relocation across KSA.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {isAr ? 'أسئلة شائعة' : 'Local Questions'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              {isAr
                ? `الأسئلة المتكررة حول نقل العفش في حي ${district.nameAr}`
                : `Frequently Asked Questions in ${district.name}`}
            </h2>
          </div>

          <div className="space-y-4">
            {districtFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                  {isAr ? faq.questionAr : faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Districts Internal Linking Hub */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isAr ? 'أحياء أخرى مخدومة بالقرب منك' : 'Other Nearby Riyadh Districts We Serve'}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            {isAr
              ? 'تغطي سياراتنا كافة مناطق الرياض الشمالية والوسطى والشرقية.'
              : 'Our moving trucks cover every sector of Riyadh with rapid response.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {nearbyDistricts.map((item) => (
              <Link
                key={item.slug}
                to={`/districts/${item.slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all text-center group"
              >
                <span className="block font-bold text-gray-900 group-hover:text-accent transition-colors">
                  {isAr ? item.nameAr : item.name}
                </span>
                <span className="text-xs text-gray-500">{item.responseTime}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/districts"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm"
            >
              {isAr ? 'عرض جميع أحياء الرياض (10 أحياء) ←' : 'View all 10 Riyadh districts →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Floating CTA Bar for this District */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isAr
              ? `هل تخطط للانتقال في حي ${district.nameAr}؟`
              : `Ready to Move in ${district.name}?`}
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-6">
            {isAr
              ? 'تواصل معنا الآن عبر واتساب للحصول على عرض سعر فوري وحجز سيارة دينا خلال دقائق.'
              : 'Contact our dispatch team now via WhatsApp for a verified free quote and prompt truck reservation.'}
          </p>
          <a
            href={`https://wa.me/9660582230098?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            <span>{isAr ? 'تواصل معنا عبر واتساب الآن' : 'Get WhatsApp Quote Now'}</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default DistrictDetail;
