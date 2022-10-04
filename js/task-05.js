

const inputEll = document.querySelector("#name-input")
const outputEll = document.querySelector("#name-output")

inputEll.addEventListener("input", (event) => {
    if (inputEll.value) {
      outputEll.textContent = inputEll.value;
    } else {
      outputEll.textContent = "Anonymous";
    }
});

inputEll.addEventListener("focus", (event) => {

    event.target.style.boxShadow = '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)';
    event.target.style.backgroundColor= 'lightBlue';
    event.target.style.border = '1px solid yellow';
    event.target.style.outline = 'none';
    event.target.style.borderRadius = '5px';
    
});

inputEll.addEventListener("blur", (event) => {

    event.target.style.boxShadow = '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)';
    event.target.style.backgroundColor= 'yellow';
    event.target.style.border = '1px solid green';
    event.target.style.outline = 'none';
    event.target.style.borderRadius = '5px';
    
});

console.log(inputEll);
console.log(outputEll);
