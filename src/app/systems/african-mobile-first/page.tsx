import type { Metadata } from 'next';
import { AfricanMobilePreview } from './AfricanMobilePreview';

export const metadata: Metadata = {
  title: "African Mobile-First Interface — Weft",
  description: "A highly-optimized, mobile-first SaaS interface built for edge connections and high outdoor readability. Built with Weft.",
};

export default function AfricanMobileFirstPage() {
  return <AfricanMobilePreview />;
}
