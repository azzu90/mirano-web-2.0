// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mirano-solutions.com',
  // Preview-Tooling weist den Port über die PORT-Env zu; 4321 bleibt der Default
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
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
