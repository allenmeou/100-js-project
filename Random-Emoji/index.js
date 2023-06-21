const btnEl = document.querySelector(".btn");
const emojiNameEl = document.querySelector(".emoji-name");

const emoji = [];

async function getEmoji() {
  let res = await fetch(
    "https://emoji-api.com/emojis?access_key=fbbae8b415e9a3b37eab571e55cba64087f54a97"
  );
  const data = await res.json();

  for (let index = 0; index < data.length; index++) {
    emoji.push({
      emojiName: data[index].character,
      emojiUnicode: data[index].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.textContent = emoji[randomNum].emojiName;
  emojiNameEl.textContent = emoji[randomNum].emojiUnicode;
});
