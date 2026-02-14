import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PestDetectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Pest Detection</h1>
        <p>Upload crop images to identify harmful pests and insects.</p>
      </main>
      <Footer />
    </div>
  );
}
