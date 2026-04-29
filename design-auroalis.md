---
version: "alpha"
name: "Auroalis — Northern Lights Research Identity"
description: "A space-and-high-north identity for research, observation, and exploration narratives. Named after the aurora borealis itself: a near-black hero/footer hosts an animated polar-sky shader (deep navy → arctic blue → violet → aurora green) wrapping a paper-white reading zone. Aurora Violet (#6B2EC7) anchors the brand below the hero. Newsreader serif for every heading H1–H6, Inter sans for body and chrome. Visual register: scientific instrument minimalism — like the typesetting of an observation log, with one moment of atmospheric motion theatre at the top of the page."
colors:
  primary: "#6B2EC7"
  primary-hover: "#5928A8"
  secondary: "#1E3A8A"
  tertiary: "#4FDC78"
  neutral: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-inverted: "#000000"
  text-primary: "#171717"
  text-secondary: "#404040"
  text-muted: "#737373"
  text-on-inverted: "#FFFFFF"
  text-on-primary: "#FFFFFF"
  border: "#D4D4D4"
  border-subtle: "#E8E8E8"
  accent: "#6B2EC7"
  hero-glow-1: "#0A1A4A"
  hero-glow-2: "#1E3A8A"
  hero-glow-3: "#6B2EC7"
  hero-glow-4: "#4FDC78"
typography:
  display-lg:
    fontFamily: "Newsreader"
    fontSize: "88px"
    fontWeight: 400
    lineHeight: "92px"
    letterSpacing: "-0.03em"
  display-md:
    fontFamily: "Newsreader"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "62px"
    letterSpacing: "-0.025em"
  heading-md:
    fontFamily: "Newsreader"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: "30px"
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-on-primary}"
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

Auroalis is a research-and-exploration identity, named directly after the *aurora borealis* — the polar light show that gives this design system its hero. The page is built around a single dramatic premise: visitors arrive at a near-black night sky, a slow shader-driven aurora unfolding in deep navy, arctic blue, violet, and the unmistakable oxygen-green emission band. Below that opening, the page settles into a paper-white research log: serif headlines, calm sans body, generous whitespace, a single brand violet pulled from the aurora itself. The narrative voice should match — quiet, observational, instrument-grade. Auroalis is for high-north research stations, atmospheric observatories, deep-space programs, and the kind of work that gets done at 3 AM when the sensors are recording and the sky is doing something rare.

The system inherits its typographic and component DNA from Stitch (Inter sans + Newsreader serif, 88px display, 6px-radius buttons, flat surfaces, 4px spacing rhythm) but uses it in a more scientific register. Think field journal rather than magazine spread.

