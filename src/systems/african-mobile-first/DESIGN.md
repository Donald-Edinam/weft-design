# DESIGN.md — African Mobile-First

> Built for the 90%. Designed for low bandwidth, bright sunlight, and the user who's never seen a SaaS dashboard before. Every interaction earns trust.

---

## 1. Design Overview

**Product type:** Mobile-first business tools, service management apps, customer-facing portals
**Target audience:** SME owners and their customers across Africa — barbers, laundry operators, food vendors, salon owners, retailers. Age 18-50. Smartphone-first (60%+ on Android). Data-conscious. Many are first-time SaaS users.
**Design philosophy:** Simplicity is not dumbing down — it's clarity under constraint. Design for the worst-case screen (5" Android, direct sunlight, 3G connection). If it works there, it works everywhere. Lean on familiar mobile patterns (WhatsApp, M-Pesa, mobile money) rather than Western SaaS conventions.
**Personality keywords:** Approachable, trustworthy, fast, clear, empowering
**Reference products:** M-Pesa, Wave, Paystack Dashboard, WhatsApp Business, Flutterwave Store

### Brand Voice in UI
- **Headlines:** Warm but direct. "Your Orders Today" not "Order Management Dashboard."
- **Body text:** Simple language, short sentences. Assume the user reads in English as a second language. Avoid jargon — "customers" not "clients", "money in" not "revenue."
- **Microcopy:** Reassuring. "Saved successfully ✓" not just "Saved." Confirm every action.
- **Empty states:** Encouraging, never clinical. "No orders yet — share your link to get started!"
- **Numbers:** Always format with locale awareness. GHS 150.00, not $150 or ¢15000.

---

## 2. Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #005F8E | Primary actions, active states, nav highlights |
| `--color-primary-hover` | #004D73 | Hover/pressed state for primary elements |
| `--color-primary-light` | #E8F4F8 | Selected items, active backgrounds, banner bg |
| `--color-primary-dark` | #003D5C | Text on primary-light, high-emphasis links |

### Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | #FFB703 | Highlights, badges, promotional elements, star ratings |
| `--color-accent-dark` | #CC9200 | Text on accent-light backgrounds |
| `--color-accent-light` | #FFF8E1 | Accent badge bg, highlight bg |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #FAFAFA | Page background |
| `--color-surface` | #FFFFFF | Cards, panels, bottom sheets |
| `--color-surface-warm` | #F8F7F4 | Alternate section bg, subtle warmth |
| `--color-border` | #E5E5E5 | Standard borders, list dividers |
| `--color-text-primary` | #1A1A1A | Headings, prices, important labels |
| `--color-text-secondary` | #555555 | Body text, descriptions |
| `--color-text-muted` | #888888 | Timestamps, helper text, placeholders |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #16A34A | Payment confirmed, order complete, active status |
| `--color-success-light` | #F0FDF4 | Success banner bg |
| `--color-warning` | #CA8A04 | Pending payment, action needed |
| `--color-warning-light` | #FEFCE8 | Warning banner bg |
| `--color-error` | #DC2626 | Failed payment, overdue, errors |
| `--color-error-light` | #FEF2F2 | Error banner bg |

### Color Rules
- High contrast is mandatory — test all text-on-background pairs at 5:1 minimum (above AA) for outdoor/sunlight readability.
- Primary blue and accent yellow are the brand pair. They never appear adjacent without a neutral separator.
- Semantic colors are always paired with text labels — color alone is insufficient (colorblindness, sunlight washout).
- Backgrounds are always white or near-white. Dark mode is deprioritized — most target users keep phones on high brightness in daylight.
- Accent yellow is never used for text — only backgrounds, borders, and fills. Too low contrast for text at any size.

---

## 3. Typography

### Font Stack
- **Primary:** "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Monospace:** "JetBrains Mono", ui-monospace, monospace (for order IDs and codes only)
- **Why Plus Jakarta Sans:** Clean, modern, excellent readability at small sizes on Android screens. Open-source. Friendlier than Inter without being playful. Good weight range.

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 28px | 700 | 1.20 | -0.3px | Key metric on dashboard (e.g., "GHS 2,450") |
| H1 | 22px | 700 | 1.25 | -0.2px | Page titles |
| H2 | 18px | 600 | 1.30 | 0px | Section headings |
| H3 | 16px | 600 | 1.35 | 0px | Card titles |
| Body | 15px | 400 | 1.60 | 0px | Default text — slightly larger than typical for readability |
| Small | 13px | 400 | 1.50 | 0px | Metadata, timestamps |
| Tiny | 11px | 600 | 1.40 | 0.3px | Badge text, overlines |
| Mono | 14px | 500 | 1.40 | 0.5px | Order IDs, tracking codes |

