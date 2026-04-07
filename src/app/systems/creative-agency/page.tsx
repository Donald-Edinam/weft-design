import type { Metadata } from 'next';
import CreativeAgencyPreview from './CreativeAgencyPreview';

export const metadata: Metadata = {
  title: "Creative Agency — Weft Design Systems",
  description: "A premium, typography-focused design system for creative studios. Minimalist, bold, and high-impact.",
  openGraph: {
    title: "Creative Agency — Weft",
    description: "Studio-grade design foundations.",
    images: ["/og_image_weft.png"],
  },
};

export default function CreativeAgencyPage() {
  return <CreativeAgencyPreview />;
}
