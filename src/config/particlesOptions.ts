export const particlesOptions = {
  background: {
    color: {
      value: window.matchMedia("(prefers-color-scheme: dark)").matches ? "#121212" : "#ffffff",
    },
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
    links: {
      enable: window.innerWidth > 768, // Disable links on small screens for performance
      color: "#61dafb",
      distance: 150,
      opacity: 0.5,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
  },
};