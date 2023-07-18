//* Скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 'button.change-color'
//*     і виводить значення кольору в 'span.color'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor; //* для виводу номера кольору
}
