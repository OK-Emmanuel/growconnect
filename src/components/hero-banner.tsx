import React from 'react';

export function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-teal-900/60 pointer-events-none" />
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-4 gap-8 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl font-sans">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white leading-tight font-sans">
            Nurture Your Growth. <br className="hidden sm:block" />Transform Your Future. <br className="hidden sm:block" />Lead the Way.
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-amber-100 font-medium font-sans">
            The G.R.O.W. Network (TGN) is where creators, entrepreneurs, and visionaries come to build legacies, unlock potential, and change the world.
          </p>
          <div className="flex gap-4">
            <a href="#about" className="bg-amber-400 text-teal-900 font-semibold rounded-full px-6 py-3 shadow-md hover:bg-amber-300 transition-colors font-sans">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
} 