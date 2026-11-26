# LG TV Remote — promo site

React 18 + TypeScript + Vite 6 + Tailwind 4 (only as the CSS pipeline) + React Router 7.

```bash
pnpm install
pnpm dev      # local preview
pnpm build    # production build into dist/
```

## Deploy

Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
Pages → Source must be set to **GitHub Actions**. The workflow copies `index.html` to `404.html`
so direct links to inner pages work.

**`base` in `vite.config.ts`:** the site is served from the custom domain `lgtvremote.one`
(`public/CNAME`), so `base` is `/`. If the domain is ever removed, set `base: "/lgv3/"` and delete
`public/CNAME` in the same commit — otherwise every asset 404s and the page is blank.

## Where things live

- `src/app/content/site.ts` — every app fact (App Store ID, email, operator, texts, FAQ). Pages read only from here.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, verbatim from the owner's documents.
- `src/styles/index.css` — design tokens (`:root`) and all layout.
- Images go through `img()` (`src/app/utils/img.ts`) so they respect `base`.

## Reveal animations

Reveals use CSS transitions driven by `utils/useReveal.ts`. Content is never left hidden: in a
hidden tab everything renders in its resting state, and the fallbacks only reveal elements that
are actually in the viewport.
