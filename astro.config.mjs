// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://therealsatria.github.io',
  trailingSlash: 'ignore',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
      // Exclude non-indexable files from the sitemap
      filter: (page) =>
        !page.includes('llms.txt') &&
        !page.includes('llms-full.txt') &&
        !page.endsWith('.pdf'),
    }),
  ],
});