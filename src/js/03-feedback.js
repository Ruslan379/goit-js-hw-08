import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

//! - Создаем пустой объект для хранения localStorage
let formData = {};

//! - Получаем значение из localStorage
populateTextarea();

/*
 ! - Останавливаем поведение по умолчанию
 ! - Убираем сообщение из хранилища
 ! - Очищаем форму
 */

function onFormSubmit(evt) {
  evt.preventDefault();

  // console.log('Отправляем форму'); //!
  if (refs.email.value === '' || refs.textarea.value === '')
    return alert('Все поля должны быть заполнены!');

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  evt.currentTarget.reset();
}

//!+++++++++ Заполняем поле Email ++++++++++++++
function onEmailInput(evt) {
  // console.log('Заполняем Email'); //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

//!+++++++++ Заполняем поле Message ++++++++++++++
function onTextareaInput(evt) {
  // console.log('Заполняем Message'); //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

/*
 ! - Получаем значение из localStorage, 
 ! - и если там что-то было, 
 ! - то обновляем поля этими знчениями
 */
function populateTextarea() {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formData.email) refs.email.value = formData.email;

    if (formData.message) refs.textarea.value = formData.message;
  }
}
