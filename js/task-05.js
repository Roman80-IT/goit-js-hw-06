//* Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
//*  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//* слідкуємо за подією 'input' на елементі 'name-input':
nameInput.addEventListener("input", function () {
  const name = nameInput.value.trim(); //* trim() - очищує від зайвих пробілів

  if (name !== "") {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
