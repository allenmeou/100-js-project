const rantingsEl = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".app");

let selectedRating = "";

rantingsEl.forEach((rantingEl) => {
  rantingEl.addEventListener("click", (e) => {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", (e) => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        <button onclick = 'backHome()' class = 'btn' >Back</button>
        `;
  }
});

function removeActive() {
  rantingsEl.forEach((ranting) => {
    ranting.classList.remove("active");
  });
}

function backHome() {
  window.location.reload();
}
