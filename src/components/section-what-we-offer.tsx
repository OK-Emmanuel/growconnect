import React from 'react';

function OfferCard({ title, description, highlights, cta, href }: {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  href?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border border-secondary/20">
      <h3 className="text-xl font-bold text-primary mb-1 font-sans">{title}</h3>
      <p className="text-base text-text mb-2 font-sans">{description}</p>
      <ul className="list-disc list-inside text-sm text-text mb-2 font-sans">
        {highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      {href ? (
        <a href={href} className="inline-block bg-secondary text-background font-semibold rounded-full px-4 py-2 mt-2 transition-colors hover:bg-primary">{cta}</a>
      ) : (
        <span className="inline-block bg-secondary text-background font-semibold rounded-full px-4 py-2 mt-2 cursor-default">{cta}</span>
      )}
    </div>
  );
}

export function SectionWhatWeOffer() {
  return (
    <section className="w-full py-12 px-4 bg-background text-text flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-sans">What We Offer</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        <OfferCard
          title="The G.R.O.W. Connect (TGC)"
          description="A FREE thriving community designed for creators and changemakers to connect, collaborate, and grow."
          highlights={[
            'Monthly live clinics to refine your branding and strategy.',
            'Interactive sessions with experts to help you power up your growth.',
            'A recognition program to celebrate your wins.'
          ]}
          cta="Join Our Community →"
          href="http://thegrowconference.co/tgc"
        />
        <OfferCard
          title="TGN Talent"
          description="A 3-month mentorship program to help you master your craft, refine your vision, and achieve your career goals in marketing and strategy."
          highlights={[
            'Expert guidance tailored to your personal or business journey.',
            'Accountability through structured mentorship phases.',
            'Success stories that inspire you to push further.'
          ]}
          cta="Learn More About TGN Talent →"
          href="http://thegrownetwork.selar.com/talent"
        />
        <OfferCard
          title="TGN Launchpad"
          description="From idea to execution, our Launchpad is your roadmap to building a scalable and successful business."
          highlights={[
            'Step-by-step guidance for ideation, funding, and growth.',
            'Expert workshops and hands-on training.',
            'Showcase your achievements at our Annual G.R.O.W. Conference.'
          ]}
          cta="Start Your Business Journey →"
        />
        <OfferCard
          title="TGN Accelerator Alumni Network"
          description="A lifelong network for graduates of our programs, giving you access to ongoing support, exclusive perks, and collaboration opportunities."
          highlights={[
            'Exclusive access to resources, workshops, and events.',
            'Networking with like-minded leaders and innovators.',
            'Continued mentorship to help you scale your impact.'
          ]}
          cta="Unlock Alumni Perks →"
        />
      </div>
    </section>
  );
} 