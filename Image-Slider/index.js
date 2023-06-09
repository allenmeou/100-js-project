const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");

let currentImage = 1;

let timeout;

nextBtn.addEventListener("click", (e) => {
  currentImage++;
  clearTimeout(timeout);
  updateImage();
});

prevBtn.addEventListener("click", (e) => {
  currentImage--;
  clearTimeout(timeout);
  updateImage();
});
updateImage();

function updateImage() {
  if (currentImage > imgsEl.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${
    (currentImage - 1) * 500
  }px)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 3000);
}
