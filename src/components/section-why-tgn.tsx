'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

const stats = [
  {
    number: 1,
    title: 'Impactful Mentorship:',
    desc: 'Tailored support for your unique journey.',
    color: 'bg-secondary',
  },
  {
    number: 2,
    title: 'Thriving Community:',
    desc: 'A network of creators, entrepreneurs, and marketing professionals who challenge and uplift one another.',
    color: 'bg-secondary',
  },
  {
    number: 3,
    title: 'Proven Success:',
    desc: 'Our programs drive real results, turning potential into achievement.',
    color: 'bg-secondary',
  },
];

export function SectionWhyTGN() {
  const sectionRef = useRef(null);

  // Apply scroll reveal animation
  useScrollReveal('.why-heading');
  useScrollReveal('.why-paragraph');
  useScrollReveal('.why-stat', { stagger: 0.2 });

  return (
    <section ref={sectionRef} className="w-full py-0 px-0 bg-white">
      <div className="flex flex-col md:flex-row min-h-[100vh]">
        {/* Left: Heading & Paragraph */}
        <div className="flex-1 bg-primary px-8 py-16 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="why-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-sans">
            Why Choose TGN?
          </h2>
          <p className="why-paragraph text-lg md:text-xl text-white/90 font-sans max-w-xl">
            We don't just talk about growth, we help you live it—because we believe that <strong>WHATSOEVER YOU NURTURE, YOU BECOME.</strong>
          </p>
        </div>

        {/* Right: Numbered Stats */}
        <div className="flex-1 bg-background px-8 py-16 md:px-16 md:py-24 flex flex-col justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.number} className="why-stat flex items-start gap-6">
              <div
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full ${stat.color} text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-md ring-4 ring-white`}
              >
                {stat.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-snug mb-1">
                  {stat.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-sans">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
