const btnEl = document.getElementById("btn");
const pJokeEl = document.querySelector(".joke");

const apiKey = "qpILzRMD16jcIGzhWWmriQ==B0VuttOe70FZUmtD";

const option = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    pJokeEl.innerHTML = "Update...";
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading...";

    const response = await fetch(apiUrl, option);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerHTML = "TELL ME A JOKE";

    pJokeEl.innerHTML = data[0].joke;
  } catch (error) {
    pJokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
