const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

inputEl.addEventListener("click", () => {
  updateBody();
  updateLocalStorage();
});

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "#121212";
  } else {
    bodyEl.style.backgroundColor = "";
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
