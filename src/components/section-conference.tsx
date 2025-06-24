'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

export function SectionConference() {
  const sectionRef = useRef(null);

  // Animate each key element with your updated hook
  useScrollReveal('.conference-heading, .conference-paragraph, .conference-list li, .conference-cta, .conference-img');

  return (
    <section id="conference" ref={sectionRef} className="w-full py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch min-h-[60vh] bg-neutral rounded-2xl shadow-lg overflow-hidden">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 py-16 md:py-24 md:px-12">
          <h2 className="conference-heading text-3xl md:text-5xl font-bold mb-6 text-black leading-tight font-sans">
            Experience the <span className="text-secondary">G.R.O.W. Conference</span>
          </h2>
          <p className="conference-paragraph text-base md:text-lg mb-6 text-black font-sans">
            Imagine an event where your ideas take center stage, where you are surrounded by like-minded visionaries, and where growth becomes inevitable.
          </p>
          <ul className="conference-list text-base md:text-lg mb-6 list-disc list-inside text-black font-sans pl-4">
            <li className="mb-2"><span className="font-semibold text-primary">Inspiring workshops</span> with industry leaders.</li>
            <li className="mb-2"><span className="font-semibold text-primary">Powerful panel discussions</span> on entrepreneurship, leadership, and innovation.</li>
            <li className="mb-2"><span className="font-semibold text-primary">Recognition ceremonies</span> to celebrate achievements within our community.</li>
          </ul>
          <div className="conference-cta text-lg md:text-xl font-semibold text-dark mb-6">
            Mark Your Calendar: Be part of the movement at the next G.R.O.W. Conference!
          </div>
          <a
            href="#conference"
            className="inline-block bg-secondary text-white font-semibold rounded-full px-8 py-4 transition-colors hover:bg-primary hover:text-white text-lg font-sans shadow-md"
          >
            Reserve Your Seat →
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-0">
          <img
            src="/what-we-see.jpg"
            alt="GROW Conference"
            className="conference-img object-cover w-full h-full max-h-[400px] md:max-h-[500px] md:w-auto md:h-full rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
