const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const newColor = getRandomHexColor();

button.addEventListener('click', () => {
  // const backgroundColor = evt.currentTarget.value;
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = document.body.style.backgroundColor;
});





// body.style.backgroundColor = getRandomHexColor();