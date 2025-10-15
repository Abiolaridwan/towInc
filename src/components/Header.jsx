import React, { useState } from "react";
import { FaTruck, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <FaTruck className="text-primary text-2xl" />
            <span className="text-xl font-bold text-gray-800">TowingInc</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-primary transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
            <a href="#pages" className="text-gray-700 hover:text-primary transition">Pages</a>
            <a href="#blog" className="text-gray-700 hover:text-primary transition">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
          </nav>
          <div className="flex items-center">
            <button className="hidden md:inline bg-red-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Book Our Service Now
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden text-gray-700 text-2xl ml-2"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-gray-700 hover:text-primary transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
            <a href="#pages" className="text-gray-700 hover:text-primary transition">Pages</a>
            <a href="#blog" className="text-gray-700 hover:text-primary transition">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition mt-2">
              Book Our Service Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
