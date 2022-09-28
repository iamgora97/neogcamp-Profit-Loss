var initialPrice = document.querySelector("#initial");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var calculateBtn = document.querySelector("#calculate-btn");
var outputTxt = document.querySelector("#output-text");

function calculateHandler() {
  if (
    initialPrice.value.length === 0 || stockQuantity.value.length === 0 || currentPrice.value.length === 0) {
    outputTxt.innerText = "Enter values to calculate profit/loss";
    return;
  }
  if (
    Number(initialPrice.value) < 0 ||
    Number(stockQuantity.value) < 0 ||
    Number(currentPrice.value) < 0
  ) {
    outputTxt.innerText = "Invalid input - Please provide positive input ";
    return;
  }
  var ini = Number(initialPrice.value);
  var quaty = Number(stockQuantity.value);
  var cur = Number(currentPrice.value);
  calculate(ini, quaty, cur);
}

function calculate(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var loss_percentage = (loss / (initial*quantity)) * 100;
    loss_percentage = loss_percentage.toFixed(2);
    showOutput(`Loss incurred is ${loss} that is ${loss_percentage}% loss`);

  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profit_percentage = (profit / (initial * quantity)) * 100;
    profit_percentage = profit_percentage.toFixed(2);
    showOutput(
      `Profit gained is ${profit} that is ${profit_percentage}% profit`
    );
  } else {
    showOutput(`You neither gained Profit nor incurred Loss`);
  }
}

function showOutput(message) {
  outputTxt.innerText = message;
}

calculateBtn.addEventListener("click", calculateHandler);