### Typography Rules
- **15px body minimum.** This is larger than typical SaaS (14px) because many users have lower screen quality and read outdoors.
- Maximum line width: 480px — these are phone screens, not desktop monitors.
- Numbers that represent money are always Display or H1 weight, never body weight.
- Order/tracking codes use monospace, letter-spacing 0.5px, for digit disambiguation.
- All-caps only for tiny badges (11px) and overline labels. Never for headings or body.
- Language: keep text short. If a label exceeds 3 words, rewrite it.

---

## 4. Component Styles

### Buttons
**Primary**
```
Background: var(--color-primary) → #005F8E
Text: #FFFFFF
Padding: 14px 24px
Border-radius: 10px
Font: 15px/600 Plus Jakarta Sans
Min-height: 48px (always — this is mobile-first)
Width: 100% on mobile, auto on desktop
Hover: #004D73
Active: #003D5C, scale(0.97)
Disabled: opacity 0.4, cursor not-allowed
Focus-visible: 3px solid #005F8E, 2px offset
```

**Secondary**
```
Background: var(--color-surface)
Border: 1.5px solid var(--color-border)
Text: var(--color-text-primary)
Same dimensions as primary
Hover: #F5F5F5 bg
```

**Accent / Promotional**
```
Background: var(--color-accent) → #FFB703
Text: #1A1A1A (dark text on yellow)
Same dimensions as primary
Use sparingly: "Share Your Link", "Refer a Friend"
```

**WhatsApp CTA** (common pattern in target market)
```
Background: #25D366
Text: #FFFFFF
Icon: WhatsApp logo 20px, 8px right of text
Same dimensions as primary
Label: "Order via WhatsApp" or "Chat on WhatsApp"
```

### Button Rules
- **48px minimum height everywhere.** No exceptions. Thumbs, not cursors.
- Standard buttons are full-width on screens < 480px. Side-by-side only on tablet+.
- **Floating Action Buttons (FAB):** Use a 56x56px circular button (`rounded-full`) anchored to the bottom-right for global actions like "New Order". Do NOT use full-width heavy block buttons spanning the whole screen for sticky global actions as they suffocate the UI.
- Primary button at bottom of forms, sticky if the form scrolls.
- WhatsApp CTA is treated as a primary-level action in customer-facing flows.
- Maximum 2 buttons visible at any time. More choices = more confusion for first-time users.
- Button labels: 2-3 word verbs. "Place Order", "Track Order", "Pay Now", "Share Link".

### Inputs
```
Background: #FFFFFF
Border: 1.5px solid var(--color-border) → #E5E5E5
Border-radius: 10px
Padding: 14px 16px
Height: 48px minimum
Font: 15px/400 Plus Jakarta Sans
Focus: border 2px var(--color-primary), bg white
Error: border 2px var(--color-error), error text 13px below
Label: 13px/600 var(--color-text-secondary), 6px above input
Placeholder: var(--color-text-muted), italic
```

### Input Rules
- Phone number inputs: include country flag + code selector (+233 for Ghana).
- Currency inputs: prefix with currency code (GHS) inside the field, left-aligned.
- Date inputs: use native mobile date picker — never custom calendars on mobile.
- Auto-capitalize first letter for name fields. No auto-capitalize for email/phone.
- Numeric keyboard (`inputmode="numeric"`) for phone, amount, and quantity fields.
- Validation on blur, not on keystroke. Show clear error messages, not codes.

### Cards — Order Card (Primary Pattern)
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px
Padding: 16px
Structure:
  Row 1: Order ID (mono, muted) + Status Badge (right-aligned)
  Row 2: Customer name (16px/600)
  Row 3: Item summary (15px/400 muted, 1-line truncated)
  Row 4: Price (18px/700, --color-text-primary) + Date (13px muted, right-aligned)
Tap: entire card is tappable, navigates to order detail
Active/pressed: scale(0.98), bg #F8F7F4
```

### Cards — Metric Card
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px
Padding: 16px
Structure:
  Label: 11px/600 uppercase, --color-text-muted, letter-spacing 0.5px
  Value: 28px/700, --color-text-primary
  Trend: 13px, green or red, with ↑/↓ arrow
Grid: 2 columns on mobile, 4 on tablet+
```

