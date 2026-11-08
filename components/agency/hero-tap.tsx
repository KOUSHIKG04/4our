"use client";

import { useEffect, useRef } from "react";

export function HeroTap() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = layer.current;
    const hero = overlay?.parentElement;
    if (!overlay || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ripple = (event: MouseEvent) => {
      if (event.button !== 0 || event.detail === 0 || reducedMotion.matches) return;

      const bounds = overlay.getBoundingClientRect();
      const ring = document.createElement("span");
      ring.className = "four-hero-tap-ring";
      ring.style.left = `${event.clientX - bounds.left}px`;
      ring.style.top = `${event.clientY - bounds.top}px`;
      ring.addEventListener("animationend", () => ring.remove(), { once: true });
      overlay.appendChild(ring);
    };

    hero.addEventListener("click", ripple);
    return () => {
      hero.removeEventListener("click", ripple);
      overlay.replaceChildren();
    };
  }, []);

  return <div ref={layer} className="four-hero-tap-layer" aria-hidden="true" />;
}
