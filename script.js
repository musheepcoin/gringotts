import { tsParticles } from "tsparticles-slim";

async function loadParticles(options) {
  await tsParticles.load("particles-js", options);
}

const configs = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffd700"
    },
    shape: {
      type: "image",
      image: {
        src: 'https://i.imgur.com/2MBt2s8.png', // Using an external link for a simple coin image
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 16,
      random: {
        enable: true,
        minimumValue: 8
      },
      anim: {
        enable: false,
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
      },
      rotate: {
        x: 50,
        y: 50
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  detectRetina: true
};

loadParticles(configs);

