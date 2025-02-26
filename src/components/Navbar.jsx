import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/club_logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBarItems = [
    { itemName: "Home", link: "/" },
    { itemName: "Notice", link: "/#notice" },
    { itemName: "Infinity Magazine", link: "/#infinity" },
    { itemName: "Projects", link: "/#projects" },
    { itemName: "Contact Us", link: "/#footer" },
    { itemName: "Achievements", link: "/#achievements" },
    { itemName: "Members", link: "/team-members" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#481515e6] text-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {navBarItems.map((item, id) => (
          <a
            key={id}
            href={item.link}
            className="hover:bg-[#bb8e45] px-4 py-2 rounded-lg transition"
          >
            {item.itemName}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#1c1c1c] w-48 rounded-lg shadow-lg flex flex-col items-start p-3 md:hidden">
          {navBarItems.map((item, id) => (
            <a
              key={id}
              href={item.link}
              className="w-full py-2 hover:bg-[#bb8e45] rounded-lg transition"
            >
              {item.itemName}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
