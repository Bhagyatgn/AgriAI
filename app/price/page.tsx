import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Price Prediction</h1>
        <p>Forecast crop prices using historical and seasonal trends.</p>
      </main>
      <Footer />
    </div>
  );
}
