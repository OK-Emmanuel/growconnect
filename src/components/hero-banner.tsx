'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative w-full min-h-screen flex items-center justify-center py-12 sm:py-20 overflow-hidden bg-cover bg-center bg-no-repeat bg-animate"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-teal-900/60 pointer-events-none" />
      
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-4 gap-8 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl font-sans">
          <h1 className="hero-text text-3xl sm:text-5xl font-bold mb-4 text-white leading-tight font-sans">
            Nurture Your Growth. <br className="hidden sm:block text-primary" />
            Transform Your Future. <br className="hidden sm:block" />
            Lead the Way.
          </h1>
          <p className="hero-text text-lg sm:text-xl mb-8 text-amber-100 font-medium font-sans">
            The G.R.O.W. Network (TGN) is where creators, entrepreneurs, and visionaries come to build legacies, unlock potential, and change the world.
          </p>
          <div className="hero-text flex gap-4">
            <a href="#about" className="bg-secondary text-white font-semibold rounded-full px-6 py-3 shadow-md transition-colors font-sans">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
