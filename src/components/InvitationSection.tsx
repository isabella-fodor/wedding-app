"use client";

import { weddingConfig } from "@/wedding.config";

export function InvitationSection() {
  return (
    <section className="site-section bg-ivory" aria-labelledby="invitation-heading">
      <div className="container-wide-lg mx-auto px-4">
        {/* Greeting */}
        <h2
          id="invitation-heading"
          className="text-3xl md:text-4xl font-playfair text-center mb-6 text-burgundy animate-fade-in"
        >
          {weddingConfig.invitation.greeting}
        </h2>

        {/* Main invitation text */}
        <div className="glass rounded-2xl p-8 shadow-soft-lg mb-8 animate-fade-in">
          <p className="text-base leading-relaxed text-ivy/90 whitespace-pre-line">
            {weddingConfig.invitation.mainText}
          </p>
        </div>

        {/* Dress code */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-playfair mb-2 text-burgundy">{weddingConfig.dressCode.title}</h3>
          <p className="text-lg text-ivy">{weddingConfig.dressCode.description}</p>
        </div>

        {/* RSVP deadline */}
        <div className="border-l-4 pl-6 py-4 border-burgundy/20">
          <p className="text-base text-ivy">{weddingConfig.details.rsvpText}</p>
        </div>
      </div>
    </section>
  );
}
