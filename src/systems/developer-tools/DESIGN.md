# DESIGN.md — Developer Tools

> Dark by default. Code is content. The interface should feel like a well-configured terminal that learned to be beautiful.

---

## 1. Design Overview

**Product type:** DevTools, CLI dashboards, documentation sites, API explorers, CI/CD platforms
**Target audience:** Software engineers, DevOps, SREs, technical PMs. Highly technical, keyboard-first, efficiency-obsessed. Ages 22-45.
**Design philosophy:** Inspired by Linear, Vercel, Raycast, and GitHub. Dark mode is the default — not an afterthought. Information density is high but never cluttered. Monospace is beautiful. The interface rewards keyboard power users while remaining mouse-accessible.
**Personality keywords:** Technical, fast, precise, dark, keyboard-first
**Reference products:** Linear, Vercel Dashboard, Raycast, GitHub, Railway

### Brand Voice in UI
- **Headlines:** Technical and direct. "Deployments" not "Your Deployment Hub."
- **Body text:** Concise. Assume the reader knows what an API is.
- **Microcopy:** Precise, no fluff. "Deployed in 12s" not "Your changes are live! 🎉"
- **Code:** Syntax-highlighted, always in monospace, always copyable.

---

## 2. Color Palette

### Dark Mode (Default)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #0A0A0B | Root background |
| `--color-surface` | #141415 | Cards, panels, sidebar |
| `--color-surface-secondary` | #1C1C1E | Nested panels, code blocks |
| `--color-surface-hover` | #232326 | Row hover, interactive surface hover |
| `--color-border` | #27272A | Standard borders |
| `--color-border-strong` | #3F3F46 | Input borders, emphasized dividers |
| `--color-text-primary` | #FAFAFA | Headings, important content |
| `--color-text-secondary` | #A1A1AA | Body text, descriptions |
| `--color-text-muted` | #71717A | Metadata, timestamps, placeholders |

### Light Mode (Optional)
| Token | Dark | Light |
|-------|------|-------|
| `--color-bg` | #0A0A0B | #FFFFFF |
| `--color-surface` | #141415 | #F4F4F5 |
| `--color-border` | #27272A | #E4E4E7 |
| `--color-text-primary` | #FAFAFA | #09090B |
| `--color-text-secondary` | #A1A1AA | #71717A |

### Primary & Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #3B82F6 | Primary actions, links, active states |
| `--color-primary-hover` | #2563EB | Hover |
| `--color-primary-muted` | rgba(59,130,246,0.15) | Selected row bg, active tab bg |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #22C55E | Build passed, deploy success, online |
| `--color-warning` | #EAB308 | Build warning, degraded, queued |
| `--color-error` | #EF4444 | Build failed, error, offline |
| `--color-info` | #3B82F6 | Informational (shares primary) |

### Syntax Highlighting (Code Blocks)
| Token | Hex | Element |
|-------|-----|---------|
| `--syntax-keyword` | #C084FC | Keywords (const, function, import) |
| `--syntax-string` | #22C55E | Strings |
| `--syntax-number` | #F59E0B | Numbers |
| `--syntax-comment` | #71717A | Comments |
| `--syntax-function` | #60A5FA | Function names |
| `--syntax-variable` | #FAFAFA | Variables |
| `--syntax-operator` | #A1A1AA | Operators |

### Color Rules
- Dark mode is the default. Light mode is a toggle, not the primary experience.
- Semantic colors are vivid against the dark background — no need to mute them.
- Status dots (green/yellow/red) are 8px circles, always paired with text label.
- Code syntax colors are carefully chosen for contrast against #1C1C1E background.
- The blue primary is used sparingly — mostly for focus states and active selection.

---

## 3. Typography

