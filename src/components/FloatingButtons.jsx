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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl hover:shadow-green-500/30"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] bg-green-400 opacity-75 group-hover:animate-none"></div>
        <FaWhatsapp className="relative z-10 text-3xl" aria-hidden="true" />
        <span className="absolute right-16 rounded bg-black/75 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none">
          {t('home.whatsappUs')}
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl hover:shadow-primary/30"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl" aria-hidden="true" />
        <span className="absolute right-16 rounded bg-black/75 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none">
          {t('home.callNow')}
        </span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${
          showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="text-xl" aria-hidden="true" />
      </button>
    </div>
  );
};

export default FloatingButtons;
