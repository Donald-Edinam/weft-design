import ECommerceMinimalPreview from "./ECommerceMinimalPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Minimal Preview | Weft Systems",
  description: "Milestone 8: High-Fidelity Product-First E-Commerce Preview",
};

export default function ECommerceMinimalPage() {
  return (
    <main className="min-h-screen bg-white">
      <ECommerceMinimalPreview />
    </main>
  );
}
