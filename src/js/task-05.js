const nameInputEl = document.querySelector('#name-input');
const nameUserEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onAddName);

function onAddName(event) {
    nameUserEl.textContent = event.currentTarget.value || 'Anonymous';
};