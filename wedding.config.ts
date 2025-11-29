/**
 * Wedding Invitation Configuration
 * Customize this file to personalize your wedding invitation website
 */

export const weddingConfig = {
  // Couple information
  couple: {
    name1: "Isabella",
    name2: "Your Partner",
    names: "Isabella & Your Partner",
  },

  // Wedding date and time
  wedding: {
    date: "12 iulie 2026",
    dateISO: "2026-07-12",
  },

  // Sections with ceremony and reception times
  schedule: [
    {
      title: "Cununie Civilă",
      time: "11:00 AM",
      location: "Primăria, Str. Principale 42, București",
    },
    {
      title: "Cununie Religioasă",
      time: "12:30 PM",
      location: "Biserica Sfântul Ioan, Str. Bisericii 10, București",
    },
    {
      title: "Recepție",
      time: "4:00 PM - 12:00 AM",
      location: "Restaurant Elegance, Aleea Viitorului 5, București",
    },
  ],

  // Invitation text
  invitation: {
    greeting: "Suntem emoționați să vă invităm să ne fiți alături",
    subtitle: "la cea mai importantă zi din viețile noastre",
    mainText: `Cu plăcere vă invităm să participați la ceremonia noastră de nuntă și la petrecerea care va urma. 
    Prezența voastră va face din această zi una perfectă și plin de bucurie.
    Așteptăm cu nerăbdare să ne vedem și să sărbătorim împreună!`,
  },

  // Dress code
  dressCode: {
    title: "Dress Code",
    description: "Elegant - ținută de gală",
  },

  // Additional details
  details: {
    rsvpDeadline: "1 iunie 2026",
    rsvpText: "Vă rugăm să confirmați participarea până la data de 1 iunie 2026",
    currency: "RON",
  },

  // Venue location (for Google Maps embed)
  venue: {
    name: "Restaurant Elegance",
    address: "Aleea Viitorului 5, București",
    latitude: 44.4268,
    longitude: 26.1025,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1234567890123!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sro!2sro!4v1234567890",
  },

  // Menu options for RSVP
  menuOptions: ["Normal", "Vegetarian", "Vegan", "Fără Gluten"],

  // Colors for the website
  colors: {
    primary: "#d4af37", // Gold
    secondary: "#1a3a3a", // Dark green
    accent: "#f5f5f0", // Cream
    text: "#2c2c2c",
    lightBg: "#f9f7f4",
  },

  // Fonts (using Google Fonts)
  fonts: {
    serif: "Playfair Display", // For titles
    sans: "Inter", // For body text
  },

  // Admin settings
  admin: {
    adminPassword: "admin123", // CHANGE THIS! Use environment variable instead
  },
};
