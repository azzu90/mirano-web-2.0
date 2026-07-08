// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mirano-solutions.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'hr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
