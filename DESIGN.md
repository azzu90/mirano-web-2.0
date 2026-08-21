---
name: Mirano Solutions
description: Founder-led engineering partner for the DACH market — precision-as-proof over sales polish
colors:
  signal-orange: "#FF6841"
  signal-orange-deep: "#C2410C"
  signal-orange-light: "#FF8A66"
  graphite: "#2C343A"
  graphite-soft: "#3A434A"
  ink: "#22282C"
  slate: "#4A5258"
  muted: "#687076"
  on-dark: "#FFFFFF"
  on-dark-body: "#AEB6BC"
  porcelain: "#FDFCFA"
  limestone: "#F6F4F0"
  white: "#FFFFFF"
  border: "#E7E3DC"
  success: "#2E7D4F"
  warning: "#B7791F"
  error: "#C0392B"
typography:
  display:
    fontFamily: "League Spartan, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "League Spartan, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  micro:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  control: "8px"
  card: "14px"
  feature: "24px"
spacing:
  container-max: "1240px"
  container-inline: "1.5rem"
  section-y-desktop: "7rem"
  section-y-mobile: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "#FFFFFF"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.signal-orange-deep}"
    padding: "0.75rem 0"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
---

# Design System: Mirano Solutions

## 1. Overview

**Creative North Star: "The Engineering Ledger"**

Mirano's interface reads like an audited record, not a sales pitch. Every claim is dated, sourced, and specific: named partners, exact engagement dates, capped team sizes, a live product URL — the same discipline the company applies to the software it ships. The Hero's own copy calls its project/product lists a "ledger of engagements," and that idea sets the tone for the whole system: entries, not slogans.

The system explicitly rejects the generic agency/SaaS template look — stock-photo consultancy sites, gradient-hero "AI startup" templates, bloated enterprise pages with fake testimonials and inflated team-size claims. Nothing here should read as trying to look bigger or more generic-corporate than Mirano actually is. Confidence comes from specificity, not superlatives; restraint is a feature, not a limitation.

**Key Characteristics:**
- Warm-neutral, quiet surfaces (porcelain/limestone) that never compete with content
- A single signal color (orange) used sparingly and only where it means something: accents, primary CTAs, the one recurring gradient
- Flat by default — borders and tonal layering carry structure, not shadows
- One deliberate dark section per page (graphite) as the sole high-contrast beat
- A recurring mono-uppercase "eyebrow" as the system's one precision marker, used consistently rather than as decoration
- Motion as instrumentation: entries are written, lines are drawn — translateY/opacity/scaleX only, one ease-out curve, three duration steps (180/320/550ms), ≤600ms per move, no bounce or loops, everything instant under reduced motion

## 2. Colors

The palette is warm-neutral and quiet, with exactly one signal color allowed to speak.

