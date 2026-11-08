"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useDemoPlayback } from "./use-demo-playback";

function subscribeMobile(onChange: () => void) {
  const query = window.matchMedia("(max-width: 760px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const mobileSnapshot = () => window.matchMedia("(max-width: 760px)").matches;
const serverSnapshot = () => false;

export function TestimonialsRotator({ children }: { children: ReactNode[] }) {
  const host = useRef<HTMLDivElement>(null);
  const mobile = useSyncExternalStore(
    subscribeMobile,
    mobileSnapshot,
    serverSnapshot,
  );
  const { active } = useDemoPlayback(host);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const count = children.length;

  useEffect(() => {
    if (!mobile || !active || paused || interacting || count < 2) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % count),
      5000,
    );
    return () => window.clearInterval(timer);
  }, [mobile, active, paused, interacting, count]);

  return (
    <div
      ref={host}
      className="testimonials-rotator"
      data-motion-active={(active && !paused && !interacting) || undefined}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setInteracting(true);
      }}
      onPointerLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      <div className="testimonials-grid">
        {children.map((child, i) => (
          <div
            className="testimonial-slide"
            key={i}
            data-active={i === index || undefined}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className="testimonial-rotation-toggle sr-only focus:not-sr-only"
        type="button"
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "Resume testimonials" : "Pause testimonials"}
      </button>
    </div>
  );
}
