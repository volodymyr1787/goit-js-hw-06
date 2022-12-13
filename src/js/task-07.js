const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', (evt) => {
    const fontSize = evt.currentTarget.value;
    textEl.style.fontSize = `${fontSize}px`;
})