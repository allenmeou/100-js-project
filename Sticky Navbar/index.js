const navbarEl = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

window.onscroll = function () {
  if (
    document.body.scroll >= 200 ||
    document.documentElement.scrollTop >= bottomContainer.offsetHeight
  ) {
    navbarEl.style.backgroundColor = "black";
  } else {
    navbarEl.style.backgroundColor = "";
  }
};
