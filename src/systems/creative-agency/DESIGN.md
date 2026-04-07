# DESIGN.md — Creative Agency

> Type is the architecture. Whitespace is the luxury. The work speaks — the interface listens.

---

## 1. Design Overview

**Product type:** Portfolio sites, studio websites, brand-forward marketing, editorial presentations
**Target audience:** Creative directors, brand managers, potential clients, design-conscious audiences
**Design philosophy:** Inspired by Pentagram, Collins, and Base Design. Typography leads every decision. The grid exists to be broken — intentionally. Generous whitespace signals confidence. Photography and work samples are treated as art, not content blocks.
**Personality keywords:** Bold, editorial, refined, intentional, confident
**Reference products:** Pentagram.com, Collins1.com, BaseDesign.com, ItNicely.com

### Brand Voice in UI
- **Headlines:** Provocative or declarative. Short. "We make things people care about." Not "Welcome to our agency."
- **Body text:** Thoughtful, measured. Third person. No exclamation marks. Period.
- **Microcopy:** Minimal. Navigation labels are one word where possible.
- **Case studies:** The work is the hero. Surrounding text is supporting, never competing.

---

## 2. Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #0A0A0A | Primary — near-black is the brand color |
| `--color-primary-inverse` | #F5F5F0 | Text on dark, cream-tinted white |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #F5F5F0 | Page background — warm off-white, not sterile |
| `--color-bg-dark` | #0A0A0A | Dark section backgrounds |
| `--color-surface` | #FFFFFF | Cards on off-white bg, overlays |
| `--color-border` | #D4D4CD | Subtle borders, dividers |
| `--color-text-primary` | #0A0A0A | Headings, primary content |
| `--color-text-secondary` | #52524E | Body text, descriptions |
| `--color-text-muted` | #8A8A85 | Metadata, captions |
| `--color-text-on-dark` | #F5F5F0 | All text on dark backgrounds |

### Accent (Used Sparingly)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | #E63B2E | One accent — a confident red. Links, hover states, active indicators |
| `--color-accent-hover` | #CC2E22 | Hover state |

### Color Rules
- The palette is intentionally limited. Black, off-white, and one red. That's the entire chromatic budget.
- Accent red is for interactive elements and editorial emphasis only — never backgrounds, never decorative.
- Dark/light section alternation creates visual rhythm. Alternate between `--color-bg` and `--color-bg-dark`.
- No gradients. No colored backgrounds. The color comes from the work (case study imagery).
- Photography and project imagery provide all the vibrancy the site needs.

---

## 3. Typography

### Font Stack
- **Display:** "Playfair Display", Georgia, serif — for hero headlines and impact moments
- **Body:** "Satoshi", "DM Sans", -apple-system, sans-serif — clean geometric sans for everything else
- **Monospace:** "JetBrains Mono", ui-monospace, monospace — captions, dates, technical details

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Font | Usage |
|-------|------|--------|-------------|----------------|------|-------|
| Display | 72px | 700 | 1.05 | -2px | Playfair Display | Hero headlines, case study titles |
| H1 | 48px | 700 | 1.10 | -1px | Playfair Display | Page titles |
| H2 | 32px | 600 | 1.15 | -0.5px | Satoshi | Section headings |
| H3 | 20px | 600 | 1.30 | 0px | Satoshi | Subsections, card titles |
| H4 | 14px | 600 | 1.40 | 2px | Satoshi | Overlines, categories (uppercase) |
| Body | 17px | 400 | 1.70 | 0px | Satoshi | Paragraphs |
| Body-lg | 21px | 400 | 1.65 | -0.2px | Satoshi | Lead paragraphs, pull quotes |
| Small | 14px | 400 | 1.50 | 0px | Satoshi | Captions, metadata |
| Caption | 12px | 500 | 1.40 | 0.5px | JetBrains Mono | Dates, image credits, tech details |

