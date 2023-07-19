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
const amountInput = document.querySelector("input");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(amountInput.value);
  const min = Number(amountInput.min);
  const max = Number(amountInput.max);
  const step = Number(amountInput.step);

  if (
    isNaN(amount) ||
    amount < min ||
    amount > max ||
    (amount - min) % step !== 0
  ) {
    alert(
      `Please enter a valid number between ${min} and ${max}, with a step of ${step}.`
    );
    return;
  }

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  amountInput.value = "";
}

//!----------------------------        ВАРІАНТ проба2        -----------------------------------

// const inputEl = document.querySelector("input");
// const createEl = document.querySelector("button[data-create]");
// const destroyEl = document.querySelector("button[data-destroy]");
// const boxesContainer = document.getElementById("boxes");
// const controlsEl = document.getElementById("controls");

// createEl.addEventListener("click", onClickCreate);
// destroyEl.addEventListener("click", onClickDestroy);

// function onClickCreate() {
//   createBoxes(inputEl.value);
// }

// function createBoxes(amount) {
//   let size = 30;
//   let arr = [];
//   for (let i = 0; i < amount; i += 1) {
//     const controlsElchild = document.createElement("div");
//     controlsElchild.style.cssText = `background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px; `;
//     size += 10;
//     arr.push(controlsElchild);
//   }
//   boxesContainer.append(...arr);
// }

// function onClickDestroy() {
//   inputEl.value = "";
//   boxesContainer.innerHTML = "";
// }
