import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveDataToLocalStorage = () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const fillFormFieldsFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = data.email || '';
  messageInput.value = data.message || '';
};

emailInput.addEventListener(
  'input',
  throttle(() => {
    saveDataToLocalStorage();
  }, 500)
);

messageInput.addEventListener(
  'input',
  throttle(() => {
    saveDataToLocalStorage();
  }, 500)
);


window.addEventListener('load', () => {
  fillFormFieldsFromLocalStorage();
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data);


  localStorage.removeItem('feedback-form-state');


  emailInput.value = '';
  messageInput.value = '';
});

