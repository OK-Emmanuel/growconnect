'use client';
import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

interface OfferCardProps {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  href?: string;
  image: string;
  reverse?: boolean;
  bgColor?: string;
}

export function OfferCard({
  title,
  description,
  highlights,
  cta,
  href,
  image,
  reverse = false,
  bgColor = 'bg-neutral-100',
}: OfferCardProps) {
  const cardRef = useRef(null);
  useScrollReveal(cardRef); // triggers animation when in view

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl shadow-lg flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ${bgColor} transition-all duration-500 p-6 md:p-12`}
    >
      {/* Left Text */}
      <div className="flex-1 flex flex-col gap-6 justify-center items-start font-sans">
        <h3 className="text-2xl sm:text-4xl font-bold text-primary">{title}</h3>
        <p className="text-lg text-gray-800">{description}</p>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {href ? (
          <a
            href={href}
            className="mt-4 inline-block bg-secondary text-white font-semibold rounded-full px-6 py-3 hover:bg-primary hover:text-black transition"
          >
            {cta}
          </a>
        ) : (
          <span className="mt-4 inline-block bg-secondary text-white font-semibold rounded-full px-6 py-3 cursor-default">
            {cta}
          </span>
        )}
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full h-full rounded-xl overflow-hidden max-h-[400px]">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export function SectionWhatWeOffer() {
  const offers = [
    {
      title: 'The G.R.O.W. Connect (TGC)',
      description: 'A FREE thriving community designed for creators and changemakers to connect, collaborate, and grow.',
      highlights: [
        'Monthly live clinics to refine your branding and strategy.',
        'Interactive sessions with experts to help you power up your growth.',
        'A recognition program to celebrate your wins.',
      ],
      cta: 'Join Our Community →',
      href: 'http://thegrowconference.co/tgc',
      image: '/what-we-see.jpg',
    },
   
    {
      title: 'TGN Talent',
      description: 'A 3-month mentorship program to help you master your craft, refine your vision, and achieve your career goals in marketing and strategy.',
      highlights: [
        'Expert guidance tailored to your personal or business journey.',
        'Accountability through structured mentorship phases.',
        'Success stories that inspire you to push further.',
      ],
      cta: 'Learn More About TGN Talent →',
      href: 'http://thegrownetwork.selar.com/talent',
      image: '/what-we-see.jpg',
    },
    {
      title: 'The G.R.O.W. Circle',
      description: 'Our mission is to foster an environment where knowledge, experience, accountability, and support converge to empower each member on their path to greater profitability, unwavering commitment, and unparalleled freedom.',
      highlights: [
        'Daily Check-ins and Implementation Support',
        '⁠Bi-weekly general and focus work sessions', 
        '⁠Accountability partners and support', 
        '⁠Quarterly 1:1 checkin strategy calls with Lucky Elohor', 
        '⁠Biannual In-person Gatherings'

      ],
      cta: 'Subscribe to the G.R.O.W Circle →',
      href: 'http://thegrownetwork.selar.com/circle',
      image: '/what-we-see.jpg',
    },
    
    {
      title: 'TGN Launchpad',
      description: 'From idea to execution, our Launchpad is your roadmap to building a scalable and successful business.',
      highlights: [
        'Step-by-step guidance for ideation, funding, and growth.',
        'Expert workshops and hands-on training.',
        'Showcase your achievements at our Annual G.R.O.W. Conference.',
      ],
      cta: 'COMING SOON! →',
      image: '/what-we-see.jpg',
    },
    {
      title: 'TGN Accelerator Alumni Network',
      description: 'A pool of founders, marketing and strategy professionals, and individuals building businesses or brands across Africa.',
      highlights: [
        'Exclusive access to resources, workshops, and events.',
        'Networking with like-minded leaders and innovators.',
        'Continued mentorship to help you scale your impact.',
      ],
      cta: 'COMING SOON! →',
      image: '/what-we-see.jpg',
    },
  ];

  const bgVariants = ['bg-neutral', 'bg-primary/40', 'bg-secondary/40', 'bg-neutral'];

  return (
    <section id="initiatives" className="w-full py-20 px-4 text-text">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-primary mb-16">What We Offer</h2>
        <div className="flex flex-col gap-16">
          {offers.map((offer, idx) => (
            <OfferCard
              key={offer.title}
              {...offer}
              reverse={idx % 2 === 1}
              bgColor={bgVariants[idx % bgVariants.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}