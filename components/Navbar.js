import Link from "next/link";

const Navbar = ({ arrangements }) => {
  return (
    <nav className="bg-gradient-to-r from-[#9D3333] to-[#6D2323] shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <h1 className="text-4xl font-bold text-white">Pranzo</h1>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {arrangements.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300
                  ${
                    item.isHighlighted
                      ? "bg-white text-[#832B2B] hover:bg-gray-100 shadow-lg"
                      : "text-white hover:text-gray-200 hover:bg-[#6D2323]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
