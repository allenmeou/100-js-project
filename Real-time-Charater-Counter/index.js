const textareaEl = document.querySelector("#textarea");
const totalCounterEl = document.querySelector("#total-counter");
const remainingCounterEl = document.querySelector("#remaining-counter");

textareaEl.addEventListener("keyup", (e) => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerHTML = textareaEl.value.length;

  remainingCounterEl.innerHTML =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
