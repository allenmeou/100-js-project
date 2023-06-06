const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const spanEl = document.createElement("span");

  const xPos = event.offsetX;
  const yPos = event.offsetY;

  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const size = Math.random() * 100;

  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  // 3s then delete the span
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
