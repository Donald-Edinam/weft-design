import type { Metadata } from 'next';
import { AfricanMobilePreview } from './AfricanMobilePreview';

export const metadata: Metadata = {
  title: "African Mobile-First — Weft Design Systems",
  description: "A mobile-first design system optimized for African connectivity and user patterns. High contrast, tactile, and efficient.",
  openGraph: {
    title: "African Mobile-First — Weft",
    description: "Design systems for the next billion users.",
    images: ["/og_image_weft.png"],
  },
};

export default function AfricanMobileFirstPage() {
  return <AfricanMobilePreview />;
}
