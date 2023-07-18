//* Напиши скрипт, який для кожного елемента масиву 'ingredients':
//*     Створить окремий елемент '<li>', використовуючи метод 'document.createElement()'
//*     Додасть назву інгредієнта як його текстовий вміст.
//*     Додасть елементу клас 'item'
//*     Після чого, вставить усі <li> за одну операцію у список 'ul#ingredients'

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");
//!ALTERNATIVE  const ul = document.querySelector("#ingredients");
//? Фрагмент (DocumentFragment) - тимчасовий контейнер - використовується для збереження елементів до їх додавання в DOM.
//* Він не прив'язаний безпосередньо до DOM-структури, тому додавання елементів до фрагменту не має впливу на відображення на сторінці
const fragment = document.createDocumentFragment();

ingredients.forEach((i) => {
  const li = document.createElement("li"); //? 'createElement()'
  li.textContent = i;
  li.classList.add("item"); //? +class
  // console.log(li);
  fragment.appendChild(li); //? 'appendChild()' - метод для додавання одного елемента до іншого, 'append()' є методом для додавання елементів до DOM
  console.log(fragment);
});

ul.append(fragment);
