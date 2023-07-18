//* Напиши скрипт, який під час втрати фокусу на інпуті (подія 'blur'), перевіряє його вміст щодо правильної к-сті введених символів.
//*   - Яка к-сть символів повинна бути в інпуті, зазначається в його атрибуті 'data-length'.
//*   - Якщо введена правильна к-сть символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//*   - Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// const input = document.getElementById("validation-input");

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

// const input = document.getElementById("validation-input");

// input.addEventListener("blur", function () {
//   const needLength = parseInt(input.getAttribute("data-length"));
//   const inputLength = input.value.length;
//   const isValidLength = inputLength === needLength;

//   input.classList.toggle("valid", isValidLength);
//   input.classList.toggle("invalid", !isValidLength);
// });

//! ------------     ВАРІАНТ 3      ------------------

const input = document.getElementById("validation-input");

input.addEventListener("blur", colorF);
function colorF(evt) {
  evt.target.classList.remove("valid", "invalid");
  //* input.currentTarget.classList.remove("invalid");
  input.value.length === Number(evt.currentTarget.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
