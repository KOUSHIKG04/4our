"use client";

import { useContext } from "react";
import { SmokeRing } from "@paper-design/shaders-react";
import { AmbientMotionActive } from "./ambient-motion";

export function HeroSmoke() {
  const active = useContext(AmbientMotionActive);

  return (
    <SmokeRing
      width="100%"
      height="100%"
      colors={["#fc6203"]}
      colorBack="#ffffff"
      noiseScale={4.6}
      noiseIterations={8}
      radius={0.25}
      thickness={0.65}
      innerShape={0.7}
      speed={active ? 0.5 : 0}
      scale={0.8}
      maxPixelCount={1000000}
    />
  );
}
