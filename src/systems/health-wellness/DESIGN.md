# DESIGN.md — Health & Wellness

> Calm is the interface. Trust is the outcome. Every design decision should reduce anxiety, not add to it.

---

## 1. Design Overview

**Product type:** Healthtech platforms, telemedicine, wellness apps, patient portals, mental health tools
**Target audience:** Patients, caregivers, health-conscious consumers. Broad age range (18-75). Includes users with visual impairments, motor difficulties, and cognitive disabilities. Many users are stressed or anxious when interacting with health tools.
**Design philosophy:** Inspired by Headspace, One Medical, and Calm. The interface should feel like a trusted doctor's office: clean, quiet, professional, and warm. Accessibility is not an add-on — it's the foundation. Every interaction should reduce cognitive load because users may be making decisions while unwell or distressed.
**Personality keywords:** Calm, trustworthy, warm, accessible, reassuring
**Reference products:** Headspace, One Medical, Zocdoc, MyChart, Calm

### Brand Voice in UI
- **Headlines:** Warm and direct. "Your Appointments" not "Manage Your Health Journey."
- **Body text:** Clear, plain language. 6th-grade reading level. No medical jargon without explanation.
- **Microcopy:** Reassuring. "Your information is secure" near sensitive fields. "Take your time" on long forms.
- **Error messages:** Never blame the user. "We couldn't process that. Let's try again." not "Invalid input."

---

## 2. Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #0D7C66 | Primary actions, active states — a calming teal-green |
| `--color-primary-hover` | #0A6352 | Hover state |
| `--color-primary-light` | #E6F5F1 | Selected states, active backgrounds |
| `--color-primary-dark` | #065445 | Text on primary-light backgrounds |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #FAFBFC | Page background — cool, clinical white |
| `--color-surface` | #FFFFFF | Cards, panels |
| `--color-surface-warm` | #F7F5F2 | Alternate sections, softer moments |
| `--color-border` | #E2E5E9 | Borders, dividers |
| `--color-border-strong` | #CBD0D6 | Input borders |
| `--color-text-primary` | #1A202C | Headings, important content |
| `--color-text-secondary` | #4A5568 | Body text |
| `--color-text-muted` | #A0AEC0 | Metadata, placeholders |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #2F855A | Appointment confirmed, medication taken |
| `--color-success-light` | #F0FFF4 | Success bg |
| `--color-warning` | #C05621 | Medication reminder, action needed |
| `--color-warning-light` | #FFFAF0 | Warning bg |
| `--color-error` | #C53030 | Missed medication, urgent alerts |
| `--color-error-light` | #FFF5F5 | Error bg |
| `--color-info` | #2B6CB0 | Informational, tips |
| `--color-info-light` | #EBF8FF | Info bg |

### Color Rules
- Primary teal-green is calming and associated with health/wellness. Not clinical blue.
- Avoid pure red for non-critical alerts — use warm orange (warning) for most reminders.
- Reserve red (error) for genuinely urgent items only: missed critical medication, emergency.
- Backgrounds are soft, never stark. The page background has a slight cool tint.
- No dark mode — health apps prioritize readability in clinical and home settings.

---

## 3. Typography

### Font Stack
- **Primary:** "Plus Jakarta Sans", -apple-system, sans-serif — friendly, readable, warm
- **Monospace:** "JetBrains Mono", monospace — for medical record numbers, IDs

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| H1 | 28px | 700 | 1.25 | -0.3px | Page titles |
| H2 | 22px | 600 | 1.30 | -0.2px | Section headings |
| H3 | 18px | 600 | 1.35 | 0px | Card titles |
| H4 | 14px | 600 | 1.40 | 0px | Labels, subsections |
| Body | 16px | 400 | 1.70 | 0px | Default text — larger for readability |
| Body-lg | 18px | 400 | 1.70 | 0px | Important instructions, lead text |
| Small | 14px | 400 | 1.60 | 0px | Secondary info |
| Caption | 12px | 500 | 1.40 | 0px | Fine print, timestamps |

