"use client";

import { weddingConfig } from "@/wedding.config";
import { ParallaxImage } from "./ParallaxImage";

export function HeroSection() {
  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById("rsvp-section");
    rsvpElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center py-16 px-6 animate-fade-in animate-delay-0">
      {/* animated background layer */}
      <div className="absolute inset-0 bg-particles z-0" aria-hidden />

      {/* Floral left - inline SVG test */}
      <div className="absolute left-2 md:left-6 top-12 w-32 md:w-40 h-48 md:h-56 floral-float z-10 pointer-events-none" style={{ display: 'block' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 200" fill="none" className="w-full h-full">
          <path d="M10 180 C40 120, 20 80, 60 40" stroke="#2F4F4F" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="20" cy="150" r="6" fill="#691216" />
          <circle cx="40" cy="120" r="4" fill="#96800c" />
          <circle cx="35" cy="160" r="3" fill="#691216" />
          <circle cx="55" cy="90" r="5" fill="#96800c" />
        </svg>
      </div>

      <div className="relative z-20 container-wide-lg">
        <div className="mx-auto max-w-4xl glass glass-strong rounded-3xl p-12 shadow-soft-lg animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-playfair tracking-widest mb-2 text-burgundy leading-tight">
              {weddingConfig.couple.names}
            </h1>
            <p className="text-lg md:text-xl font-inter text-ivy/90 uppercase tracking-wide text-gold">
              {weddingConfig.wedding.date}
            </p>
          </div>

          <p className="mt-6 text-md md:text-lg text-ivy/80 font-inter leading-relaxed">
            {weddingConfig.invitation.greeting}
          </p>

          <div className="mt-8 flex justify-center">
            <button onClick={scrollToRsvp} className="btn-outline-gold hover-gold min-w-[220px]">
              Confirmă participarea
            </button>
          </div>
        </div>
      </div>

      {/* Floral right - inline SVG test */}
      <div className="absolute right-2 md:right-6 bottom-12 w-32 md:w-40 h-48 md:h-56 floral-float z-10 rotate-12 pointer-events-none" style={{ display: 'block' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 200" fill="none" className="w-full h-full">
          <path d="M110 180 C80 120, 100 80, 60 40" stroke="#2F4F4F" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="100" cy="150" r="6" fill="#691216" />
          <circle cx="80" cy="120" r="4" fill="#96800c" />
          <circle cx="85" cy="160" r="3" fill="#691216" />
          <circle cx="65" cy="90" r="5" fill="#96800c" />
        </svg>
      </div>
    </section>
  );
}
