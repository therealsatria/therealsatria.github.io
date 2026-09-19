markdown
# Satria Nugraha — Personal Landing Page

A personal portfolio and digital CV built with [Astro](https://astro.build) to present my professional profile, work history, technical strengths, and selected projects in a clean and credible format. The site is tailored for recruiters, hiring teams, and collaborators looking for an IT infrastructure specialist with a focus on Microsoft environments, system administration, and troubleshooting.

- Live site: https://therealsatria.github.io/
- Repository: https://github.com/therealsatria/therealsatria.github.io

---

## Overview

This portfolio project showcases:

- a clear professional introduction and positioning as a System Administrator / Microsoft Infrastructure specialist
- a concise overview of background, technical strengths, and business impact
- selected capabilities across Microsoft 365, Windows Server, Entra ID, Intune, Linux administration, and troubleshooting
- a structured experience timeline with notable responsibilities and outcomes
- featured project highlights with relevant technologies and enterprise context
- direct contact access for opportunities, networking, and collaboration

The design emphasizes readability, performance, and a polished digital presence while keeping the site lightweight and easy to maintain.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro](https://astro.build) |
| Styling | Plain CSS with design tokens |
| Interactivity | Minimal vanilla JavaScript for UI polish |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) |
| Hosting | GitHub Pages |
| SEO / Metadata | Astro metadata + Open Graph + structured data |
| Assets | SVG/PNG favicons, PWA manifest, downloadable resume |

This project keeps the stack intentionally lightweight while adding production-ready metadata, icon support, and a polished static portfolio presentation.

---

## Features

- Semantic HTML5 structure using header, nav, main, section, article, aside, and footer
- Responsive layout for mobile, tablet, and desktop screens
- Accessibility-focused implementation with skip links, visible focus states, and reduced-motion support
- Fast static output for lightweight page loading
- Maintainable CSS variables for easy theme updates
- SEO-friendly structure with metadata, canonical links, and structured data
- PWA-ready browser and Apple touch icons with a web manifest
- Deployment-ready setup for GitHub Pages

---

## Project Structure

```text
therealsatria.github.io/
├── .github/
│   └── workflows/
│       └── main.yml                 # GitHub Actions workflow
├── public/
│   ├── apple-touch-icon.png        # Apple touch icon
│   ├── favicon-192.png             # Browser icon (192px)
│   ├── favicon-512.png             # Browser icon (512px)
│   ├── favicon.ico                 # Legacy browser favicon
│   ├── favicon.svg                 # SVG favicon
│   ├── manifest.webmanifest        # PWA / app manifest
│   ├── robots.txt                  # Search engine instructions
│   ├── llms.txt                    # LLM-friendly site map
│   ├── llms-full.txt               # Expanded LLM content export
│   └── satria-resume.pdf           # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Header.astro            # Top navigation and mobile menu
│   │   ├── Hero.astro              # Intro section and quick facts
│   │   ├── About.astro             # Personal summary
│   │   ├── Skills.astro            # Skill cards
│   │   ├── Experience.astro        # Career timeline
│   │   ├── Projects.astro          # Portfolio entries
│   │   ├── Contact.astro           # Contact links and CTA
│   │   └── Footer.astro            # Footer and timezone script
│   ├── layouts/
│   │   └── BaseLayout.astro        # HTML shell and metadata
│   ├── pages/
│   │   └── index.astro             # Main landing page
│   └── styles/
│       └── global.css              # Global styles and design tokens
├── .gitignore
├── astro.config.mjs                # Astro configuration
├── package.json                    # Scripts and dependencies
├── tsconfig.json                   # TypeScript config
├── README.md                       # Project documentation
├── package-lock.json
└── .nojekyll
```

### Component Responsibilities

| File | Responsibility |
| --- | --- |
| `BaseLayout.astro` | Provides the HTML shell, metadata, and loads global styles and fonts. |
| `Header.astro` | Sticky navigation with anchor links and a mobile menu toggle. |
| `Hero.astro` | Intro section with headline, summary, CTA buttons, and quick facts. |
| `About.astro` | Professional summary and background introduction. |
| `Skills.astro` | Grouped cards for technical and professional capabilities. |
| `Experience.astro` | Chronological work history data. |
| `Projects.astro` | Selected project list with descriptions and tags. |
| `Contact.astro` | Contact details and direct communication links. |
| `Footer.astro` | Footer content and timezone display behavior. |
| `index.astro` | Composes the full landing page structure. |

---

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm or another package manager

### Installation

```bash
git clone https://github.com/therealsatria/therealsatria.github.io.git
cd therealsatria.github.io
npm install
```

### Run locally

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`.

### Production build

```bash
npm run build
```

The built output is generated in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Astro development server. |
| `npm run build` | Build the production site. |
| `npm run preview` | Preview the final build locally. |

---

## Configuration

The main Astro config is in `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://therealsatria.github.io',
});
```

The `site` value points to the deployed website URL and ensures canonical links are generated correctly.

Files inside `public/` are served from the root domain. For example, reference the resume as `/satria-resume.pdf`.

---

## Deployment

This project is prepared for deployment to GitHub Pages. The workflow is defined in `.github/workflows/main.yml` and can be triggered automatically on push to the target branch.

For first-time setup:

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. Ensure the `site` URL in `astro.config.mjs` matches the deployed domain.

Because Astro outputs a static site, it can also be deployed to other static hosts such as Netlify, Vercel, or Cloudflare Pages with minimal configuration.

### Fresh content after deployment

The production page is static HTML. Astro already fingerprints its generated assets, so CSS and JavaScript changes are cache-safe. GitHub Pages controls the HTTP cache headers and may serve an existing HTML response briefly while its CDN propagates a new deployment; this cannot be disabled from an Astro repository.

For the normal workflow:

1. Wait until the `Deploy to GitHub Pages` workflow is green, not only until the build job finishes.
2. Open the deployed URL in Chrome and perform a normal refresh. Avoid adding a client-side auto-reload, since it can interrupt visitors and does not purge the CDN.
3. If the old page remains, check the response in DevTools Network with `Disable cache` enabled, then try an incognito window. If both show the old page, wait for GitHub Pages CDN propagation and confirm the deployment commit in repository Settings > Pages.

If immediate cache control is a hard requirement, use a host that supports response headers and configure HTML responses with `Cache-Control: no-cache, must-revalidate` (or `max-age=0, must-revalidate`) while keeping long-lived caching for fingerprinted assets. A custom domain or a reverse proxy/CDN with purge support can also provide an explicit cache purge.

---

## Customization

- Content: update the data arrays in `src/components/Experience.astro`, `Skills.astro`, and `Projects.astro`
- Branding: adjust the project title and metadata values in `src/pages/index.astro` and `src/components/SEO.astro`
- Styling: adjust design tokens in `src/styles/global.css`
- Typography: update the font loading in `src/layouts/BaseLayout.astro`
- Resume: place the PDF in `public/` and reference it in the hero section
- Icons: customize the favicon and manifest assets in `public/`

---

## Accessibility

The site follows modern accessibility practices where practical, including:

- skip-to-content navigation
- visible focus states on interactive elements
- semantic landmarks and logical heading structure
- support for reduced motion preferences
- sufficient contrast for readable text

---

## License

© Satria Nugraha. All rights reserved.

The content of this site, including personal information and resume materials, is the intellectual property of Satria Nugraha and may not be reused without permission.
