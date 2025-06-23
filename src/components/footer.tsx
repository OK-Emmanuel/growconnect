import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-background py-8 px-4 flex flex-col items-center text-center mt-8">
      <div className="mb-4">
        <div className="font-semibold text-lg mb-2">Let's Stay Connected</div>
        <a href="#subscribe" className="inline-block bg-secondary text-background font-semibold rounded-full px-6 py-2 transition-colors hover:bg-background hover:text-primary">Subscribe to Our Newsletter →</a>
      </div>
      <div className="mb-4">
        <div className="font-semibold text-lg mb-2">Follow Us</div>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:underline">The GROW Network</a>
          <a href="#" className="hover:underline">@thegrownetwork_</a>
          <a href="#" className="hover:underline">The GROW Network</a>
        </div>
      </div>
      <div className="text-base mt-4 font-sans">
        <div className="mb-1">The future belongs to those who nurture their growth.</div>
        <em>Whatsoever you nurture, you become.</em>
      </div>
    </footer>
  );
} 