// CHALLENGE 3 — Beginner Version (WASD + input + onchange)
// Fokus: keydown (WASD), input validation, change event, dan ubah style/DOM.

const arena = document.getElementById("arena");
const player = document.getElementById("player");
const avatar = document.getElementById("avatar");
const tag = document.getElementById("tag");

const nameInput = document.getElementById("nameInput");
const nameHint  = document.getElementById("nameHint");
const bgSelect  = document.getElementById("bgSelect");
const avatarSelect = document.getElementById("avatarSelect");

// posisi awal
let x = 24;
let y = 24;

// kecepatan langkah
const STEP = 14;

// ===== INIT =====
avatar.src = avatarSelect.value;
tag.textContent = "Player";
updatePosition();

// klik arena biar fokus (biar user ingat: game area)
arena.addEventListener("click", () => arena.focus());

// ===== 1) DROPDOWN: background berubah otomatis =====
bgSelect.addEventListener("change", function () {
  arena.className = "arena " + bgSelect.value;
});

// ===== 2) DROPDOWN: avatar berubah otomatis =====
avatarSelect.addEventListener("change", function () {
  avatar.src = avatarSelect.value;
});

// ===== 3) INPUT: nama validasi + update label otomatis =====
nameInput.addEventListener("input", function () {
  const text = nameInput.value.trim();

  if (isNameValid(text)) {
    tag.textContent = text;

    nameInput.classList.remove("bad");
    nameHint.className = "good";
    nameHint.textContent = "Nama valid ✅";
  } else {
    nameInput.classList.add("bad");
    nameHint.className = "bad";
    nameHint.textContent = "Minimal 3 huruf, hanya huruf/spasi.";
  }
});

// ===== 4) EVENT KEY: WASD untuk bergerak =====
window.addEventListener("keydown", function (e) {

  if (document.activeElement === nameInput) return;

  const key = e.key.toLowerCase();

  // default tidak bergerak
  let dx = 0;
  let dy = 0;

  if (key === "w") dy = -STEP;
  if (key === "s") dy = STEP;
  if (key === "a") dx = -STEP;
  if (key === "d") dx = STEP;

  // kalau bukan WASD, stop
  if (dx === 0 && dy === 0) return;

  // update posisi
  x = x + dx;
  y = y + dy;

  // batasi agar tidak keluar arena
  keepInsideArena();

  // terapkan ke CSS
  updatePosition();
});

window.addEventListener("resize", function () {
  keepInsideArena();
  updatePosition();
});


// ===== FUNCTION-FUNCTION SEDERHANA =====

function updatePosition() {
  player.style.left = x + "px";
  player.style.top  = y + "px";
}

function keepInsideArena() {
  // batas maksimal agar  tidak keluar arena
  const maxX = arena.clientWidth - player.offsetWidth;
  const maxY = arena.clientHeight - player.offsetHeight;

  if (x < 0) x = 0;
  if (y < 0) y = 0;

  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;
}

function isNameValid(text) {
  if (text.length < 3) return false;

  const pattern = /^[a-zA-Z\s]+$/;
  return pattern.test(text);
}
