const decrementBtn = document.querySelectorAll('button')[0];
const incrementBtn = document.querySelectorAll('button')[1];
const ValueEl = document.querySelector('span');

let counterValue = 0;


decrementBtn.addEventListener('click', (event) => {
    counterValue = counterValue - 1;
    ValueEl.textContent = counterValue;
});


incrementBtn.addEventListener('click', (event) => {
    counterValue = counterValue + 1;
    ValueEl.textContent = counterValue;
});

console.log(decrementBtn);
console.log(incrementBtn);
console.log(ValueEl);
console.log(counterValue);
