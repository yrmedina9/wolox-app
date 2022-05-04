import { createI18n } from 'vue-i18n';
import english from './locales/lang/en.json';
import spanish from './locales/lang/es.json';
const messages = {
  en: english,
  es: spanish
};
export const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
});
