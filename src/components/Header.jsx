import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-sm z-50 border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 sm:px-8">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold tracking-tight">
          Sruthi Sunke<span className="text-blue-800">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 space-y-4 border-t">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#projects" className="block hover:text-blue-600">Projects</a>
          <a href="#skills" className="block hover:text-blue-600">Skills</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
