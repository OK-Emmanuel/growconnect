import React from 'react';

export function SectionWhatWeSee() {
  return (
    <section className="w-full py-16 px-4 bg-offwhite text-black flex flex-col items-center text-center relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-teal-100 rounded-br-3xl opacity-60 -z-10" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-amber-100 rounded-tl-3xl opacity-60 -z-10" />
      <div className="mb-6 flex flex-col items-center">
        {/* Icon placeholder */}
        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 shadow-md">
          <span className="text-white text-2xl font-bold">🌱</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">What We See At TGN!</h2>
      </div>
      <p className="max-w-2xl text-base sm:text-lg mb-4 font-sans">
        At TGN, we believe growth is a journey, not a destination. That's why we've built a dynamic platform where mentorship, community, and opportunity converge to help you achieve your biggest goals.
      </p>
      <p className="max-w-2xl text-base sm:text-lg mb-8 font-sans">
        Our vision? To empower 1,000,000 people by 2050 to create businesses, lead innovations, and inspire global change. Whether you're a budding entrepreneur, a creative mind, or a leader ready for your next chapter, we're here to help you grow.
      </p>
      <a href="#about" className="inline-block bg-amber-400 text-black font-semibold rounded-full px-6 py-3 transition-colors hover:bg-teal-600 hover:text-white shadow-lg">Learn More About TGN →</a>
    </section>
  );
} 