- **Composition cues:**
  - Layout: Grid
  - Content Width: 1200px max, with 32px gutters
  - Framing: Open at the top (full-bleed polar-sky hero), closed at the bottom (full-bleed footer that mirrors the hero's surface)
  - Grid: 1-col / 2-col / 3-col, with one signature `2fr 1fr` split in the hero
  - Tone: Observational, instrument-grade, chromatically restrained — with one moment of atmospheric motion theatre at the top of the page
  - Voice cues for content: research, observation, atmospheric phenomena, the high north, low-light photography, quiet precision; avoid breathless startup language

## Colors

The palette reads the aurora itself: cold sky at the top of the spectrum (deep navy, arctic blue), the rarer violet, and a vivid oxygen-green band — the visual signature of the real-world phenomenon. Four hues total. The brand pull is **Aurora Violet** (`#6B2EC7`), drawn from the hero's `blob--violet` layer; the green is reserved for the hero gradient itself, where it does the work of making the night sky read as auroral rather than merely dark.

Two material zones (paper white body, pure-black hero/footer) hold the page together; the brand violet is the one chromatic note that ties the body back to the hero. Green, navy, and blue remain in the hero's gradient as supporting hues and are not used as flat colors elsewhere.

- **Primary (#6B2EC7):** Aurora Violet — the brand color. Used for the primary action CTA on white surfaces, focus rings, link hover states, and any UI moment that needs to feel Auroalis-branded. This violet exists in the hero blobs already, so when it appears flat below the hero, the whole page reads as the same identity.
- **Primary Hover (#5928A8):** A 1-step-darker violet for hover/pressed states on `button-accent`. Avoid using as a fill color anywhere else.
- **Secondary (#1E3A8A):** Arctic Blue. Optional accent for one moment per page if a second chromatic pull is needed (e.g. a quiet badge, a chart line, a tag). Not a default — most pages should ship without it.
- **Tertiary (#4FDC78):** Aurora Green — the oxygen-emission band of the real aurora borealis. Decorative only: it lives inside the hero shader's `blob--green` layer and nowhere else by default. Reserve as a flat color for a single, deliberate moment of "this is alive" — a live status dot, a sensor-reading indicator, a subtle data-viz highlight. Never as a button fill, never as body type.
- **Neutral (#FFFFFF):** Paper white — the dominant body canvas.
- **Surface Inverted (#000000):** Pure black hero/footer surface that hosts the shader gradients. This is the Polar Night.
- **Aurora hues (#0A1A4A, #1E3A8A, #6B2EC7, #4FDC78):** Deep navy → arctic blue → violet → aurora green. Four hues, in the visual order they cluster across the polar sky. Reserved for the animated hero blobs and the SVG noise grain.
- **Text scale on white:** Primary text `#171717` (near-black ink, NOT the brand violet), Secondary `#404040`, Muted `#737373`. Use Muted for `label-md` eyebrows; Secondary for body copy under a heading; near-black for the heading itself. Headlines do not use the brand violet — type stays neutral, violet belongs to action.
- **Borders:** `#D4D4D4` for input chrome and clear edges; `#E8E8E8` for subtle dividers.
- **Accent (#6B2EC7):** Alias of `primary`. The same violet that lives in `blob--violet`. When it appears as a flat color (focus ring, accent button, link hover), it ties the body back to the hero.

## Typography

Typography is a sanctioned two-family pair: **Newsreader** (a screen-optimized serif from Google Fonts) for every heading H1–H6, and **Inter** for body, labels, navigation, and buttons. The serif/sans split is the editorial signature of the system — a literary headline against a quiet sans body. Both families are loaded with weights 400 and 500 only; bold headlines are not part of the system.

- **Display LG (`display-lg`):** Newsreader, 88px, weight 400, line-height 92px, letter-spacing −0.03em. Hero headline (h1). Once per page.
- **Display MD (`display-md`):** Newsreader, 56px, weight 400, line-height 62px, letter-spacing −0.025em. Section headlines (h2) on white surfaces.
- **Heading MD (`heading-md`):** Newsreader, 22px, weight 500, line-height 30px, letter-spacing −0.01em. Card titles and three-up feature headings (h3 and below — h4/h5/h6 reuse this token at the same size unless a deeper hierarchy genuinely needs a smaller serif step).
- **Body LG (`body-lg`):** Inter, 18px, weight 400, line-height 29px. Lead paragraphs that follow a section headline.
- **Body MD (`body-md`):** Inter, 16px, weight 400, line-height 26px. Default running text.
- **Body SM (`body-sm`):** Inter, 14px, weight 400, line-height 21px. Card descriptions, footer links, mobile nav.
- **Label MD (`label-md`):** Inter, 12px, weight 500, line-height 16px, letter-spacing 0.3px, uppercase. Eyebrow over every section headline; also the typography baseline for buttons.

Display weight is 400 (regular) — the serif's natural stroke contrast already provides visual weight; a 500 or 600 cut would over-darken the page. Tight negative letter-spacing on display sizes keeps Newsreader from feeling sprawling at 88px.

Hero headlines carry a soft drop shadow (`drop-shadow(0 2px 40px rgba(0,0,0,0.7))`) so they remain legible against the moving gradient. Apply `font-feature-settings: 'ss01'` on Newsreader to enable the alternate styles where available.

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
- **Accent (primary on white):** background `#6B2EC7` (Aurora Violet), text `#FFFFFF`, radius 6px, padding 10px 28px, `label-md` typography. Hover transitions to `#5928A8`. This is the standard primary action on white surfaces — the contact form submit, any "Get started" CTA. The inverted (black) button is the alternate when the section needs to lean editorial-neutral instead of branded.
- **Nav links (in hero):** white text at 90% opacity, `body-sm`, 0px radius, 0px padding, 40px column gap. Hover bumps opacity to 100%.

### Inputs

- **Email field:** background `#FFFFFF`, text `#171717`, placeholder `#A3A3A3`, 1px border `#D4D4D4`, radius 6px, padding 14px 20px, `body-md` typography. Focus uses a 2px ring at `rgba(107,46,199,0.25)` and a violet `#6B2EC7` border — pulling the brand color into the form interaction.

### Cards & Surfaces

- **Work card (carousel):** No background fill, no border, no shadow. The 4:3 image (`#E5E5E5` placeholder) at radius 8px does the visual work. Title and description sit underneath in a 20px top-padded stack, using `heading-md` and `body-sm`.
- **Mobile menu panel:** background `rgba(0,0,0,0.6)` with `backdrop-blur-md`, 1px white border at 10% opacity, radius 8px, padding 24px. Only inside the hero.
- **Hero content frame:** No card chrome — a centered 1200px max-width column anchored to the bottom of the section with `mt-auto`.

### Content Panel (`.content-panel`)

A flat white "paper" container that mirrors the hero glass panel's geometry on the gray content canvas. Used to lift a featured section (e.g. the studio overview / "The work" intro) off the surrounding gray as a single white card.

- **Background:** `#FFFFFF` (paper white). No tint, no backdrop-filter, no shadow.
- **Edges:** Hairline `1px solid #E7E5E4` (stone-200, one step darker than the surrounding stone-100 canvas) on three sides — the open side flips depending on which neighbour the panel is flush against:
  - **Default (`.content-panel`):** left, right, **bottom**. Top is bare. Use when the panel sits flush against the section *above* it (the hero or another panel).
  - **Bottom-flush variant (`.content-panel--bottom-flush`):** left, right, **top**. Bottom is bare. Use when the panel sits flush against the section *below* it (the footer panel). Apply this on the contact panel.
  Three sides always carry the hairline; the open edge faces the neighbour the panel meets without a gap.
- **Width:** Matches the hero glass panel's responsive sizing exactly. `max-width: calc(1200px + 96px)` by default; `calc(1200px + 240px)` at `≥1440px`; `calc(1200px + 400px)` at `≥1800px`.
- **Centering:** `margin-left: auto; margin-right: auto`.
- **Internal padding:** `padding-top` / `padding-bottom: 96px`. No horizontal padding — the inner `mx-auto max-w-[1200px]` wrapper provides the same horizontal breathing room (48px → 200px responsive) the content gets inside the hero glass.
- **Section frame:** Wrap the panel in a section that uses `bg-stone-100` (the gray canvas, `#F5F5F4`). When the panel directly follows the hero, the section uses `pt-0 pb-12 md:pb-16` so the panel sits flush against the bottom of the hero with no gray gap above; otherwise use `py-12 md:py-16` so the panel reads as floating on the gray with a visible gap on all sides.
- **When to use:** On the editorially loaded sections — typically the studio intro and the contact form. The white panel says "stop and read", the flat gray says "scroll through". Mix them deliberately: a content panel sandwich (panel → flat gray → panel) gives the page a clear pacing instead of an unbroken white scroll. Two panels per page is the comfortable maximum.

### Footer Panel (`.footer-panel`)

The dark counterpart of the content panel — same geometry, opposite material. Used to bookend the page in the same Polar-Night surface as the hero, so the dark hero opens and a dark footer closes.

- **Background:** `rgba(255, 255, 255, 0.05)` — white at 5% opacity over the black outer footer. Just enough lift to read as a panel (the dark-mode equivalent of the white content panel sitting on gray); subtle enough that the vertical hairlines are what really define the edges.
- **Edges:** Three-sided hairline at `1px solid rgba(255, 255, 255, 0.2)` — `border-left`, `border-right`, and `border-bottom`. Top is bare so the footer panel sits flush against the contact panel above without a visible line at the seam. The vertical edges share the hero glass panel's exact border weight; the bottom edge closes the page.
- **Width:** Identical responsive sizing to `.content-panel` and `.hero-glass-panel` — `max-width: calc(1200px + 96px)` default, `1200 + 240` at `≥1440px`, `1200 + 400` at `≥1800px`. The three panels read as siblings.
- **Centering:** `margin: 0 auto`.
- **Internal padding:** `padding-top` / `padding-bottom: 96px`. Horizontal padding handled by the inner `mx-auto max-w-[1200px]` wrapper.
- **Text:** `#FAFAFA` (paper white on the near-black surface).
- **Section frame:** Wrap the panel in `<footer class="bg-black px-8 pt-0 pb-12 md:pb-16">`. The outer footer surface stays pure black at full bleed (different from the rest of the content area, which is gray) so the page literally ends in night. `pt-0` makes the dark panel sit flush against the bottom of the contact section above; the bottom padding leaves a small black gap below the panel before the page edge.

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

- **Surface:** `surface-inverted` (`#000000`) full-bleed. The hero is the Polar Night — the only pure-black surface in the system.
- **Foreground typography:** `text-on-inverted` (`#FFFFFF`) for headline and nav. Soft drop shadow `drop-shadow(0 2px 40px rgba(0,0,0,0.7))` on the headline only.
- **Blob palette:** Cool spectrum only — `hero-glow-1` (`#0A1A4A` deep navy), `hero-glow-2` (`#1E3A8A` arctic blue), `hero-glow-3` (`#6B2EC7` violet), `hero-glow-4` (`#4FDC78` aurora green — oxygen emission). Four hues, no warm tones, no magenta.
- **Green is singular.** Use exactly one `blob--green` per hero. It is sized and shaped like the other Aurora layers (~100vw × 65vh, classic 5-stop radial fade) so the green sits in the composition as a peer of the violet and the blue, not as a foreground accent. Anchor it on the right edge mid-hero (`top: 25%`, `right: -10%`), painted on top of the cool layers but using the same blur and motion vocabulary. The green is the visual signature of the aurora — duplicating it dilutes the moment.
- **Layer count:** 7–8 absolutely-positioned blob divs in total (typically: 2 shadow, 2 navy/blue, 1 atmospheric blue accent, 2 violet, 1 green). Each 40–120vw wide and 35–75vh tall, single 5-stop radial-gradient background (faded to 0% by 88%), `filter: blur(60px)`, `pointer-events: none`.
- **Glass reading panel.** A single frosted-glass surface sized to the content container plus a responsive horizontal margin: 48px each side by default (`max-width: calc(1200px + 96px)`), 120px each side at `≥1440px`, 200px each side at `≥1800px`. Centered with `margin: 0 auto`, full hero height. On screens wider than the panel the aurora blobs read uninterrupted at the left and right edges; the glass only covers the middle reading column, with the headline and CTA sitting inside its bounds with comfortable horizontal padding that grows with the viewport. Background is a vertical fade `rgba(3,7,18, 0.32 → 0.22)` (the same polar-night tint as the hero base), with `backdrop-filter: blur(16px) saturate(120%)`. The panel carries hairline vertical edges only — `border-left` and `border-right` at `1px solid rgba(255,255,255,0.2)`. Top and bottom edges are intentionally borderless, so the panel reads as a glass column the page passes through rather than a framed card. Sits above every blob (DOM order) and below the content's `z-10` layer, so headline and CTA stay crisp. This is the only place a `backdrop-filter` is permitted in the system.
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
- Don't recolor the hero shader with warm hues (orange/red/amber) or shift it toward dawn. The blobs must stay inside the auroral spectrum (navy → arctic blue → violet → green) so the page reads as a polar night, not a sunrise. Magenta was removed deliberately — do not reintroduce it.
- Don't use Aurora Green (`#4FDC78`) as a button fill, body text color, or section background. It is the visual signature of the hero's auroral band — its job is to live inside the shader. A single tiny indicator dot or sensor-reading highlight is the maximum allowed flat use per page.
- Don't bold a display headline. The serif is set at weight 400; weight 500 is reserved for `heading-md` (h3 and below).
- Don't introduce a third typeface. The system is exactly two families: Newsreader (every heading) and Inter (everything else). No display sans for headlines, no script accents, no UI serif for body.
- Don't set body copy in Newsreader. The serif belongs to headings. Body, labels, navigation, and buttons stay in Inter.
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
