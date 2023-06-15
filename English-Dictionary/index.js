const inputEl = document.querySelector(".input");
const infoEl = document.querySelector(".info-text");
const meaningContainerEl = document.querySelector(".meaning-container");
const titleEl = document.querySelector(".title");
const meaningEl = document.querySelector(".meaning");
const audioEl = document.querySelector(".audio");

var apiKey = "qpILzRMD16jcIGzhWWmriQ==B0VuttOe70FZUmtD";

async function fetchApi(word) {
  try {
    infoEl.innerText = `Searching the meaning of "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then(function (res) {
      return res.json();
    });
    console.log(result);
    if (result.title) {
      meaningContainerEl.style.display = "none";
      infoEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      meaningContainerEl.style.display = "block";
      infoEl.style.display = "none";
      audioEl.style.display = "";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    meaningContainerEl.style.display = "none";
    alert("word not found :" + " " + word);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    console.log(error);
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter" && e.which === 13) {
    fetchApi(e.target.value);
  }
});
