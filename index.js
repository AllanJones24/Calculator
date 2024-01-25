const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error";
  }
};

// console.log(operate(1, 2, '+'));
// console.log(operate(1, 2, '-'));
// console.log(operate(1, 2, '*'));
// console.log(operate(1, 2, '/'));

const result = document.querySelector("#result");

let firstNum = "";
let secondNum = "";
let operator = "";
let resultNum = "";

const btns = document.querySelectorAll(".btn");
// find buttons that are clicked and display on screen
// put numbers in firstNum and secondNum
// put operator in operator
// put variables in operate function
// display result on screen

const display = () => {
  let isOperatorClicked = false;
  let isEqualsClicked = false;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("number")) {
        if (isEqualsClicked) {
          // If equals was clicked previously, start a new calculation
          firstNum = btn.textContent;
          isEqualsClicked = false;
        } else if (operator === "") {
          firstNum += btn.textContent;
        } else {
          secondNum += btn.textContent;
        }
        result.textContent = operator === "" ? firstNum : secondNum;
      } else if (btn.classList.contains("operator")) {
        if (!isEqualsClicked) {
          operator = btn.textContent;
          isOperatorClicked = true;
        }
      } else if (btn.id === "equals") {
        if (isOperatorClicked && secondNum !== "") {
          resultNum = operate(Number(firstNum), Number(secondNum), operator);
          result.textContent = resultNum;
          isEqualsClicked = true;
          isOperatorClicked = false;
          console.log(resultNum);
        }
      } else if (btn.id === "clear") {
        firstNum = "";
        secondNum = "";
        operator = "";
        result.textContent = "0";
        isOperatorClicked = false;
        isEqualsClicked = false;
      }
    });
  });
};

display();
