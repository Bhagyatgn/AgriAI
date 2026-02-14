import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PestResultPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Pest Result</h1>
        <p>Review detected pest details and recommended actions.</p>
      </main>
      <Footer />
    </div>
  );
}
