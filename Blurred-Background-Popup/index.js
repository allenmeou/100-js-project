const btnEl = document.querySelector(".btn");
const btnPopupEl = document.querySelector(".popup-btn");
const containerEl = document.querySelector(".container ");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const inputEl = document.querySelector("#input");

btnEl.addEventListener("click", (e) => {
  popupContainerEl.classList.remove("active");
  containerEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  popupContainerEl.classList.add("active");
  containerEl.classList.remove("active");
});
