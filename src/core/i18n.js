import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { DEFAULT_LANG } from "./vars";

export const _i18n = i18n
	// load translation using http -> see /public/locales
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		fallbackLng: DEFAULT_LANG,
		load: "all",
		preload: false,
		partialBundledLanguages: false,
		react: {
			useSuspense: true,
		},
		lng: /* localStorage.getItem("i18nextLng") || */ DEFAULT_LANG, // IT SHOULD BE DONE | SAVED TO LocalStorage
		ns: ["header"],
		defaultNS: "header",
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
	});
