import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#832B2B] text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 mx-auto">
          <p className="text-4xl font-extrabold sm:text-5xl">
            Pranzo <span className="italic text-xl">(noun)</span>
          </p>
          <p className="text-xl text-gray-200">
            <strong>Pronunciation:</strong> /ˈpran.tso/
          </p>
          <div className="text-xl text-gray-200 text-left space-y-4">
            <p>
              <strong>1. Definition:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                a. The main meal of the day in Italian culture, traditionally
                eaten in the early afternoon.
              </li>
              <li>
                b. A social or family gathering centered around a midday meal.
              </li>
            </ul>

            <p>
              <strong>2. Usage:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                a. "Il pranzo è alle 13:00."{" "}
                <span className="italic">(Lunch is at 1:00 PM.)</span>
              </li>
              <li>
                b. "Dopo pranzo, andiamo a fare una passeggiata."{" "}
                <span className="italic">
                  (After lunch, we’ll go for a walk.)
                </span>
              </li>
            </ul>

            <p>
              <strong>3. Cultural Context:</strong>
            </p>
            <p>
              In Italy, <strong>pranzo</strong> is often considered the most
              important meal of the day, especially in southern regions. It
              typically includes multiple courses, such as antipasto
              (appetizers), primo (first course, like pasta or risotto), secondo
              (main course, often meat or fish), contorno (side dishes), and
              dolce (dessert).
            </p>
          </div>
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
