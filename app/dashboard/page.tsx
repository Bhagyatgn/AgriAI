import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>View your farm overview, recent alerts, and activity.</p>
      </main>
      <Footer />
    </div>
  );
}
