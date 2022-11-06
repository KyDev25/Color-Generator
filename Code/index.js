const body = document.querySelector("body");
const divRGB = document.body.appendChild(document.createElement("div"));
divRGB.className = "rgb";

const colorGenerator = (r, g, b) => {
  body.style.background = "rgb(" + r + "," + g + "," + b + ")";
};

setInterval(() => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  colorGenerator(r, g, b);
  divRGB.innerHTML = `<span>rgb(${r}, ${g}, ${b})</span>`;
}, 3000);

divRGB.addEventListener("click", (e) => {
  navigator.clipboard
    .writeText(e.target.textContent)
    .then(alert("RGB copié !"));
});
