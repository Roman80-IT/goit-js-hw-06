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

//!------------------------      ВАРІАНТ 1    ( 'fragment'    forEach )     --------------------------------
//? Фрагмент (DocumentFragment) - тимчасовий контейнер - використовується для збереження елементів до їх додавання в DOM.
//* Він не прив'язаний безпосередньо до DOM-структури, тому додавання елементів до фрагменту не має впливу на відображення на сторінці
// const fragment = document.createDocumentFragment();

// ingredients.forEach((i) => {
//   const li = document.createElement("li"); //? 'createElement()'
//   li.textContent = i;
//   li.classList.add("item"); //? +class
//   // console.log(li);
//   fragment.appendChild(li); //? 'appendChild()' - метод для додавання одного елемента до іншого, 'append()' є методом для додавання елементів до DOM
//   // console.log(fragment);
// });

// ul.append(fragment);

//!--------------------     ВАРІАНТ 2    ( 'for'    оператор [...spread] )     -----------------------------
// const lis = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const item = document.createElement("li");
//   item.textContent = ingredients[i];
//   item.classList.add("item");
//   lis.push(item);
// }

// ul.append(...lis);

//!--------------------     ВАРІАНТ 3    ( 'map'    =>    оператор [...spread] )     -----------------------------
const lis = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ul.append(...lis);

//* За допомогою методу append() без оператора 'spread', потрібно створити кожен елемент <li> окремо, встановити їх текстовий вміст та клас,
//* і потім додати кожен з них до списку < ul > за допомогою окремого виклику append() для кожного елемента.

//*  використання оператора ...spread дозволяє передавати елементи масиву, як окремі аргументи методу append(),
//* що забезпечує додавання декількох елементів до DOM.
