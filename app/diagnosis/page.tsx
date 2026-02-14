import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Disease Diagnosis</h1>
        <p>Upload leaf images and receive AI-powered diagnosis results.</p>
      </main>
      <Footer />
    </div>
  );
}
