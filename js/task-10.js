//* Скрипт створення і очищення колекції елементів. Користувач вводить к-сть елементів в input і натискає кнопку 'Створити'
//*       після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//* Створи ф-цію createBoxes(amount), яка приймає один параметр - число. Ф-ція створює стільки <div>, скільки вказано в amount і додає їх у 'div#boxes'

//* Розміри найпершого <div> - 30px на 30px.
//* Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//* Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//* Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amountInput = document.querySelector("input");
  const amount = Number(amountInput.value);
}
