import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#832B2B] text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Fremtidige Pranzo invitationer
          </h2>
          <p className="text-xl text-gray-200">ph tekst her</p>
        </div>

        {/* About Section */}
        <div className="bg-[#9D3333] rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Information</h3>
          <p className="text-gray-200 leading-relaxed">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
    </div>
  );
}
