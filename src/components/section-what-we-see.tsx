'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'; // assumes you created it

export function SectionWhatWeSee() {
  const sectionRef = useRef(null);

  useScrollReveal('.see-img, .see-heading, .see-paragraph, .see-cta');

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-white px-4 pt-12 pb-20 md:py-28 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Image */}
        <div className="see-img flex-1 flex justify-center items-center">
          <div className="rounded-2xl shadow-xl overflow-hidden w-full">
            <img
              src="/what-we-see.jpg"
              alt="What We See at TGN"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left font-sans max-w-xl">
          <div className="flex items-center mb-4">
            <span className="inline-block w-12 h-1 bg-secondary rounded-full mr-4" />
            <h2 className="see-heading text-3xl sm:text-4xl font-bold text-primary">
              What We See At TGN!
            </h2>
          </div>
          <p className="see-paragraph text-base sm:text-lg mb-4 text-black">
            At TGN, we believe growth is a journey, not a destination. That&apos;s why we&apos;ve built a dynamic platform where mentorship, community, and opportunity converge to help you achieve your biggest goals.
          </p>
          <p className="see-paragraph text-base sm:text-lg mb-8 text-black">
            Our vision? To empower 1,000,000 people by 2050 to create businesses, lead innovations, and inspire global change. Whether you&apos;re a budding entrepreneur, a creative mind, or a leader ready for your next chapter, we&apos;re here to help you grow.
          </p>
          <a
            href="#about"
            className="see-cta inline-block border-2 border-secondary text-primary font-semibold rounded-full px-6 py-3 transition-colors hover:bg-secondary hover:text-white"
          >
            Learn More About TGN →
          </a>
        </div>
      </div>
    </section>
  );
}
