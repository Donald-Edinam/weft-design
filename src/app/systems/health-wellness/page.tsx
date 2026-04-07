import type { Metadata } from 'next';
import HealthWellnessPreview from './HealthWellnessPreview';

export const metadata: Metadata = {
  title: "Health & Wellness — Weft Design Systems",
  description: "A calm, accessibility-first design system for medical portals and wellness apps. Gentle motion and soft palettes.",
  openGraph: {
    title: "Health & Wellness — Weft",
    description: "Design that heals.",
    images: ["/og_image_weft.png"],
  },
};

export default function HealthWellnessPage() {
  return <HealthWellnessPreview />;
}
