import React from 'react';

export function SectionWhyTGN() {
  return (
    <section className="w-full py-12 px-4 bg-background text-text flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Why TGN?</h2>
      <p className="max-w-2xl text-base sm:text-lg mb-6 font-sans">
        We don't just talk about growth, we help you live it because we believe that WHATSOEVER YOU NURTURE, YOU BECOME.
      </p>
      <ul className="max-w-2xl text-left mx-auto mb-6 text-base font-sans list-disc list-inside">
        <li><span className="font-semibold">Impactful Mentorship:</span> Tailored support for your unique journey.</li>
        <li><span className="font-semibold">Thriving Community:</span> A network of creators and entrepreneurs, marketing professionals who challenge and uplift one another.</li>
        <li><span className="font-semibold">Proven Success:</span> Our programs drive real results, turning potential into achievement.</li>
      </ul>
      <a href="http://thegrownetwork.selar.com" className="inline-block bg-secondary text-background font-semibold rounded-full px-6 py-3 transition-colors hover:bg-primary">Explore All Our Programs →</a>
    </section>
  );
} 