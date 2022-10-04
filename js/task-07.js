

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
    spanRef.style.fontSize = inputRef.value + "px";
});

console.log(inputRef);
console.log(spanRef);




