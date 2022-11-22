const body = document.querySelector("body");
const divRGB = document.body.appendChild(document.createElement("div"));
divRGB.className = "rgb";

//Function to generate rgba color
const colorGenerator = (r, g, b) => {
  body.style.background = "rgb(" + r + "," + g + "," + b + ")";
};

//Function to generate random color
const rgb = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  colorGenerator(r, g, b);
  divRGB.innerHTML = `<span>rgb(${r}, ${g}, ${b})</span>`;
};

rgb();

//Interval to play function every 3 seconds
setInterval(() => {
  rgb();
}, 3000);

//When divRGB clicked, copy rgba to clipboard
divRGB.addEventListener("click", (e) => {
  navigator.clipboard
    .writeText(e.target.textContent)
    .then(alert("RGB copié !"));
});
