import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>Manage your account settings and farm details.</p>
      </main>
      <Footer />
    </div>
  );
}
