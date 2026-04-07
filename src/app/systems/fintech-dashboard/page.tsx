import FintechPreview from "./FintechPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech Dashboard | Weft Systems",
  description: "Milestone 5: Institutional Fintech Dashboard Preview",
};

export default function FintechDashboardPage() {
  return (
    <main className="min-h-screen bg-black">
      <FintechPreview />
    </main>
  );
}
