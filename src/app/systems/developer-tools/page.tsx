import DevToolsPreview from "./DevToolsPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Tools Preview | Weft Systems",
  description: "Milestone 7: Dark Mode High-Density Developer Tools Preview",
};

export default function DevToolsPage() {
  return (
    <main className="min-h-screen bg-black">
      <DevToolsPreview />
    </main>
  );
}
