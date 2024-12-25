// Mensagens de Boas-Vindas Dinâmicas
const quotes = [
  "🎄 Que este Natal seja cheio de amor e alegria!",
  "✨ O Ano Novo está chegando com novas esperanças!",
  "🎁 Presentes são ótimos, mas momentos especiais são os verdadeiros tesouros.",
  "🥂 Celebre cada conquista, grande ou pequena.",
  "🌟 A magia do Natal está nos corações generosos."
];

let currentIndex = 0; // Índice da mensagem atual

function displayWelcomeMessage() {
  const messageElement = document.getElementById("quoteText");
  if (!messageElement) {
    console.error("Elemento 'quoteText' não encontrado no DOM.");
    return;
  }

  // Atualiza a mensagem dinamicamente
  function updateMessage() {
    messageElement.innerText = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length; // Incrementa o índice e reinicia ao final
  }

  // Exibe a primeira mensagem
  updateMessage();

  // Muda a mensagem automaticamente a cada 5 segundos
  setInterval(updateMessage, 5000);
}

// Chama a função para iniciar as mensagens automáticas
displayWelcomeMessage();

// Mensagens Personalizadas
function showMessageWithName(type) {
  const userName = prompt("Digite seu nome para personalizar a mensagem:");
  if (!userName) {
    alert("Por favor, insira seu nome para ver a mensagem.");
    return;
  }

  let message;

  if (type === "natal") {
    message = `🎄 Feliz Natal, ${userName}! Que esta data especial aqueça seu coração com o amor dos que te cercam e ilumine seu caminho com esperança, alegria e paz!`;
  } else if (type === "anonovo") {
    message = `🎆 Feliz Ano Novo, ${userName}! Que 2025 traga novas oportunidades, muitos sorrisos e momentos inesquecíveis. Que cada conquista seja uma celebração de sua dedicação e esforço!`;
  } else {
    alert("Tipo de mensagem inválido!");
    return;
  }

  const messageBox = document.getElementById("messageBox");
  if (!messageBox) {
    console.error("Elemento 'messageBox' não encontrado no DOM.");
    return;
  }

  messageBox.innerHTML = message;
}

// Mensagem Aleatória
function randomMessage() {
  const messages = [
    "🎄 Que seu Natal seja cheio de paz e amor!",
    "🎅 Boas Festas! Aproveite este momento mágico.",
    "🎁 Que o espírito natalino ilumine sua vida!",
    "🍂 O Natal nos lembra que mesmo no inverno podemos florescer.",
    "🔔 Que as badaladas do Natal soem como um convite para a renovação interior.",
    "🌌 Sob o céu estrelado, agradeça por mais um Natal cercado de amor e esperança.",
    "🎋 Que as tradições natalinas reacendam os valores mais puros em nossos corações.",
    "🎂 Que a celebração do nascimento de Cristo renove sua fé na vida e no amor.",
    "🕊️ Que as boas ações deste Natal plantem sementes de paz no mundo.",
    "🎄 Que sua árvore de Natal seja carregada de bons desejos e realizações futuras.",
    "🌟 Que o verdadeiro sentido do Natal esteja presente em cada gesto seu.",
    "🎆 Que 2025 seja repleto de conquistas e momentos inesquecíveis!",
    "🥂 Brinde às vitórias e aos desafios que nos fizeram crescer em 2024.",
    "🌟 Um novo ano é uma nova oportunidade para recomeçar!",
    "🗓️ Faça de 2025 o melhor capítulo da sua história.",
    "🎉 Que este Ano Novo seja tão brilhante quanto seus sonhos!",
    "✨ Deixe para trás o que não te serve e leve o que te faz feliz.",
    "🕰️ O tempo não volta, mas os aprendizados ficam. Feliz Ano Novo!",
    "🚀 Em 2025, voe alto e conquiste tudo o que desejar!",
    "🌈 Um Ano Novo cheio de cores, risos e muita felicidade para você.",
    "🌍 Que o próximo ano nos aproxime mais da paz e da união."
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  const messageBox = document.getElementById("messageBox");
  if (!messageBox) {
    console.error("Elemento 'messageBox' não encontrado no DOM.");
    return;
  }

  messageBox.innerHTML = message;
}

// Alterar Tema Dinamicamente
function changeTheme(color) {
  const body = document.body;
  body.classList.remove("red-theme", "blue-theme", "default-theme");

  if (color === "red") {
    body.classList.add("red-theme");
  } else if (color === "blue") {
    body.classList.add("blue-theme");
  } else {
    body.classList.add("default-theme");
  }
}

// Compartilhar Mensagens
function shareOnWhatsApp() {
  const message = document.getElementById("messageBox")?.innerText;
  if (!message) {
    alert("Nenhuma mensagem para compartilhar!");
    return;
  }

  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

function shareOnInstagram() {
  const message = document.getElementById("messageBox")?.innerText;
  if (!message) {
    alert("Nenhuma mensagem para compartilhar!");
    return;
  }

  alert(`Instagram não suporta compartilhamento direto de texto. Copie a mensagem abaixo:\n\n${message}`);
}

// Música
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  if (!music) {
    console.error("Elemento 'backgroundMusic' não encontrado no DOM.");
    return;
  }

  const button = document.querySelector('button[onclick="toggleMusic()"]');
  if (music.paused) {
    music.play();
    button.innerText = "Pausar Música 🎵";
  } else {
    music.pause();
    button.innerText = "Tocar Música 🎶";
  }
}

// Neve e Fogos
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerText = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.getElementById("snow-container").appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 5000);
}

function startSnowfall() {
  setInterval(createSnowflake, 100);
}

function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 100 + "vh";
  firework.style.animationDuration = Math.random() * 1 + 1.5 + "s";
  document.getElementById("fireworks-container").appendChild(firework);
  setTimeout(() => firework.remove(), 2500);
}

function startFireworks() {
  setInterval(createFirework, 300);
}

function displaySeasonalAnimation() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  if (month === 12 && day === 25) startSnowfall();
  if ((month === 12 && day === 31) || (month === 1 && day === 1)) startFireworks();
}

window.onload = displaySeasonalAnimation;
