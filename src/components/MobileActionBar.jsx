import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../utils/constants';

const MobileActionBar = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const defaultWhatsappMessage = encodeURIComponent(
    isAr
      ? 'مرحباً خبراء أبو عثمان، أود الاستفسار عن خدمة نقل وتغليف العفش والحصول على عرض سعر مجاني.'
      : 'Hello Abu Usman Movers, I would like to get a free quote for moving and packing services in Saudi Arabia.'
  );

  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5 transition-all"
      aria-label="Quick Mobile Actions"
    >
      {/* Micro-status banner */}
      <div className="flex items-center justify-center gap-2 pb-1.5 px-3 text-[11px] font-medium text-slate-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>
          {isAr
            ? 'طواقم النقل وسيارات الدينا نشطة 24/7 في الرياض والمملكة'
            : 'Moving crew & Dina trucks active 24/7'}
        </span>
      </div>

      {/* Primary CTA buttons row */}
      <div className="grid grid-cols-2 gap-2.5 px-3 pb-1">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/9660582230098?text=${defaultWhatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-transform active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-lg" />
          <span>{isAr ? 'واتساب مباشر' : 'WhatsApp Us'}</span>
        </a>

        {/* Call Now Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0a4275] active:bg-[#072f54] text-white font-bold text-sm shadow-lg shadow-blue-950/40 border border-white/15 transition-transform active:scale-95"
          aria-label="Call Now"
        >
          <FaPhoneAlt className="text-xs" />
          <span>{isAr ? 'اتصل الآن' : 'Call Now'}</span>
        </a>
      </div>
    </aside>
  );
};

export default React.memo(MobileActionBar);
