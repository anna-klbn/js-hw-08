// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const FORM_DATA = 'feedback-form-state';
const currentValues = {
  email: '',
  message: '',
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);
populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    
  console.log(currentValues);
   if (event.currentTarget.email.value === '' || event.currentTarget.message.value === '') {
    return alert(`Заповніть всі поля.`);
    }
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA); 
}

function onFormInput(event) {
  currentValues.email = event.currentTarget.email.value;
  currentValues.message = event.currentTarget.message.value;
  
    localStorage.setItem(FORM_DATA, JSON.stringify(currentValues));
}

function populateTextarea() {
  const savedValues = JSON.parse(localStorage.getItem(FORM_DATA));
  
    if (savedValues) {
      emailInput.value = savedValues.email;
      textarea.value = savedValues.message;
    }
}
