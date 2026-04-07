import CreativeAgencyPreview from "./CreativeAgencyPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Agency Preview | Weft Systems",
  description: "Milestone 6: Editorial Typography-Driven Creative Agency Preview",
};

export default function CreativeAgencyPage() {
  return (
    <main className="min-h-screen bg-black">
      <CreativeAgencyPreview />
    </main>
  );
}
