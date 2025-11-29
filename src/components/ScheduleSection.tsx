"use client";

import { weddingConfig } from "@/wedding.config";

export function ScheduleSection() {
  return (
    <section className="site-section bg-ivory">
      <div className="container-wide-lg mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-8 text-burgundy">Program</h2>

        <div className="grid gap-6">
          {weddingConfig.schedule.map((event, index) => (
            <article key={index} className="glass p-6 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-start gap-4 md:gap-6 transition-transform hover:-translate-y-1 animate-fade-in">
              <div className="md:flex-shrink-0 w-full md:w-32 flex items-center md:justify-center">
                <div className="w-full md:w-24 h-20 md:h-20 rounded-2xl flex items-center justify-center bg-burgundy text-ivory">
                  <time className="text-sm font-semibold">{event.time}</time>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-playfair mb-1 text-burgundy">{event.title}</h3>
                <p className="text-base text-ivy">📍 {event.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
