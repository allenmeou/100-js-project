const currencyFirstEl = document.querySelector(".currency-first");
const wordFirstEl = document.querySelector(".worth-first");

const currencySecondEl = document.querySelector(".currency-second");
const worthSecondEl = document.querySelector(".worth-second");

const exchangeRateEl = document.querySelector(".exchange-rate");

function updateRate() {
  fetch(
    ` https://v6.exchangerate-api.com/v6/fb2ee458b6ac3be2af89ce0b/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];

      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (wordFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);

wordFirstEl.addEventListener("input", updateRate);
