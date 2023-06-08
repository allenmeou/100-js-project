const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", (e) => {
  imageNum = 10;
  newImage();
});

function newImage() {
  for (let index = 0; index < imageNum; index++) {
    const imgEl = document.createElement("img");

    imgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imageContainerEl.appendChild(imgEl);
  }
}