### Status Badges
```
Padding: 4px 10px
Border-radius: 6px
Font: 11px/600, uppercase, letter-spacing 0.3px

Statuses:
  New:        bg #E8F4F8, text #005F8E, icon: circle
  In Progress: bg #FFF8E1, text #CA8A04, icon: clock
  Ready:      bg #F0FDF4, text #16A34A, icon: check
  Delivered:  bg #F3F4F6, text #555555, icon: check-circle
  Cancelled:  bg #FEF2F2, text #DC2626, icon: x
  Paid:       bg #F0FDF4, text #16A34A, icon: banknote
  Unpaid:     bg #FEFCE8, text #CA8A04, icon: alert-circle
```

### Bottom Sheet (replaces modals on mobile)
```
Background: var(--color-surface)
Border-radius: 16px 16px 0 0 (top corners only)
Padding: 24px 16px
Handle: 40px × 4px, --color-border, centered, 8px from top
Shadow: 0 -4px 24px rgba(0,0,0,0.1)
Overlay: rgba(0,0,0,0.3)
Animation: slide up 300ms cubic-bezier(0.16, 1, 0.3, 1)
Dismiss: swipe down or tap overlay
Max-height: 85vh
```

### Bottom Sheet Rules
- Use bottom sheets instead of modals for all mobile interactions.
- Actions go at the bottom of the sheet, sticky, full-width buttons.
- Scrollable content inside if needed, but prefer keeping sheets short.
- Confirmation sheets: 1 headline, 1 description line, 2 buttons (cancel + confirm).

### Navigation — Bottom Tab Bar
```
Background: var(--color-surface)
Border-top: 1px solid var(--color-border)
Height: 64px (includes safe area padding for notched phones)
Items: 4-5 max
Icon: 22px
Label: 11px/500
Active: --color-primary icon + text
Inactive: --color-text-muted icon + text
Safe area: padding-bottom env(safe-area-inset-bottom)
```

### Tab Bar Rules
- Maximum 5 items. More than 5 = redesign your information architecture.
- Labels are always visible (no icon-only tabs). Users need text for clarity.
- Active tab has icon + text in primary color, subtle bg highlight.
- "Home" / "Orders" / "Customers" / "Settings" is the default 4-tab structure.

---

## 5. Layout & Spacing

### Grid System
- **Max content width:** 480px on mobile (full viewport minus 32px margin)
- **Desktop max:** 960px (this is a mobile-first product, desktop is secondary)
- **Columns:** 2 columns for cards/metrics on mobile, 4 on desktop
- **Page margin:** 16px on mobile, 24px on tablet+

### Spacing Scale (4px base)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Icon-text gap, badge internal |
| `--space-2` | 8px | Tight gaps, list item internals |
| `--space-3` | 12px | Between related items in a card |
| `--space-4` | 16px | Card padding, section padding mobile |
| `--space-5` | 20px | Between form fields |
| `--space-6` | 24px | Between cards in a list, section gap |
| `--space-8` | 32px | Page top padding, major section breaks |
| `--space-10` | 40px | Between page sections |

### Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Phone | < 480px | Single column, bottom tabs, bottom sheets, full-width buttons |
| Large phone / Small tablet | 480px – 768px | 2-column metric grid, wider cards |
| Tablet+ | > 768px | Sidebar nav replaces bottom tabs, side-by-side layouts |

### Layout Rules
- **Phone layouts are single-column.** No side-by-side content on screens < 480px except 2-column metric grids.
- Sticky bottom action bars for primary actions in flows (Place Order, Save, Confirm).
- Pull-to-refresh on list pages — users expect this from social/messaging apps.
- Infinite scroll for order lists (not pagination — pagination requires precise tapping).
- Content padding: 16px horizontal margin on all phone screens. Never edge-to-edge except images and dividers.

---

## 6. Elevation & Depth

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| None | `none` | Default cards, surfaces |
| Subtle | `0 1px 3px rgba(0,0,0,0.06)` | Card hover (desktop only) |
| Medium | `0 4px 12px rgba(0,0,0,0.08)` | Bottom sheets, floating elements |
| High | `0 -4px 24px rgba(0,0,0,0.10)` | Bottom navigation shadow (upward) |

### Depth Philosophy
- **Minimal shadows.** Most hierarchy comes from borders and background color contrast.
- Bottom sheets and bottom nav cast upward shadows — they're anchored to the bottom.
- Cards at rest have borders only, no shadows. Shadows imply floating, which is reserved for overlays.
- Dark overlays (rgba 0,0,0,0.3) for bottom sheets — lighter than typical Western SaaS because the underlying content should stay partially visible for context.

---

## 7. Iconography & Imagery

### Icons
- **Library:** Lucide icons
- **Default size:** 22px (tab bar), 20px (in-content), 16px (inline with text)
- **Stroke width:** 2px (slightly thicker than default for outdoor visibility)
- **Color:** Inherit text color. Semantic icons (success check, error x) use semantic colors.