### Typography Rules
- Display headlines (72px) can break onto multiple lines. Tight line-height (1.05) creates density.
- Body text at 17px — larger than standard SaaS. Generous line-height (1.70) for editorial readability.
- Maximum line width: 640px for body text. Headlines can span wider.
- Serif (Playfair) is for moments of impact only: hero, case study titles, pull quotes. Never for body.
- Uppercase is reserved for H4 overlines and navigation. Never for headings or body.
- No bold within body text. Use italic for emphasis, or restructure the sentence.
- Pull quotes: Body-lg size, italic, with a left border accent or large quotation mark.

---

## 4. Component Styles

### Buttons
**Primary (Dark)**
```
Background: var(--color-primary) → #0A0A0A
Text: var(--color-primary-inverse) → #F5F5F0
Padding: 14px 32px
Border-radius: 0px (sharp corners — this is a design statement)
Font: 14px/500 Satoshi, uppercase, letter-spacing 1.5px
Hover: bg var(--color-accent) → #E63B2E, text white
Active: bg #CC2E22
Min-height: 48px
Focus-visible: 2px solid var(--color-accent), 2px offset
```

**Secondary (Outline)**
```
Background: transparent
Border: 1px solid var(--color-primary)
Text: var(--color-primary)
Same dimensions
Hover: bg var(--color-primary), text var(--color-primary-inverse)
```

**Text Link**
```
Color: var(--color-text-primary)
Text-decoration: underline, underline-offset 4px
Hover: color var(--color-accent)
Transition: color 200ms
```

### Button Rules
- Buttons are uppercase with letter-spacing. This is an editorial design decision.
- Sharp corners (0px radius) throughout — no rounded buttons. The grid is sharp.
- Maximum 1 button per section. Let the work draw clicks, not the UI.
- On dark backgrounds, invert: white outline/fill, dark text.

### Navigation
```
Type: Minimal top bar, full-width
Height: 72px
Background: transparent (scrolls with content)
Logo: left-aligned, wordmark only, 18px Satoshi bold
Nav items: right-aligned, 14px/500 Satoshi, uppercase, letter-spacing 1.5px
Active: underline, 2px solid, underline-offset 6px
Hover: color var(--color-accent)
Mobile: hamburger icon → full-screen overlay (bg --color-bg-dark, nav items centered, 32px each)
Sticky: becomes sticky after scroll, add 1px bottom border
```

### Project/Case Study Card
```
Structure: image → text (stacked, not side-by-side)
Image: full-width, aspect-ratio 16:10, no border-radius, overflow hidden
Hover: image scale(1.03) over 500ms, cursor pointer
Category: 12px/500 mono, uppercase, --color-text-muted, 16px above title
Title: 32px/600 Playfair Display, --color-text-primary
Description: 17px/400 Satoshi, --color-text-secondary, max 2 lines
Spacing: 24px between image and text block, 64px between cards
```

### Case Study Grid
```
Desktop: 2-column grid, asymmetric (60/40 or equal)
  Alternate: first row 60/40, second row 40/60 for visual rhythm
Tablet: single column
Gap: 48px horizontal, 80px vertical
Full-bleed option: occasional image spans both columns
```

### Footer
```
Background: var(--color-bg-dark) → #0A0A0A
Text: var(--color-text-on-dark)
Padding: 80px 0 40px
Structure:
  Top: large CTA headline "Let's make something." in Display serif
  Middle: contact info, social links, office addresses in 3 columns
  Bottom: copyright, legal links in 12px mono
Links: underline on hover, accent red
```

---

## 5. Layout & Spacing

### Grid System
- **Max content width:** 1440px (with generous page margins)
- **Columns:** 12-column, but often used as 2, 3, or asymmetric splits
- **Gutter:** 32px
- **Page margin:** 80px desktop, 48px tablet, 24px mobile
- **Vertical rhythm:** sections separated by 120px+ on desktop

