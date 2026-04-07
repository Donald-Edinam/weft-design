import type { Metadata } from 'next';
import ECommerceMinimalPreview from './ECommerceMinimalPreview';

export const metadata: Metadata = {
  title: "E-Commerce Minimal — Weft Design Systems",
  description: "A minimalist, product-first e-commerce design system. Zero friction, high luxury, and monochrome aesthetics.",
  openGraph: {
    title: "E-Commerce Minimal — Weft",
    description: "Let the products speak for themselves.",
    images: ["/og_image_weft.png"],
  },
};

export default function ECommerceMinimalPage() {
  return <ECommerceMinimalPreview />;
}
