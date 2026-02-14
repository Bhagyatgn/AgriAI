import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p>Sign in to access your personalized AgriAI dashboard.</p>
      </main>
      <Footer />
    </div>
  );
}
