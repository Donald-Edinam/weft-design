# DESIGN.md — Media & Editorial

> Content is sovereign. The interface exists to present words and images at their best — then disappear.

---

## 1. Design Overview

**Product type:** Blogs, news platforms, magazines, newsletters, content-heavy apps, documentation
**Target audience:** Readers. People who came for an article, a story, an essay. They want to read, not navigate. Ages 18-65, varying technical literacy.
**Design philosophy:** Inspired by Medium (early), The Outline, ProPublica, and Substack. Reading experience is paramount — typography, spacing, and pacing are tuned for sustained reading. Navigation is minimal. Ads (if any) don't break reading flow.
**Personality keywords:** Readable, elegant, content-first, editorial, unhurried
**Reference products:** Medium, Substack, The Verge, ProPublica, Longreads

### Brand Voice in UI
- **Headlines:** The content's voice, not the platform's. The CMS adapts to the writer.
- **Navigation:** Minimal labels. "Read", "Archive", "About." Not "Explore Our Content Hub."
- **Microcopy:** Invisible. The reader should never notice the platform.
- **Metadata:** Unobtrusive. Author, date, read time — present but quiet.

---

## 2. Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #1A1A1A | Text, headings, links at rest |
| `--color-accent` | #D64045 | Editorial accent — pull quotes, highlights, active states |
| `--color-accent-hover` | #B83438 | Hover |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #FFFFFF | Page background — pure white for reading |
| `--color-bg-warm` | #FAF9F7 | Article cards, subtle section bg |
| `--color-bg-code` | #F5F5F5 | Code block backgrounds |
| `--color-surface` | #FFFFFF | Cards, overlays |
| `--color-border` | #E8E8E8 | Dividers between articles |
| `--color-text-primary` | #1A1A1A | Headlines, body text — near-black |
| `--color-text-secondary` | #555555 | Bylines, secondary info |
| `--color-text-muted` | #999999 | Timestamps, read time, metadata |
| `--color-text-caption` | #777777 | Image captions, footnotes |

### Color Rules
- The reading surface is always white. No colored backgrounds behind article text.
- The editorial accent (red) is used for: pull quote marks, active nav indicator, links on hover, and the author highlight. That's it.
- Links within articles: underlined, --color-text-primary, hover reveals --color-accent.
- No semantic colors needed — this is a reading platform, not a dashboard.
- Dark/sepia reading modes toggle the bg and text colors only — structure stays the same.

### Reading Modes
| Mode | Background | Text | Accent |
|------|-----------|------|--------|
| Light (default) | #FFFFFF | #1A1A1A | #D64045 |
| Sepia | #F4EDDF | #3D3229 | #B83438 |
| Dark | #1A1A1A | #D4D4D4 | #E8696D |

---

## 3. Typography

### Font Stack
- **Headlines:** "Lora", Georgia, "Times New Roman", serif — for editorial authority
- **Body:** "Source Serif 4", Georgia, serif — optimized for long-form screen reading
- **UI / Sans:** "Inter", -apple-system, sans-serif — navigation, metadata, buttons
- **Code:** "JetBrains Mono", monospace

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Font | Usage |
|-------|------|--------|-------------|----------------|------|-------|
| Display | 48px | 700 | 1.15 | -1px | Lora | Feature article headline |
| H1 | 36px | 700 | 1.20 | -0.5px | Lora | Standard article headline |
| H2 | 28px | 700 | 1.25 | -0.3px | Lora | In-article section heading |
| H3 | 22px | 600 | 1.30 | 0px | Lora | Sub-section heading |
| H4 | 16px | 600 | 1.40 | 0.5px | Inter | Kicker/overline (uppercase sans) |
| Body | 19px | 400 | 1.80 | 0px | Source Serif 4 | Article body text |
| Body-sm | 17px | 400 | 1.75 | 0px | Source Serif 4 | Sidebar, secondary articles |
| Caption | 14px | 400 | 1.50 | 0px | Inter | Image captions, footnotes |
| Meta | 13px | 500 | 1.40 | 0.3px | Inter | Author, date, read time |
| Code | 15px | 400 | 1.60 | 0px | JetBrains Mono | Code blocks within articles |

