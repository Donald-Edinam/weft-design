import type { Metadata } from 'next';
import MediaEditorialPreview from './MediaEditorialPreview';

export const metadata: Metadata = {
  title: "Media & Editorial — Weft Design Systems",
  description: "A typography-first design system for long-form reading experiences. Multiple reading modes and scroll-progress tracking.",
  openGraph: {
    title: "Media & Editorial — Weft",
    description: "The joy of reading, refined.",
    images: ["/og_image_weft.png"],
  },
};

export default function MediaEditorialPage() {
  return <MediaEditorialPreview />;
}
