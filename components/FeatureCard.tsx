export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
      <h3 className="font-bold mb-2 text-lg">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
