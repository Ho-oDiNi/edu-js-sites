const buttonPlusNode = document.querySelector("#plus");
const buttonMinusNode = document.querySelector("#minus");
const calculateNode = document.querySelector("#submit");

const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");

let action;

buttonPlusNode.addEventListener("click", () => {
  action = "plus";
});

buttonMinusNode.addEventListener("click", () => {
  action = "minus";
});

const calculateResult = () => {
  const fistValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);

  if (action === "plus") return fistValue + secondValue;
  else if (action === "minus") return fistValue - secondValue;
  else return "Выберите оператор";
};

calculateNode.addEventListener("click", () => {
  const resultNode = document.querySelector("#result");
  resultNode.textContent = calculateResult();
});