### Key Icons for African Mobile Context
| Action | Icon | Notes |
|--------|------|-------|
| WhatsApp | whatsapp logo (custom SVG) | Used for share and CTA actions |
| Mobile Money | banknotes / smartphone | Payment method indicator |
| Call | phone | Direct call CTA (common in SME context) |
| Share | share-2 | Share tracking link, referral |
| Location | map-pin | Pickup/delivery location |

### Imagery
- **Product photos:** User-uploaded, often from phone cameras. Apply 8px radius, 1px border.
- **Avatar fallback:** Initials on primary-light background. First letter of name, 18px/700.
- **No stock photography.** Empty states use simple line illustrations or icons, never photos.
- **Illustration style (if used):** Flat, 2-3 colors max (primary, accent, neutral). Friendly, not corporate.

---

## 8. Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Tap feedback | 80ms | ease-out | scale(0.97) on press |
| Navigation | 250ms | ease-in-out | Page transitions, tab switches |
| Bottom sheet | 300ms | cubic-bezier(0.16, 1, 0.3, 1) | Sheet slide up |
| Dismiss | 200ms | ease-in | Sheet slide down, toast exit |
| Success | 400ms | ease-out | Check mark animation on confirm |

### Motion Rules
- Tap feedback is critical on mobile — every tappable element scales slightly on press.
- Page transitions: slide left/right for drill-down navigation, fade for tab switches.
- Bottom sheets: always slide up from bottom. Never fade in.
- **Performance: no CSS `filter`, no backdrop-blur on low-end devices.** Test on a mid-range Android (Samsung A14 or similar).
- Success animations: a brief checkmark + brief vibration (via Haptics API where available).
- `prefers-reduced-motion`: disable all motion except opacity transitions.

---

## 9. Design Guardrails

### Do
- Design for thumb reach: primary actions in the bottom 40% of the screen.
- Use 48px minimum touch targets everywhere — no exceptions.
- Show confirmation after every important action (save, send, pay).
- Format currency with locale: "GHS 150.00" not "$150" or "150".
- Use relative times: "2 hours ago" not "2026-04-06T14:32:00Z".
- Include offline indicators and retry mechanisms for poor network.
- Test on actual mid-range Android devices, not just Chrome DevTools.

### Don't
- Don't assume stable internet — design for 3G latency and dropped connections.
- Don't use dropdown selects for < 5 options — use radio buttons or chips instead.
- Don't use hover states as the only way to reveal information — there's no hover on mobile.
- Don't auto-play videos or load heavy images — data costs real money.
- Don't paginate lists — use infinite scroll with "load more" fallback.
- Don't use modals — use bottom sheets on mobile.
- Don't rely on swipe gestures as the only way to perform actions — always have a visible button alternative.
- Don't use Western date formats (MM/DD) — use DD/MM/YYYY or "6 Apr 2026".
- Don't use subtle color differences for state — outdoor sunlight washes out nuance.
- Don't nest navigation more than 2 levels deep. If users get lost, they leave.

---

## 10. Accessibility Standards

### Compliance Level
WCAG 2.1 AA, with enhanced contrast requirements for outdoor readability.

