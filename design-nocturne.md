---
version: "alpha"
name: "Nocturne — Aurora palette × Stitch system"
description: "A hybrid identity: the Aurora cool-palette story (navy → blue → violet → magenta on near-black, neutral grayscale on white) wired into the Stitch typographic and component DNA (Inter, 88px display headlines, label-md uppercase eyebrows, 6px button radius, flat surfaces, minimal motion)."
colors:
  primary: "#171717"
  secondary: "#404040"
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
  hero-glow-1: "#0A1A4A"
  hero-glow-2: "#1E3A8A"
  hero-glow-3: "#6B2EC7"
  hero-glow-4: "#B8187A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "88px"
    fontWeight: 500
    lineHeight: "88px"
    letterSpacing: "-0.05em"
  display-md:
    fontFamily: "Inter"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "60px"
    letterSpacing: "-0.04em"
  heading-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "29px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
  label-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.3px"
    textTransform: "uppercase"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
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
    textColor: "{colors.text-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 28px"
  button-inverted:
    backgroundColor: "{colors.surface-inverted}"
    textColor: "{colors.text-on-inverted}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 28px"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-on-inverted}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 28px"
  button-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  card-work:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0px"
  hero-shader:
    backgroundColor: "{colors.surface-inverted}"
    textColor: "{colors.text-on-inverted}"
---

## Overview

Nocturne is a deliberate hybrid. It keeps the Aurora color story — a near-black hero/footer wrapping a paper-white reading zone, with a cool navy-to-magenta gradient as the only chromatic moment — but rebuilds the typographic and component layer on the Stitch system: Inter at 88px for display, label-md uppercase for eyebrows, 6px-radius buttons, flat surfaces, and a minimal motion budget that the hero shader explicitly overrides.

- **Composition cues:**
  - Layout: Grid
  - Content Width: 1200px max, with 32px gutters
  - Framing: Open at the top (full-bleed hero), closed at the bottom (full-bleed footer)
  - Grid: 1-col / 2-col / 3-col, with one signature `2fr 1fr` split in the hero
  - Tone: Editorial, chromatically restrained, with one moment of motion theatre

## Colors

The palette is dichromatic with a single accent. Two material zones — pure black and paper white — hold the page together; a violet-to-magenta arc lives only inside the hero gradient and the rare interactive accent. Neutral grayscale carries everything else.

