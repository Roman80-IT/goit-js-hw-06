//* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}

//* Створи змінну 'counterValue', в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//* Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//* Оновлюй інтерфейс новим значенням змінної counterValue

const counterValue = document.getElementById("value");
// console.log(counterValue);

//* Знаходимо всі кнопки з атрибутом 'data-action'
const action = document.querySelectorAll("button[data-action]");

//* Додаємо слухачів кліків
action.addEventListener("click", onClick);

function onClick() {
    if (action===decrement)
}
