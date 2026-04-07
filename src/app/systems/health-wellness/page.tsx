import HealthWellnessPreview from "./HealthWellnessPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Wellness Preview | Weft Systems",
  description: "Milestone 9: Calming Patient-Centric Health Dashboard",
};

export default function HealthWellnessPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">
      <HealthWellnessPreview />
    </main>
  );
}
