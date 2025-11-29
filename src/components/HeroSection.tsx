"use client";

import { weddingConfig } from "@/wedding.config";
import { ParallaxImage } from "./ParallaxImage";

export function HeroSection() {
  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById("rsvp-section");
    rsvpElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-16 px-6 animate-fade-in animate-delay-0">
      {/* animated background layer */}
      <div className="bg-particles" aria-hidden />

      {/* Floral left */}
      <div className="hidden md:block absolute left-6 top-12 w-40 h-56 floral-float z-10">
        <ParallaxImage src="/floral-left.svg" className="w-full h-full" speed={0.18} />
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
      <div className="hidden md:block absolute right-6 bottom-12 w-40 h-56 floral-float z-10 rotate-12">
        <ParallaxImage src="/floral-right.svg" className="w-full h-full" speed={0.22} />
      </div>
    </section>
  );
}
