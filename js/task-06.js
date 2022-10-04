

const inputEll = document.querySelector('#validation-input');
inputEll.addEventListener('blur', (event) => {
    
    if (event.currentTarget.value.length == inputEll.dataset.length) {
 
        inputEll.classList.add('valid');
        inputEll.classList.remove('invalid');
        
    } else {
      
        inputEll.classList.add('invalid');
        inputEll.classList.remove('valid');
        
    }
});

console.log(inputEll);





























