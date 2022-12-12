const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', getInputName);

function getInputName(evt) {
    outputEl.textContent = evt.currentTarget.value;
    if(inputEl.value === ""){
           return outputEl.textContent = "Anonymous";
        } 
};