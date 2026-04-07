import type { Metadata } from 'next';
import { ClientGallery } from './ClientGallery';

export const metadata: Metadata = {
  title: "Design Systems — Weft",
  description: "8 professional-grade DESIGN.md files for AI coding agents.",
};

export default function SystemsPage() {
  return <ClientGallery />;
}
