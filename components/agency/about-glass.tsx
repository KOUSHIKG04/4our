"use client";

import { FlutedGlass } from "@paper-design/shaders-react";

export function AboutGlass({ tone = "orange" }: { tone?: "orange" | "neutral" }) {
  return (
    <div className="about-glass" aria-hidden="true">
      <FlutedGlass
        width="100%"
        height="100%"
        image={`/effects/about-${tone}-glass.svg`}
        colorBack="#00000000"
        colorShadow="#000000"
        colorHighlight="#ffffff"
        size={0.5}
        shadows={0.25}
        highlights={0.1}
        shape="lines"
        angle={0}
        distortionShape="prism"
        distortion={0.5}
        shift={0}
        stretch={0}
        blur={0}
        edges={0.25}
        margin={0}
        grainMixer={0}
        grainOverlay={0}
        scale={1}
        fit="cover"
      />
    </div>
  );
}
