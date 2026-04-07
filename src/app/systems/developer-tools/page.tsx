import type { Metadata } from 'next';
import DevToolsPreview from './DevToolsPreview';

export const metadata: Metadata = {
  title: "Developer Tools — Weft Design Systems",
  description: "A high-density, dark-mode design system for devtools and dashboards. Command palettes, log viewers, and dense grids.",
  openGraph: {
    title: "Developer Tools — Weft",
    description: "Build technical tools that feel like home.",
    images: ["/og_image_weft.png"],
  },
};

export default function DevToolsPage() {
  return <DevToolsPreview />;
}
