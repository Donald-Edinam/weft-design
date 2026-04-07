import type { Metadata } from 'next';
import { EnterprisePreview } from './EnterprisePreview';

export const metadata: Metadata = {
  title: "Enterprise SaaS — Weft Design Systems",
  description: "A robust, data-heavy design system for enterprise applications. Complex tables, metric grids, and deep hierarchies.",
  openGraph: {
    title: "Enterprise SaaS — Weft",
    description: "Scale your business with structural clarity.",
    images: ["/og_image_weft.png"],
  },
};

export default function EnterpriseSaaSPage() {
  return <EnterprisePreview />;
}
