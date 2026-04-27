---
version: "alpha"
name: "Aurora — Studio OnePager"
description: "Research-led digital studio identity. A dramatic shader-style hero anchored by quiet, editorial white sections and a near-black footer."
colors:
  primary: "#171717"
  secondary: "#525252"
  tertiary: "#6B2EC7"
  neutral: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-inverted: "#000000"
  text-primary: "#171717"
  text-secondary: "#404040"
  text-muted: "#737373"
  text-on-inverted: "#FFFFFF"
  border: "#D4D4D4"
  border-subtle: "#E8E8E8"
  accent: "#6B2EC7"
  aurora-dark: "#0A1A4A"
  aurora-mid: "#1E3A8A"
  aurora-violet: "#6B2EC7"
  aurora-magenta: "#B8187A"
typography:
  display-xl:
    fontFamily: "Poppins"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "79px"
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Poppins"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "55px"
    letterSpacing: "-0.02em"
  heading-md:
    fontFamily: "Poppins"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Poppins"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "29px"
  body-md:
    fontFamily: "Poppins"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  body-sm:
    fontFamily: "Poppins"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
  label-xs:
    fontFamily: "Poppins"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm: "2px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  base: "4px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  section-y: "96px"
  section-y-lg: "112px"
  section-y-xl: "128px"
  footer-y: "160px"
  container-x: "32px"
  container-max: "1200px"
  gap-card: "24px"
  gap-grid: "48px"
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-inverted:
    backgroundColor: "{colors.surface-inverted}"
    textColor: "{colors.text-on-inverted}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-link:
    textColor: "{colors.text-on-inverted}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "16px 20px"
  card-work:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0px"
  nav-link:
    textColor: "{colors.text-on-inverted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
---

## Overview

Aurora is a digital studio identity. Two material zones hold the page together: a near-black, shader-animated hero and footer at top and bottom; a quiet, editorial white sandwich in between. The hero does the talking; the white sections do the reading.

- **Composition cues:**
  - Layout: Centered 1200px column inside full-bleed sections
  - Content Width: 1200px max, with 32px gutters
  - Framing: Open at the top (full-bleed hero), closed at the bottom (full-bleed footer)
  - Grid: 1-col / 2-col / 3-col, with one signature `2fr 1fr` split in the hero
  - Tone: Editorial, restrained, with a single moment of motion theatre

## Colors

The palette is dichromatic: a near-black inverted surface that hosts the animated aurora gradients, and a paper-white surface for the body. Text is neutral grayscale. The aurora hues are decorative — they live inside the hero blobs and never appear as foreground type or chrome.