### Font Stack
- **UI:** "Inter", -apple-system, sans-serif
- **Code:** "JetBrains Mono", "Fira Code", "SF Mono", monospace
- **Why both:** Inter for interface, JetBrains Mono for code. Monospace is a first-class citizen here, not an afterthought.

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| H1 | 24px | 600 | 1.25 | -0.3px | Page titles |
| H2 | 18px | 600 | 1.30 | -0.2px | Section headings |
| H3 | 14px | 600 | 1.40 | 0px | Card titles |
| H4 | 11px | 600 | 1.40 | 0.5px | Overlines (uppercase) |
| Body | 14px | 400 | 1.60 | 0px | Descriptions |
| Small | 12px | 400 | 1.50 | 0px | Metadata |
| Code-lg | 14px | 400 | 1.60 | 0px | Code blocks |
| Code-sm | 12px | 400 | 1.50 | 0px | Inline code |

### Typography Rules
- Monospace is used for: code snippets, deployment URLs, commit hashes, branch names, file paths, environment variables, port numbers, and any machine-generated string.
- Inline code: `backtick style` — bg #1C1C1E, padding 2px 6px, radius 4px, 12px JetBrains Mono.
- Code blocks: bg #1C1C1E, padding 16px, radius 8px, 14px JetBrains Mono, syntax highlighted.
- All code blocks must have a "Copy" button (top-right, ghost button, clipboard icon).
- Commit hashes: first 7 characters only, monospace, --color-text-muted.

---

## 4. Component Styles

### Buttons
**Primary**
```
Background: var(--color-primary) → #3B82F6
Text: #FFFFFF
Padding: 6px 12px
Border-radius: 6px
Font: 13px/500 Inter
Height: 32px (compact default for dev tools)
Hover: #2563EB
Focus-visible: 2px ring #3B82F6, 2px offset
```

**Secondary**
```
Background: var(--color-surface)
Border: 1px solid var(--color-border-strong)
Text: var(--color-text-primary)
Hover: var(--color-surface-hover) bg
```

**Ghost**
```
Background: transparent
Text: var(--color-text-secondary)
Hover: var(--color-surface-hover) bg
```

**Destructive**
```
Background: rgba(239,68,68,0.15)
Text: #EF4444
Border: 1px solid rgba(239,68,68,0.3)
Hover: rgba(239,68,68,0.25) bg
```

### Button Rules
- Default height is 32px — compact. Developer tools prioritize information density.
- Icon + text buttons: 16px icon, 6px gap, text.
- Icon-only buttons: 32px × 32px, `aria-label` required.
- Keyboard shortcut hints on buttons: display as kbd badge (e.g., `⌘K`).

### Inputs
```
Background: var(--color-surface) → #141415
Border: 1px solid var(--color-border-strong) → #3F3F46
Border-radius: 6px
Padding: 6px 10px
Height: 32px
Font: 13px/400 Inter
Color: var(--color-text-primary)
Placeholder: var(--color-text-muted)
Focus: border #3B82F6, ring 0 0 0 3px rgba(59,130,246,0.15)
```

### Command Palette (K-bar)
```
Overlay: rgba(0,0,0,0.6)
Panel: var(--color-surface), 12px radius, max-width 560px
Shadow: 0 16px 48px rgba(0,0,0,0.3)
Search input: 48px height, 16px font, no border, bg transparent, magnifying glass icon
Results: 36px height per item, 14px text, icon left, kbd shortcut right
Selected: var(--color-primary-muted) bg
Sections: 11px/600 uppercase muted section headers
Trigger: ⌘K / Ctrl+K
```

### Cards — Deploy Card
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 8px
Padding: 16px
Structure:
  Row 1: Status dot (8px, green/yellow/red) + branch name (mono) + commit hash (mono, muted)
  Row 2: Deploy URL (mono, primary blue, clickable)
  Row 3: Duration ("12s") + timestamp ("2m ago") in muted
Hover: border var(--color-border-strong)
```

### Tables — Build/Deploy Table
```
Header: no bg, 11px/600 uppercase, letter-spacing 0.5px, --color-text-muted
Row: 40px height, border-bottom 1px var(--color-border)
Row hover: var(--color-surface-hover) bg
Columns:
  Status: 8px dot (green/yellow/red) + text label
  Branch: mono, 13px
  Commit: mono, muted, first 7 chars
  Duration: right-aligned, muted
  Time: right-aligned, relative ("3m ago")
