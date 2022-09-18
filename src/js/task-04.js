
const btnEl = document.querySelector("#counter");
const plusBtn = btnEl.firstElementChild;
const minusBtn = btnEl.lastElementChild;
const valueEl = document.querySelector("#value");


let counter = 0;

plusBtn.addEventListener("click", onDecrementCount);
minusBtn.addEventListener("click", onIncrementCount);

function onDecrementCount() {
    counter -= 1;
    valueEl.textContent = counter;
}

function onIncrementCount() {
    counter += 1;
    valueEl.textContent = counter;
}