### Primary
- **Signal Orange** (#FF6841): icons, secondary-solid accents, and the sole color the primary gradient is built from. Used deliberately and sparingly — never as a large flat fill outside the primary CTA.
- **Signal Orange Deep** (#C2410C): text-level accents on light backgrounds — eyebrows, ghost-button labels. Chosen specifically for AA contrast where the base orange would fail as text.
- **Signal Orange Light** (#FF8A66): the same accent role, recalibrated for the dark graphite section so it still reads at AA against a dark ground.

### Neutral
- **Porcelain** (#FDFCFA): the default page background. Warm without tipping into cream/sand cliché — closer to a clean paper white than a "cozy" tint.
- **Limestone** (#F6F4F0): the alternate section background and default card fill for callouts (CtaBox, etc.) — one step warmer/darker than porcelain, used to separate sections without a hard line.
- **Ink** (#22282C): headline color on light backgrounds.
- **Slate** (#4A5258): body text on light backgrounds.
- **Muted** (#687076): captions, meta text, secondary labels — AA-adjusted (≥4.5:1) against porcelain, limestone and white; tokens.css is the authoritative source for this value.
- **Border** (#E7E3DC): the only line color — card borders, header divider, input strokes.
- **Graphite** (#2C343A): the reserved dark section — footer plus at most one contrast section per page. Deliberately not pure black.
- **Graphite Soft** (#3A434A): card/hover surfaces on top of graphite.
- **On Dark / On Dark Body** (#FFFFFF / #AEB6BC): headline / body text on graphite.

### Status (functional only)
- **Success** (#2E7D4F), **Warning** (#B7791F), **Error** (#C0392B): reserved for functional state (form validation, status badges), never decorative.

### Named Rules
**The One Signal Rule.** Signal Orange (and its gradient) is the only saturated color in the system. It appears on icons, the primary CTA, ledger status dots, and the accent line/stat numbers — never as a large background fill, never duplicated as a second "brand color."

**The One Dark Section Rule.** Graphite appears at most once per page as a contrast section, plus the footer. It is not a second theme to alternate with light sections; it is a single deliberate beat.

**The PLIMA Exception.** The PLIMA feature card on `/products` alone carries PLIMA's own brand colors (`--plima-primary` #6D28D9, `--plima-highlight` #8444EE, its own violet-to-violet gradient and green accent `#40AF74`) — strictly scoped to that one card, never elsewhere, and never on `/references`, where the PLIMA case study instead uses standard per-icon brand colors from simple-icons like any other tech-stack chip.

## 3. Typography

**Display Font:** League Spartan (600, 700 — with system-ui fallback)
**Body Font:** Hanken Grotesk (400 body, 500/600 for h3–h6 and UI labels)
**Label/Mono Font:** JetBrains Mono (400, 500 — utility labels, numbers, the eyebrow)

**Character:** A confident geometric display face over a warm, humanist body face, with mono reserved strictly for data-like moments (labels, stats, dates) — the pairing itself performs the "engineering precision, human delivery" positioning.

### Hierarchy
- **Display / H1** (600, `clamp(2.4rem, 5vw, 3.75rem)`, line-height 1.15): hero headlines only, one per page.
- **Headline / H2** (600, `clamp(1.9rem, 3.5vw, 2.5rem)`, line-height 1.15): section titles.
- **Title / H3–H4** (600, 1.375rem / 1.125rem): card and subsection titles, set in the body face, not display.
- **Body** (400, 1.0625rem, line-height 1.65): running text; keep to a readable measure, roughly 65–75ch max in prose blocks.
- **Body-sm / Caption** (400, 0.9375rem / 0.8125rem): card body text, footer links, and secondary captions — the two small steps below body used consistently across components.
- **Label** (500, 0.75rem, letter-spacing 0.1em, uppercase, mono): the eyebrow and small meta text (`.mono-meta`) — the system's one recurring "precision marker."
- **Micro** (500, 0.6875rem, letter-spacing 0.06em, mono): the smallest step, reserved for trust lines and status badges; never running text.

### Named Rules
**The Data-Face Rule.** JetBrains Mono is reserved for anything that reads as a data point — labels, stats, dates, meta captions. It never appears in headlines or running prose; that boundary is what makes it feel like instrumentation rather than styling.

## 4. Elevation

Mirano is flat by design, and that flatness is deliberate rather than an oversight: structure comes from 1px borders and tonal background shifts (porcelain → limestone → graphite), not drop shadows. The one exception is the sticky header, which uses a soft backdrop blur plus a scroll-triggered shadow (`0 10px 28px -22px rgba(34,40,44,0)` at rest, animating to `0.35` opacity on scroll) — a single, purposeful glass moment, not a general glassmorphism pattern applied elsewhere.

### Shadow Vocabulary
- **Header scroll shadow** (`box-shadow: 0 10px 28px -22px rgba(34, 40, 44, 0.35)`): appears only once the page has scrolled past the top, signaling separation from content below. At rest it's fully transparent (`rgba(34, 40, 44, 0)`).

### Named Rules
**The Flat-by-Default Rule.** Cards, buttons, and sections carry no shadow at rest. Depth, where it exists at all, is a response to state (header on scroll, button hover transform), never a static decoration.

## 5. Components

### Buttons
- **Shape:** 8px radius (`--radius-control`) on all three variants.
- **Primary:** the single large-surface use of the orange gradient (`linear-gradient(90deg, #FF4A38 0%, #FF7B4D 100%)`), white text, 0.75rem/1.5rem padding. Hover brightens (`filter: brightness(1.06)`); active scales down slightly (`scale(0.98)`) — tactile but restrained, no bounce.
- **Secondary:** transparent fill, 1px `--mirano-border` outline, ink text; hover darkens the border to ink (on dark sections, border shifts from a dim gray to white).
- **Ghost:** no border or fill, orange-deep text, underline on hover — used for low-emphasis inline links like "Learn more →".

### Cards
- **Corner Style:** 14px radius (`--radius-card`).
- **Background:** white by default; limestone when the card sits inside an already-porcelain section (e.g. the CTA card).
- **Shadow Strategy:** none at rest — see Elevation. Hover states use a border-color shift and a small `translateY(-3px)` lift instead of shadow.
- **Border:** 1px solid `--mirano-border`; on hover, service/case cards tint the border toward orange (`color-mix(in srgb, var(--mirano-orange) 40%, var(--mirano-border))`) rather than adding a shadow.
- **Internal Padding:** ~1.75rem for grid cards, up to 3rem for the feature CTA card.

### The CTA Card (signature component)
The one place per page allowed a top accent: a 3px solid gradient bar across the top edge (`.cta-accent`), never a side stripe. Paired with a limestone background and a two-column layout (copy left, actions + trust line right). This is the system's single "make it a moment" pattern — everywhere else, restraint holds. On scroll-reveal, the bar draws itself left-to-right (`scaleX` 0→1, 600ms, origin left) — the same drawn-line mechanic the delivery timeline uses, reserved for the signature element.

### Navigation
- **Style:** sticky header, porcelain background at ~88–97% opacity over a 10px backdrop blur, 1px bottom border. 92px height, logo at 67px.
- **Typography:** nav links in body face, 500 weight, 0.9375rem, slate color.
- **States:** hover and the active page both shift text to ink; the active link additionally goes to 600 weight — color and weight together, no underline, no pill background.
- **Mobile:** collapses behind a menu (see Header.astro) rather than wrapping the full link row.

### Eyebrow (signature typographic component)
Mono, uppercase, 0.75rem, 0.1em tracking, orange-deep on light / orange-light on dark. Appears once per section head, directly above the H2, and inside status/trust lines (e.g. "EU CONTRACTS · GDPR-NATIVE · MAX. 40 EXPERTS"). This is the one recurring "precision marker" in the system — used consistently as a system-wide voice, not as decorative section-scaffolding.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Orange to icons, the primary CTA, ledger status dots, accent lines, and stat numbers — never a large flat background fill.
- **Do** use the 3px top gradient bar as the CTA card's one signature accent — top edge only, never a colored side border.
- **Do** hold graphite to one contrast section per page plus the footer.
- **Do** keep JetBrains Mono strictly for labels, stats, dates, and the eyebrow — never headlines or prose.
- **Do** let structure come from borders and background tone shifts, not shadows; reserve shadow for the header's scroll state only.
- **Do** scope PLIMA's violet/green brand colors strictly to the PLIMA card on `/products`; everywhere else (including the PLIMA case study on `/references`) uses standard per-icon simple-icons brand colors.
- **Do** support all three locales (DE/EN/HR) for any new copy or component — this is a trilingual site by default, not an English-first one with translations bolted on.

### Don't:
- **Don't** introduce a second saturated brand color alongside Signal Orange — the system is built around exactly one accent.
- **Don't** add drop shadows to cards or buttons at rest; flat-by-default is the point, not a placeholder state.
- **Don't** use `border-left`/`border-right` accent stripes on cards or list items — the CTA card's top bar is the one sanctioned accent pattern, and it's a top edge, not a side.
- **Don't** reach for gradient text (`background-clip: text`) beyond the existing `.stat-number` pattern — it's already a narrow, named exception; don't extend it to new elements.
- **Don't** build a generic agency/SaaS template look — stock-photo hero imagery, "AI startup" gradient-mesh backgrounds, testimonial-quote carousels, or team-size/growth claims Mirano doesn't back with real numbers.
- **Don't** default to a cream/sand/beige body background "for warmth" — Porcelain is a near-white paper tone, not a warm-tinted cliché; keep chroma low.
- **Don't** apply glassmorphism decoratively elsewhere — the sticky header's blur is the one purposeful instance, not a pattern to repeat on cards or modals.
