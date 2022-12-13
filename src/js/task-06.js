const value = document.querySelector('#validation-input');
const textLong = value.dataset.length;
value.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(textLong)) {
        value.classList.remove('invalid');
        value.classList.add('valid');
    }
    else {
        value.classList.remove('valid');
        value.classList.add('invalid');
    }
});