"use client";

import { useContext, useEffect, useRef } from "react";
import { Dithering } from "@paper-design/shaders-react";
import { AmbientMotionActive } from "./ambient-motion";

const orbits = [
  { angle: -30, phase: 0.4, period: 10800, dots: [0, Math.PI] },
  { angle: 32, phase: 2.5, period: 13200, dots: [0, Math.PI] },
  { angle: 91, phase: 4.2, period: 15600, dots: [0, Math.PI] },
] as const;

const center = 140;
const radius = 125;
const restingDepth = 46;

function arc(depth: number, front: boolean) {
  return `M ${center - radius} ${center} A ${radius} ${depth} 0 0 ${front ? 0 : 1} ${center + radius} ${center}`;
}

function dotPose(phase: number, depth: number, angle: number) {
  const side = Math.sin(phase);
  const x = center + radius * Math.cos(phase);
  const y = center + depth * side;
  return `translate(${x} ${y}) rotate(${-angle}) scale(${1 + 0.12 * side})`;
}

export function HeroAtom() {
  const active = useContext(AmbientMotionActive);
  const backRings = useRef<SVGGElement>(null);
  const frontRings = useRef<SVGGElement>(null);
  const elapsed = useRef(0);

  useEffect(() => {
    const back = backRings.current;
    const front = frontRings.current;
    if (!active || !back || !front) return;

    let frame: number;
    let previous: number | undefined;
    const paint = (now: number) => {
      elapsed.current += previous === undefined ? 0 : now - previous;
      previous = now;

      orbits.forEach((orbit, index) => {
        const turn = elapsed.current / orbit.period * 2 * Math.PI;
        const phase = orbit.phase + turn;
        const depth = restingDepth + 12 * (Math.sin(turn * 0.5 + index) - Math.sin(index));
        const angle = orbit.angle + 7 * (Math.sin(turn * 0.4 + index) - Math.sin(index));

        [back.children[index], front.children[index]].forEach((ring, layer) => {
          const isFront = layer === 1;
          ring.setAttribute("transform", `rotate(${angle} ${center} ${center})`);
          ring.children[0].setAttribute("d", arc(depth, isFront));
          if (!isFront) return;

          orbit.dots.forEach((offset, dotIndex) => {
            const dot = ring.children[dotIndex + 1];
            dot.setAttribute("transform", dotPose(phase + offset, depth, angle));
          });
        });
      });

      frame = requestAnimationFrame(paint);
    };

    frame = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  function orbitLayer(front: boolean) {
    return (
      <svg className="four-hero-orbits" viewBox="0 0 280 280" fill="none" focusable="false">
        <g ref={front ? frontRings : backRings}>
          {orbits.map((orbit) => {
            return (
              <g key={orbit.angle} transform={`rotate(${orbit.angle} ${center} ${center})`}>
                <path
                  d={arc(restingDepth, front)}
                  stroke="#ffba8e"
                  strokeWidth={front ? 1.35 : 1}
                  opacity={front ? 0.86 : 0.42}
                />
                {front && orbit.dots.map((offset) => (
                  <circle
                    key={offset}
                    r="3.1"
                    fill="#ff5c00"
                    stroke="#ffe0ca"
                    strokeWidth=".7"
                    transform={dotPose(orbit.phase + offset, restingDepth, orbit.angle)}
                  />
                ))}
              </g>
            );
          })}
        </g>
      </svg>
    );
  }

  return (
    <div className="four-hero-atom" aria-hidden="true">
      {orbitLayer(false)}
      <div className="four-hero-atom-core">
        <div className="four-hero-atom-dither">
          <Dithering
            width="100%"
            height="100%"
            colorBack="#00000000"
            colorFront="#ffbb8a"
            shape="sphere"
            type="4x4"
            size={1.5}
            speed={active ? 0.45 : 0}
            scale={0.6}
          />
        </div>
      </div>
      {orbitLayer(true)}
    </div>
  );
}
