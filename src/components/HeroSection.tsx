"use client";

import { weddingConfig } from "@/wedding.config";

export function HeroSection() {
  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById("rsvp-section");
    rsvpElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center py-12 px-4"
      style={{
        background: `linear-gradient(135deg, ${weddingConfig.colors.lightBg} 0%, ${weddingConfig.colors.accent} 100%)`,
      }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-2" style={{ borderColor: weddingConfig.colors.primary }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-2" style={{ borderColor: weddingConfig.colors.secondary }}></div>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          {weddingConfig.couple.names}
        </h1>

        {/* Date */}
        <p className="text-2xl md:text-3xl mb-8" style={{ color: weddingConfig.colors.primary }}>
          {weddingConfig.wedding.date}
        </p>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl mb-12 font-light"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          {weddingConfig.invitation.subtitle}
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToRsvp}
          className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          style={{
            backgroundColor: weddingConfig.colors.primary,
            color: weddingConfig.colors.secondary,
          }}
        >
          ↓ Confirmă participarea ↓
        </button>
      </div>
    </div>
  );
}
