import { initReactI18next } from 'react-i18next';
import {LanguageDetector} from 'i18next-browser-languagedetector';

module.exports = {
  i18n: {
    initReactI18next,
    defaultLocale: "en",
    locales: ["en", "pt"],
    LanguageDetector,
    debug: true,
  },
};
