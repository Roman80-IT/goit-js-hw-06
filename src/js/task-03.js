//* Скрипт для створення галереї зображень на підставі масиву даних.
//*          HTML містить список 'ul.gallery' < ul class="gallery" ></ >
//* - Використовуй масив об'єктів 'images' для створення елементів <img>, вкладених в <li>.
//?       Для створення розмітки використовуй шаблонні рядки і метод 'insertAdjacentHTML()'
//* - Усі елементи галереї повинні додаватися в DOM за одну операцію додавання
//* - Додай мінімальне оформлення галереї флексбоксами та грідами через CSS класи

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//* Отримання посилання на елемент галереї
// const ul = document.querySelector(".gallery"); //!MAIN
// const ul = document.getElementsByClassName("gallery"); //! повертає HTMLCollection, який не має методу 'insertAdjacentHTML'
const ul = document.getElementsByClassName("gallery")[0]; //* отримати перший елемент з HTMLCollection, щоб виправити цю попередню помилку
// console.log(ul);

//* Створення розмітки для кожного зображення і додати його до галереї
//!------------------------------------------------------------------------
//*  деструктуризація об'єкту (map) - отримуємо значення 'url' і 'alt' з кожного об'єкту масиву 'images'
const galleryImg = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" /></li>`)
  .join(""); //*       insertAdjacentHTML потребує String
//!ALTERNATIVE-------------------------------------------------------------
// const galleryImg = images
//   .map((image) => {return `<li><img src="${image.url}" alt="${image.alt}"></li>`;})
//
//   .join("");
//!------------------------------------------------------------------------

//* додаємо HTML-подібну розмітку в DOM
ul.insertAdjacentHTML("beforeend", galleryImg);
