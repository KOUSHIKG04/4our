"use client";

import { useRef, useState, type CSSProperties, type FocusEvent, type PointerEvent } from "react";
import { brandGlyphs } from "@/lib/brandmark";

// Smooth contours for the oversized footer treatment.
const footerGlyphPaths = {
  "4": "M39 4H103L83 272H125V4H186C195 4 202 11 202 20V409H125V347H53C19 347 2 330 4 297L24 19C25 10 31 4 39 4Z",
  o: "M35 4H186C203 4 217 18 217 35V378C217 395 203 409 186 409H35C18 409 4 395 4 378V35C4 18 18 4 35 4ZM100 134H121C125 134 129 137 129 142V271C129 275 125 279 121 279H100C96 279 92 275 92 271V142C92 137 96 134 100 134Z",
  u: "M19 4H62C79 4 92 18 92 35V271C92 275 95 279 100 279H120C125 279 128 275 128 271V35C128 18 142 4 159 4H201C209 4 216 11 216 19V378C216 395 202 409 185 409H35C18 409 4 395 4 378V19C4 11 11 4 19 4Z",
  r: "M19 4H194V77C194 86 187 93 178 93H92V394C92 402 85 409 77 409H19C11 409 4 402 4 394V19C4 11 11 4 19 4Z",
} as const;

export function FooterWordmark() {
  const pointerInside = useRef(false);
  const keyboardFocus = useRef(false);
  const [motion, setMotion] = useState({ active: false, angles: [5, -6, 4, -5] });

  function beginTilt() {
    const angles = brandGlyphs.map(() => (3 + Math.random() * 6) * (Math.random() > 0.5 ? 1 : -1));
    // Commit the targets and active state together, avoiding a second hover target mid-transition.
    setMotion((current) => current.active ? current : { active: true, angles });
  }
  function endTilt() { setMotion((current) => ({ ...current, active: false })); }
  function handlePointerEnter(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;
    pointerInside.current = true;
    beginTilt();
  }
  function handlePointerLeave() {
    pointerInside.current = false;
    if (!keyboardFocus.current) endTilt();
  }
  function handleFocus(event: FocusEvent<HTMLAnchorElement>) {
    if (!event.currentTarget.matches(":focus-visible")) return;
    keyboardFocus.current = true;
    beginTilt();
  }
  function handleBlur() {
    keyboardFocus.current = false;
    if (!pointerInside.current) endTilt();
  }

  return (
    <a href="#top" className="four-footer-monument" aria-label="4our, back to top" data-tilting={motion.active || undefined} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} onFocus={handleFocus} onBlur={handleBlur}>
      {brandGlyphs.map((glyph, index) => (
        <span key={glyph.letter} className="four-footer-glyph" aria-hidden="true" style={{
          "--glyph-width": glyph.width + 8,
          "--letter-drop": glyph.letter === "o" ? "20%" : glyph.letter === "r" ? "16%" : "0%",
          "--letter-tilt": motion.angles[index] + "deg",
        } as CSSProperties}>
          <svg viewBox={"-4 -4 " + (glyph.width + 8) + " 421"} fill="currentColor" fillRule="evenodd" focusable="false"><path d={footerGlyphPaths[glyph.letter as keyof typeof footerGlyphPaths]} /></svg>
        </span>
      ))}
    </a>
  );
}
