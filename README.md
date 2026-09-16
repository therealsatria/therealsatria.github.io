markdown
# Satria Nugraha — Personal Landing Page

A personal portfolio website crafted to present my profile, experience, skills, and project highlights in a clean and professional way. Built with [Astro](https://astro.build), this landing page is designed to make a strong first impression for recruiters, collaborators, and hiring teams.

- Live site: https://therealsatria.github.io/
- Repository: https://github.com/therealsatria/therealsatria.github.io

---

## Overview

This portfolio project showcases:

- a strong personal introduction and professional positioning
- a concise overview of my background and capabilities
- selected technical skills across development, infrastructure, and workflow
- professional experience in a structured timeline
- featured projects with relevant technologies and outcomes
- direct contact access for opportunities and networking

The design emphasizes clarity, readability, and a polished digital presence while keeping the experience fast, lightweight, and easy to maintain.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro](https://astro.build) |
| Styling | Plain CSS with design tokens |
| Interactivity | Vanilla JavaScript |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

This project keeps the stack intentionally lightweight: no React/Vue/Svelte, no CSS framework, and no extra JavaScript bundler beyond Astro's built-in pipeline.

---

## Features

- Semantic HTML5 structure using header, nav, main, section, article, aside, and footer
- Responsive layout for mobile, tablet, and desktop screens
- Accessibility-focused implementation with skip links, visible focus states, and reduced-motion support
- Fast static output for lightweight page loading
- Maintainable CSS variables for easy theme updates
- SEO-friendly structure with metadata and semantic markup
- Deployment-ready setup for GitHub Pages

---

## Project Structure

```text
therealsatria.github.io/
├── .github/
│   └── workflows/
│       └── main.yml            # GitHub Actions workflow
├── public/
│   ├── favicon.ico             # Browser favicon
│   ├── favicon.svg             # SVG favicon
│   └── satria-resume.pdf       # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Header.astro        # Top navigation and mobile menu
│   │   ├── Hero.astro          # Intro section and quick facts
│   │   ├── About.astro         # Personal summary
│   │   ├── Skills.astro        # Skill cards
│   │   ├── Experience.astro    # Career timeline
│   │   ├── Projects.astro      # Portfolio entries
│   │   ├── Contact.astro       # Contact links and CTA
│   │   └── Footer.astro        # Footer and timezone script
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell and metadata
│   ├── pages/
│   │   └── index.astro         # Main landing page
│   └── styles/
│       └── global.css          # Global styles and design tokens
├── .gitignore
├── astro.config.mjs            # Astro configuration
├── package.json                # Scripts and dependencies
├── tsconfig.json               # TypeScript config
├── README.md                   # Project documentation
└── package-lock.json
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

---

## Customization

- Content: update the data arrays in `src/components/Experience.astro`, `Skills.astro`, and `Projects.astro`
- Styling: adjust design tokens in `src/styles/global.css`
- Typography: update the font loading in `src/layouts/BaseLayout.astro`
- Resume: place the PDF in `public/` and reference it in the hero section

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
