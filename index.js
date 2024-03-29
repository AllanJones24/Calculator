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
          secondNum = "";
          isEqualsClicked = false;
        } else if (operator === "") {
          firstNum += btn.textContent;
        } else {
          secondNum += btn.textContent;
        }
        result.textContent = operator === "" ? firstNum : secondNum;
        console.log(firstNum);
        console.log(secondNum);
      } else if (btn.classList.contains("operator")) {
        if (!isEqualsClicked) {
          if (secondNum !== "") {
            // Perform the calculation using existing firstNum, secondNum, and operator
            resultNum = operate(Number(firstNum), Number(secondNum), operator);
            result.textContent = resultNum;
            firstNum = resultNum.toString(); // Set result as the new firstNum
            secondNum = ""; // Reset secondNum for the new calculation
          }
          operator = btn.textContent;
          isOperatorClicked = true;
        } else {
          operator = btn.textContent;
          isOperatorClicked = true;
          isEqualsClicked = false;
          firstNum = result.textContent;
          secondNum = "";
        }
      } else if (btn.id === "equals") {
        if (isOperatorClicked && secondNum !== "") {
          resultNum = operate(Number(firstNum), Number(secondNum), operator);
          result.textContent = resultNum;
          firstNum = resultNum.toString(); // Set result as the new firstNum
          console.log("new firstNum" + firstNum);
          secondNum = "";
          operator = "";
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
