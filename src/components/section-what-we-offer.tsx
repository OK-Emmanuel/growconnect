import React from 'react';

interface OfferCardProps {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  href?: string;
  image: string;
  reverse?: boolean;
}

function OfferCard({ title, description, highlights, cta, href, image, reverse }: OfferCardProps) {
  return (
    <div
      className={`bg-neutral shadow-lg flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} p-4 md:p-12 my-12 rounded-xl overflow-hidden`}
      style={{ minHeight: '80vh' }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-start">
        <h3 className="text-4xl font-semibold text-primary mb-6">{title}</h3>
        <p className="text-lg md:text-xl text-text mb-4">{description}</p>
        <ul className="list-disc list-inside text-lg text-text mb-6">
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        {href ? (
          <a
            href={href}
            className="inline-block bg-secondary text-background font-semibold rounded-full px-8 py-4 mt-6 transition-colors hover:bg-primary text-lg"
          >
            {cta}
          </a>
        ) : (
          <span className="inline-block bg-secondary text-background font-semibold rounded-full px-8 py-4 mt-6 cursor-default text-lg">
            {cta}
          </span>
        )}
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center bg-background min-h-[320px] md:min-h-0 pr-10 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          style={{ minHeight: '100%', minWidth: '100%' }}
          loading="lazy"
        />
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
        'A recognition program to celebrate your wins.'
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
        'Success stories that inspire you to push further.'
      ],
      cta: 'Learn More About TGN Talent →',
      href: 'http://thegrownetwork.selar.com/talent',
      image: '/what-we-see.jpg',
    },
    {
      title: 'TGN Launchpad',
      description: 'From idea to execution, our Launchpad is your roadmap to building a scalable and successful business.',
      highlights: [
        'Step-by-step guidance for ideation, funding, and growth.',
        'Expert workshops and hands-on training.',
        'Showcase your achievements at our Annual G.R.O.W. Conference.'
      ],
      cta: 'Start Your Business Journey →',
      image: '/what-we-see.jpg',
    },
    {
      title: 'TGN Accelerator Alumni Network',
      description: 'A lifelong network for graduates of our programs, giving you access to ongoing support, exclusive perks, and collaboration opportunities.',
      highlights: [
        'Exclusive access to resources, workshops, and events.',
        'Networking with like-minded leaders and innovators.',
        'Continued mentorship to help you scale your impact.'
      ],
      cta: 'Unlock Alumni Perks →',
      image: '/what-we-see.jpg',
    },
  ];

  return (
    <section className="w-full bg-background text-text py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 font-sans text-center text-primary">What We Offer</h2>
        <div className="flex flex-col gap-16">
          {offers.map((offer, idx) => (
            <OfferCard key={offer.title} {...offer} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
} 