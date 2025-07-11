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

document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const contractAddressEl = document.getElementById('contract-address');

    if (copyButton && contractAddressEl) {
        copyButton.addEventListener('click', () => {
            const addressText = contractAddressEl.innerText.replace('CA: ', '').trim();
            navigator.clipboard.writeText(addressText).then(() => {
                const originalIcon = copyButton.innerHTML;
                copyButton.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                `;
                setTimeout(() => {
                    copyButton.innerHTML = originalIcon;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});