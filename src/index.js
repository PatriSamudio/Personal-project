const buttonNumber = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonDelete = document.getElementsByName("data-delete")[0];
const buttonSame = document.getElementsByName("data-same")[0];
const result = document.getElementById("result");
let operation;
let opeAfter = "";
let opeBefore = "";

buttonNumber.forEach(boton => {
  boton.addEventListener("click", function () {
    addNumber(boton.innerText);
  });
});

buttonOpera.forEach(boton => {
  boton.addEventListener("click", function () {
    selectOperation(boton.innerText);
  });
});

buttonSame.addEventListener("click", function () {
  calculator();
  newDisplay();
});

buttonDelete.addEventListener("click", function () {
  clear();
  newDisplay();
});

const addNumber = (num) => {
  opeBefore = opeBefore.toString() + num.toString();
  newDisplay();
};

const selectOperation = (op) => {
  if (opeBefore === "") return;
  if (opeAfter !== "") {
    calculator();
  }
  operation = op.toString();
  opeAfter = opeBefore;
  opeBefore = "";
};

const calculator = () => {
  let calculo;
  const anterior = parseInt(opeAfter);
  const actual = parseInt(opeBefore);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
  }
  opeBefore = calculo;
  operation = undefined;
  opeAfter = "";
};

const clear = () => {
  opeAfter = "";
  opeBefore = "";
  operation = undefined;
};

const newDisplay = () => { result.value = opeBefore; };

clear();
