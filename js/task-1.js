const ul = document.querySelectorAll("#categories .item")
console.log(`Numer of categories: ${ul.length}`);
ul.forEach((ul)=>{
const nameI = ul.querySelector("h2").textContent
const item = ul.querySelectorAll("li").length
console.log(`Category: ${nameI}`);
console.log(`Elements: ${item}`);
})
