import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';
import urTranslation from './locales/ur/translation.json';

// Retrieve saved language from localStorage, default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      ur: { translation: urTranslation },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Setup global listener to handle RTL/LTR direction, lang attribute, and saving to localStorage
i18n.on('languageChanged', (lng) => {
  const isRtl = ['ar', 'ur'].includes(lng);
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  localStorage.setItem('language', lng);
});

// Run initial direction set on boot
const initialRtl = ['ar', 'ur'].includes(savedLanguage);
document.documentElement.dir = initialRtl ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

export const RTL_LANGUAGES = ['ar', 'ur'];
export const isRTL = (lang) => RTL_LANGUAGES.includes(lang);

export default i18n;
