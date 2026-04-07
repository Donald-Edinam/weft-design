export interface DesignSystem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  primaryColor: string;
  tags: string[];
  lines: number;
  sections: number;
  compliance: string;
}

export const systems: DesignSystem[] = [
  {
    slug: "enterprise-saas",
    name: "Enterprise SaaS",
    tagline: "Clean authority. Data-dense but never cluttered.",
    description: "B2B dashboards, admin panels, analytics platforms. The kind of product a CFO trusts and an intern can navigate.",
    primaryColor: "#2563EB",
    tags: ["data-dense", "sidebar-nav", "flat-ui", "light-default"],
    lines: 534,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "fintech-dashboard",
    name: "Fintech Dashboard",
    tagline: "Precision is the product.",
    description: "Banking apps, trading platforms, payment tools. Every pixel communicates confidence. Numbers are the hero.",
    primaryColor: "#0052CC",
    tags: ["number-heavy", "dark-sidebar", "monospace", "tabular-nums"],
    lines: 493,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "creative-agency",
    name: "Creative Agency",
    tagline: "Type is the architecture. Whitespace is the luxury.",
    description: "Portfolio sites, studio websites, brand-forward marketing. The work speaks — the interface listens.",
    primaryColor: "#E63B2E",
    tags: ["editorial", "serif", "sharp-corners", "asymmetric"],
    lines: 372,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "e-commerce-minimal",
    name: "E-Commerce Minimal",
    tagline: "The product is the hero. The interface is the stage.",
    description: "Online storefronts, product pages, checkout flows. Minimal chrome, maximum product focus.",
    primaryColor: "#1A1A1A",
    tags: ["product-forward", "sharp-corners", "monochrome", "conversion"],
    lines: 408,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    tagline: "Dark by default. Code is content.",
    description: "DevTools, CLI dashboards, documentation sites. The interface should feel like a well-configured terminal that learned to be beautiful.",
    primaryColor: "#3B82F6",
    tags: ["dark-mode", "keyboard-first", "compact", "monospace"],
    lines: 439,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    tagline: "Calm is the interface. Trust is the outcome.",
    description: "Healthtech platforms, telemedicine, patient portals. Every design decision should reduce anxiety, not add to it.",
    primaryColor: "#0D7C66",
    tags: ["accessible", "warm", "large-text", "no-dark-mode"],
    lines: 422,
    sections: 12,
    compliance: "WCAG 2.1 AA+",
  },
  {
    slug: "media-editorial",
    name: "Media & Editorial",
    tagline: "Content is sovereign.",
    description: "Blogs, news platforms, magazines. The interface exists to present words and images at their best — then disappear.",
    primaryColor: "#D64045",
    tags: ["serif", "reading-optimized", "content-first", "progress-bar"],
    lines: 396,
    sections: 12,
    compliance: "WCAG 2.1 AA",
  },
  {
    slug: "african-mobile-first",
    name: "African Mobile-First",
    tagline: "Built for the 90%.",
    description: "Mobile-first business tools for African service businesses. Designed for low bandwidth, bright sunlight, and first-time SaaS users.",
    primaryColor: "#005F8E",
    tags: ["mobile-first", "offline-ready", "whatsapp", "high-contrast"],
    lines: 510,
    sections: 12,
    compliance: "WCAG 2.1 AA+",
  },
];
