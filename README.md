# Auroalis

A clean, content-rich HTML template built with **Tailwind CSS 4** and vanilla JavaScript — no framework, no build step required to ship.

Auroalis is themed as a research / observation studio working at the intersection of atmospheric science, deep-sky optics, and high-latitude exploration, but the layout, components, and design system are generic enough for any modern marketing or studio site.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page — animated WebGL aurora hero, work cards, partner carousel, pull quote, FAQ, contact form, footer. |
| `content.html` | Article / report template — boxed layout, lead image, in-text figures, pull quote with portrait, byline. |
| `404.html` | Full-screen 404 page reusing the aurora hero background. |

## Quick Start

```bash
npm install
npm run dev
```

This starts Tailwind in watch mode plus a local dev server with live reload at `http://localhost:3000`. Edit any HTML file, add Tailwind classes, save — the browser refreshes automatically.

> No Node required to *deploy*: `css/styles.css` is pre-compiled and committed, so you can also just upload the HTML, `css/`, `js/`, and `img/` to any static host as-is.

## Available Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Tailwind watch + BrowserSync dev server (live reload) |
| `npm run build` | One-shot, minified CSS compile for production |
| `npm run watch` | Tailwind watch only (no server) |
| `npm run serve` | BrowserSync server only (no CSS rebuild) |

## Project Structure

```
.
├── index.html          # Landing page
├── content.html        # Article / report page
├── 404.html            # 404 page
├── css/
│   ├── input.css       # Tailwind source — edit this, then recompile
│   └── styles.css      # Compiled output — do not edit by hand
├── js/
│   ├── main.js         # Mobile nav, scroll animations, FAQ, carousel, popover
│   └── hero-shader.js  # WebGL aurora gradient hero
├── img/                # Demo imagery (replace with your own)
├── package.json
└── LICENSE
```

## Features

- **WebGL aurora hero** — an animated, in-shader film-grain gradient (`js/hero-shader.js`). Pauses when the tab is hidden.
- **Boxed layout system** — white content panels on a soft stone canvas, with intentional "over-the-edge" breakouts (see the partner carousel).
- **Scroll animations** — staggered fade/slide entrances via `data-animate` / `data-delay`. Respects `prefers-reduced-motion`.
- **Accessible popover/modal** — the hero "Begin a study" CTA opens a focus-trapped, backdrop-blurred form dialog (`Escape` / backdrop / close button to dismiss).
- **Smooth in-page navigation** — centered nav links scroll to page anchors.
- **Animated FAQ accordion** and a **keyboard-navigable card carousel**.
- **Responsive** — mobile-first, with a hamburger menu.
- **Accessible** — skip-to-content link, ARIA attributes, visible focus states, semantic HTML.
- **Light, dependency-free runtime** — no JS frameworks. The only third-party runtime asset is the Google Fonts stylesheet (easy to self-host if you prefer). Tailwind CLI and BrowserSync are dev dependencies only.

## Customizing

All colors, fonts, and the section rhythm live as CSS custom properties at the top of `css/input.css` (the Tailwind `@theme` block). For example:

```css
--color-primary: #6B2EC7;   /* Aurora Violet — the brand accent */
--font-sans:  'Inter', ui-sans-serif, system-ui, sans-serif;
--font-serif: 'Newsreader', ui-serif, Georgia, serif;
```

Edit `input.css` and the watcher recompiles `styles.css`. **Never edit `css/styles.css` directly** — it is generated output and will be overwritten.

### Scroll animations

Add `data-animate` to any element for a fade-up entrance:

```html
<div data-animate>Fades up when scrolled into view</div>
```

Variants: `data-animate` (fade up, default), `data-animate="fade"`, `data-animate="slide-left"`, `data-animate="slide-right"`, `data-animate="scale"`.

Stagger siblings with `data-delay="1"`…`"5"` (100 ms steps).

## Tech Stack

- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first CSS
- [Inter](https://rsms.me/inter/) and [Newsreader](https://fonts.google.com/specimen/Newsreader) — via Google Fonts (SIL Open Font License)
- Vanilla JavaScript + WebGL — no frameworks

## A note on the demo content

The text, names, and imagery (research partners, portraits, the field report, etc.) are **fictional placeholders** for demonstration. Replace the copy and the files in `img/` with your own before publishing — the bundled images are demo assets and are not licensed for production use.

## License

MIT — see [LICENSE](LICENSE). You are free to use, modify, and distribute the template, including for commercial projects. Attribution is appreciated but not required.
