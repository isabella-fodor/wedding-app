"use client";

import { weddingConfig } from "@/wedding.config";
import { useState } from "react";

export function Footer() {
  const [preview, setPreview] = useState(false);

  const togglePreview = () => {
    const body = document.body;
    if (preview) {
      body.classList.remove("preview-animations");
      setPreview(false);
    } else {
      body.classList.add("preview-animations");
      setPreview(true);
    }
  };

  return (
    <footer className="py-12 px-4 bg-secondary animate-fade-in animate-delay-450">
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
          <button
            onClick={togglePreview}
            className="ml-4 inline-block ml-4 text-xs text-gray-300 hover:text-white underline"
            aria-pressed={preview}
          >
            {preview ? "Disable animations preview" : "Preview animations"}
          </button>
        </div>
      </div>
    </footer>
  );
}
