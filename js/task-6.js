function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

let step = 20;

const onBtnCreate = () => {
  const inputCount = parseInt(input.value);
  if (inputCount <= input.max) {

      divBox.innerHTML = "";


      const fragment = document.createDocumentFragment();

      for (let i = 1; i <= inputCount; i++) {
          step += 10;
          
          const div = document.createElement("div");
          div.style.width = `${step}px`;
          div.style.height = `${step}px`;
          div.style.backgroundColor = getRandomHexColor();
          fragment.appendChild(div);
      }

      
      divBox.appendChild(fragment);

      
      input.value = "";
      step = 20;
  }
};

const onBtnDestroy = () => {
  step = 20;
  divBox.innerHTML = "";
};

buttonCreate.addEventListener("click", onBtnCreate);
buttonDestroy.addEventListener("click", onBtnDestroy);
