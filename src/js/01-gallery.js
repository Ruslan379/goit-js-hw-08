// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

//! подключаем библиотеку simplelightbox в проект:

// Описание в документации:
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "E:/GoIT/Code/goit-js-hw-08/node_modules/simplelightbox/dist/simple-lightbox";

// Дополнительный импорт стилей:
import "simplelightbox/dist/simple-lightbox.min.css";



//! 1.Получаем ссылку на div-контейнер:
const ImageContainer = document.querySelector('.gallery');
// console.log(ImageContainer);

//!   2.В переменную ImageMarkup записываем новую разметку 
//!  как результат вызовыа ф-ции createImageCardsMarkup 
//!  с аргументом - массив объектов galleryItems):
const ImageMarkup = createImageCardsMarkup();

//!   3.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
ImageContainer.insertAdjacentHTML('beforeend', ImageMarkup);
//!                            ИЛИ (2-ой вариант):
//!   3.Добавляем новую разметку в div-контейнер с помощью innerHTML:
// ImageContainer.innerHTML = ImageMarkup;


//!   3.1.Консолим новую разметку div-контейнера:
// console.log(createImageCardsMarkup(galleryItems));


//!   4.Сосдаем слушателя событий методом делегирования:
// console.log(ImageContainer.addEventListener('click', onImageContainerClick));
ImageContainer.addEventListener('click', onImageContainerClick);
// console.log(onImageContainerClick());


//!   1.1.Ф-ция, к-рая создает массив с новой разметкой:
function createImageCardsMarkup() {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>
    `;
        })
        .join('');




    // gallery.on('show.simplelightbox', function () {
    // });
}

//? Fixed mentor remarks
//! 1.2.Вызов библиотеки SimpleLightbox:

let gallery = new SimpleLightbox('.gallery a', {
    // caption: true,
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: "alt",
});

//!   4.1.Ф-ция, к-рая прослушивает клики от ВСЕХ изображений:
function onImageContainerClick(evt) {
    evt.preventDefault(); //TODO отменить действие по умолчанию - preventDefault().

    // console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log(evt.target);
    // console.log(evt.target.src);
    // console.log(evt.target.dataset.source); //! ссылка на кликнутое оригинальное изображение
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++");


    /*
        ? - Fixed mentor remarks -
        ? - тут вызова библиотеке не должно быть, 
        ? - так как каждый новый клик создает новый экземпляр билиотеки
    */
    // let gallery = new SimpleLightbox('.gallery a', {
    //     // caption: true,
    //     captionPosition: 'bottom',
    //     captionDelay: 250,
    //     captionsData: "alt",
    // });

    //! Использование библиотеки SimpleLightbox:

    gallery.on('show.simplelightbox', function () {
    });
}

