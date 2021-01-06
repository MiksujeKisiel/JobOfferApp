import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const Languages = ['pl', 'en'];



i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next

  .init({
    fallbackLng: 'pl',
    
    debug: true,
    whitelist: Languages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

  export default i18n;