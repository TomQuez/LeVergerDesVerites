# Le Verger des Verites

Official website for **Le Verger des Verites**, a French non-profit association running a participatory community orchard in Lapalisse (Allier, 03), advocating for kitchen gardening, biodiversity, and organic practices.

**Live site** : [levergerdesverites.fr](https://levergerdesverites.fr)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 19](https://react.dev/) + [TypeScript 5.8](https://www.typescriptlang.org/) |
| Build | [Vite 7](https://vite.dev/) |
| UI | [MUI 7](https://mui.com/) (Material UI) + Emotion |
| Icons | [@mui/icons-material](https://mui.com/material-ui/material-icons/) |
| Linting | ESLint 9 + typescript-eslint |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages (custom domain) |

---

## Getting Started

### Prerequisites

- **Node.js 20+** (LTS) and **npm 10+**

### Install & Run

```bash
npm install       # install dependencies
npm run dev       # start local dev server (http://localhost:5173)
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then production build |
| `npm run lint` | Run ESLint on the whole project |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
src/
  App.tsx                  # Root component — assembles all sections
  main.tsx                 # React entry point
  theme.ts                 # MUI theme (colors, typography, component overrides)
  Constant.ts              # Association contact info & metadata
  index.css                # Global styles (fade-in animations, smooth scroll)
  components/
    Header.tsx             # Sticky nav bar with responsive drawer
    Hero.tsx               # Full-width hero banner with CTA
    Actus.tsx              # News / events section
    Cards.tsx              # Action cards grid (Nos actions)
    Association.tsx        # Mission statement & board members
    Contact.tsx            # Phone & email call-to-action buttons
    Presse.tsx             # Press coverage / media mentions
    Mentions.tsx           # Legal notices (mentions legales)
    Footer.tsx             # Footer with links & copyright
  data/
    cardItems.ts           # Action cards content (4 items)
    navItems.ts            # Navigation menu entries (6 anchors)
    newsItems.tsx          # News items content
    pressItems.ts          # Press mentions with external links
  hooks/
    useFadeIn.ts           # Intersection Observer hook for scroll animations
public/
  images/                  # Optimized WebP images
  images/presse/           # Press outlet logos (PNG)
  favicon.svg              # SVG favicon
  robots.txt               # Crawler directives
  sitemap.xml              # Sitemap (single-page)
  404.html                 # SPA fallback for GitHub Pages
```

### Page Layout (top to bottom)

Header > Hero > Actus > Cards > Association > Contact > Presse > Mentions > Footer

All sections are anchor-linked from the navigation bar (`#actus`, `#actions`, `#asso`, `#contact`, `#presse`, `#mentions`).

---

## Design System

**Mood** : calm, zen, serene — digital sobriety.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `beige` | `#F3EBDD` | Page background |
| `beigePaper` | `#FBF7EF` | Card / paper surfaces |
| `oak` | `#8B5E34` | Secondary accent (brown) |
| `oakDark` | `#5E3E22` | Footer, dark accents |
| `green` | `#A8D5BA` | Primary color |
| `greenDark` | `#6FB38E` | Primary dark variant |
| `text` | `#2F2A24` | Body text |

### Typography

- **Headings** : Merriweather (serif, 400/700)
- **Body / UI** : Inter (sans-serif, 400/600)
- Responsive font sizes via MUI breakpoints

### Component Overrides

- Border radius: 16px (default), 20px (cards), 999px (buttons / pill shape)
- Buttons: no text-transform, no elevation
- Smooth scroll with offset for sticky header

---

## Accessibility

- Skip-to-content link (visible on focus)
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`)
- `aria-label` on interactive elements (nav, buttons)
- Descriptive `alt` text on all images
- `prefers-reduced-motion` respected (disables fade-in animations)
- Keyboard-navigable links and buttons

---

## SEO

- `lang="fr"` on `<html>`
- `<meta name="description">`, `<link rel="canonical">`
- Open Graph & Twitter Card meta tags
- `robots.txt` + `sitemap.xml`
- `<meta name="theme-color">` for mobile browsers

---

## CI/CD & Deployment

Two GitHub Actions workflows under `.github/workflows/`:

| Workflow | Trigger | Steps |
|----------|---------|-------|
| **CI** (`ci.yml`) | PR & push to `main` | Install > Type-check > Lint > Test > Build |
| **Deploy** (`pages.yml`) | Push to `main` | Install > Build > Upload artifact > Deploy to GitHub Pages |

The site is served at [levergerdesverites.fr](https://levergerdesverites.fr) via GitHub Pages with a custom domain.

---

## Contributing

- **Commits** : [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, etc.)
- **Branches** : `feat/*`, `fix/*`, `docs/*`
- **PRs** : small scope, clear description, screenshot for UI changes
- **Content** : update data files in `src/data/` — no need to touch components

---

## License

To be defined (MIT recommended; pending confirmation with the association).
