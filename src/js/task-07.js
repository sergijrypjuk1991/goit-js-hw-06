const textSizeEl = document.querySelector('#font-size-control');
const magic = document.querySelector('#text');

magic.style.fontSize = `${textSizeEl.value}px`
textSizeEl.addEventListener('input', onChangeTextSize);
function onChangeTextSize(event) {
   magic.style.fontSize = `${event.currentTarget.value}px` 
}