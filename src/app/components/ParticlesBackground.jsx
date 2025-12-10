"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,    // <-- THIS IS THE MAIN LINE
          zIndex: -1,      // behind all content
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { enable: true, speed: 0.4 },
        },
      }}
    />
  );
}
