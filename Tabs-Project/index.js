const buttonEl = document.querySelectorAll(".button");
const tabs = document.querySelector(".tabs");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    buttonEl.forEach(function (btn) {
      btn.classList.remove("live");
    });
  }
  e.target.classList.add("live");

  articles.forEach((article) => {
    article.classList.remove("live");
  });

  const element = document.getElementById(id);
  element.classList.add("live");
});
