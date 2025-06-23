import React from 'react';

export function SectionGrowthJourney() {
  return (
    <section className="w-full py-12 px-4 bg-primary/10 text-text flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Start Your Growth Journey Today</h2>
      <p className="max-w-2xl text-base sm:text-lg mb-6 font-sans">
        Whether you're starting small or aiming big, TGN is here to support your growth every step of the way.
      </p>
      <div className="mb-4 text-lg font-semibold">📈 It's time to stop dreaming and start building.</div>
      <a href="#get-started" className="inline-block bg-secondary text-background font-semibold rounded-full px-6 py-3 transition-colors hover:bg-primary">Get Started with TGN →</a>
    </section>
  );
} 