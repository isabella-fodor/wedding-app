"use client";

import { weddingConfig } from "@/wedding.config";

export function ScheduleSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: weddingConfig.colors.lightBg }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: `'${weddingConfig.fonts.serif}', serif`,
            color: weddingConfig.colors.secondary,
          }}
        >
          Program
        </h2>

        <div className="space-y-6">
          {weddingConfig.schedule.map((event, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Time badge */}
              <div
                className="flex-shrink-0 w-24 h-24 rounded-lg flex items-center justify-center text-center"
                style={{ backgroundColor: weddingConfig.colors.primary }}
              >
                <p
                  className="font-bold text-sm"
                  style={{ color: weddingConfig.colors.secondary }}
                >
                  {event.time}
                </p>
              </div>

              {/* Event details */}
              <div className="flex-grow">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: `'${weddingConfig.fonts.serif}', serif`,
                    color: weddingConfig.colors.secondary,
                  }}
                >
                  {event.title}
                </h3>
                <p className="text-base" style={{ color: weddingConfig.colors.text }}>
                  📍 {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
