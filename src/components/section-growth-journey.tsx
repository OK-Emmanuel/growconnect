import React from 'react';

export function SectionGrowthJourney() {
  return (
    <section className="w-full bg-transparent py-16 px-4 flex flex-col items-center">
      <div className="w-full h-16 md:h-24 rounded-b-3xl relative flex items-end justify-center">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
          <div className="bg-secondary rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-14 w-full">
            <div className="text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans text-white">Start Your Growth Journey Today</h2>
              <p className="text-black">Whether you’re starting small or aiming big, TGN is here to support <br /> your growth every step of the way.</p>
            </div>
            <a
              href="#get-started"
              className="mt-6 md:mt-0 bg-primary text-white font-semibold rounded-lg px-8 py-4 transition-colors hover:bg-gray-800 text-base font-sans shadow-md"
            >
              Talk with an expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 