import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClimatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Climate Guide</h1>
        <p>Get seasonal climate insights and best planting windows for your region.</p>
      </main>
      <Footer />
    </div>
  );
}
