const changeBorderColorEl = document.querySelector('#validation-input');

changeBorderColorEl.addEventListener('blur', onChangeColor);

function onChangeColor(event) {
    changeBorderColorEl.classList.add('valid');
    changeBorderColorEl.classList.add('invalid');

    if (changeBorderColorEl.value.length === 6) {
            changeBorderColorEl.classList.remove('invalid')
        } else changeBorderColorEl.classList.remove('valid');
}