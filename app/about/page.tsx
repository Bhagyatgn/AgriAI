import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">About AgriAI</h1>
        <p>We build smart tools that help farmers monitor crops, detect disease, and plan better harvests.</p>
      </main>
      <Footer />
    </div>
  );
}
