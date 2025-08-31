# Le Verger des Vérités — Website (front-end)

Official page for a non-profit that runs a **participatory, community orchard**, and advocates for **kitchen gardening**, **biodiversity**, and **organic** practices.

- **Repository**: _to be created_
- **Domain**: `levergerdesverites.fr` (custom domain via GitHub Pages)
- **Audience**: general public, **mobile-first** (primarily viewed on smartphones)

---

## ✨ Goals

- Introduce the association, its values, and activities.
- Showcase the orchard (plots, species, seasons, community workdays).
- Share updates & events (news, agenda), recruit volunteers/members, enable donations.
- Keep it lightweight, fast, and **calm/zen**.

## 🧰 Tech Stack

- **Vite.js** + **React** + **TypeScript**
- **Material UI (MUI)** as the design system
- Deployment through **GitHub Pages** (with a **custom domain**)

---

## ✅ Prerequisites

- **Node.js 20+** (LTS) and **npm 10+**
- GitHub account and an empty repository (public or private)

---

## 🎨 Theme & Design System (MUI)

**Mood**: calm, zen, serene.

**Palette** :

- **Papyrus/Beige** (background): `#FAF4E6` / `#FFF8E7`
- **Oak brown** (accents): `#8B5E3C`
- **Pastel/Light green** (primary): `#86C69C` or `#A8D5BA`
- **Text**: `#3E372B` (primary), `#6B5E4A` (secondary)

## 📱 Responsiveness & Performance (mobile-first)

- **Mobile-first** layout (responsive MUI components: `Grid`, `Stack`, `Box`, `useMediaQuery`).
- **Compressed images** + `loading="lazy"` on `<img/>`.
- Avoid heavy carousels; prefer simple, well-spaced sections.
- Measure LCP/CLS with Lighthouse.

## 🔎 Basic SEO

- Proper `title`, `meta name="description"`, OpenGraph/Twitter in `index.html`.
- Clean URLs, sitemap (optional: `vite-plugin-sitemap`).
- `lang="fr"` in `index.html` (the website is in French, even if this README is in English).

---

## 🧭 Navigation & Planned Anchors

The web site will be a "One Pager" :

- **Home**: hero, values, CTA “Join / Participate”
- **About**: mission, bylaws, board, partners
- **Orchard**: species, seasons, best practices, gallery
- **Agenda**: workdays, workshops, events
- **Join us**: membership, volunteering, donations
- **Contact**: form (email), social links
- **Legal notice** & **Privacy**

---

## 🚢 Deploying to GitHub Pages (with custom domain)

1. **CNAME**: create `public/CNAME` containing exactly:

   ```bash
   levergerdesverites.fr
   ```

   > GitHub Pages will automatically preserve the custom domain across deployments.

2. **Enable Pages** in the repository `Settings ▸ Pages`:

   - Source: **GitHub Actions**

3. **GitHub Actions** workflow: `.github/workflows/deploy.yml`

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: "npm"
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

## 🔐 Legal & privacy

- **Legal notice** page (publisher, host, contact).
- **Privacy policy** page (contact form only, no third-party cookies without consent).

---

## 🤝 Contributing

- Style: **TypeScript**, ESLint + Prettier.
- Commits: **Conventional Commits** (`feat:`, `fix:`, `docs:` …).
- Branches: `feat/*`, `fix/*`, `docs/*`.
- PRs: small, clear description, screenshot for UI changes.

---

## 🗺️ Roadmap (draft)

- [ ] **Home** page (hero + CTA)
- [ ] **About** page (mission, bylaws, partners)
- [ ] **Orchard** page (species, seasons, gallery)
- [ ] **Agenda** page (events/workdays)
- [ ] **Join us** page (membership/volunteering/donation)
- [ ] **Contact** page (email form)
- [ ] **Legal** & **Privacy** pages
- [ ] Icons, favicons, manifest
- [ ] Accessibility tests (aXe, Lighthouse)
- [ ] Image optimization (WebP/AVIF)

---

## 📄 License

_To be defined_ (MIT recommended for a brochure site; confirm with the association).

---

## 📝 Notes

- This repository is **front-end only**.
- The site aims to be **simple, lightweight, and sustainable** (digital sobriety).
