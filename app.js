// words.json dan so'zlarni yuklaymiz
let words = [];

fetch("words.json")
  .then(response => response.json())
  .then(data => {
    words = data;
  });


// qidiruv funksiyasi
function searchWord() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const resultBox = document.getElementById("results");

  resultBox.innerHTML = "";

  if (input === "") return;

  const filtered = words.filter(item =>
    item.word.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultBox.innerHTML = "<p>❌ So'z topilmadi</p>";
    return;
  }

  filtered.forEach(item => {

    const div = document.createElement("div");

    div.className = "word-card";

    div.innerHTML = `
      <h3>${item.word}</h3>
      <p><b>Ma'nosi:</b> ${item.meaning}</p>
      <p><b>Sinonim:</b> ${item.synonym}</p>
      <p><b>Antonim:</b> ${item.antonym}</p>
    `;

    resultBox.appendChild(div);

  });

}


// yozish bilan qidirish
document
.getElementById("searchInput")
.addEventListener("input", searchWord);
