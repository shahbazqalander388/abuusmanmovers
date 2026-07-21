import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS, NAV_LINKS } from '../utils/constants';

const SERVICE_KEYS = [
  'houseShifting',
  'apartmentMoving',
  'villaMoving',
  'officeRelocation',
  'furnitureMoving',
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none text-white">ABU USMAN</span>
                <span className="text-sm font-semibold tracking-wider text-accent-light">MOVERS</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {t('footer.tagline')}. {t('footer.description')}
            </p>
            <p className="text-xs text-gray-400">
              {t('footer.licenseId')}: <span className="text-accent-light font-semibold">{COMPANY_DETAILS.licenseId}</span>
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href={COMPANY_DETAILS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-accent hover:text-white"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-green-500 hover:text-white"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
              {t('footer.quickLinks')}
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-accent rounded" aria-hidden="true" />
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition-colors hover:text-accent-light hover:underline">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services links">
            <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
              {t('footer.ourServices')}
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-accent rounded" aria-hidden="true" />
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>
                  <Link to="/services" className="transition-colors hover:text-accent-light hover:underline">
                    {t(`services.items.${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="mb-6 text-lg font-semibold text-white relative inline-block">
              {t('footer.contactUs')}
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-accent rounded" aria-hidden="true" />
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-accent-light" aria-hidden="true" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="flex-shrink-0 text-accent-light" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-accent-light" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </li>
            </ul>
          </address>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {COMPANY_DETAILS.name}. {t('footer.allRightsReserved')}</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link to="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
