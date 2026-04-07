# Weft

**The structure behind the surface.**

Professional-grade DESIGN.md files for AI coding agents. Not extracted from websites — engineered from design principles. Drop one into your project root. Your AI agent builds enterprise-quality UI from day one.

**See every system rendered live: [weft-systems.vercel.app](https://weft-systems.vercel.app)**

---

## The Problem

Existing DESIGN.md collections reverse-engineer CSS values from live websites. You get tokens — hex codes, font sizes, border radii — but no **design thinking**. The result: AI agents that can match a color palette but can't make a layout decision.

**Weft** takes a different approach. Each DESIGN.md is a complete design brief — the kind a senior designer at Pentagram or Collins would hand to a developer. Tokens + principles + component behavior + accessibility + anti-patterns.

## How It Works

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should **look and feel** |
| `README.md` | Humans | What the project is |

```bash
# Copy a design system into your project
cp weft/systems/enterprise-saas/DESIGN.md ./DESIGN.md

# Tell your AI agent to use it
# "Build me a dashboard page. Follow the DESIGN.md in the project root."
```

Compatible with: **Claude Code** · **Cursor** · **GitHub Copilot** · **Gemini CLI** · **Google Stitch** · **Windsurf** · **Aider** · **OpenCode**

## What Makes This Different

| | awesome-design-md | Weft |
|---|---|---|
| **Approach** | Extractive (scrape websites) | Generative (engineered from principles) |
| **Content** | Tokens only | Tokens + principles + behavior + a11y |
| **Use case** | "Make it look like Stripe" | "Build a professional fintech product" |
| **Customization** | Fork and edit hex codes | Fork and adapt an entire design philosophy |
| **Accessibility** | Rarely included | WCAG 2.1 AA baked into every system |
| **Edge cases** | Not covered | Empty states, error patterns, loading states |
| **Mobile-first** | Desktop-biased | Responsive strategy per archetype |

## Design Systems

### Live Showcase

Every system has a fully rendered interactive preview at **[weft-systems.vercel.app](https://weft-systems.vercel.app)**

### Core Collection

| System | Archetype | Preview | Best For |
|--------|-----------|---------|----------|
| [Enterprise SaaS](systems/enterprise-saas/) | Clean, data-dense, trustworthy | [Live](https://weft-systems.vercel.app/systems/enterprise-saas) | B2B dashboards, admin panels, analytics |
| [Fintech Dashboard](systems/fintech-dashboard/) | Precise, institutional, number-focused | [Live](https://weft-systems.vercel.app/systems/fintech-dashboard) | Banking apps, trading platforms, payment tools |
| [Creative Agency](systems/creative-agency/) | Bold, editorial, type-driven | [Live](https://weft-systems.vercel.app/systems/creative-agency) | Portfolios, studios, brand-forward sites |
| [E-Commerce Minimal](systems/e-commerce-minimal/) | Product-focused, conversion-driven | [Live](https://weft-systems.vercel.app/systems/e-commerce-minimal) | Storefronts, product pages, checkout flows |
| [African Mobile-First](systems/african-mobile-first/) | Data-light, USSD-informed, high-contrast | [Live](https://weft-systems.vercel.app/systems/african-mobile-first) | Mobile apps targeting African markets |
| [Developer Tools](systems/developer-tools/) | Code-forward, dark-native, information-dense | [Live](https://weft-systems.vercel.app/systems/developer-tools) | DevTools, CLIs, documentation sites |
| [Health & Wellness](systems/health-wellness/) | Calm, accessible, trust-building | [Live](https://weft-systems.vercel.app/systems/health-wellness) | Healthtech, telemedicine, wellness platforms |
| [Media & Editorial](systems/media-editorial/) | Content-first, readable, magazine-paced | [Live](https://weft-systems.vercel.app/systems/media-editorial) | Blogs, news platforms, content-heavy apps |

### Build Your Own

Use the [template](/_template/DESIGN.md) to create a custom DESIGN.md for your project.

```bash
cp weft/_template/DESIGN.md ./DESIGN.md
# Fill in your tokens, principles, and component guidelines
```

## DESIGN.md Format

Every DESIGN.md in this repo follows a 12-section format — the standard Stitch sections plus extended professional sections:

### Standard Sections (Stitch-compatible)
1. **Design Overview** — Visual identity and personality
2. **Color Palette** — Semantic color system with usage rules
3. **Typography** — Type scale, pairing rationale, optical adjustments
4. **Component Styles** — Buttons, inputs, cards, tables, modals
5. **Layout & Spacing** — Grid system, spacing scale, responsive breakpoints
6. **Elevation & Depth** — Shadow system, layering philosophy
7. **Iconography & Imagery** — Icon style, image treatment, illustration rules
8. **Animation & Motion** — Timing functions, interaction patterns
9. **Design Guardrails** — Do's and don'ts

### Extended Professional Sections
10. **Accessibility Standards** — WCAG compliance, contrast ratios, focus management
11. **Edge Cases & Error Patterns** — Empty states, loading, error handling, long content
12. **Agent Instructions** — Explicit rules for AI agents generating UI

## Installation

### Option 1: Clone the full repo
```bash
git clone https://github.com/Donald-Edinam/weft.git
cp weft/systems/enterprise-saas/DESIGN.md ./DESIGN.md
```

### Option 2: Direct download
```bash
curl -O https://raw.githubusercontent.com/Donald-Edinam/weft/main/systems/enterprise-saas/DESIGN.md
```

### Option 3: Claude Code skill
```bash
cp -r weft/ ~/.claude/skills/
# "Hey Claude, use the enterprise-saas design system for this project"
```

## Using with AI Agents

### Claude Code
```
Build me a settings page. Follow the DESIGN.md in the project root for all styling decisions.
```

### Cursor
Place DESIGN.md in project root. Cursor reads it automatically as context.

### Google Stitch
Import DESIGN.md directly into your Stitch project design system.

## Contributing

We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- Improve existing systems with better tokens or edge case coverage
- Add new archetype systems (propose via issue first)
- Add translations / regional adaptations
- Report issues with AI agent compatibility

## Philosophy

Good design is opinionated. These systems aren't "one-size-fits-all" — they're archetypes. Each one makes strong design decisions so your AI agent doesn't have to guess.

The goal: a developer with no design background should be able to drop in a DESIGN.md and get output that looks like a professional design team was involved.

**Inspired by:** Pentagram · Collins · Ragged Edge · Manual · Base Design · Studio Dumbar

## License

MIT — Use freely, commercially or personally. Attribution appreciated but not required.

---

**From Accra to the world**

Built by [Donald Edinam](https://github.com/Donald-Edinam) · [Live Showcase](https://weft-systems.vercel.app) · Maintained by the community
