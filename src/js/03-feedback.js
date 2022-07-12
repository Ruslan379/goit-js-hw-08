import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', handleSubmit);
// console.log(refs.form);
// console.log(refs.form.elements);
// console.log(refs.form.elements.email);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  // console.log(event.currentTarget.elements);

  if (email.value === '' || message.value === '')
    return alert('Все поля должны быть заполнены!');

  const formOut = {};
  formOut.email = email.value;
  formOut.message = message.value;
  console.log(formOut); //! По ТЗ: Вывод в косоль обьекта с введенными данными

  const formData = new FormData(event.currentTarget); //? FormData

  formData.forEach((value, name) => {
    // console.log('onFormSubmit -> name', name);
    // console.log('onFormSubmit -> value', value);
    console.log(`${name}: ${value}`); //! Вывод в косоль с помощью FormData
  });

  console.log(`Email: ${email.value}, Message: ${message.value}`); //! Вывод в косоль с помощью шаблонной строки

  event.currentTarget.reset();
}
