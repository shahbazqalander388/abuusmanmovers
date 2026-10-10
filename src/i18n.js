import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getSavedLanguage = () => {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
  } catch {
    // ignore restricted storage access in crawlers or private mode
  }
  return 'en';
};

const savedLanguage = getSavedLanguage();
const fallbackLng = 'en';

const loadTranslation = async (lng) => {
  const module = await import(`./locales/${lng}/translation.json`);
  return module.default;
};

export const initI18n = async () => {
  const languagesToLoad = savedLanguage === fallbackLng
    ? [fallbackLng]
    : [savedLanguage, fallbackLng];

  const resources = {};
  await Promise.all(
    languagesToLoad.map(async (lng) => {
      resources[lng] = { translation: await loadTranslation(lng) };
    }),
  );

  await i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.on('languageChanged', async (lng) => {
    if (!i18n.hasResourceBundle(lng, 'translation')) {
      i18n.addResourceBundle(lng, 'translation', await loadTranslation(lng));
    }
    const isRtl = ['ar', 'ur'].includes(lng);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    try {
      localStorage.setItem('language', lng);
    } catch {
      // ignore storage write errors
    }
  });

  const initialRtl = ['ar', 'ur'].includes(savedLanguage);
  document.documentElement.dir = initialRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = savedLanguage;

  return i18n;
};

export const RTL_LANGUAGES = ['ar', 'ur'];
export const isRTL = (lang) => RTL_LANGUAGES.includes(lang);

export default i18n;
