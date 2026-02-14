import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Features</h1>
        <p>Explore the full set of AgriAI capabilities for modern farming.</p>
      </main>
      <Footer />
    </div>
  );
}
