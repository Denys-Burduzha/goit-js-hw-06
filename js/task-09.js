function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chengeColorBtnEll = document.querySelector('.change-color');
const spanColorEll = document.querySelector('.color');
const bodyEll = document.querySelector('body');




chengeColorBtnEll.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  bodyEll.style.backgroundColor = randomColor;
  spanColorEll.textContent = randomColor;
});

console.log(getRandomHexColor);
console.log(chengeColorBtnEll);
console.log(spanColorEll);
console.log(bodyEll);