- **Primary (#171717):** Near-black ink for headlines, body copy, and high-emphasis text on white surfaces.
- **Secondary (#404040):** Medium neutral for body copy and supporting text.
- **Tertiary (#6B2EC7):** Aurora violet — the system's only chromatic accent. Use sparingly: focus rings, link hover states, optional accent CTAs. Most pages can ship without it.
- **Neutral (#FFFFFF):** Paper white — the dominant body canvas.
- **Surface Inverted (#000000):** Pure black hero/footer surface that hosts the shader gradients.
- **Aurora hues (#0A1A4A, #1E3A8A, #6B2EC7, #B8187A):** Deep navy → blue → violet → magenta. Reserved for the animated hero blobs and the SVG noise grain.
- **Text scale on white:** Primary `#171717`, Secondary `#404040`, Muted `#737373`. Use Muted for `label-md` eyebrows; Secondary for body copy under a heading; Primary for the heading itself.
- **Borders:** `#D4D4D4` for input chrome and clear edges; `#E8E8E8` for subtle dividers.
- **Accent (#6B2EC7):** The same violet that lives in the hero blobs. When it appears as a flat color (focus ring, accent button, link hover), it ties the body back to the hero's chromatic identity.

## Typography

Typography uses Inter across the entire system. The scale is borrowed wholesale from Stitch — a wide range that lets a single hero headline dominate at 88px while body copy stays at a calm 16px. Weights are 400 / 500 / 600.

- **Display LG (`display-lg`):** Inter, 88px, weight 500, line-height 88px, letter-spacing −0.05em. Hero headline. Use sparingly — once per page.
- **Display MD (`display-md`):** Inter, 56px, weight 500, line-height 60px, letter-spacing −0.04em. Section headlines (h2) on white surfaces.
- **Heading MD (`heading-md`):** Inter, 20px, weight 600, line-height 28px, letter-spacing −0.01em. Card titles and three-up feature headings (h3).
- **Body LG (`body-lg`):** Inter, 18px, weight 400, line-height 29px. Lead paragraphs that follow a section headline.
- **Body MD (`body-md`):** Inter, 16px, weight 400, line-height 26px. Default running text.
- **Body SM (`body-sm`):** Inter, 14px, weight 400, line-height 21px. Card descriptions, footer links, mobile nav.
- **Label MD (`label-md`):** Inter, 12px, weight 500, line-height 16px, letter-spacing 0.3px, uppercase. Eyebrow over every section headline; also the typography baseline for buttons.

Display weight is 500 (medium), not 700 — visual weight comes from size and tight letter-spacing, not stroke heaviness. Hero headlines carry a soft drop shadow (`drop-shadow(0 2px 40px rgba(0,0,0,0.7))`) so they remain legible against the moving gradient.

## Layout

Layout is a centered single-column composition. Every content block is constrained to 1200px and inset 32px from the viewport edge — except the hero blobs, the footer, and the work carousel's right-side overflow, which run full bleed by design.

- **Layout type:** Centered column inside full-bleed sections
- **Content width:** 1200px (max-w-[1200px])
- **Container gutter:** 32px (px-8)
- **Base unit:** 4px
- **Spacing scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px
- **Section padding (vertical):** 96px, 112px, 128px, 160px (footer only)
- **Card padding:** 0px (image-led work cards), 20px (form input), 32px (mobile menu panel)
- **Gaps:** 16px, 24px (card gallery), 32px (hero CTA stack), 48px (3-col grid)
- **Hero grid:** 2fr / 1fr split — title gets the headline column, subtitle + CTA share the right rail. Stacks to single column below `md`.
- **Card carousel:** Aligns to the 1200px container at left, then breaks past the right edge using a negative margin (`-mr-[calc(50vw-50%)]`).
- **Footer grid:** 4-column on `lg` (brand / product / company / connect), collapsing to 2-column on `sm`.

## Elevation & Depth

Depth is communicated through material contrast — black vs. white surfaces — rather than shadows. The few elevation cues that exist are atmospheric (glow, blur, grain) rather than physical.

- **Surface style:** Flat. White cards have no shadow and no fill. The page reads as two opaque material zones butted against each other.
- **Borders:** 1px `#D4D4D4` for input chrome; 1px `#E8E8E8` for subtle dividers; 1px `rgba(255,255,255,0.1)` for the mobile menu panel inside the hero.
- **Shadows:** Used sparingly — only `0 0 40px rgba(255,255,255,0.2)` to glow the hero CTA against the dark gradient, and a soft text drop-shadow on hero headlines for legibility. No card shadows on white surfaces.
- **Atmospheric depth:** The hero stacks nine animated radial-gradient blobs (`filter: blur(60px)`) over a black base, then overlays an SVG fractal-noise grain at 5% opacity with `mix-blend-mode: overlay`. This is the only place in the system where depth is built from layered light rather than borders.

## Shapes

Radii follow the Stitch family — slightly softer than pure-Aurora's near-square buttons. Most surfaces are rectangular; only secondary chrome (image cards, mobile menu) softens.

- **Corner radii:** 0px, 4px, 6px, 8px, 9999px
- **Buttons & inputs:** 6px (`rounded-md`).
- **Image cards:** 8px (`rounded-lg`) — softens the work-carousel thumbnails.
- **Mobile menu / atmospheric panels:** 8px.
- **Badges, social icons, avatar placeholders:** 9999px (`rounded-full`).
- **Icon treatment:** Linear, 1.5–2px stroke, currentColor.
- **Icon sets:** Heroicons-style outline SVG, inlined.

## Components

Components are deliberately few. The hero CTA, the inverted CTA on white surfaces, the work card, and the eyebrow-headline-paragraph triad cover almost every section.

### Buttons

- **Primary (on dark hero):** background `#FFFFFF`, text `#171717`, radius 6px, padding 10px 28px, `label-md` typography (12px / 0.3px tracking / uppercase). Atmospheric glow `box-shadow: 0 0 40px rgba(255,255,255,0.18)`. Hover transitions to `#FAFAFA`.
- **Inverted (primary on white):** background `#000000`, text `#FFFFFF`, radius 6px, padding 10px 28px, `label-md` typography. No shadow. Hover to `#171717`. Use as the contact form submit and any other primary action on white.
- **Accent (optional, on white):** background `#6B2EC7`, text `#FFFFFF`, radius 6px, padding 10px 28px, `label-md` typography. Reserve for one moment per page where the chromatic accent earns its place — never as the default CTA.
- **Nav links (in hero):** white text at 90% opacity, `body-sm`, 0px radius, 0px padding, 40px column gap. Hover bumps opacity to 100%.

### Inputs

- **Email field:** background `#FFFFFF`, text `#171717`, placeholder `#A3A3A3`, 1px border `#D4D4D4`, radius 6px, padding 14px 20px, `body-md` typography. Focus uses a 2px ring at `rgba(107,46,199,0.25)` and a violet `#6B2EC7` border — the one place the accent shows up by default.

### Cards & Surfaces

- **Work card (carousel):** No background fill, no border, no shadow. The 4:3 image (`#E5E5E5` placeholder) at radius 8px does the visual work. Title and description sit underneath in a 20px top-padded stack, using `heading-md` and `body-sm`.
- **Mobile menu panel:** background `rgba(0,0,0,0.6)` with `backdrop-blur-md`, 1px white border at 10% opacity, radius 8px, padding 24px. Only inside the hero.
- **Hero content frame:** No card chrome — a centered 1200px max-width column anchored to the bottom of the section with `mt-auto`.

### Section Eyebrow Pattern

Every white section opens with the same three-line stack:

1. **Eyebrow** — `label-md`, color `#737373`, 24px below the section top.
2. **Headline** — `display-md`, color `#171717`, max-width ~22ch, 24px below the eyebrow.
3. **Lead paragraph** — `body-lg`, color `#404040`, max-width ~60ch, 48px below the headline.

This pattern is the system's spine. Reuse it for every white section instead of inventing new header rhythms.

### Iconography

- **Treatment:** Linear outline, 1.5–2px stroke.
- **Sets:** Heroicons-style inline SVG.
- **Sizing:** 16px (form/check), 20px (nav, social), 64px (empty-state placeholders).

### Hero — Aurora Shader (motion exception)

The hero is the one place in this system where motion goes beyond "minimal". A shader-style field of cool radial-gradient blobs runs continuously behind the headline. Treat it as a single, isolated component at the very top of the page; nothing else inherits from it.

- **Surface:** `surface-inverted` (`#000000`) full-bleed. The hero is the only pure-black surface in the system.
- **Foreground typography:** `text-on-inverted` (`#FFFFFF`) for headline and nav. Soft drop shadow `drop-shadow(0 2px 40px rgba(0,0,0,0.7))` on the headline only.
- **Blob palette:** Cool only — `hero-glow-1` (`#0A1A4A` deep navy), `hero-glow-2` (`#1E3A8A` blue), `hero-glow-3` (`#6B2EC7` violet), `hero-glow-4` (`#B8187A` magenta). No warm hues. The arc reads as deep-night sky → distant violet → distant magenta, not as a sunrise.
- **Layer count:** 6–9 absolutely-positioned blob divs, each 40–120vw wide and 35–75vh tall, single radial-gradient background (60–88% transparent at the edge), `filter: blur(60px)`, `pointer-events: none`.
- **Animation:** Each blob runs its own `morph-*` keyframe — translate ±8–18vw / ±4–12vh, scale 0.75–1.35, rotate ±20–60°. Cycles 32–50s, `ease-in-out`, `infinite`, with negative `animation-delay` to desynchronize. `will-change: transform`.
- **Grain:** A 200×200 inline SVG `feTurbulence` tile (baseFrequency 0.9, 2 octaves, stitched), data-URL'd and overlaid at 5% opacity with `mix-blend-mode: overlay`.
- **CTA inside hero:** `button-primary` (white surface, dark text, 6px radius, label-md typography) with the atmospheric glow shadow.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, freeze every blob (`animation: none`). The static gradient stays — the movement does not.

This component overrides the system-wide "Motion Level: minimal" budget and is the only sanctioned exception. Do not borrow its blur/blob recipe for any other section.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do

- Do open every white section with the eyebrow → headline → lead paragraph triad in `label-md` / `display-md` / `body-lg`.
- Do keep display headlines at weight 500. Let size, tracking, and `leading-[1.0–1.1]` do the work — never bold.
- Do constrain content to the 1200px column with 32px gutters. Use full bleed only for the hero, the footer, and intentional overflow effects like the work carousel's right-edge break.
- Do reserve the aurora hues (`#0A1A4A`, `#1E3A8A`, `#6B2EC7`, `#B8187A`) for the animated hero blobs and the optional `button-accent` / focus ring.
- Do anchor button radii at 6px and image-card radii at 8px.
- Do disable hero animations under `prefers-reduced-motion`.

### Don't

- Don't introduce drop shadows on white-surface cards. The system uses material contrast, not elevation.
- Don't recolor the hero shader with warm hues (orange/red/amber). The blobs must stay inside the cool palette so the system reads as a night-sky identity, not a sunrise.
- Don't bold a display headline. Bold belongs to `heading-md` (h3) only.
- Don't mix non-Inter fonts. The entire system is single-family.
- Don't add a third surface tone. The page is white-and-black; introducing gray cards or tinted sections breaks the editorial bookend.
- Don't speed up or shorten the blob animations. Their slowness (32–50s cycles) is what keeps the hero from feeling like a screensaver.
- Don't let the violet accent take over. If `button-accent`, focus rings, and link-hover all light up violet at once, the page reads as chromatic noise. One accent moment per section, max.

## Motion

Motion has two registers. Interface motion stays restrained and is the default. Ambient motion is permitted in exactly one place: the hero shader.

**Motion Level (system default):** minimal — applies to every section except the hero.

**Motion Level (hero only):** ambient continuous — see the `hero-shader` component spec.

**Durations:**
- Hover/focus: 150ms
- Scroll-reveal entrances: 600ms
- Hero blob cycles: 32–50s

**Easings:** `ease`, `cubic-bezier(0.4, 0, 0.2, 1)` for interface; `ease-in-out` for hero blobs.

**Hover Patterns:** opacity (nav links 0.9 → 1.0), background color (buttons), text color (footer links). No transforms, no shadow shifts.

**Reduced motion:** Both registers respect `prefers-reduced-motion: reduce` — hero blobs freeze, scroll reveals show instantly, stagger delays drop to 0.
