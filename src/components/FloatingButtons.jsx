import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../utils/constants';

const FloatingButtons = () => {
  const { t } = useTranslation();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Desktop Floating Actions (Hidden on mobile where MobileActionBar is active) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href={COMPANY_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/40"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute inset-0 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] bg-emerald-400 opacity-60 group-hover:animate-none" />
          <FaWhatsapp className="relative z-10 text-3xl" aria-hidden="true" />
          <span className="absolute right-16 rounded-lg bg-black/80 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none shadow-md font-medium">
            {t('home.whatsappUs')}
          </span>
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 border border-white/20"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-xl" aria-hidden="true" />
          <span className="absolute right-16 rounded-lg bg-black/80 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none shadow-md font-medium">
            {t('home.callNow')}
          </span>
        </a>
      </div>

      {/* Back to Top Button (Positioned above mobile bar on small screens) */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-white shadow-lg transition-all duration-300 hover:bg-slate-700 hover:scale-110 bottom-20 right-4 md:bottom-6 md:right-36 ${
          showTopBtn ? 'translate-y-0 opacity-90' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="text-sm" aria-hidden="true" />
      </button>
    </>
  );
};

export default FloatingButtons;
