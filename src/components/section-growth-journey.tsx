'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

export function SectionGrowthJourney() {
  const sectionRef = useRef(null);

  useScrollReveal('.growth-heading');
  useScrollReveal('.growth-paragraph');
  useScrollReveal('.growth-cta');

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-10 pt-20 pb-24 px-4 flex flex-col items-center"
    >
      <div className="w-full max-w-7xl mx-auto relative z-20">
        <div className="bg-secondary rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-10 md:py-14">
          {/* Text */}
          <div className="text-left flex-1">
            <h2 className="growth-heading text-2xl md:text-4xl font-bold text-white mb-3 font-sans">
              Start Your Growth Journey Today
            </h2>
            <p className="growth-paragraph text-base md:text-lg text-white/90 font-sans">
              Whether you are starting small or aiming big, TGN is here to support your growth — every step of the way.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="#get-started"
              className="growth-cta inline-block bg-primary text-white font-semibold rounded-full px-6 py-4 text-base md:text-lg transition-colors hover:bg-black font-sans shadow-md"
            >
              Talk with an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