### Typography Rules
- **16px body minimum.** Many users are older or reading in stressful conditions.
- Line height is generous (1.70) for easy reading — health content is often dense.
- Maximum line width: 600px — shorter lines reduce cognitive load.
- Plain language: use "medicine" not "medication", "doctor" not "provider."
- Numbers (dosage, measurements): always include units. "500mg" not "500."
- Dates: spell out month. "April 6, 2026" not "04/06/2026" (ambiguous).

---

## 4. Component Styles

### Buttons
**Primary**
```
Background: var(--color-primary) → #0D7C66
Text: #FFFFFF
Padding: 12px 24px
Border-radius: 8px (soft, not sharp — friendly)
Font: 16px/600 Plus Jakarta Sans
Min-height: 48px
Hover: #0A6352
Active: #065445
Disabled: opacity 0.4
Focus-visible: 3px solid #0D7C66, 3px offset (larger ring for visibility)
```

**Secondary**
```
Background: transparent
Border: 1.5px solid var(--color-border-strong)
Text: var(--color-text-primary)
Same dimensions
Hover: var(--color-surface-warm) bg
```

### Button Rules
- Minimum 48px height for all buttons — many users have motor difficulties.
- Button labels are full phrases: "Book Appointment" not "Book." "Confirm" not "OK."
- Critical health actions (confirm medication, emergency contact) use primary style.
- No icon-only buttons in health contexts — always include text label.
- Loading state: spinner + "Processing..." — never remove the button.

### Inputs
```
Background: #FFFFFF
Border: 1.5px solid var(--color-border-strong)
Border-radius: 8px
Padding: 12px 16px
Height: 48px minimum
Font: 16px/400 Plus Jakarta Sans (16px prevents mobile zoom on focus)
Label: 14px/600, var(--color-text-primary), 6px above input, always visible
Helper text: 14px/400, --color-text-muted, below input
Focus: border 2px var(--color-primary), ring 0 0 0 4px rgba(13,124,102,0.12)
Error: border 2px var(--color-error), error text 14px red below
```

### Input Rules
- Labels are always visible above the input — never floating or placeholder-only.
- Required fields: "(required)" text after label, not just an asterisk.
- Date inputs: use native date picker with clear format label ("Date of Birth (MM/DD/YYYY)").
- Phone fields: include format hint in helper text.
- Sensitive fields (SSN, insurance ID): include lock icon + "Your information is encrypted."
- Validation: on blur, with clear human-readable error messages.

### Cards — Appointment Card
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px (softer than SaaS — friendlier)
Padding: 20px
Structure:
  Status indicator: left border 4px (green confirmed, orange upcoming, gray past)
  Date/Time: 18px/600, --color-text-primary
  Doctor: 16px/400, --color-text-secondary + avatar 40px
  Type: 14px badge (In-person / Video / Phone)
  Actions: "Reschedule" secondary + "Cancel" text link
Shadow: 0 1px 3px rgba(0,0,0,0.04) — very subtle
```

### Cards — Medication Card
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px
Padding: 20px
Structure:
  Medication name: 18px/600
  Dosage + frequency: 16px/400, muted
  Next dose: 14px, primary color if upcoming, warning if overdue
  Action: "Mark as Taken" primary button, full-width at bottom
  Refill status: progress bar (doses remaining)
```

### Alerts / Banners
```
Border-radius: 8px
Padding: 16px 20px
Icon: 20px, left-aligned
Text: 16px/400
Close button: 20px × 20px, right-aligned (optional)

Info: bg #EBF8FF, border-left 4px #2B6CB0, icon info
Warning: bg #FFFAF0, border-left 4px #C05621, icon alert-triangle
Error: bg #FFF5F5, border-left 4px #C53030, icon alert-circle
Success: bg #F0FFF4, border-left 4px #2F855A, icon check-circle
```

