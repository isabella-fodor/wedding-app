"use client";

import { useRef, useEffect } from "react";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  speed?: number; // 0..1, lower = slower movement
}

export function ParallaxImage({ src, alt = "", className = "", speed = 0.2 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const node = el as HTMLDivElement;

    let raf = 0;

    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const progress = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
        const translateY = progress * 20 * speed;
        node.style.transform = `translateY(${translateY}px)`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-visible w-full h-full ${className}`} aria-hidden>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}
