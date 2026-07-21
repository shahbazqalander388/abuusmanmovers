import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS, LANGUAGES } from '../utils/constants';

const navItems = [
  { nameKey: 'navbar.home', path: '/', sectionId: 'top' },
  { nameKey: 'navbar.about', path: '/', sectionId: 'about' },
  { nameKey: 'navbar.services', path: '/', sectionId: 'services' },
  { nameKey: 'navbar.serviceAreas', path: '/', sectionId: 'service-areas' },
  { nameKey: 'navbar.gallery', path: '/', sectionId: 'gallery' },
  { nameKey: 'navbar.contact', path: '/', sectionId: 'contact' },
];

// Reusable LanguageSwitcher Component
const LanguageSwitcher = ({ variant, scrolled }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find(l => i18n.language && i18n.language.startsWith(l.code)) || LANGUAGES[0];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleLangChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsOpen(false);
  };

  const buttonClasses = variant === 'desktop'
    ? `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
        scrolled
          ? 'border-transparent text-white hover:border-accent hover:text-accent bg-[#07192d]'
          : 'border-white/30 text-white hover:bg-white/10 bg-white/5'
      }`
    : `p-2 rounded-full text-sm font-medium transition-all ${
        scrolled ? 'text-white bg-[#07192d]' : 'text-white bg-white/10'
      }`;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('navbar.language')}
        className={buttonClasses}
      >
        {variant === 'desktop' ? (
          <>
            <FaGlobe className="text-xs" />
            <span>{currentLang.nativeLabel}</span>
            <FaChevronDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        ) : (
          <FaGlobe />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[140px]"
          role="listbox"
          aria-label="Select language"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={i18n.language && i18n.language.startsWith(lang.code)}
              onClick={() => handleLangChange(lang.code)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium transition-colors ${
                i18n.language && i18n.language.startsWith(lang.code)
                  ? 'bg-accent/10 text-accent'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.nativeLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['top', 'about', 'services', 'service-areas', 'gallery', 'why-choose-us', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 160;

      let currentSection = 'top';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const navOffset = 90;
    const topPosition = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 120);
      setIsOpen(false);
      return;
    }

    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#07192d] backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button type="button" onClick={() => handleNavClick('top')} className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-none text-white">
                ABU USMAN
              </span>
              <span className="text-sm font-semibold tracking-wider text-white">
                MOVERS
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5" role="menubar">
              {navItems.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <li key={link.sectionId} role="none">
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.sectionId)}
                      role="menuitem"
                      className={`relative font-medium transition-colors text-sm ${
                          scrolled
                            ? isActive ? 'text-white' : 'text-white/80 hover:text-white'
                            : isActive ? 'text-white' : 'text-gray-200 hover:text-white drop-shadow-sm'
                        }`}
                    >
                      {t(link.nameKey)}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Reusable Desktop Language Switcher */}
            <LanguageSwitcher variant="desktop" scrolled={scrolled} />

            {/* CTA Button */}
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call us at ${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-accent-light"
            >
              <FaPhoneAlt />
              {t('buttons.call')}
            </a>
          </div>

          {/* Mobile Actions: Language + Menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Reusable Mobile Language Switcher */}
            <LanguageSwitcher variant="mobile" scrolled={scrolled} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-2xl text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-[#07192d] shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <span className="text-xl font-bold text-white">{t('navbar.menu')}</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-2xl text-slate-300 hover:text-white"
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col p-5 gap-2 flex-1" role="menu">
          {navItems.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.sectionId} role="none">
                <button
                  type="button"
                  onClick={() => handleNavClick(link.sectionId)}
                  role="menuitem"
                  className={`block w-full text-left py-3 px-4 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'text-white bg-slate-800'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {t(link.nameKey)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
