import type { Metadata } from 'next';
import FintechPreview from './FintechPreview';

export const metadata: Metadata = {
  title: "Fintech Dashboard — Weft Design Systems",
  description: "A high-precision, transaction-focused fintech design system. Real-time charts, secure patterns, and absolute precision.",
  openGraph: {
    title: "Fintech Dashboard — Weft",
    description: "The structure of modern finance.",
    images: ["/og_image_weft.png"],
  },
};

export default function FintechDashboardPage() {
  return <FintechPreview />;
}
