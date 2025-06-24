import React from 'react';

export function SectionWhatWeSee() {
  return (
    <section className="w-full h-screen bg-white py-16 px-4 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <div className="rounded-2xl shadow-xl  flex items-center justify-center overflow-hidden">
            {/* Replace src with actual image when available */}
            <img src="/what-we-see.jpg" alt="What We See at TGN" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left font-sans">
          <div className="flex items-center mb-4">
            <span className="inline-block w-12 h-1 bg-secondary rounded-full mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primaryfont-sans">What We See At TGN!</h2>
          </div>
          <p className="text-base sm:text-lg mb-4 text-black font-sans">
            At TGN, we believe growth is a journey, not a destination. That's why we've built a dynamic platform where mentorship, community, and opportunity converge to help you achieve your biggest goals.
          </p>
          <p className="text-base sm:text-lg mb-8 text-black font-sans">
            Our vision? To empower 1,000,000 people by 2050 to create businesses, lead innovations, and inspire global change. Whether you're a budding entrepreneur, a creative mind, or a leader ready for your next chapter, we're here to help you grow.
          </p>
          <a href="#about" className="inline-block border-2 border-secondary text-primaryfont-semibold rounded-full px-6 py-3 transition-colors hover:bg-secondary hover:text-white font-sans">Learn More About TGN →</a>
        </div>
      </div>
    </section>
  );
} 