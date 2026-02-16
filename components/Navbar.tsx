"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">AgriAI</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/crops">Crops</Link>   {/* <-- Added this line */}
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
