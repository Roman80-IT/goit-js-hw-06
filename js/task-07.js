//* Скрипт, який реагує на зміну значення 'input#font-size-control' (подія input)
//* і змінює інлайн-стиль 'span#text', оновлюючи властивість 'font-size'
//* В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value;
  //   console.log(fontSize);
  //* інлайн - стиль:
  text.style.fontSize = `${fontSize}px`;
});
