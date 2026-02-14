import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p>Reach out to the AgriAI team for support, demos, or partnerships.</p>
      </main>
      <Footer />
    </div>
  );
}
