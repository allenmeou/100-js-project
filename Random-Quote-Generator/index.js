const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const btnEl = document.querySelector(".btn");

const category = "happiness";
const apiKey = "qpILzRMD16jcIGzhWWmriQ==B0VuttOe70FZUmtD";

const apiURL = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const option = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    quoteEl.innerText = "Update...";
    btnEl.disable = true;
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL, option);
    const data = await response.json();

    btnEl.disable = false;
    quoteEl.innerText = data[0].quote;
    authorEl.innerText = data[0].author;
    btnEl.innerText = "GET A QUOTE";
  } catch (error) {
    alert(error);
  }
}

btnEl.addEventListener("click", getQuote);
