const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password
    };

    console.log (formData);

    evt.currentTarget.reset()

};


