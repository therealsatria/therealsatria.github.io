// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// =============================================================
// Astro Configuration — Satria Nugraha Personal Landing Page
// =============================================================
// Target deployment : GitHub Pages (user page)
// URL               : https://therealsatria.github.io
// Output            : Fully static (no SSR, no adapter)
// =============================================================

export default defineConfig({
  // -----------------------------------------------------------
  // Site & routing
  // -----------------------------------------------------------
  // Canonical URL of the deployed site. Used by Astro to generate
  // absolute URLs in the sitemap, canonical tags, and RSS feeds.
  site: 'https://therealsatria.github.io',

  // Trailing slash behaviour:
  //  - 'ignore'  : Astro accepts both /about and /about/
  //  - 'always'  : Astro normalises to /about/
  //  - 'never'   : Astro normalises to /about
  // For GitHub Pages, 'ignore' is the safest choice.
  trailingSlash: 'ignore',

  // Because this is a user page (served at the domain root),
  // the `base` option must NOT be set. If you ever move the
  // project to a repository sub-path, add:
  //   base: '/your-repo-name',
  // and prefix all `public/` asset references with
  // `import.meta.env.BASE_URL`.

  // -----------------------------------------------------------
  // Output & build
  // -----------------------------------------------------------
  // Generate a fully static site in ./dist — perfect for
  // GitHub Pages, Netlify, Vercel, and Cloudflare Pages.
  output: 'static',

  // Minify the final HTML output. Removes whitespace, comments,
  // and redundant attributes without affecting functionality.
  compressHTML: true,

  build: {
    // Inline small stylesheets directly into the HTML to save
    // one network round-trip. 'auto' inlines stylesheets below
    // 4KB; 'always' inlines everything; 'never' disables it.
    // Since our global CSS is small, 'auto' is a good balance.
    inlineStylesheets: 'auto',

    // Generate pretty URLs (folder/index.html) instead of
    // file.html. This produces cleaner URLs on GitHub Pages.
    format: 'directory',

    // Asset naming. Astro appends content hashes by default,
    // which enables long-term caching. Leave as default.
    assets: '_astro',
  },

  // -----------------------------------------------------------
  // Integrations
  // -----------------------------------------------------------
  integrations: [
    // Auto-generates sitemap-index.xml and sitemap-0.xml at build
    // time. Improves indexing by Google and Bing.
    sitemap({
      // Filter which pages appear in the sitemap. By default,
      // all pages are included. Uncomment to exclude any.
      // filter: (page) => !page.includes('/admin/'),

      // i18n configuration — only needed if the site later
      // supports multiple languages.
      // i18n: {
      //   defaultLocale: 'en',
      //   locales: { en: 'en-US' },
      // },

      // Add custom metadata to each sitemap entry.
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],

  // -----------------------------------------------------------
  // Server (development only)
  // -----------------------------------------------------------
  server: {
    // Port used by `npm run dev`. Change if 4321 conflicts.
    port: 4321,

    // Automatically open the browser on `npm run dev`.
    open: false,

    // Listen on all network interfaces — useful for testing
    // on a phone connected to the same Wi-Fi.
    host: false,
  },

  // -----------------------------------------------------------
  // Image optimisation
  // -----------------------------------------------------------
  // Astro's built-in Sharp service is used for image processing.
  // If you later add a profile photo, Astro will automatically
  // optimise it when imported from `src/assets/`.
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // -----------------------------------------------------------
  // Markdown (currently unused, but future-proof)
  // -----------------------------------------------------------
  // If you later add a blog or notes section, these settings
  // control syntax highlighting and markdown processing.
  markdown: {
    // Syntax highlighting theme for code blocks.
    // 'github-dark' and 'github-light' are neutral choices.
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  // -----------------------------------------------------------
  // Prefetch
  // -----------------------------------------------------------
  // Prefetch links the user is likely to click next. Since this
  // is a single-page site with only hash anchors, prefetch is
  // disabled to avoid unnecessary network activity.
  prefetch: false,

  // -----------------------------------------------------------
  // Dev toolbar (development only)
  // -----------------------------------------------------------
  // The Astro dev toolbar appears at the bottom of the screen
  // during development. It is automatically disabled in
  // production builds, so this setting only affects `astro dev`.
  devToolbar: {
    enabled: true,
  },
});