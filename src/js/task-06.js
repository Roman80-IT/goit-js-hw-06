//* Напиши скрипт, який під час втрати фокусу на інпуті (подія 'blur'), перевіряє його вміст щодо правильної к-сті введених символів.
//*   - Яка к-сть символів повинна бути в інпуті, зазначається в його атрибуті 'data-length'.
//*   - Якщо введена правильна к-сть символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//*   - Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const needLength = parseInt(input.getAttribute("data-length"));
  const inputLength = input.value.length;

  if (inputLength === needLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

// input.classList.toggle
