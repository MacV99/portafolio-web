// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portafoliomacv.netlify.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});