- **Primary (#171717):** Near-black ink for headlines, body copy, and high-emphasis text on white surfaces.
- **Secondary (#525252):** Medium neutral for supporting body copy and meta text.
- **Tertiary (#6B2EC7):** Aurora violet — used only as part of the animated hero gradient, never as a flat accent on white.
- **Neutral (#FFFFFF):** Paper white — the primary canvas that lets typography breathe.
- **Surface Inverted (#000000):** Pure black hero/footer surface that the shader gradients sit on.
- **Aurora hues (#0A1A4A, #1E3A8A, #6B2EC7, #B8187A):** Deep navy → blue → violet → magenta. Reserved for the animated hero blobs and the SVG noise grain that sits over them.
- **Text scale on white:** Primary `#171717`, Secondary `#404040`, Muted `#737373`. Use Muted for `label-xs` eyebrows; Secondary for body copy under a heading; Primary for the heading itself.
- **Borders:** `#D4D4D4` for input chrome and clear edges; `#E8E8E8` for subtle dividers.

## Typography

Typography is set in Poppins across the entire system — weights 400, 500, and 600 are loaded as local woff2 files. The scale is intentionally wide so a single hero headline can dominate, while body copy stays small and patient.

- **Display XL (`display-xl`):** Poppins, 72px, weight 400, line-height 79px, letter-spacing −0.02em. Hero headline only.
- **Display LG (`display-lg`):** Poppins, 48px, weight 400, line-height 55px, letter-spacing −0.02em. Section headlines (h2).
- **Heading MD (`heading-md`):** Poppins, 20px, weight 600, line-height 28px. Card titles and three-up feature headings (h3).
- **Body LG (`body-lg`):** Poppins, 18px, weight 400, line-height 29px. Lead paragraphs that follow a section headline.
- **Body MD (`body-md`):** Poppins, 16px, weight 400, line-height 26px. Default running text inside cards and forms.
- **Body SM (`body-sm`):** Poppins, 14px, weight 400, line-height 21px. Card descriptions, footer links, mobile nav.
- **Label XS (`label-xs`):** Poppins, 12px, weight 500, line-height 16px, letter-spacing 0.08em, uppercase. Eyebrow over every section headline.

Headlines use weight 400 — never bold. Visual weight comes from size, line-height, and tracking. Subheadings (h3) are the one place where weight 600 is used. Hero headlines also carry a soft drop-shadow (`drop-shadow(0 2px 40px rgba(0,0,0,0.7))`) so they remain readable against the moving gradient.

## Layout

Layout is a centered single-column composition. Every content block is constrained to 1200px and inset 32px from the viewport edge — except the hero blobs, the footer, and the work carousel's right-side overflow, which all run full bleed by design.

- **Layout type:** Centered column inside full-bleed sections
- **Content width:** 1200px (max-w-[1200px])
- **Container gutter:** 32px (px-8)
- **Base unit:** 4px
- **Spacing scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px
- **Section padding (vertical):** 96px (py-24), 112px (py-28), 128px (py-32), 160px (py-40 — footer only)
- **Card padding:** 0px (image-led work cards), 20px (form input), 32px (mobile menu panel)
- **Gaps:** 16px, 24px (card gallery), 32px (hero CTA stack), 48px (3-col grid)
- **Hero grid:** 2fr / 1fr split — title gets the headline column, subtitle + CTA share the right rail. Stacks to single column below `md`.
- **Card carousel:** Aligns to the 1200px container at left, then breaks past the right edge using a negative margin (`-mr-[calc(50vw-50%)]`), so cards bleed into the right gutter without dragging the container with them.
- **Footer grid:** 4-column on `lg` (brand / product / company / connect), collapsing to 2-column on `sm`, then single column on mobile.

## Elevation & Depth

Depth is communicated almost entirely through material contrast — black vs. white surfaces — rather than shadows. The few elevation cues that exist are atmospheric (glow, blur, grain) rather than physical (drop shadows). White-on-white cards rely on radius and bordered images for separation, not shadows.

- **Surface style:** Flat. The page reads as two opaque material zones (white paper, black gradient field) butted against each other.
- **Borders:** 1px `#D4D4D4` for input chrome; 1px `#E8E8E8` for subtle dividers; 1px `rgba(255,255,255,0.1)` for the mobile menu panel inside the hero.
- **Shadows:** Used sparingly — only `0 0 40px rgba(255,255,255,0.2)` to glow the hero CTA against the dark gradient, and a soft text drop-shadow on hero headlines for legibility. No card shadows, no button shadows on white surfaces.
- **Atmospheric depth:** The hero stacks nine animated radial-gradient blobs (`filter: blur(60px)`) over a black base, then overlays an SVG fractal-noise grain at 5% opacity with `mix-blend-mode: overlay` to keep the gradients from looking plasticky. This is the only place in the system where depth is built from layered light rather than borders.

### Techniques

- **Shader-blob hero:** Nine `position: absolute` divs, each 40–120vw wide and 35–75vh tall, with a single radial-gradient background and an individual `morph-*` keyframe animation (32–50s, `ease-in-out`, `infinite`, staggered by negative `animation-delay`). Each keyframe drives `translate` (±8–18vw / ±4–12vh), `scale` (0.75–1.35), and `rotate` (±20–60°) so the layers feel liquid rather than orbital. `will-change: transform` is set; animation is disabled under `prefers-reduced-motion`.
- **Grain overlay:** Inline SVG `feTurbulence` (baseFrequency 0.9, 2 octaves, stitched), rasterized into a 200×200 tile, served as a `data:` URL, blended at `mix-blend-mode: overlay` and 5% opacity over the blob field.
- **Footer mirror:** The footer reuses the hero's pure-black surface and white text, but without the shader animation — a quiet bookend that closes the page in the same material the hero opened it.

## Shapes

Radii stay tight. Most surfaces are square or near-square; only secondary chrome (mobile menu, image cards) softens. The system avoids pill shapes entirely except for one badge use case.

- **Corner radii:** 0px, 2px, 6px, 8px, 12px, 9999px
- **Buttons & inputs:** 2px (`rounded-sm`) — almost square, deliberately understated.
- **Image cards:** 8px (`rounded-lg`) — softens the work-carousel thumbnails without making them feel like UI chips.
- **Mobile menu / testimonial panels:** 12px (`rounded-xl`).
- **Badges, social icons, avatar placeholders:** 9999px (`rounded-full`).
- **Icon treatment:** Linear, 1.5–2px stroke, currentColor.
- **Icon sets:** Heroicons-style outline SVG, inlined in markup.

## Components

Components are deliberately few. The hero CTA, the form CTA, the work card, and the eyebrow-headline-paragraph triad cover almost every section.

### Buttons

- **Primary (on dark hero):** background `#FFFFFF`, text `#171717`, radius 2px, padding 16px 28px, white border, `shadow: 0 0 40px rgba(255,255,255,0.2)` for atmospheric glow. Hover transitions to `bg-neutral-100`.
- **Inverted (on white sections):** background `#000000`, text `#FFFFFF`, radius 2px, padding 16px 28px, no shadow. Hover transitions to `bg-neutral-800`. Used as the contact form submit.
- **Nav links (in hero):** white text at 90% opacity, 0px radius, 0px padding, 10px column gap. Hover bumps opacity to 100%.

### Inputs

- **Email field:** background `#FFFFFF`, text `#171717`, placeholder `#A3A3A3`, 1px border `#D4D4D4`, radius 2px, padding 16px 20px. Focus uses a 2px ring at `rgba(23,23,23,0.2)` and a darker `#171717` border.

### Cards & Surfaces

- **Work card (carousel):** No background fill, no border, no shadow. The 4:3 image (`#E5E5E5` placeholder) at radius 8px does all the visual work. Title and description sit underneath in a 20px top-padded stack.
- **Mobile menu panel:** background `rgba(0,0,0,0.6)` with `backdrop-blur-md`, 1px white border at 10% opacity, radius 12px, padding 24px. Only appears inside the hero.
- **Hero content frame:** No card chrome — just a centered 1200px max-width column anchored to the bottom of the section with `mt-auto`.

### Headers (Section Eyebrow Pattern)

Every white section opens with the same three-line stack:

1. **Eyebrow** — `label-xs`, color `#737373`, 24px below the section top.
2. **Headline** — `display-lg`, color `#171717`, max-width ~22ch, 24px below the eyebrow.
3. **Lead paragraph** — `body-lg`, color `#404040`, max-width ~60ch, 48px below the headline.

This pattern is non-negotiable across `#about`, `#work`, and `#contact`. Reuse it when adding new sections rather than inventing a new header rhythm.

### Iconography

- **Treatment:** Linear outline, 1.5–2px stroke.
- **Sets:** Heroicons-style inline SVG.
- **Sizing:** 16px (form/check), 20px (nav, social), 64px (empty-state placeholders).

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do

- Do open every white section with the eyebrow → headline → lead paragraph triad in `label-xs` / `display-lg` / `body-lg`.
- Do keep headlines at weight 400. Let size, tracking, and `leading-[1.1–1.15]` do the work.
- Do constrain content to the 1200px column with 32px gutters. Use full bleed only for the hero, the footer, and intentional overflow effects like the work carousel's right-edge break.
- Do reserve the aurora hues (`#0A1A4A`, `#1E3A8A`, `#6B2EC7`, `#B8187A`) for the animated hero blobs only.
- Do anchor button radii at 2px and image-card radii at 8px.
- Do disable hero animations under `prefers-reduced-motion`.

### Don't

- Don't introduce drop shadows on white-surface cards. The system uses material contrast, not elevation.
- Don't use the aurora hues as flat color fills, button accents, or text — they are decorative and live only inside the shader gradients.
- Don't bold a headline. Bold belongs to `heading-md` (h3) only.
- Don't mix non-Poppins fonts. The entire system is single-family.
- Don't add a third surface tone. The page is white-and-black; introducing gray cards or tinted sections breaks the editorial bookend.
- Don't speed up or shorten the blob animations. Their slowness (32–50s cycles) is what keeps the hero from feeling like a screensaver.

## Motion

Motion has two distinct registers: ambient (the hero shader) and interface (scroll-triggered fades).

**Motion Level:** layered — ambient continuous in hero, minimal everywhere else.

**Durations:**
- Ambient blobs: 32s, 36s, 38s, 40s, 42s, 44s, 46s, 48s, 50s (each blob runs its own cycle)
- Scroll reveals: 600ms
- Hover transitions: ~150ms (color/opacity only)

**Easings:** `ease-in-out` (blobs), `ease-out` (reveals), default `ease` (hover).

**Scroll patterns:** `[data-animate]` elements fade and translate up 20px; variants are `fade`, `slide-left` (−30px x), `slide-right` (+30px x), `scale` (0.95). Stagger via `data-delay="1..5"` adds 100–500ms.

**Hover patterns:** opacity (nav links 0.9 → 1.0), background color (buttons), text color (footer links). No scale, no translate, no shadow shifts.

**Reduced motion:** Both registers respect `prefers-reduced-motion: reduce` — blobs freeze, scroll reveals show instantly, stagger delays drop to 0.
