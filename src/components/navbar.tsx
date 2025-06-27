'use client';

import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.nav-logo, .nav-link, .nav-cta', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: navRef });
  
  return (
    <nav
      ref={navRef}
      className="w-full bg-white/80 backdrop-blur border-b border-amber-100 px-6 md:px-10 py-4 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="nav-logo flex items-center gap-2">
          <img src="./logo-colored.png" className="w-20 h-auto" alt="" />
          {/* <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            TGN
          </div> */}
          {/* <span className="font-bold text-teal-800 text-xl font-sans">The GROW Network</span> */}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="nav-link text-black hover:text-primary font-medium transition-colors">About TGN</a>
          <a href="#initiatives" className="nav-link text-black hover:text-primary font-medium transition-colors">Initiatives</a>
          <a href="magazine" className="nav-link text-black hover:text-primary font-medium transition-colors">G.R.O.W. Magazine</a>
          <a href="#conference" className="nav-link text-black hover:text-primary font-medium transition-colors">Conference</a>
          <a href="#contact" className="nav-cta ml-4 bg-secondary text-white font-semibold rounded-full px-5 py-2 shadow hover:bg-primary hover:text-black transition-colors">Get in touch</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center space-y-1"
          >
            <span className="block w-6 h-0.5 bg-primary" />
            <span className="block w-6 h-0.5 bg-primary" />
            <span className="block w-6 h-0.5 bg-primary" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 flex flex-col bg-white rounded-md py-4 shadow-lg">
          {['Projects', 'Careers', 'About', 'Contact', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-primary font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#get-in-touch"
            className="bg-secondary text-white text-center font-semibold rounded-full px-5 py-2 shadow hover:bg-primary hover:text-black transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
