"use client";

import { weddingConfig } from "@/wedding.config";

export function Footer() {
  return (
    <footer
      className="py-12 px-4"
      style={{ backgroundColor: weddingConfig.colors.secondary }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white mb-2">
          {weddingConfig.couple.names}
        </p>
        <p className="text-gray-300 text-sm mb-6">
          {weddingConfig.wedding.date}
        </p>
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Wedding Invitation. All rights reserved.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-600">
          <a
            href="/admin"
            className="text-gray-400 hover:text-gray-200 text-xs transition-colors"
          >
            Admin Panel
          </a>
        </div>
      </div>
    </footer>
  );
}
