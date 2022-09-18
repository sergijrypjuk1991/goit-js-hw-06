function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const bcgColorEl = document.querySelector('span.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeRandomColor);
function onChangeRandomColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  bcgColorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}