### Typography Rules
- **Body text is 19px.** This is a reading platform — optimize for sustained reading, not information density.
- Line height is 1.80 for body — generous spacing between lines reduces eye strain.
- Article text max-width: **680px** (approximately 65-70 characters per line). This is the optimal reading measure.
- Serif for content (headlines + body), sans-serif for UI (nav, metadata, buttons). Never mix in articles.
- Drop caps: optional for feature articles. 4-line height, Lora 700, --color-accent.
- Pull quotes: Body size, italic, --color-accent, with large quotation mark or left border.
- No justified text — left-aligned only. Justified creates uneven word spacing on screens.

---

## 4. Component Styles

### Article Card (List View)
```
Layout: image left (40%) + text right (60%) on desktop, stacked on mobile
Image: aspect-ratio 16:9, no border-radius, object-fit cover
Category: 13px/500 Inter uppercase, --color-accent, letter-spacing 0.5px
Headline: 22px/700 Lora, --color-text-primary
  Hover: --color-accent
Excerpt: 16px/400 Source Serif 4, --color-text-secondary, 2-line clamp
Meta: 13px/500 Inter, --color-text-muted, "Author Name · Apr 6, 2026 · 8 min read"
Divider: 1px --color-border between articles, 32px vertical spacing
```

### Article Card (Grid View)
```
Layout: stacked — image on top, text below
Image: aspect-ratio 16:9, no border-radius
Gap: 16px between image and text
Category: 12px/500 Inter uppercase, --color-accent
Headline: 20px/700 Lora, --color-text-primary, 3-line clamp
Meta: 12px/500 Inter, --color-text-muted
Grid: 3-column desktop, 2-column tablet, single column mobile
Gap: 32px horizontal, 48px vertical
```

### Article Page Layout
```
Max-width: 680px centered for text content
Image max-width: 960px (wider than text — images break out of the text column)
Full-bleed images: edge-to-edge on mobile, 1200px max on desktop

Header:
  Category: 13px/500 Inter uppercase, --color-accent, centered
  Headline: 36px/700 Lora, centered, max 3 lines
  Subtitle: 22px/400 Source Serif 4, --color-text-secondary, centered (optional)
  Meta: 13px/500 Inter, --color-text-muted, centered
    "By [Author Name] · April 6, 2026 · 8 min read"
  Author avatar: 40px circle, inline with name
  Divider: 1px --color-border, 32px below meta

Body:
  Paragraphs: 19px/1.80 Source Serif 4, margin-bottom 1.5em
  H2: 28px Lora, margin-top 2.5em, margin-bottom 0.75em
  H3: 22px Lora, margin-top 2em, margin-bottom 0.5em
  Links: underline, --color-text-primary, hover --color-accent
  Lists: 19px body, 0.75em between items, 24px left indent
  Blockquotes: left border 3px --color-accent, padding-left 24px, italic
  Images: max-width 960px, centered, caption below in 14px Inter
  Code blocks: bg #F5F5F5, padding 24px, border-radius 6px, 15px JetBrains Mono
  Inline code: bg #F5F5F5, padding 2px 6px, 16px mono, border-radius 3px
  Horizontal rule: 1px --color-border, 48px margin top/bottom
```

### Pull Quote
```
Font: 28px/1.40 Source Serif 4, italic
Color: --color-text-primary
Border-left: 4px solid --color-accent
Padding-left: 24px
Margin: 48px 0
Max-width: 680px (same as body text)
Attribution: 14px Inter, --color-text-muted, "— Author Name" below
```

### Author Bio Card (End of Article)
```
Layout: avatar left + bio right
Avatar: 56px circle
Name: 18px/600 Inter
Bio: 15px/400 Inter, --color-text-secondary, max 2 lines
Link: "More from [Name] →" in --color-accent
Border: 1px --color-border top and bottom
Padding: 24px 0
Margin-top: 48px
```

