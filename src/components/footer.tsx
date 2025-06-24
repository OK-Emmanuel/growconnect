'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      [
        '.footer-heading',
        '.footer-paragraph',
        '.footer-form',
        '.footer-social a',
        '.footer-bottom',
      ],
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      }
    );
  }, { scope: footerRef });

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="w-full bg-primary text-background pt-16 pb-8 px-4 flex flex-col items-center text-center mt-20"
    >
      {/* CTA */}
      <div className="w-full max-w-2xl mx-auto mb-12">
        <h2 className="footer-heading text-2xl md:text-3xl font-bold mb-3 text-white font-sans">
          Let&apos;s connect!
        </h2>
        <p className="footer-paragraph mb-6 text-white/80 font-sans text-base">
          Connect to the GROW Network for updates, insights, and exclusive opportunities.
        </p>
        <form className="footer-form flex w-full max-w-md mx-auto rounded-full overflow-hidden bg-white shadow-md">
          <input
            type="email"
            placeholder="Type your email..."
            className="flex-1 px-5 py-3 text-black outline-none font-sans text-sm sm:text-base bg-white"
          />
          <button
            type="submit"
            className="bg-secondary hover:bg-primary transition-colors text-white font-semibold px-6 py-3 text-sm sm:text-base font-sans"
          >
            Join
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="footer-social flex gap-5 justify-center mb-10">
        <a href="#" className="text-white/70 hover:text-white transition-colors text-xl" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-xl" aria-label="Google"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-xl" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-xl" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-xl" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-2 px-4">
        <div>© {new Date().getFullYear()} All rights reserved. Powered by <span className="text-white font-semibold">TGN</span></div>
        <div className="text-white/50">
          Developed by{' '}
          <a
            href="https://www.techifice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Techifice
          </a>
        </div>
      </div>
    </footer>
  );
}
