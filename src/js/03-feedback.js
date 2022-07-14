import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

//! - Создаем пустой объект для хранения ключей и значений из localStorage
let formData = {};

//! - Создаем переменную STORAGE_KEY для хранения ключа localStorage
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

//! - Получаем значение из localStorage после перезагрузки страницы
populateTextarea();

/*
 ! - Останавливаем поведение по умолчанию
 ! - Убираем сообщение из хранилища
 ! - Очищаем форму
 */

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму'); //!
  if (refs.email.value === '' || refs.textarea.value === '')
    return alert('Все поля должны быть заполнены!');

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();

  formData = {}; //? Fixed mentor remarks
}

//!+++++++++ Заполняем поле Email ++++++++++++++
function onEmailInput(evt) {
  // console.log('Заполняем Email'); //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//!+++++++++ Заполняем поле Message ++++++++++++++
function onTextareaInput(evt) {
  // console.log('Заполняем Message'); //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

/*
 ! - Получаем значение из localStorage после перезагрузки страницы, 
 ! - и если там что-то было, 
 ! - то обновляем поля этими значениями из formData
 */
function populateTextarea() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (formData.email) refs.email.value = formData.email;

    if (formData.message) refs.textarea.value = formData.message;
  }
}