```

### Status Indicators
```
Dot: 8px circle, inline before text
  Success: #22C55E
  Warning: #EAB308
  Error:   #EF4444
  Pending: #71717A (with pulse animation)
  Building: #3B82F6 (with pulse animation)

Badge variant:
  Padding: 2px 8px, radius 4px, font 11px/500
  Success: bg rgba(34,197,94,0.15), text #22C55E
  Error:   bg rgba(239,68,68,0.15), text #EF4444
  Warning: bg rgba(234,179,8,0.15), text #EAB308
```

### Sidebar Navigation
```
Width: 220px
Background: var(--color-surface) → #141415
Border-right: 1px var(--color-border)
Nav items: 32px height, 8px horizontal padding, 6px radius
Active: var(--color-primary-muted) bg, --color-text-primary text
Hover: var(--color-surface-hover) bg
Icon: 16px, 8px right margin
Text: 13px/500
Section labels: 11px/600, --color-text-muted, uppercase
Keyboard nav: arrow keys between items, Enter activates
```

### Tabs
```
Height: 36px
Border-bottom: 1px var(--color-border) full width
Tab items: 13px/500, --color-text-muted, padding 8px 12px
Active tab: --color-text-primary, 2px bottom border --color-primary
Hover: --color-text-primary
```

---

## 5. Layout & Spacing

### Grid System
- **Max content width:** 1200px (or full-width with sidebar)
- **Gutter:** 16px
- **Page margin:** 24px desktop, 16px mobile
- **Sidebar:** 220px, collapsible

### Spacing Scale (4px base)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Icon-text, tight gaps |
| `--space-2` | 8px | Button groups, compact padding |
| `--space-3` | 12px | Card padding compact |
| `--space-4` | 16px | Card padding default, section padding |
| `--space-5` | 20px | Form field gaps |
| `--space-6` | 24px | Page margins, section gaps |
| `--space-8` | 32px | Major section breaks |

### Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 768px | Sidebar hidden, hamburger, stack all content |
| Desktop | > 768px | Full sidebar, multi-column |

---

## 6. Elevation & Depth

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| None | `none` | Default surfaces |
| SM | `0 2px 8px rgba(0,0,0,0.3)` | Dropdowns, popovers |
| MD | `0 8px 24px rgba(0,0,0,0.4)` | Command palette, modals |

### Depth Philosophy
- Dark backgrounds make shadows nearly invisible. Use lighter surface colors for elevation.
- `--color-surface` (cards) floats above `--color-bg` (page) through color alone.
- Command palette uses a heavy overlay (0.6 opacity) to create focus.
- Borders do more work than shadows in dark mode.

---

## 7. Iconography & Imagery

### Icons
- **Library:** Lucide
- **Size:** 16px default, 14px compact, 20px standalone
- **Stroke:** 1.5px
- **Color:** var(--color-text-secondary), active/hover inherits primary or text-primary

### Key Developer Icons
| Element | Icon |
|---------|------|
| Deploy | rocket |
| Branch | git-branch |
| Commit | git-commit |
| Build | hammer |
| Log | terminal |
| Settings | settings |
| API Key | key |
| Copy | clipboard |
| External link | external-link |
| Docs | book-open |

### No Decorative Imagery
- No illustrations, no stock photos, no background patterns.
- If empty states need visuals, use a large muted icon (48px).
- Diagrams (architecture, flow) use inline SVG with the token palette.

---

## 8. Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Instant | 0ms | — | Toggle, switch |
| Micro | 80ms | ease-out | Button active, focus ring |
| Fast | 150ms | ease-out | Dropdown, tooltip, tab switch |
| Standard | 200ms | ease-in-out | Sidebar, command palette |
| Pulse | 1.5s | ease-in-out | Building/pending status dot, infinite |

### Motion Rules
- Status dots pulse when in "building" or "pending" state.
- Command palette: overlay fade 150ms + panel scale(0.98 → 1) + fade 150ms.
- Dropdowns: fade + translateY(-4px → 0), 150ms.
- Log streaming: new lines append without animation (instant, like a terminal).
- `prefers-reduced-motion`: disable pulse, use static dots with "building..." text instead.

---

## 9. Design Guardrails

### Do
- Use monospace for all machine-generated content.
- Include copy buttons on all code blocks, URLs, and API keys.
- Show relative timestamps ("3m ago") with exact time on hover tooltip.
- Support keyboard shortcuts and display them in the UI (kbd badges).
- Use 32px compact component heights — developers value density.
- Include empty state with clear "getting started" instructions.

### Don't
- Don't use light mode as the default — dark is primary.
- Don't use emojis in the interface (code blocks are for code, not 🎉).
- Don't round corners beyond 8px — keep it tight and technical.
- Don't use large hero sections or marketing-style layouts.
- Don't hide information behind hover — show everything relevant at rest.
- Don't use full-width layouts for text content — max 720px for readability.
- Don't use colored status text without the accompanying dot or badge.

---

## 10. Accessibility Standards

### Compliance Level
WCAG 2.1 AA.

### Color Contrast (Dark Mode)
| Element | Ratio | Verified |
|---------|-------|----------|
| Primary text (#FAFAFA) on bg (#0A0A0B) | 19.5:1 | ✓ |
| Secondary text (#A1A1AA) on bg (#0A0A0B) | 7.5:1 | ✓ |
| Muted text (#71717A) on bg (#0A0A0B) | 4.1:1 | Non-essential only |
| Green (#22C55E) on surface (#141415) | 6.3:1 | ✓ |
| Red (#EF4444) on surface (#141415) | 4.8:1 | ✓ |

### Keyboard Navigation
- Command palette: ⌘K / Ctrl+K global shortcut.
- Tab navigation through sidebar, content, and actions.
- Arrow keys within tables, lists, and command palette results.
- Escape closes all overlays.
- Focus-visible: 2px ring var(--color-primary), 2px offset.

### Screen Reader
- Status indicators: paired with text labels and `aria-label`.
- Code blocks: `role="code"`, language specified.
- Relative timestamps: `<time datetime="...">` with ISO date in attribute.
- Copy buttons: `aria-label="Copy to clipboard"`, announce "Copied" on success.

---

## 11. Edge Cases & Error Patterns

### Empty States
```
Container: centered, max-width 400px
Icon: 48px, --color-text-muted
Headline: 14px/600, --color-text-primary, "No deployments yet"
Description: 13px/400, --color-text-secondary
CTA: Primary button or code snippet showing CLI command
```

### Loading States
- Build logs: streaming lines, cursor blink at end.
- Tables: skeleton rows matching column widths, pulse on --color-surface-secondary.
- Deploys: status dot pulse animation (#3B82F6).

### Error States
- Build failure: red status + expandable error log in code block.
- API errors: toast bottom-right, red left accent, "Request failed: 429 Too Many Requests."
- Form validation: inline, red border + text below input.

---

## 12. Agent Instructions

### Before Generating
1. Read this entire DESIGN.md.
2. Dark mode is the DEFAULT. Set `<html class="dark">` or equivalent.
3. Import Inter (400, 500, 600) and JetBrains Mono (400).
4. Background: #0A0A0B. Surface: #141415.

### CSS Reset Baseline
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; }
body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 14px; line-height: 1.6; color: #A1A1AA;
  background: #0A0A0B;
  -webkit-font-smoothing: antialiased;
}
code, pre { font-family: 'JetBrains Mono', monospace; }
```

### Common AI Agent Mistakes to Avoid
- Using light mode as default.
- Using 36px+ buttons — default height is 32px for dev tools.
- Not including copy buttons on code blocks.
- Using proportional font for code, URLs, or hashes.
- Making status indicators color-only without text labels.
- Using decorative illustrations — dev tools use icons and code, not art.
- Setting body text to 16px+ — 14px is the standard for information-dense tools.
