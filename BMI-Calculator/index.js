const inputHeightEl = document.querySelector("#height-input");
const inputWeightEl = document.querySelector("#weight-input");
const btnCompute = document.querySelector(".btn");
const inputBmiResult = document.getElementById("bmi-result");
const weightConditionEl = document.querySelector(".weight-condition");

function calculatorBMI() {
  const heightValue = inputHeightEl.value / 100;
  const weightValue = inputWeightEl.value;

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);

  inputBmiResult.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnCompute.addEventListener("click", calculatorBMI);
