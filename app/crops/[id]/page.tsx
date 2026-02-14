import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CropDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Crop Details</h1>
        <p>Detailed information about the selected crop will appear here.</p>
      </main>
      <Footer />
    </div>
  );
}
