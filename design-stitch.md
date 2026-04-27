---
version: "alpha"
name: "Landingpage - Space/Sci Tech Startup"
description: "For a landingpage design."
colors:
  primary: "#F97316"
  secondary: "#EA580C"
  tertiary: "#FFEDD5"
  neutral: "#1C1917"
  background: "#F5F5F4"
  surface: "#FFFFFF"
  surface-inverted: "#1C1917"
  text-primary: "#1C1917"
  text-secondary: "#78716C"
  text-on-inverted: "#FAFAF9"
  border: "#E7E5E4"
  accent: "#F97316"
  hero-glow-1: "#F97316"
  hero-glow-2: "#EA580C"
  hero-glow-3: "#FFEDD5"
  hero-glow-4: "#FB923C"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "88px"
    fontWeight: 500
    lineHeight: "88px"
    letterSpacing: "-0.05em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  label-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.3px"
    textTransform: "uppercase"
rounded:
  sm: "6px"
  lg: "8px"
spacing:
  base: "4px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "10px"
  gap: "8px"
  card-padding: "12px"
  section-padding: "24px"
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "10px"
  button-secondary:
    textColor: "#292524"
    rounded: "{rounded.lg}"
    padding: "14px"
  button-link:
    textColor: "{colors.text-secondary}"
    rounded: "0px"
    padding: "0px"
  card:
    rounded: "0px"
    padding: "8px"
  hero-shader:
    backgroundColor: "{colors.surface-inverted}"
    textColor: "{colors.text-on-inverted}"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Full Bleed
  - Framing: Open
  - Grid: Strong

## Colors

The color system uses light mode with #F97316 as the main accent and #1C1917 as the neutral foundation.

- **Primary (#F97316):** Main accent and emphasis color.
- **Secondary (#EA580C):** Supporting accent for secondary emphasis.
- **Tertiary (#FFEDD5):** Reserved accent for supporting contrast moments.
- **Neutral (#1C1917):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #F5F5F4; Surface: #FFFFFF; Text Primary: #1C1917; Text Secondary: #78716C; Border: #E7E5E4; Accent: #F97316

## Typography

Typography relies on Inter across display, body, and utility text.

- **Display (`display-lg`):** Inter, 88px, weight 500, line-height 88px, letter-spacing -0.05em.
- **Body (`body-md`):** Inter, 16px, weight 400, line-height 26px.
- **Labels (`label-md`):** Inter, 12px, weight 500, line-height 16px, letter-spacing 0.3px, uppercase.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, full bleed structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Full Bleed
- **Base unit:** 4px
- **Scale:** 2px, 4px, 8px, 10px, 12px, 14px, 16px, 20px
- **Section padding:** 24px, 48px, 160px, 192px
- **Card padding:** 12px, 24px, 48px
- **Gaps:** 8px, 12px, 16px, 24px

## Elevation & Depth

Depth is communicated through elevated, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as elevated first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Elevated
- **Borders:** 1px #E7E5E4; 1px #F5F5F4; 1px #D6D3D1; 2px #FFFFFF
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(234, 88, 12, 0.25) 0px 2px 12px 0px; rgba(45, 42, 38, 0.08) 0px 12px 32px -12px, rgba(45, 42, 38, 0.04) 0px 4px 12px -4px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 48px padding and a 16px radius. Drive the shell with none so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 4px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 4px, 6px, 8px, 16px, 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Anchor interactions to the detected button styles. Reuse the existing card surface recipe for content blocks.

### Buttons
- **Primary:** background #FFFFFF, text #1C1917, radius 6px, padding 10px, border 1px solid rgb(231, 229, 228).
- **Secondary:** text #292524, radius 8px, padding 14px, border 1px solid rgb(214, 211, 209).
- **Links:** text #78716C, radius 0px, padding 0px, border 0px solid rgb(229, 231, 235).

### Cards and Surfaces
- **Card surface:** radius 0px, padding 8px, shadow none.
- **Card surface:** background #F5F3EC, border 1px solid rgba(231, 229, 228, 0.8), radius 16px, padding 48px, shadow none.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

### Hero — Aurora Shader (motion exception)

The hero is the one place in this system where motion goes beyond "minimal". A shader-style field of animated radial-gradient blobs runs continuously behind the headline, recolored from the warm side of the palette so it reads as a slow sunrise rather than a screensaver. Treat it as a single, isolated component that lives at the very top of the page; nothing else in the system inherits from it.

- **Surface:** `surface-inverted` (`#1C1917`) full-bleed, edge-to-edge. The hero is the only dark surface in the system.
- **Foreground typography:** `text-on-inverted` (`#FAFAF9`) for headline and nav. Add a soft drop shadow (`drop-shadow(0 2px 40px rgba(0,0,0,0.6))`) on the headline only, so it stays legible against the moving blobs.
- **Blob palette:** Reuse the warm palette only — `hero-glow-1` (`#F97316`), `hero-glow-2` (`#EA580C`), `hero-glow-3` (`#FFEDD5`), `hero-glow-4` (`#FB923C`). No blue, no violet, no magenta. The aurora effect should feel like the brand color leaking light, not a separate accent system.
- **Layer count:** 6–9 absolutely-positioned blob divs, each 40–120vw wide and 35–75vh tall, with a single radial-gradient background (60–88% transparent at the edge), `filter: blur(60px)`, and `pointer-events: none`.
- **Animation:** Each blob runs its own `morph-*` keyframe — translate ±8–18vw / ±4–12vh, scale 0.75–1.35, rotate ±20–60°. Cycles 32–50s, `ease-in-out`, `infinite`, with negative `animation-delay` to desynchronize layers. `will-change: transform`.
- **Grain:** A 200×200 inline SVG `feTurbulence` tile (baseFrequency 0.9, 2 octaves, stitched), data-URL'd and overlaid at 5% opacity with `mix-blend-mode: overlay`, keeps the gradients from looking plasticky.
- **CTA inside hero:** Use `button-primary` (white surface, neutral text, 6px radius). Optionally add an atmospheric glow `box-shadow: 0 0 40px rgba(255,255,255,0.18)` to lift it from the moving field.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, freeze every blob (`animation: none`). The orange glow stays — the movement does not.

This component overrides the system-wide "Motion Level: minimal" budget and is the only sanctioned exception. Do not borrow its blur/blob recipe for any other section.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Elevated surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 4px, 6px, 8px, 16px, 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected minimal motion intensity outside the sanctioned `hero-shader` component.
- Don't reuse the hero shader's blur/blob recipe in any other section. It is a one-place exception, not a pattern.
- Don't recolor the hero shader with cool hues (blue/violet/magenta). The blobs must stay inside the warm palette so the hero reads as the same brand voice as the rest of the page.

## Motion

Motion has two registers. Interface motion stays restrained and is the default. Ambient motion is permitted in exactly one place: the hero shader.

**Motion Level (system default):** minimal — applies to every section except the hero.

**Motion Level (hero only):** ambient continuous — see the `hero-shader` component spec.

**Durations:** 150ms for hover/focus, ~600ms for scroll-reveal entrances, 32–50s cycles for hero blob animations.

**Easings:** `ease`, `cubic-bezier(0.4, 0, 0.2, 1)` for interface; `ease-in-out` for hero blobs.

**Hover Patterns:** text color, background color, opacity. No transforms, no shadow shifts.

**Reduced motion:** Both registers respect `prefers-reduced-motion: reduce` — hero blobs freeze, scroll reveals show instantly.
