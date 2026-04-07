import MediaEditorialPreview from "./MediaEditorialPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Editorial Preview | Weft Systems",
  description: "Milestone 10: High-Fidelity Magazine & Reading Experience",
};

export default function MediaEditorialPage() {
  return (
    <main className="min-h-screen bg-white">
      <MediaEditorialPreview />
    </main>
  );
}
