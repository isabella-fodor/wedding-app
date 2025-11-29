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
        <p className="text-ivory mb-2">
          {weddingConfig.couple.names}
        </p>
        <p className="text-ivory/80 text-sm mb-6">
          {weddingConfig.wedding.date}
        </p>
        <p className="text-ivory/60 text-xs">
          © {new Date().getFullYear()} Wedding Invitation. All rights reserved.
        </p>
        <div className="mt-6 pt-6 border-t border-ivory/20">
          <a
            href="/admin"
            className="text-ivory/60 hover:text-ivory text-xs transition-colors"
          >
            Admin Panel
          </a>
          <button
            onClick={togglePreview}
            className="ml-4 inline-block text-xs text-ivory/60 hover:text-ivory underline"
            aria-pressed={preview}
          >
            {preview ? "Disable animations preview" : "Preview animations"}
          </button>
        </div>
      </div>
    </footer>
  );
}
