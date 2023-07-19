//* Напиши скрипт, який:
//* Порахує і виведе в консоль кількість категорій в 'ul#categories' (елементів 'li.item')
//* Для кожного элемента 'li.item' у списку 'ul#categories', знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і к-сть елементів в категорії (усіх <li>, вкладених в нього).
//* Для виконання цього завдання потрібно використати метод 'forEach()' і властивості навігації по DOM.

//!-------------------------      ВАРІАНТ 1    ('querySelector')     -----------------------------------

// const list = document.querySelector("#categories");
// // console.dir(list);
// const items = list.querySelectorAll(".item");
// // console.dir(items);

// console.log(`Number of categories: ${items.length}`);

// items.forEach((item) => {
//   const title = item.querySelector("h2").textContent;
//   const elements = item.querySelectorAll("li").length;

//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elements}`);
// });

//!-------------------------      ВАРІАНТ 2    ('children')     -----------------------------------

const list = document.getElementById("categories");
const items = list.children; //* Звертаємося до дочірніх елементів (живої колекції) контейнера "list" (іd "categories") - отримуємо всі елементи з класом "item"

console.log(`Number of categories: ${items.length}`); // *к-сть дочірніх елементів (з класом "item") - к-сть категорій

for (const item of items) {
  const title = item.firstElementChild.textContent; //* текстовий контент першого дочірнього вузла-елементу (<h2>) в елементі "item" (категорії) - заголовок кожної категорії
  const elements = countElements(item.lastElementChild); //* Викликаємо ф-цію `countElements`, передаючи останній дочірній вузол-елемент (<ul>) в елементі "item" (підраховує к-сть дочірніх елементів <li>)
  //! const elements = item.length;  Живі колекції (напр. 'item.children'), також мають властивість '.length' -  показує к-сть елементів у колекції, але вони не мають індексів, як у масивів. Тому, якщо ми хочемо підрахувати кількість дочірніх елементів <li> в елементі <ul>, ми повинні ітерувати через колекцію за допомогою циклу або методів, як ми зробили це в функції countElements.

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
}
//!-------------------------      ВАРІАНТ 2А    ('while')     -----------------------------------
// //* ф-ція приймає елемент '<ul>' в якості параметра
// function countElements(ulElement) {
//   let count = 0; //* Ініціалізація змінної 'count', яка буде використовуватись для підрахунку к-сті дочірніх елементів <li> у списку
//   let liElement = ulElement.firstElementChild; //* Отримуємо перший дочірній вузол-елемент <li> в списку і зберігаємо його у змінній liElement.

//   //* Починаємо цикл `while`, який буде продовжуватись, доки `liElement` не стане `null`
//   while (liElement) {
//     count++;
//     liElement = liElement.nextElementSibling; //* перевірка наявності наступних елементів - Переміщаємо `liElement` до наступного сусіда за допомогою властивості `nextElementSibling` - перевіряємо наявність наступних дочірніх елементів у списку.
//   }

//   return count;
// }

//!-------------------------      ВАРІАНТ 2Б    ('while')     -----------------------------------
function countElements(ulElement) {
  // const liElements = ulElement.children; //* передамо це відразу в return
  return ulElement.children.length; //* count;
}
