import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import vi from './locales/vi/translation.json';

// ✅ Lấy ngôn ngữ đã lưu
let initialLng = 'vi';
try {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) initialLng = savedLang;
} catch (e) {
  console.warn('LocalStorage not available');
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },

    lng: initialLng,         // ✅ Ngôn ngữ ban đầu
    fallbackLng: 'vi',       // ✅ Nếu lỗi thì quay về tiếng Việt

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,    // ✅ Tránh lỗi render trắng
    },
  });

// ✅ Tự động lưu lại khi đổi ngôn ngữ
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('lang', lng);
  } catch (e) {
    // ignore
  }
});

export default i18n;