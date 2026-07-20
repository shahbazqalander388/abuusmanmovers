import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../../utils/constants';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-accent relative overflow-hidden" aria-label="Call to action">
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true"></div>
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-accent-light text-lg">
              {t('home.ctaDesc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send WhatsApp message for a moving quote"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              {t('home.whatsappUs')}
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call us now at ${COMPANY_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <FaPhoneAlt aria-hidden="true" />
              {t('home.callNow')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
