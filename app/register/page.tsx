import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <p>Create an account to start using AgriAI services.</p>
      </main>
      <Footer />
    </div>
  );
}