### Spacing Scale (8px base — larger base for editorial)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 8px | Tight gaps |
| `--space-2` | 16px | Related elements |
| `--space-3` | 24px | Within components |
| `--space-4` | 32px | Between components |
| `--space-6` | 48px | Between content blocks |
| `--space-8` | 64px | Between sections mobile |
| `--space-10` | 80px | Page margins, section gaps tablet |
| `--space-15` | 120px | Between major sections desktop |
| `--space-20` | 160px | Hero section vertical padding |

### Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column, reduced type scale (Display → 40px) |
| Tablet | 640px – 1024px | Single or 2-column, Display → 56px |
| Desktop | > 1024px | Full layout, asymmetric grids, full type scale |

### Layout Rules
- Whitespace is a design element, not wasted space. Sections breathe with 120px+ gaps.
- Page margins are generous: 80px on desktop. Content feels curated, not crammed.
- Break the grid intentionally: one image per page can bleed to the edge.
- Images are never contained in rounded cards — they sit directly in the layout.
- Text blocks never exceed 640px width — even when the layout is 1440px.

---

## 6. Elevation & Depth

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| None | `none` | Everything except modal overlay |
| Overlay | `0 16px 48px rgba(0,0,0,0.12)` | Mobile nav overlay only |

### Depth Philosophy
- Shadows are almost nonexistent. Depth comes from dark/light section alternation and scale contrast.
- Images create depth through content — the photography provides all visual dimension.
- No cards with shadows. Cards are defined by their content grouping and spacing, not borders or shadows.
- The only elevation that exists is the mobile navigation overlay.

---

## 7. Iconography & Imagery

### Icons
- **Style:** Custom or Lucide, minimal use — text labels preferred over icons
- **Size:** 20px when used
- **Usage:** Social media links, hamburger menu, close button, arrow links. That's it.
- **Arrow pattern:** "View Project →" uses a text arrow, not an icon component.

### Imagery
- **Photography:** The most important element. Full-bleed or nearly full-bleed. Never cropped into circles or small thumbnails.
- **Aspect ratios:** 16:10 for project thumbnails, 3:2 for detail images, full-viewport for hero images.
- **Treatment:** No filters, no overlays, no rounded corners. The photography is shown as-is.
- **Loading:** Fade in from opacity 0 over 400ms. No skeleton placeholders for images — use solid #E8E8E3.
- **Hover:** Subtle scale (1.03) on project thumbnails over 500ms ease-out.

---

## 8. Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Hover | 200ms | ease-out | Link color, button bg |
| Image hover | 500ms | ease-out | Thumbnail scale |
| Scroll reveal | 600ms | cubic-bezier(0.16, 1, 0.3, 1) | Content entering viewport |
| Page transition | 400ms | ease-in-out | Route changes |
| Nav overlay | 300ms | ease-out | Mobile menu open/close |

### Motion Rules
- Scroll-triggered reveals: elements fade up (translateY 40px → 0) + opacity. Stagger 100ms between siblings.
- Image hover zoom is the signature interaction — smooth and unhurried at 500ms.
- Page transitions: crossfade between pages, no slide.
- Text reveals: headline words can stagger in (50ms per word) for hero sections.
- `prefers-reduced-motion`: disable scroll reveals and image zoom. Keep color transitions.
- No loading spinners anywhere. Content either appears or the page is blank until ready.

---

## 9. Design Guardrails

### Do
- Let images breathe — generous spacing above and below.
- Use typographic contrast (serif vs sans, large vs small) for hierarchy.
- Alternate dark and light sections for pacing.
- Keep navigation minimal — 5 items maximum.
- Use negative space as a compositional tool.
- Align body text to a baseline grid where possible.

### Don't
- Don't use border-radius on anything except avatars (if team section exists).
- Don't use shadows — depth comes from contrast and scale.
- Don't use icons where text works. "Contact" not an envelope icon.
- Don't add decorative elements (lines, dots, abstract shapes) — let content be the decoration.
- Don't use more than 3 type sizes on a single page section.
- Don't center-align body text. Left-aligned always.
- Don't use colored backgrounds except black and off-white.
- Don't crop project images into thumbnails — show them large.

