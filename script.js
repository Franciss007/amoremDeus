const verses = [
  {
    title: "Gênesis 2:24",
    text: "Portanto, deixará o homem o seu pai e a sua mãe, e unir-se-á à sua mulher, e serão ambos uma só carne."
  },
  {
    title: "1 Coríntios 13:4-7",
    text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Tudo sofre, tudo crê, tudo espera, tudo suporta."
  },
  {
    title: "Efésios 5:25",
    text: "Maridos, amem suas esposas, assim como Cristo amou a igreja e entregou-se por ela."
  },
  {
    title: "Eclesiastes 4:9-10",
    text: "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se."
  },
  {
    title: "Colossenses 3:14",
    text: "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito."
  },
  {
    title: "Provérbios 18:22",
    text: "Aquele que encontra uma esposa, acha o bem, e alcança a benevolência do Senhor."
  },
  {
    title: "Provérbios 31:10-11",
    text: "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis. O coração do seu marido está nela confiado; assim ele não necessitará de despojo"
  },
];

let currentIndex = 0;
let titleElement, textElement, summaryElement, messageBox, dotsContainer;

window.onload = function () {
  titleElement = document.getElementById("verse-title");
  textElement = document.getElementById("verse-text");
  summaryElement = document.getElementById("summary");
  messageBox = document.getElementById("messageBox");
  dotsContainer = document.getElementById("progressDots");

  createProgressDots();
  showVerse(currentIndex);
};

function showVerse(index) {
  // fade out
  messageBox.classList.remove("fade-in");

  setTimeout(() => {
    const verse = verses[index];
    titleElement.textContent = verse.title;
    textElement.textContent = verse.text;
    summaryElement.textContent = `Versículo ${index + 1} de ${verses.length}`;
    updateProgressDots();

    // fade in
    messageBox.classList.add("fade-in");
  }, 100); // pequena espera para animação funcionar melhor
}

function nextMessage() {
  currentIndex = (currentIndex + 1) % verses.length;
  showVerse(currentIndex);
}

function previousMessage() {
  currentIndex = (currentIndex - 1 + verses.length) % verses.length;
  showVerse(currentIndex);
}

function createProgressDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < verses.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  }
}

function updateProgressDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Botão de compartilhar
function shareVerse() {
  const verse = verses[currentIndex];
  const textToShare = `${verse.title}\n\n${verse.text}`;

  if (navigator.share) {
    navigator.share({
      title: verse.title,
      text: verse.text,
    }).catch((err) => console.error("Erro ao compartilhar:", err));
  } else {
    // fallback: copiar para área de transferência
    navigator.clipboard.writeText(textToShare).then(() => {
      alert("Versículo copiado para a área de transferência!");
    });
  }
}
function createHearts() {
  const container = document.querySelector(".heart-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.random() * 10 + 10; // entre 10px e 20px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // entre 5 e 10s

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 800); // a cada 800ms cria um novo coração
}

window.onload = function () {
  // ... seu código existente
  titleElement = document.getElementById("verse-title");
  textElement = document.getElementById("verse-text");
  summaryElement = document.getElementById("summary");
  messageBox = document.getElementById("messageBox");
  dotsContainer = document.getElementById("progressDots");

  createProgressDots();
  showVerse(currentIndex);

  // inicia corações
  createHearts();
};