### Navigation
```
Type: Top bar + optional sidebar for logged-in views
Height: 64px
Background: white, 1px bottom border
Logo: left, with product name in 18px/600
Nav items: 16px/500, --color-text-secondary
Active: --color-primary text, 2px bottom border
Mobile: hamburger menu, full-screen overlay
User menu: avatar + name, dropdown for settings/logout
```

---

## 5. Layout & Spacing

### Grid System
- **Max content width:** 960px (narrower — health content shouldn't feel overwhelming)
- **Columns:** 12
- **Gutter:** 24px
- **Page margin:** 32px desktop, 16px mobile

### Spacing Scale (4px base)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Icon-text gap |
| `--space-2` | 8px | Related element gaps |
| `--space-3` | 12px | Within cards |
| `--space-4` | 16px | Form field gaps, mobile padding |
| `--space-5` | 20px | Card padding |
| `--space-6` | 24px | Between cards, section padding |
| `--space-8` | 32px | Page margins, section gaps |
| `--space-10` | 40px | Major section breaks |
| `--space-12` | 48px | Page-level vertical rhythm |

### Responsive Breakpoints
| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column, stacked cards, full-width buttons |
| Tablet | 640px – 1024px | 2-column where appropriate |
| Desktop | > 1024px | Full layout, max 960px content |

### Layout Rules
- Content width capped at 960px — health information shouldn't feel sprawling.
- One primary action per screen — don't overwhelm with choices.
- Progressive disclosure: show essential info, expandable sections for details.
- Generous vertical spacing between sections — breathing room reduces anxiety.

---

## 6. Elevation & Depth

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| XS | `0 1px 3px rgba(0,0,0,0.04)` | Cards at rest |
| SM | `0 2px 8px rgba(0,0,0,0.06)` | Card hover, dropdowns |
| MD | `0 4px 16px rgba(0,0,0,0.08)` | Modals, floating elements |

### Depth Philosophy
- Very subtle shadows — the interface should feel flat and calm, not layered.
- Cards have minimal XS shadow to provide gentle containment.
- Avoid strong elevation contrasts — they create visual tension.

---

## 7. Iconography & Imagery

### Icons
- **Library:** Lucide
- **Size:** 20px default (larger for health readability)
- **Stroke:** 2px (thicker for visibility)
- **Color:** Inherit text color, semantic icons use semantic colors

### Key Health Icons
| Element | Icon |
|---------|------|
| Appointment | calendar |
| Medication | pill |
| Doctor | stethoscope |
| Video call | video |
| Phone call | phone |
| Documents | file-text |
| Insurance | shield-check |
| Emergency | phone-call |

### Imagery
- **Avatars:** Doctor/provider photos where available. 48px circle. Fallback: initials on primary-light.
- **Illustrations:** Warm, friendly line illustrations for empty states. Max 3 colors (primary, warm neutral, accent).
- **No stock photography** of doctors/patients — it feels inauthentic.

---

## 8. Animation & Motion

### Timing
| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease-out | Button hover, focus |
| Standard | 200ms | ease-in-out | Dropdown, expand |
| Gentle | 300ms | ease-out | Page transitions |
| Progress | 500ms | linear | Progress bar fill |

### Motion Rules
- All animations are gentle and slow — never abrupt or jarring.
- No bouncing, no shaking, no attention-grabbing animations.
- Form step transitions: simple crossfade, never slide.
- Loading: calm pulse animation, never frantic spinner.
- `prefers-reduced-motion`: disable all non-essential animation. Keep progress indicators.
- Medication reminders: gentle highlight (bg color change), never flashing or pulsing.

---

## 9. Design Guardrails

### Do
- Use plain language at a 6th-grade reading level.
- Provide clear next steps after every action ("Your appointment is confirmed. We'll send a reminder.")
- Include security/privacy reassurance near sensitive inputs.
- Make phone numbers and addresses tappable/clickable.
- Show estimated wait times and duration for appointments.
- Include "Need help?" or support contact on every page.
- Use generous spacing — health content needs room to breathe.

### Don't
- Don't use medical jargon without plain-language explanation.
- Don't use urgent colors (red, flashing) for non-emergency notifications.
- Don't time-out forms while user is filling them — health forms are long.
- Don't auto-play audio or video — users may be in clinical settings.
- Don't use small text for important health information — 16px minimum.
- Don't require CAPTCHA — many users have motor/cognitive difficulties.
- Don't use dark mode — clinical readability is the priority.
- Don't show error messages that blame the user.
- Don't use cutesy language ("Let's get you feeling better!") — be professional.

---

## 10. Accessibility Standards

### Compliance Level
WCAG 2.1 AA minimum, with AAA targets for text contrast and target sizes.

### Color Contrast
| Element | Target | Verified |
|---------|--------|----------|
| Body text (#4A5568) on bg (#FAFBFC) | 7:1 (AAA) | 7.2:1 ✓ |
| Primary text (#1A202C) on bg | 7:1 (AAA) | 15.1:1 ✓ |
| Primary green (#0D7C66) on white | 4.5:1 | 5.1:1 ✓ |
| Error red (#C53030) on error-light | 4.5:1 | 5.8:1 ✓ |

### Motor Accessibility
- All touch targets: 48px × 48px minimum, 12px spacing between.
- No hover-only interactions — everything accessible via tap/click.
- No drag-and-drop required for any action.
- Form auto-save every 30 seconds — don't lose patient data.
- No time limits on form completion.

### Cognitive Accessibility
- One primary action per screen section.
- Progress indicators on multi-step forms ("Step 2 of 4").
- Confirm before destructive actions (cancel appointment).
- "Are you sure?" dialogs use plain language with clear consequences.
- Help tooltips available for medical terminology.

### Screen Reader
- All form inputs labeled with visible text labels.
- Error messages linked via `aria-describedby`.
- Appointment status announced via `aria-live`.
- Medication schedules use semantic `<time>` elements.
- Images of doctors have alt text: "Dr. [Name], [Specialty]."

---

## 11. Edge Cases & Error Patterns

### Empty States
```
Illustration: warm line drawing, 120px, centered
Headline: 22px/600, "No upcoming appointments"
Description: 16px/400, "Book a visit with your doctor to get started."
CTA: Primary button "Book Appointment"
Support: "Need help? Call (555) 123-4567" below CTA
```

### Loading States
- Skeleton screens with calm pulse (1.5s, gentle, not frantic).
- Appointment loading: card skeleton matching appointment card shape.
- "Please wait..." text for medical data loading (users need reassurance).

### Error States
- Form errors: inline below field, red border, red text, never disappear until fixed.
- API errors: banner at top, warm tone, "We're having trouble connecting. Your data is safe."
- Appointment booking failure: clear message + phone number to book manually.
- Never show technical error codes to health consumers.

### Sensitive Data
- Medical information behind authentication always.
- Session timeout: 15 min idle, with 2-min warning modal.
- Insurance/SSN fields: mask by default, "Show" toggle, auto-clear on session end.

---

## 12. Agent Instructions

### Before Generating
1. Read this entire DESIGN.md.
2. Import Plus Jakarta Sans (400, 500, 600, 700).
3. Body font: 16px. This is larger than typical SaaS — intentional for health readability.
4. Max content width: 960px.

### CSS Reset Baseline
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; }
body {
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  font-size: 16px; line-height: 1.7; color: #4A5568;
  background: #FAFBFC;
  -webkit-font-smoothing: antialiased;
}
```

### Common AI Agent Mistakes to Avoid
- Using 14px body text — health apps use 16px minimum.
- Using dark mode — health interfaces stay light.
- Using sharp corners — health UIs use 8-12px radius for warmth.
- Using technical/jargon language in microcopy.
- Making touch targets smaller than 48px.
- Using aggressive red for non-emergency alerts.
- Timing out forms — health forms are long and need patience.
- Using icon-only buttons without text labels.
- Making the layout wider than 960px — narrower = calmer.
