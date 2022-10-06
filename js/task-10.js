

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector("#controls input");

const createboxBtn = document.querySelector('[data-create ]');

const deleteboxBtn = document.querySelector('[data-destroy ]');

const boxes = document.querySelector("#boxes");

const inputChange = (event) => {
  input.setAttribute("count", Number(event.currentTarget.value));
};

input.addEventListener("input", inputChange);

let baseboxSize = 30;

const randomColor = getRandomHexColor

const newArray = [];

const createbox = () => {
  let countBox = Number(input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i+=1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = randomColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    newArray.push(newBox);
  };
    boxes.append(...newArray);
};



createboxBtn.addEventListener("click", createbox);


const deletebox = () => {

  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }

  baseboxSize = 30;
};

deleteboxBtn.addEventListener("click", deletebox);

console.log(input);
console.log(input.value);
console.log(createboxBtn);
console.log(deleteboxBtn);
console.log(boxes);
console.log(baseboxSize);
console.log(deleteboxBtn);
console.log(newArray);