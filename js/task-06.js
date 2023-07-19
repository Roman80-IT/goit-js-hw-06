//* Напиши скрипт, який під час втрати фокусу на інпуті (подія 'blur'), перевіряє його вміст щодо правильної к-сті введених символів.
//*   - Яка к-сть символів повинна бути в інпуті, зазначається в його атрибуті 'data-length'.
//*   - Якщо введена правильна к-сть символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//*   - Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

//? Подія 'blur' відбувається, коли елемент втрачає фокус (користувач клікає поза інпутом або переходить до іншого елементу)

const input = document.getElementById("validation-input");

//! ------------     ВАРІАНТ 1      ------------------
// input.addEventListener("blur", colorF);
// function () {
//   const needLength = parseInt(input.getAttribute("data-length"));
//   const inputLength = input.value.length;

//   if (inputLength === needLength) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// };
// input.classList.toggle
// const input = document.querySelector("#validation-input");

//! ------------     ВАРІАНТ 2      ------------------
// input.addEventListener("blur", function () {
//   const needLength = parseInt(input.getAttribute("data-length"));
//   const inputLength = input.value.length;
//   const isValidLength = inputLength === needLength;

//   input.classList.toggle("valid", isValidLength);
//   input.classList.toggle("invalid", !isValidLength);
// });

//! ------------     ВАРІАНТ 3      ------------------
input.addEventListener("blur", colorF);
function colorF(evt) {
  evt.target.classList.remove("valid", "invalid"); //* спочатку очистимо класи valid та invalid з елемента input (прибираємо попередні стилі)
  //* input.currentTarget.classList.remove("invalid");
  //* Порівнюємо к-сть символів в інпуті з data-length. Якщо збігаються - інпут вважається валідним, і додається клас valid
  input.value.trim().length === Number(evt.currentTarget.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}

//*  Властивість 'dataset.length' надає доступ до значення атрибута 'data-length' елемента 'input', який вказує, скільки символів має бути введено в інпут (для даних обробників).
//*  використовуємо currentTarget, а не target - в обробнику події blur, currentTarget вказує на елемент, на якому був зареєстрований обробник події (в нашому випадку - елемент input).