### Navigation
```
Type: minimal top bar
Height: 56px
Background: white, 1px bottom border (appears on scroll)
Logo: left, publication name in 20px/700 Lora or wordmark
Nav items: right, 14px/500 Inter, max 4-5 items
Active: underline 2px --color-accent
Hamburger mobile: slide-in drawer from left, full-height
Sticky: becomes sticky after scrolling past hero
```

### Newsletter Signup (Inline)
```
Position: between articles in list view, or end of article
Background: var(--color-bg-warm) → #FAF9F7
Padding: 40px 32px
Border-radius: 0px (full-width block)
Headline: 22px/700 Lora, "Stay in the loop."
Description: 16px/400 Source Serif 4, --color-text-secondary
Input + Button: inline, email input (50%) + "Subscribe" primary button (auto)
Input: 48px height, 16px font
Button: bg --color-accent, white text, 48px height
Privacy: 12px Inter, --color-text-muted, "No spam. Unsubscribe anytime."
```

---

## 5. Layout & Spacing

### Grid System
- **Article body:** 680px max-width, centered
- **Images in articles:** 960px max-width (break out of text column)
- **Full page max:** 1200px
- **Page margin:** 24px desktop, 16px mobile

### Spacing Scale (8px base — editorial uses larger base)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | 16px | Tight gaps, caption spacing |
| `--space-3` | 24px | Within components, image-caption gap |
| `--space-4` | 32px | Between articles in list, meta spacing |
| `--space-6` | 48px | Section breaks, hr margin, article padding |
| `--space-8` | 64px | Major content sections |
| `--space-10` | 80px | Page top/bottom padding |
| `--space-12` | 96px | Feature article hero padding |

### Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column, full-width images, headline 28px |
| Tablet | 640px – 1024px | Article body 680px, 2-col grid |
| Desktop | > 1024px | Full layout, breakout images at 960px, 3-col grid |

### Layout Rules
- Article body text never exceeds 680px — the entire reading experience depends on this.
- Images break out of the text column to 960px — this creates visual variety and editorial pacing.
- Generous vertical spacing between paragraphs (1.5em margin) — reading, not scanning.
- No sidebar during article reading — zero distractions. Sidebar only on homepage/listing.
- Progress indicator (thin bar at top) shows reading position.

---

## 6. Elevation & Depth

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| None | `none` | Everything in reading mode |
| SM | `0 2px 8px rgba(0,0,0,0.06)` | Sticky nav on scroll, floating TOC |
| MD | `0 4px 16px rgba(0,0,0,0.08)` | Share menu, newsletter popup |

### Depth Philosophy
- Reading surfaces are flat. No shadows on article cards — use dividers.
- The only elevation is the sticky navigation bar (when scrolled) and floating share buttons.
- Let typography and spacing create hierarchy, not visual depth.

---

## 7. Iconography & Imagery

### Icons
- **Library:** Lucide, minimal use
- **Size:** 18px
- **Usage:** share (share-2), bookmark (bookmark), search (search), menu (menu), close (x), link (link-2), twitter/x, arrow-left (back). That's the full set.

### Article Images
- **Hero images:** Full-width on mobile, max 960px on desktop, no border-radius.
- **Inline images:** Max-width 960px, centered, with caption (14px Inter, --color-text-caption).
- **Image credit:** 12px Inter, right-aligned below caption, --color-text-muted.
- **Aspect ratios:** 16:9 for heroes, 3:2 for inline, 1:1 for author avatars.
- **Loading:** Blur-up placeholder (low-res blurred version → sharp) or solid #F0F0F0 + fade.

---

## 8. Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Fade | 200ms | ease-out | Content reveal, image load |
| Hover | 150ms | ease-out | Link color, card hover |
| Scroll | — | — | Reading progress bar tracks scroll position |
| Nav | 200ms | ease-in-out | Sticky nav slide in |

### Motion Rules
- Reading progress bar: thin (3px) bar at top of viewport, --color-accent, tracks scroll.
- Images: fade in on load from blur placeholder (300ms).
- Article transitions: simple fade (200ms) between articles.
- No scroll-triggered animations within articles — content should be immediately readable.
- Share buttons: fade in on hover/focus, not on scroll position.
- `prefers-reduced-motion`: disable image blur-up transition, keep progress bar.

---

