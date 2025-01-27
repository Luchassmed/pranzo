import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import "./globals.css";

// Dynamic list of arrangements
const arrangements = [
  { name: "Expats", href: "/expats", isHighlighted: true },
  { name: "Gringoes", href: "/gringoes" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#832B2B] text-white">
        <Navbar arrangements={arrangements} />
        {children}
        <footer className="bg-[#6D2323] mt-16">
          <Socials />
        </footer>
      </body>
    </html>
  );
}