### Color Contrast
| Element | Minimum Ratio | Notes |
|---------|---------------|-------|
| Body text (#555555) on white | 5:1 | Higher than AA minimum for outdoor use |
| Primary text (#1A1A1A) on white | 5:1 | 14.5:1 ✓ |
| Primary blue (#005F8E) on white | 3:1 | 5.3:1 ✓ |
| Badge text on badge bg | 4.5:1 | Verified for all semantic badge pairs |
| Accent yellow (#FFB703) as bg | — | Never used with white text — always dark text |

### Touch & Motor
- All tap targets: 48px × 48px minimum (larger than standard 44px — accounts for imprecise touch on cheaper screens).
- Spacing between targets: 12px minimum (accounts for larger finger tips and screen inaccuracy).
- Swipe actions always have button alternatives.
- No time-limited interactions — users may have intermittent connectivity.

### Screen Reader
- All images have alt text.
- Form fields have visible labels (never placeholder-only).
- Status changes announced via `aria-live="polite"`.
- Language attribute set: `<html lang="en">` (adjust per market).

### Bandwidth & Data Accessibility
- Images: lazy-loaded, compressed (WebP with JPEG fallback), max 200KB.
- Fonts: subset to Latin characters. Total font payload < 100KB.
- Critical CSS inlined. Non-critical CSS loaded async.
- Service worker for offline support on key flows (view orders, customer list).
- Total initial page load: target < 500KB on first visit.

---

## 11. Edge Cases & Error Patterns

### Empty States
```
Container: centered, padding 40px 16px
Icon: 40px, --color-text-muted
Headline: 18px/600, --color-text-primary, warm and encouraging
Description: 15px/400, --color-text-secondary, instructs next step
CTA: Primary button, full-width
```
Examples:
- Orders: "No orders yet — share your link with customers to get started!" [Share Link]
- Customers: "Your customer list is empty. Add your first customer." [+ Add Customer]

### Loading States
- **Initial load:** Skeleton screen with 3 card placeholders, pulse animation on #F0F0F0.
- **Pull-to-refresh:** Native pull indicator (spinner at top).
- **Button loading:** Replace text with 18px spinner (white). Button stays same size, disabled.
- **Image loading:** Gray placeholder (#E5E5E5) with rounded corners matching final image.

### Error States
- **Network error:** Inline banner at top: "No internet connection. Tap to retry." Yellow bg, dark text.
- **Form error:** Red border + icon + message below field. "Please enter a valid phone number."
- **Payment failure:** Full-screen with error icon, clear message, "Try Again" primary button + "Pay Later" secondary.
- **API timeout:** Toast: "Something went wrong. Please try again." with Retry button.

### Offline Support
- Cache customer list and recent orders for offline viewing.
- Show "Offline" badge in header when disconnected.
- Queue form submissions and sync when back online, with a "Pending sync" indicator.
- Never show empty states when cached data is available — show cached data with "Last updated 2 hours ago."

### Overflow & Long Content
- Customer names: truncate at 24 characters with ellipsis in list views. Full name in detail view.
- Order item lists: show first 2 items + "+3 more" collapsed. Expandable on tap.
- Prices: never truncate. Always show full amount. Wrap line if needed.

---

## 12. Agent Instructions

> These are explicit rules for AI coding agents generating UI with this design system.

### Before Generating
1. Read this entire DESIGN.md before writing any code.
2. This is a **mobile-first** system. Start with the phone layout, then adapt for larger screens.
3. Use CSS custom properties for all values.
4. Import Plus Jakarta Sans from Google Fonts (weights 400, 500, 600, 700).

### CSS Reset Baseline
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; }
html { font-size: 15px; }
body {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  line-height: 1.6;
  color: #555555;
  background: #FAFAFA;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
```

### Mobile-First Rules
- Write mobile CSS first, then use `min-width` media queries for larger screens.
- Standard form/action buttons are 48px tall and full-width by default. Use 56x56px FABs (Floating Action Buttons) for global floating actions.
- Navigation is a bottom tab bar by default, sidebar only at 768px+.
- Modals → bottom sheets on mobile.
- Use `env(safe-area-inset-bottom)` for bottom-fixed elements.

### Agent Prompt Templates

**Order list page:**
"Build a mobile order list with pull-to-refresh. Each order card shows: order ID (mono), status badge, customer name, item summary (1 line truncated), price (bold), and date. Bottom tab bar with Home/Orders/Customers/Settings. Include a 56x56px circular 'New Order' Floating Action Button at the bottom right. Use the African Mobile-First DESIGN.md."

**Customer detail page:**
"Create a customer profile page: avatar (initials fallback), name, phone (tappable to call), total orders, total spent. Below: order history list (last 10, infinite scroll). Top: back arrow + 'Customer' title. WhatsApp CTA button at bottom. Use DESIGN.md for all tokens."

**Payment confirmation:**
"Build a payment success screen: large green checkmark animation, 'Payment Received' headline, amount in Display size, order ID in mono, 'Back to Orders' primary button. Use DESIGN.md Section 4 and 8 for animation timing."

### Common AI Agent Mistakes to Avoid
- Using 14px body text — this system uses 15px for better outdoor readability.
- Creating desktop-first layouts and then trying to squeeze them onto mobile.
- Using modals instead of bottom sheets on mobile.
- Using hover-dependent interactions (no hover on touchscreens).
- Setting touch targets below 48px — especially on action buttons and list items.
- Using heavy, full-width block buttons for sticky global actions (like "New Order") instead of a clean 56x56px Floating Action Button (FAB).
- Loading full-resolution images — compress and lazy-load everything.
- Using dropdown `<select>` for short option lists — use radio buttons or chips.
- Paginating lists instead of infinite scroll.
- Using `backdrop-filter: blur()` — laggy on mid-range Android devices.
- Not including offline states and retry mechanisms.
- Formatting dates as "2026-04-06" instead of "6 Apr 2026" or "2 hours ago".
