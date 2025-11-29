"use client";

import { RSVPForm } from "./RSVPForm";
import { weddingConfig } from "@/wedding.config";

export function RSVPSection() {
  return (
    <section
      id="rsvp-section"
      className="py-16 px-4"
      style={{ backgroundColor: weddingConfig.colors.accent }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          Confirmă participarea
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Completează formularul de mai jos pentru a ne confirma că vin la nuntă.
        </p>
        <RSVPForm />
      </div>
    </section>
  );
}
