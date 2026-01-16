// Challenge 1 — Click gif Upgrade
// Fokus: event listener + DOM update text + ganti image/title + classList untuk animasi

const TARGET = 100;

const gifBox = document.querySelector("#gif");
const gifImg = document.querySelector("#gifImg");
const gifTitle = document.querySelector("#gifTitle");
const countEl = document.querySelector("#count");
const msgEl = document.querySelector("#msg");
const btn = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset");

const gifS = [
  {
    at: 0,
    title: "Aku ketika melihat IPK",
    src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGF1cHc3MWNjZTJlN2N5cGQ3bHFzeDk2Z3RmcDE2NGYzM2E5ZGN3NyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/TDIhmVISz1r8CUwHkf/giphy.gif",
  },
  {
    at: 25,
    title: "Ketika Crush lewat ",
    src: "https://media.giphy.com/media/wnTru5j9xv936OHnBg/giphy.gif",
  },
  {
    at: 50,
    title: "Diantara kau dan lilhab",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVkd2VucG1laDFoZnZqYTBwNnY0bmRkMmFkNjg3Nnl4Y2ZmZjlhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WEUVkZFhRcyjDfDbVA/giphy.gif",
  },
  {
    at: 75,
    title: "Eh ini kan ....",
    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTJsemJoMTdhd3ZwOWVycHh2djU5MTJtdTZ5Y3NzZGY3Y2d3YWUwbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/04ttqLvpBoxRScOYiv/giphy.gif",
  },

  {
    at: 100,
    title: 'Pokoknya ga ikut"',
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWJsMmUxZm4wMGp6b250ZGFpYnVrdXpnZ3NnaGc5aGZhbnZhejI5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SLMLFwsFyYEYaJf2Ma/giphy.gif",
  },
];

// https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDdkdWFxeXR2bW9jcXRqa3YwZzVtZ21qY2RldjZrdnVtYnhydjAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YdymLnBeyr70rfKqAj/giphy.gif

let clicks = 0;
let gifIndex = 0;

render();

btn.addEventListener("click", () => {
  if (clicks >= TARGET) return;

  clicks += 1;
  countEl.textContent = String(clicks);

  msgEl.textContent = `Klik ke-${clicks}. Klik terooosss`;

  // cek apakah harus upgrade gif
  const next = gifS[gifIndex + 1];
  if (next && clicks >= next.at) {
    gifIndex += 1;
    swapGif(gifS[gifIndex]);
  }

  if (clicks === TARGET) {
    msgEl.textContent = "100/100 ! Waduh ga bahaya ta.";
    btn.disabled = true;
  }
});

// reset
resetBtn.addEventListener("click", () => {
  clicks = 0;
  gifIndex = 0;
  btn.disabled = false;
  render();
});

function render() {
  countEl.textContent = String(clicks);
  msgEl.textContent = "Klik tombolnya buat mulai";
  setGif(gifS[gifIndex]);
}

function setGif(gif) {
  gifImg.src = gif.src;
  gifTitle.textContent = gif.title;
}

function swapGif(gif) {
  gifBox.classList.remove("swap");
  void gifBox.offsetWidth; 
  gifBox.classList.add("swap");

  setTimeout(() => setGif(gif), 5);
}
