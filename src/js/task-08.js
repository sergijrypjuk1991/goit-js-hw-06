const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmission);
function onFormSubmission(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all fields of the form!')
    } 
    console.log(`Login:${email.value}, password:${password.value}`)
        event.currentTarget.reset();
    
}