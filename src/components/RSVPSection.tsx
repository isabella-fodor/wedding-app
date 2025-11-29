"use client";

import { RSVPForm } from "./RSVPForm";
import { weddingConfig } from "@/wedding.config";

export function RSVPSection() {
  return (
    <section id="rsvp-section" className="py-16 px-4 bg-ivory">
      <div className="max-w-3xl mx-auto container-wide">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-4 text-burgundy animate-fade-in">
          Confirmă participarea
        </h2>
        <p className="text-center text-ivy mb-8">
          Completează formularul de mai jos pentru a ne confirma că vin la nuntă.
        </p>

        <div className="mx-auto max-w-2xl glass rounded-2xl p-8 animate-fade-in">
          <RSVPForm />
        </div>
      </div>
    </section>
  );
}
