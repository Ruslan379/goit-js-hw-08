import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.email.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onTextareaInput);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 100));

let formData = {};
let savedEmail = '';
let savedMessage = '';

// console.log(formData);

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
  //   localStorage.removeItem(MESSAGE);
  //   localStorage.removeItem(EMAIL);
}

//!++++++++++++++++++++++++++++++++++++++++
function onEmailInput(evt) {
  // console.log('Заполняем Email'); //!

  // let savedEmail = evt.target.value; //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  // localStorage.setItem(EMAIL, email);
}
//!++++++++++++++++++++++++++++++++++++++++

/*
   ! - Получаем значение поля
   ! - Сохраняем его в хранилище
   ! - Можно добавить throttle
   */
function onTextareaInput(evt) {
  // console.log('Заполняем Message'); //!

  // let savedMessage = evt.target.value; //!
  // console.log(savedMessage); //!

  formData[evt.target.name] = evt.target.value;
  // console.log(formData); //!

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

/*
   ! - Получаем значение из хранилища
   ! - Если там что-то было, обновляем DOM
   */
function populateTextarea() {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formData.email) refs.email.value = formData.email;

    if (formData.message) refs.textarea.value = formData.message;
  }
}
