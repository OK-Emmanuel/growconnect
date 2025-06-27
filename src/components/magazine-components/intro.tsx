'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'; // assumes you created it

export function Intro() {
    const sectionRef = useRef(null);

    useScrollReveal('.see-img, .see-heading, .see-paragraph, .see-cta');

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full bg-white px-4 pb-20 md:py-28 flex items-center justify-center"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-20">
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col items-start text-left font-sans max-w-xl">
                    <div className="flex items-center mb-4">
                        <span className="inline-block w-12 h-1 bg-secondary rounded-full mr-4" />
                        <h2 className="see-heading text-3xl sm:text-4xl font-bold text-primary">
                            The G.R.O.W Magazine
                        </h2>
                    </div>
                    <p className="see-paragraph text-base sm:text-lg mb-4 text-black">
  Welcome to &ldquo;What Am I Building&rdquo; &ndash; the compass for entrepreneurs navigating the exhilarating chaos of creation. This isn&rsquo;t just another business publication; it&rsquo;s a mirror held up to the builder&rsquo;s soul, a space where we confront the fundamental question that keeps founders awake at 3 AM yet fuels their mornings.
</p>
<p className="see-paragraph text-base sm:text-lg mb-8 text-black">
  Between these pages, you&rsquo;ll find not answers, but better questions &ndash; the kind that transform garage-daydreams into viable ventures, side-hustles into institutions, and founders into architects of the future. Whether you&rsquo;re laying your first brick or reconstructing your entire blueprint, this edition meets you where every true builder ultimately resides: in the messy, magnificent space between vision and reality
</p>
                    <a
                        href="#about"
                        className="see-cta inline-block border-2 border-secondary text-primary font-semibold rounded-full px-6 py-3 transition-colors hover:bg-secondary hover:text-white"
                    >
                        Read Full Magazine →
                    </a>
                </div>

                {/* Left: Image */}
                <div className="see-img flex-1 flex justify-center items-center">
                    <div className="shadow-xl overflow-hidden w-120">
                        <img
                            src="./magazine-cover.jpg"
                            alt="The GROW Magazine"
                            className="object-cover w-full transform rotate-1 hover:rotate-0 transition duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
