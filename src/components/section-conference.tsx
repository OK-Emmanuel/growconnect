import React from 'react';

export function SectionConference() {
  return (
    <section className="w-full py-12 px-4 bg-primary/10 text-text flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Experience the G.R.O.W. Conference</h2>
      <p className="max-w-2xl text-base sm:text-lg mb-6 font-sans">
        Imagine an event where your ideas take center stage, where you're surrounded by like-minded visionaries, and where growth becomes inevitable.
      </p>
      <ul className="max-w-2xl text-left mx-auto mb-6 text-base font-sans list-disc list-inside">
        <li>Inspiring workshops with industry leaders.</li>
        <li>Powerful panel discussions on entrepreneurship, leadership, and innovation.</li>
        <li>Recognition ceremonies to celebrate achievements within our community.</li>
      </ul>
      <div className="mb-4 text-lg font-semibold">🗓️ Mark Your Calendar: Be part of the movement at the next G.R.O.W. Conference!</div>
      <a href="#conference" className="inline-block bg-secondary text-background font-semibold rounded-full px-6 py-3 transition-colors hover:bg-primary">Reserve Your Seat →</a>
    </section>
  );
} 