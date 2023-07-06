let calculaterVAlue = document.getElementById("calculateValue");
let inputField = document.getElementById("inputValue");
let equalOprater = document.getElementById("calculate");
let clearInput = document.getElementById("clear");
let deleteValue = document.getElementById("delete");
let calcNoVal = function (no) {
  inputField.textContent += no;
};

equalOprater.addEventListener("click", function () {
  inputField.textContent = eval(inputField.textContent);
  calculaterVAlue.textContent = eval(inputField.textContent);
  inputField.textContent = "";
});
clearInput.addEventListener("click", () => {
  inputField.textContent = "";
  calculaterVAlue.textContent = "";
});
deleteValue.addEventListener(
  "click",
  () =>
    (inputField.textContent = inputField.textContent.substring(
      0,
      inputField.textContent.length - 1
    ))
);
