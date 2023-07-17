//* Напиши скрипт, який:
//* Порахує і виведе в консоль кількість категорій в 'ul#categories' (елементів 'li.item')
//* Для кожного элемента 'li.item' у списку 'ul#categories', знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і к-сть елементів в категорії (усіх <li>, вкладених в нього).
//* Для виконання цього завдання потрібно використати метод 'forEach()' і властивості навігації по DOM.

const list = document.querySelector("#categories");
// console.dir(list);
const items = list.querySelectorAll(".item");
// console.dir(items);

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
