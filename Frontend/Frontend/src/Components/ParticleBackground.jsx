import React, { useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  const particlesConfig = useMemo(() => ({
    particles: {
      number: { value: 15 }, // Number of particles
      color: { value: "#fff" }, // Particle color
      shape: { type: "circle" }, // Shape of particles
      opacity: { value: 0.6 }, // Opacity of particles
      size: { value: 3 }, // Size of particles
      move: {
        enable: true, // Enable movement
        speed: 2, // Speed of particle movement
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true, // Enable hover interaction
          mode: "grab", // Use the "grab" mode
        },
      },
      modes: {
        grab: {
          distance: 200, // Maximum distance to connect mouse and particles
          links: {
            opacity: 0.3, // Opacity of the connection line
            color: "#f9ca24", // Color of the connection line
          },
        },
      },
    },
    retina_detect: true, // Ensures sharpness on high-DPI screens
  }), []);

  return (
    init && (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        <Particles
          id="tsparticles"
          options={particlesConfig}
        />
      </div>
    )
  );
};

export default ParticlesBackground;