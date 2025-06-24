import React from 'react';

const stats = [
  {
    number: 1,
    // percent: '91%',
    title: 'Impactful Mentorship:',
    desc: 'Tailored support for your unique journey.',
    color: 'bg-teal-500',
  },
  {
    number: 2,
    // percent: '89%',
    title: 'Thriving Community:',
    desc: 'A network of creators and entrepreneurs, marketing professionals who challenge and uplift one another.',
    color: 'bg-teal-500',
  },
  {
    number: 3,
    // percent: '83%',
    title: 'Proven Success:',
    desc: 'Our programs drive real results, turning potential into achievement.',
    color: 'bg-teal-500',
  },
];

export function SectionWhyTGN() {
  return (
    <section className="w-full h-screen py-0 px-0">
      <div className="container mx-auto flex flex-col md:flex-row min-h-[60vh]">
        {/* Left: Heading & Text */}
        <div className="flex-1 flex flex-col justify-center bg-primary px-8 py-16 md:py-24 md:px-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-white leading-tight">Why Choose TGN?</h2>
          <p className="text-lg md:text-xl mb-8 font-sans text-white/90">We don’t just talk about growth, we help you live it because we believe that WHATSOEVER YOU NURTURE, YOU BECOME. 
          </p>
        </div>
        {/* Right: Stats */}
        <div className="flex-1 flex flex-col justify-center gap-10 py-16 md:py-24 px-8 md:px-16 bg-background">
          {stats.map((stat, idx) => (
            <div key={stat.number} className="flex items-center gap-8 mb-4">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-lg ring-4 ring-white ${stat.color}`}>{stat.number}</div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">{stat.title} <span className="font-semibold">{stat.desc}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 