import React from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesComponent() {
  const particlesInit = async (main) => {
    await loadFull(main); // This should load the full tsParticles package
  };

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    particles: {
      number: { value: 50 },
      color: { value: "#222" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: 4 },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    retina_detect: true,
  }}
/>

  );
}
