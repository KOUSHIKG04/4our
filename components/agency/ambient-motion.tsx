"use client";

import {
  createContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export const AmbientMotionActive = createContext(false);

type AmbientMotionProps = { children: ReactNode; className: string };

// Observe the stationary track, not the moving sprite, so leaving the frame
// does not pause the car permanently halfway through its loop.
export function AmbientMotion({ children, className }: AmbientMotionProps) {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () =>
      setActive(visible && !document.hidden && !preference.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      preference.removeEventListener("change", update);
    };
  }, []);

  return (
    <div
      ref={host}
      className={className}
      aria-hidden="true"
      style={
        {
          "--ambient-play-state": active ? "running" : "paused",
        } as CSSProperties
      }
    >
      <AmbientMotionActive.Provider value={active}>{children}</AmbientMotionActive.Provider>
    </div>
  );
}
