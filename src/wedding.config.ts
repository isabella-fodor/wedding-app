/**
 * Wedding Invitation Configuration
 * Customize this file to personalize your wedding invitation website
 */

export const weddingConfig = {
  // Couple information
  couple: {
    name1: "Isabella",
    name2: "Your Partner",
    names: "Isabella & Cristian",
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
    // Embed for Paradisul Verde, Vulcan (Hunedoara)
    mapEmbedUrl: "https://www.google.com/maps?q=Paradisul+Verde+Vulcan+Hunedoara&output=embed",
  },

  // Menu options for RSVP
  menuOptions: ["Normal", "Vegetarian", "Vegan", "Fără Gluten"],

  // Colors for the website
  colors: {
    primary: "#691216", // Burgundy deep
    gold: "#96800c", // Gold accent
    ivory: "#f5f3ef",
    ivy: "#2F4F4F",
    text: "#2c2c2c",
    // backward-compatible aliases (some components expect these keys)
    secondary: "#2F4F4F", // dark green / secondary color
    lightBg: "#f9f7f4",
    accent: "#f5f3ef",
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
