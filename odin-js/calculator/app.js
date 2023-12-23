const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.getElementById("btnEquals");
const clearBtn = document.getElementById("btnClear");
const deleteBtn = document.getElementById("btnDelete");
const decimalBtn = document.getElementById("btnDecimal");

const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");

let firstNum = "";
let operatorSymbol = "";
let secondNum = "";

// Operators
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const deleteNum = () => {
  return outputDisplay.textContent.toString().slice(0, -1);
};

const clearNum = () => {};

const equals = () => {};

const operate = (a, operator, b) => {};
