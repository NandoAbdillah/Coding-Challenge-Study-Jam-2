// Challenge 2 — Hover to Stop
// Fokus: event hover + ubah style lewat JS + update text DOM

const meme = document.querySelector("#meme");
const statusEl = document.querySelector("#status");
const angleEl = document.querySelector("#angle");

let angle = 0;         
let spinning = true;    
const speed = 180;     
let last = performance.now();

meme.addEventListener("mouseenter", () => {
  spinning = false;
  statusEl.textContent = "Stopped (hover)";
});

meme.addEventListener("mouseleave", () => {
  spinning = true;
  statusEl.textContent = "Spinning";
});

// Loop animasi
requestAnimationFrame(loop);

function loop(now) {
  const dt = (now - last) / 1000;
  last = now;

  if (spinning) {
    angle = (angle + speed * dt) % 360;

    meme.style.transform = `rotate(${angle}deg)`;

    angleEl.textContent = `${Math.round(angle)}°`;
  }

  requestAnimationFrame(loop);
}
