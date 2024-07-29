function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body")
const button  = document.querySelector(".change-color")
const pEl = document.querySelector(".color");


button.addEventListener("click", ()=>{
const newColor = getRandomHexColor();
bodyEl.style.backgroundColor = newColor;
pEl.textContent = newColor;
})


