const containerEl = document.querySelector(".container");

const btnRandom = document.querySelector(".random");

// loop and create div and assign class `color-container`
for (let index = 0; index < 50; index++) {
  const colorContainer = document.createElement("button");
  colorContainer.classList.add("color-container");
  containerEl.appendChild(colorContainer);
}

const colorContainerEls = document.querySelectorAll(".color-container");

// generate Colors inner display
function generateColors() {
  colorContainerEls.forEach((colorContainerItem) => {
    const newColorCode = randomColor();
    colorContainerItem.style.backgroundColor = "#" + newColorCode;
    colorContainerItem.innerText = "#" + newColorCode;
  });
}
generateColors();

// random color
function randomColor() {
  const chars = "0123456789bcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}

colorContainerEls.forEach((item) => {
  item.addEventListener("dblclick", function () {
    const itemValue = item.innerHTML;
    item.style.border = "7px solid ";
    item.style.borderColor = "#2F58CD";
    navigator.clipboard?.writeText && navigator.clipboard.writeText(itemValue);
    var timeoutStart = setTimeout(() => {
      alert("Copied:" + " " + itemValue);
      if (item.style.border) {
        item.style.border = "";
      }
    });
  });
});

// Button random colors
btnRandom.addEventListener("click", () => {
  setTimeout(() => {
    generateColors();
  }, 400);
});

// change theme black or light
function changeTheme() {
  var el = document.body;
  const btnTheme = document.querySelector(".change-theme");
  el.classList.toggle("theme-dark");
  if (el.classList.contains("theme-dark")) {
    btnTheme.style.backgroundColor = "white";
    btnTheme.style.color = "black";
    btnTheme.innerText = "Light mode";
  } else {
    btnTheme.style.backgroundColor = "black";
    btnTheme.style.color = "white";
    btnTheme.innerText = "Dark mode";
  }
}
