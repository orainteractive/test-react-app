import i18n from "i18next";
import ICU from "i18next-icu";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import en from "i18next-icu/locale-data/en";

i18n
  .use(
    new ICU({
      localeData: en
    })
  )
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    lng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false
    },
    keySeparator: false,
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    }
  });

export default i18n;
