"use client";

import { weddingConfig } from "@/wedding.config";

export function MapSection() {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-5xl mx-auto container-wide">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-12 text-burgundy">Cum ajungi la nuntă</h2>

        <div className="glass rounded-2xl overflow-hidden shadow-soft-lg animate-fade-in">
          <div className="w-full h-96 md:h-[500px]">
            <iframe
              src={weddingConfig.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația nunții"
            ></iframe>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-playfair mb-2 text-burgundy">{weddingConfig.venue.name}</h3>
            <p className="text-lg mb-4 text-ivy">📍 {weddingConfig.venue.address}</p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={`https://www.google.com/maps/search/${weddingConfig.venue.latitude},${weddingConfig.venue.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold hover-gold"
              >
                Google Maps
              </a>
              <a
                href={`https://maps.apple.com/?q=${weddingConfig.venue.latitude},${weddingConfig.venue.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold hover-gold"
              >
                Apple Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg glass">
            <h4 className="text-xl font-playfair mb-3 text-burgundy">🏨 Cazare</h4>
            <p className="text-ivy">Vă recomandăm să vă găsiți o cazare cu anticipație. Contactați-ne dacă aveți nevoie de recomandări.</p>
          </div>
          <div className="p-6 rounded-lg glass">
            <h4 className="text-xl font-playfair mb-3 text-burgundy">🚗 Transport</h4>
            <p className="text-ivy">Sunt disponibile locuri de parcare la locație. Dacă aveți probleme, vă rugăm să ne contactați.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
