"use client";

import { useEffect, useState } from "react";

type ToastType = "info" | "success" | "error";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

export function ToastContainer() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    let counter = 0;
    function onToast(e: Event) {
      // type the event as CustomEvent with a known detail shape
      const ce = e as CustomEvent<{ message?: string; type?: ToastType; duration?: number }>;
      const detail = ce?.detail || {};
      const item: ToastItem = { id: ++counter, message: detail.message || "", type: detail.type || "info" };
      setItems((s) => [...s, item]);
      setTimeout(() => {
        setItems((s) => s.filter((x) => x.id !== item.id));
      }, detail.duration || 4000);
    }

    window.addEventListener("toast", onToast as EventListener);
    return () => window.removeEventListener("toast", onToast as EventListener);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      {items.map((it) => (
        <div
          key={it.id}
          className={`px-4 py-2 rounded-lg shadow-md text-sm max-w-xs w-auto ${
            it.type === "success" ? "bg-emerald-50 text-emerald-800" : it.type === "error" ? "bg-red-50 text-red-800" : "bg-gray-50 text-gray-800"
          }`}
        >
          {it.message}
        </div>
      ))}
    </div>
  );
}

export function toast(message: string, type: ToastType = "info", duration = 4000) {
  window.dispatchEvent(new CustomEvent("toast", { detail: { message, type, duration } }));
}
