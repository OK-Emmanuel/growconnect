import React from 'react';

export function SectionConference() {
  return (
    <section className="w-full py-0 px-0 mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch min-h-[60vh]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center bg-white px-8 py-16 md:py-24 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-black leading-tight">
            Experience the <span className="text-secondary">G.R.O.W. Conference</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 font-sans text-black">
            Imagine an event where your ideas take center stage, where you're surrounded by like-minded visionaries, and where growth becomes inevitable.
          </p>
          <ul className="mb-8 text-lg font-sans list-disc list-inside text-black pl-4">
            <li className="mb-2"><span className="font-semibold text-primary">Inspiring workshops</span> with industry leaders.</li>
            <li className="mb-2"><span className="font-semibold text-primary">Powerful panel discussions</span> on entrepreneurship, leadership, and innovation.</li>
            <li className="mb-2"><span className="font-semibold text-primary">Recognition ceremonies</span> to celebrate achievements within our community.</li>
          </ul>
          <div className="mb-6 text-xl font-semibold text-dark">Mark Your Calendar: Be part of the movement at the next G.R.O.W. Conference!</div>
          <a href="#conference" className="inline-block bg-secondary text-white font-semibold rounded-full px-8 py-4 transition-colors hover:bg-primary hover:text-background text-lg font-sans shadow-md">Reserve Your Seat →</a>
        </div>
        {/* Right: Image/Visual */}
        <div className="flex-1 flex items-center justify-center min-h-[320px] md:min-h-0">
          {/* Placeholder image, replace with actual conference image if available */}
          <img
            src="/what-we-see.jpg"
            alt="GROW Conference"
            className="object-cover w-full h-full max-h-[500px] md:max-h-none md:w-auto md:h-full"
            style={{ maxWidth: '480px', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
} 