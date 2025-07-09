'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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

  // Animate mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.display = 'none';
          }
        },
      });
    }

    if (mobileMenuRef.current && isOpen) {
      mobileMenuRef.current.style.display = 'flex';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About TGN', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'G.R.O.W. Magazine', href: 'magazine' },
    { name: 'G.R.O.W. Conference', href: '#conference' },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full bg-white/80 backdrop-blur border-b border-amber-100 px-6 md:px-10 py-4 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="nav-logo flex items-center gap-2">
          <img src="./logo-colored.png" className="w-20 h-auto" alt="" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-black hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta ml-4 bg-secondary text-white font-semibold rounded-full px-5 py-2 shadow hover:bg-primary hover:text-black transition-colors"
          >
            Get in touch
          </a>
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
      <div
        ref={mobileMenuRef}
        className="md:hidden mt-4 px-4 space-y-4 flex-col bg-white rounded-md py-4 shadow-lg hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-black hover:text-primary font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-secondary text-white text-center font-semibold rounded-full px-5 py-2 shadow hover:bg-primary hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
