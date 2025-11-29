"use client";

import { weddingConfig } from "@/wedding.config";

export function InvitationSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: weddingConfig.colors.accent }}>
      <div className="max-w-3xl mx-auto">
        {/* Greeting */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          {weddingConfig.invitation.greeting}
        </h2>

        {/* Main invitation text */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <p
            className="text-lg leading-relaxed whitespace-pre-line"
            style={{ color: weddingConfig.colors.text }}
          >
            {weddingConfig.invitation.mainText}
          </p>
        </div>

        {/* Dress code */}
        <div className="text-center mb-8">
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: `'${weddingConfig.fonts.serif}', serif`,
              color: weddingConfig.colors.primary,
            }}
          >
            {weddingConfig.dressCode.title}
          </h3>
          <p className="text-lg" style={{ color: weddingConfig.colors.secondary }}>
            {weddingConfig.dressCode.description}
          </p>
        </div>

        {/* RSVP deadline */}
        <div
          className="border-l-4 pl-6 py-4"
          style={{ borderLeftColor: weddingConfig.colors.primary }}
        >
          <p className="text-base" style={{ color: weddingConfig.colors.text }}>
            {weddingConfig.details.rsvpText}
          </p>
        </div>
      </div>
    </section>
  );
}
