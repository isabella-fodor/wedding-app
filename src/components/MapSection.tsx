"use client";

import { weddingConfig } from "@/wedding.config";

export function MapSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: weddingConfig.colors.accent }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          Cum ajungi la nuntă
        </h2>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Map Embed */}
          <div className="w-full h-96 md:h-[500px]">
            <iframe
              src={weddingConfig.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația nunții"
            ></iframe>
          </div>

          {/* Venue Details */}
          <div className="p-8">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: `'${weddingConfig.fonts.serif}', serif`,
                color: weddingConfig.colors.secondary,
              }}
            >
              {weddingConfig.venue.name}
            </h3>
            <p className="text-lg mb-4" style={{ color: weddingConfig.colors.text }}>
              📍 {weddingConfig.venue.address}
            </p>

            {/* Directions Links */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={`https://www.google.com/maps/search/${weddingConfig.venue.latitude},${weddingConfig.venue.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
                style={{
                  backgroundColor: weddingConfig.colors.primary,
                  color: weddingConfig.colors.secondary,
                }}
              >
                Google Maps
              </a>
              <a
                href={`https://maps.apple.com/?q=${weddingConfig.venue.latitude},${weddingConfig.venue.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md border-2"
                style={{
                  borderColor: weddingConfig.colors.primary,
                  color: weddingConfig.colors.primary,
                }}
              >
                Apple Maps
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Accommodation tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: weddingConfig.colors.lightBg }}
          >
            <h4
              className="text-xl font-bold mb-3"
              style={{ color: weddingConfig.colors.primary }}
            >
              🏨 Cazare
            </h4>
            <p style={{ color: weddingConfig.colors.text }}>
              Vă recomandăm să vă găsiți o cazare cu anticipație. Contactați-ne dacă aveți nevoie de recomandări.
            </p>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: weddingConfig.colors.lightBg }}
          >
            <h4
              className="text-xl font-bold mb-3"
              style={{ color: weddingConfig.colors.primary }}
            >
              🚗 Transport
            </h4>
            <p style={{ color: weddingConfig.colors.text }}>
              Sunt disponibile locuri de parcare la locație. Dacă aveți probleme, vă rugăm să ne contactați.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
