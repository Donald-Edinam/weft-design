import type { Metadata } from 'next';
import { ClientGallery } from './ClientGallery';

export const metadata: Metadata = {
  title: "Systems Gallery — Weft Design Systems",
  description: "Explore 8 professional-grade DESIGN.md systems for AI coding agents. From SaaS to Fintech to Medical Portals.",
  openGraph: {
    title: "Design Systems Gallery — Weft",
    description: "Production-ready UI blueprints for Claude, Cursor, and Gemini.",
    images: ["/og_image_weft.png"],
  },
};

export default function SystemsPage() {
  return <ClientGallery />;
}
