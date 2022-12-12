const buttonIncr = document.querySelector('[data-action="increment"]');
const buttonDecr = document.querySelector('[data-action="decrement"]');
const number = document.querySelector('#value');
buttonIncr.addEventListener('click', add);
buttonDecr.addEventListener('click', remove);
let countValue = 0;
function add() {
  countValue += 1;
  number.textContent = countValue;
}
function remove() {
  countValue -= 1;
  number.textContent = countValue;
}