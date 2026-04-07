import type { Metadata } from 'next';
import { EnterprisePreview } from './EnterprisePreview';

export const metadata: Metadata = {
  title: "Enterprise SaaS Interface — Weft",
  description: "A professional-grade B2B SaaS dashboard design system implementation. Built with Weft.",
};

export default function EnterpriseSaaSPage() {
  return <EnterprisePreview />;
}
