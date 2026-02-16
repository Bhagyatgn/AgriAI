"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const crops = [
  {
    id: "tomato",
    name: "Tomato",
    emoji: "🍅",
    desc: "View tomato crop details",
  },
  {
    id: "potato",
    name: "Potato",
    emoji: "🥔",
    desc: "View potato crop details",
  },
  {
    id: "bell-pepper",
    name: "Bell Pepper",
    emoji: "🫑",
    desc: "View bell pepper crop details",
  },
  {
    id: "paddy",
    name: "Paddy",
    emoji: "🌾",
    desc: "View paddy crop details",
  },
  {
    id: "cabbage",
    name: "Cabbage",
    emoji: "🥬",
    desc: "View cabbage crop details",
  },
  {
    id: "green-chili",
    name: "Green Chili",
    emoji: "🌶️",
    desc: "View green chilli crop details",
  },
];

export default function CropsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <section className="w-full bg-green-700 text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:px-10">
          <p className="text-sm uppercase tracking-widest text-green-100">Crops</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Select a Crop</h1>
          <p className="mt-4 text-lg text-green-100">
            Choose a crop to view guides, care tips, and diagnosis options.
          </p>
        </div>
      </section>

      <section className="w-full flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((crop) => (
              <Link
                key={crop.id}
                href={`/crops/${crop.id}`}
                className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-green-900">{crop.name}</h2>
                  <span className="text-3xl" aria-hidden="true">
                    {crop.emoji}
                  </span>
                </div>
                <p className="mt-3 text-sm text-green-900/70">{crop.desc}</p>
                <div className="mt-5 flex items-center text-sm font-semibold text-green-700">
                  Explore details
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-green-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-green-900">Need quick diagnosis?</h3>
            <p className="mt-2 text-sm text-green-900/70">
              Upload a leaf image and get instant insights from AgriAI.
            </p>
            <Link
              href="/diagnosis"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Start diagnosis
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