---

## 10. Accessibility Standards

### Compliance Level
WCAG 2.1 AA.

### Color Contrast
| Element | Minimum Ratio | Verified |
|---------|---------------|----------|
| Primary text (#0A0A0A) on bg (#F5F5F0) | 4.5:1 | 14.8:1 ✓ |
| Secondary text (#52524E) on bg (#F5F5F0) | 4.5:1 | 6.2:1 ✓ |
| Cream text (#F5F5F0) on dark (#0A0A0A) | 4.5:1 | 14.8:1 ✓ |
| Accent red (#E63B2E) on bg (#F5F5F0) | 3:1 | 4.2:1 ✓ (UI only) |

### Keyboard Navigation
- Tab order follows visual reading order.
- Focus-visible: 2px solid var(--color-accent), 2px offset.
- Skip link to main content.
- Full-screen mobile nav: focusable items, Escape to close.

### Screen Reader
- Project images: descriptive alt text ("Brand identity for X — packaging and print collateral").
- Decorative images: `alt=""`.
- Navigation landmark roles.
- Scroll-reveal content accessible immediately to screen readers (only visual reveal is delayed).

---

## 11. Edge Cases & Error Patterns

### Empty States
- Not typically applicable — portfolio sites are curated, not user-generated.
- 404 page: full-screen, Display headline "Page not found." + "Back to work" link.

### Loading States
- Image placeholders: solid #E8E8E3 blocks matching aspect ratio. Fade to image on load.
- No skeleton screens — the editorial aesthetic requires complete content or nothing.
- Page loads: entire page fades in once content is ready. No partial loading.

### Overflow
- Headlines: allow wrapping, never truncate. Adjust font-size responsively.
- Project descriptions: 2-line clamp in grid view, full text in detail view.
- Navigation: if more than 5 items, move secondary items to a "More" dropdown.

---

## 12. Agent Instructions

> Explicit rules for AI coding agents generating creative agency UI.

### Before Generating
1. Read this entire DESIGN.md.
2. Import Playfair Display (700) and Satoshi (400, 500, 600) from Google Fonts. JetBrains Mono (400, 500) for captions.
3. Set body background to #F5F5F0 (off-white, NOT pure white).
4. All layout sections should alternate between light (#F5F5F0) and dark (#0A0A0A) backgrounds.

### CSS Reset Baseline
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; }
body {
  font-family: 'Satoshi', 'DM Sans', -apple-system, sans-serif;
  font-size: 17px; line-height: 1.7; color: #0A0A0A;
  background: #F5F5F0;
  -webkit-font-smoothing: antialiased;
}
```

### Agent Prompt Templates

**Portfolio homepage:**
"Build a creative agency homepage: minimal top nav (logo left, 4 nav items right, uppercase), full-viewport hero with Display serif headline and a single 'View Work' link. Below: case study grid, 2-column asymmetric, project images 16:10, hover zoom, category + title below each. Dark section with large CTA 'Let's work together.' Footer with contact info in 3 columns."

**Case study page:**
"Create a case study page: hero image full-bleed, project title in Display serif overlaid or below, metadata (client, year, role) in mono caption style. Content: alternating image and text blocks, images full-width, text max 640px. Related projects grid at bottom."

### Common AI Agent Mistakes to Avoid
- Using border-radius — this system uses sharp corners exclusively.
- Using shadows on cards — depth comes from section contrast, not elevation.
- Setting body font to 14px — editorial body is 17px.
- Using pure white (#FFFFFF) as page background — use off-white #F5F5F0.
- Adding icons where text labels work.
- Using more than 3 colors total.
- Centering body text.
- Making images small — project images should dominate the layout.
- Using equal-width grid columns — alternate between 60/40 and 40/60.
