const form = document.getElementById("form");
let scores = document.querySelector(".score");
const question = document.querySelector(".question");
const answer = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const clearScore = document.querySelector(".clear");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scores.innerHTML = `Score : ${score}`;

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
question.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

form.addEventListener("submit", (e) => {
  const userAns = answer.value;
  if (userAns == correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function clearScoreNumber() {
  localStorage.clear();
  if (localStorage.length === 0) {
    scores.innerHTML = `Score : 0`;
  }
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