## 9. Design Guardrails

### Do
- Prioritize reading experience above everything else.
- Keep body text at 680px max width — the most important rule in this system.
- Use serif fonts for article content — they're designed for sustained reading.
- Show reading time estimate on every article.
- Include a progress indicator for long articles.
- Let images break out of the text column for visual variety.
- Use generous line-height (1.80) and paragraph spacing.

### Don't
- Don't add sidebars during article reading — zero distractions.
- Don't use sans-serif for article body text — serif is the editorial standard.
- Don't justify text — left-align always for screen reading.
- Don't use more than 2 font families in articles (serif headline + serif body, or serif + sans meta).
- Don't interrupt reading with pop-ups, newsletter modals, or banners.
- Don't use colored text within articles — hyperlinks only.
- Don't auto-play media within articles.
- Don't use grid layouts for article body — single column only.
- Don't truncate headlines — always show the full headline.
- Don't use small text (below 16px) for any article content.

---

## 10. Accessibility Standards

### Compliance Level
WCAG 2.1 AA. Reading platforms serve everyone.

### Color Contrast
| Element | Ratio | Verified |
|---------|-------|----------|
| Body text (#1A1A1A) on white | 16.8:1 | ✓ |
| Secondary (#555555) on white | 7.5:1 | ✓ |
| Caption (#777777) on white | 4.5:1 | ✓ |
| Accent (#D64045) on white | 4.1:1 | ✓ (UI only) |
| Sepia text (#3D3229) on sepia bg (#F4EDDF) | 8.3:1 | ✓ |
| Dark mode text (#D4D4D4) on dark bg (#1A1A1A) | 11.1:1 | ✓ |

### Reading Accessibility
- Reading mode toggle: light / sepia / dark.
- Font size adjustment: 16px / 19px / 22px options.
- Line spacing adjustment: normal / relaxed / spacious.
- Article landmark structure: `<article>`, `<header>`, `<section>`, `<footer>`.
- Heading hierarchy: strict H1 → H2 → H3 (never skip levels).
- Images: descriptive alt text, decorative images use `alt=""`.

### Keyboard
- Tab through: nav → article content → footer.
- Skip link: "Skip to article" jumps past navigation.
- Focus-visible: 2px solid --color-accent, 2px offset.

---

## 11. Edge Cases & Error Patterns

### Empty States
- **No articles in category:** "No articles yet in [Category]." + link to homepage.
- **Search no results:** "No results for '[query]'." + "Try a different search" + trending articles.

### Loading States
- Article: skeleton matching headline + body layout, gentle pulse.
- Article list: 3 skeleton cards matching card layout.
- Images: blur-up placeholder (low-res → sharp) or solid #F0F0F0 block.

### Long Content
- Articles over 15 min read: show floating table of contents (sticky sidebar on desktop, collapsible on mobile).
- Code blocks: horizontal scroll if lines exceed container width. Never wrap code.
- Footnotes: superscript number links to bottom of article, with back-link.

---

## 12. Agent Instructions

### Before Generating
1. Read this entire DESIGN.md.
2. Import Lora (700), Source Serif 4 (400, 400 italic), Inter (400, 500, 600).
3. Article body: 19px Source Serif 4, 1.80 line-height, 680px max-width.
4. Page background: #FFFFFF for reading.

### CSS Reset Baseline
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; }
body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 16px; line-height: 1.6; color: #1A1A1A;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
}
article {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 19px; line-height: 1.80;
  max-width: 680px; margin: 0 auto;
}
article h1, article h2, article h3 {
  font-family: 'Lora', Georgia, serif;
}
```

### Common AI Agent Mistakes to Avoid
- Using sans-serif for article body text — editorial uses serif.
- Setting article body wider than 680px — reading measure is sacred.
- Using 14-16px for body text — editorial body is 19px.
- Adding sidebars or widgets during article reading.
- Using line-height below 1.70 for body text.
- Making images the same width as text — images should break out to 960px.
- Using justified text alignment.
- Interrupting reading flow with CTAs or popups mid-article.
- Skipping the reading progress bar for long articles.
- Using drop shadows on article cards — use dividers instead.
