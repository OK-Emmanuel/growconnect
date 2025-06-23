import React from 'react';

export function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-amber-100 px-40 py-6 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">TGN</div>
        <span className="font-bold text-teal-800 text-xl font-sans">The GROW Network</span>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#projects" className="text-black hover:text-teal-700 font-medium transition-colors">Projects</a>
        <a href="#careers" className="text-black hover:text-teal-700 font-medium transition-colors">Careers</a>
        <a href="#about" className="text-black hover:text-teal-700 font-medium transition-colors">About</a>
        <a href="#contact" className="text-black hover:text-teal-700 font-medium transition-colors">Contact</a>
        <a href="#blog" className="text-black hover:text-teal-700 font-medium transition-colors">Blog</a>
        <a href="#get-in-touch" className="ml-4 bg-teal-700 text-white font-semibold rounded-full px-5 py-2 shadow hover:bg-yellow-800 hover:text-black transition-colors">Get in touch</a>
      </div>
      {/* Mobile Nav (hamburger) */}
      <div className="md:hidden flex items-center">
        {/* Hamburger icon placeholder */}
        <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-amber-100 transition-colors">
          <span className="block w-6 h-0.5 bg-teal-700 mb-1" />
          <span className="block w-6 h-0.5 bg-teal-700 mb-1" />
          <span className="block w-6 h-0.5 bg-teal-700" />
        </button>
      </div>
    </nav>
  );
} 