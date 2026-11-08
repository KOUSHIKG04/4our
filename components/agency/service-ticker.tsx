"use client";

import { useContext, useEffect, useRef } from "react";
import { AmbientMotion, AmbientMotionActive } from "./ambient-motion";
import { GlossyStar } from "./glossy-star";
import styles from "./service-ticker.module.css";

const services = ["Design", "Video editing", "Web development", "Mobile apps", "Creative campaigns", "Consulting"];

function TickerTrack() {
  const active = useContext(AmbientMotionActive);
  const track = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const loop = element.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: 30000, iterations: Infinity, easing: "linear" },
    );
    loop.pause();
    animation.current = loop;
    return () => { loop.cancel(); animation.current = null; };
  }, []);

  useEffect(() => {
    if (active) animation.current?.play();
    else animation.current?.pause();
  }, [active]);

  return (
    <div ref={track} className={styles.track} style={{ display: "flex", width: "max-content" }}>
      {[0, 1].map((copy) => (
        <div className={styles.group} key={copy} style={{ display: "flex", minWidth: "100vw", flexShrink: 0, justifyContent: "space-around", paddingBlock: "clamp(9px, 1.2vw, 15px)" }}>
          {services.map((service) => (
            <span key={service} style={{ display: "inline-flex", alignItems: "center", gap: "clamp(12px, 2vw, 26px)", paddingInlineStart: "clamp(12px, 2vw, 26px)", whiteSpace: "nowrap" }}>
              {service}
              <GlossyStar style={{ width: 24, height: 24, flexShrink: 0, filter: "drop-shadow(1px 2px 0 #111) drop-shadow(2px 4px 3px #0004)" }} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ServiceTicker() {
  return (
    <div style={{ backgroundColor: "#ff5c00", color: "#ffffff", overflow: "hidden", fontSize: "clamp(13px, 1.45vw, 20px)", fontWeight: 750, lineHeight: 1.1, textTransform: "uppercase", fontFamily: "var(--font-display), sans-serif" }}>
      <span className="sr-only">{services.join(", ")}</span>
      <AmbientMotion className={styles.viewport}><TickerTrack /></AmbientMotion>
    </div>
  );
}
