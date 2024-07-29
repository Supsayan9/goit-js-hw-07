const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultText = document.querySelector("span").textContent;
input.addEventListener("input", ()=>{
output.textContent = input.value || defaultText;
})



