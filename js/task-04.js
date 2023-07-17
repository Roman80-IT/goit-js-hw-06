//* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//*   - Створи змінну 'counterValue', в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//*   - Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//*   - Оновлюй інтерфейс новим значенням змінної counterValue

let counterValue = document.getElementById("value"); //* змінна для збереження посилання на елемент спану

//* Знаходимо всі кнопки з атрибутом 'data-action'
const action = document.querySelectorAll("button[data-action]");

//* Додаємо слухачів кліків
//! action.addEventListener("click", onClick); //! НЕВІРНО оскільки action є NodeList, а не окремий елемент
action.forEach((button) => button.addEventListener("click", onClick));

function onClick(event) {
  //* клікнута кнопка за допомогою '.target'
  const clickedButton = event.target;
  const action = clickedButton.getAttribute("data-action"); //* отримуємо значення атрибуту data-action

  if (action === "decrement") {
    counterValue.textContent = parseInt(counterValue.textContent) - 1; //*змінюємо текстовий вміст елементу 'counterValue', а не перезаписуємо його
    // console.log(counterValue.textContent);
  } else if (action === "increment") {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    // console.log(counterValue.textContent);
  }
}

//!-------------------------      ВАРІАНТ 2       -----------------------------------

// const counterValue = document.getElementById("value");
// let value = parseInt(counterValue.textContent);

// const decrementButton = document.querySelector(
//   "button[data-action='decrement']"
// );
// const incrementButton = document.querySelector(
//   "button[data-action='increment']"
// );

// decrementButton.addEventListener("click", decrement);
// incrementButton.addEventListener("click", increment);

// function decrement() {
//   counterValue.textContent = value - 1;
// }

// function increment() {
//   counterValue.textContent = value + 1;
// }
