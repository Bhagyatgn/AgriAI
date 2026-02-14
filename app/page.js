import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="w-full bg-green-700 text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center sm:px-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to AgriAI</h1>
          <p className="text-xl">Smart Farming Solutions for Modern Agriculture</p>
        </div>
      </section>
      <section className="w-full bg-green-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Plant Disease Detection" desc="Upload a leaf image and get instant diagnosis." />
            <FeatureCard title="Insect Identification" desc="Identify harmful pests affecting your crops." />
            <FeatureCard title="Climate Guide" desc="Know the best season and weather for planting." />
            <FeatureCard title="Price Prediction" desc="Forecast future crop market prices." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
