import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-background pt-16 pb-8 px-4 flex flex-col items-center text-center mt-8">
      {/* CTA Card */}
      <div className="w-full max-w-xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans text-white">Let's connect!</h2>
        <p className="mb-6 text-white/80 font-sans text-base">Connect to the GROW Network for updates, insights, and exclusive opportunities.</p>
        <form className="flex w-full max-w-md mx-auto rounded-full overflow-hidden bg-white shadow-md">
          <input
            type="email"
            placeholder="type your e-mail here..."
            className="flex-1 px-6 py-3 text-black outline-none font-sans text-base bg-white"
          />
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary/20 text-white font-bold px-8 py-3 transition-colors text-base font-sans"
          >
            Join
          </button>
        </form>
      </div>
      {/* Social Links */}
      <div className="flex gap-6 justify-center mb-8">
        <a href="#" className="text-secondary hover:text-white transition-colors text-2xl" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl" aria-label="Google"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="text-white/70 hover:text-white transition-colors text-2xl" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      {/* Footer Bottom */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-white/60 mt-8 gap-2">
        <div>Document © {new Date().getFullYear()} All rights reserved.</div>
        <div>Powered by <span className="text-secondary font-bold">TGN</span></div>
      </div>
    </footer>
  );
} 