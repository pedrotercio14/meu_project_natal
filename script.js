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
const natalMessages = [
  `🎄 Feliz Natal, ${userName}! Que esta data especial aqueça seu coração com amor e esperança.`,
  `🎅 Boas Festas, ${userName}! Que seu Natal seja mágico e cheio de alegria.`,
  `🎁 ${userName}, que este Natal traga paz e harmonia para você e sua família.`,
  `🔔 ${userName}, que as badaladas do Natal soem felicidade e união em seu lar.`,
  `🌟 ${userName}, o espírito natalino está nos pequenos gestos. Feliz Natal!`,
  `🕊️ ${userName}, que a paz do Natal encha sua vida de amor e serenidade.`,
  `🎄 Um Natal cheio de abraços e memórias inesquecíveis para você, ${userName}!`,
  `🎁 Que o Natal seja um momento de renovar sua fé e gratidão, ${userName}.`,
  `🎅 ${userName}, um Natal repleto de luz e risadas para você e sua família.`,
  `🔔 O Natal é sobre compartilhar amor. Feliz Natal, ${userName}!`,
  `✨ Que as estrelas do Natal iluminem sua jornada, ${userName}.`,
  `🎄 ${userName}, que o verdadeiro espírito do Natal transforme seu coração.`,
  `🌌 ${userName}, sob o céu natalino, agradeça por mais um ano cercado de amor.`,
  `🎋 Que a magia do Natal reacenda seus melhores sonhos, ${userName}.`,
  `🎂 Celebre o nascimento de Cristo com amor e fé, ${userName}.`,
  `🌟 O Natal nos ensina que o amor é o maior presente. Feliz Natal, ${userName}!`,
  `🎄 Que sua árvore de Natal seja carregada de boas memórias, ${userName}.`,
  `🌟 Que o brilho das luzes natalinas inspire sua vida, ${userName}.`,
  `🎅 O presente mais precioso é estar com quem amamos. Feliz Natal, ${userName}!`,
  `🕊️ Que este Natal plante sementes de paz e felicidade, ${userName}.`
];

const anoNovoMessages = [
  `🎆 Feliz Ano Novo, ${userName}! Que 2025 seja um ano cheio de luz e amor.`,
  `🥂 Boas-vindas a 2025, ${userName}! Que seus sonhos se tornem realidade.`,
  `🎉 Celebre o início de 2025 com gratidão e entusiasmo, ${userName}!`,
  `🌟 ${userName}, que este novo ano traga momentos inesquecíveis.`,
  `✨ Deixe para trás o passado e abrace o futuro com coragem, ${userName}.`,
  `🗓️ Faça de 2025 o melhor capítulo da sua história, ${userName}.`,
  `🎆 Um brinde às conquistas que te esperam em 2025, ${userName}!`,
  `🌈 Que 2025 seja um ano cheio de cores, sorrisos e alegrias, ${userName}.`,
  `🌍 Que 2025 nos aproxime mais da paz e união, ${userName}.`,
  `🚀 Voe alto e realize seus maiores sonhos em 2025, ${userName}!`,
  `🥂 Saúde e felicidade em cada dia de 2025, ${userName}.`,
  `🎇 Que cada estrela no céu te guie para novas conquistas, ${userName}.`,
  `💫 O Ano Novo é um recomeço. Aproveite cada momento, ${userName}.`,
  `🎉 ${userName}, celebre cada vitória em 2025, por menor que seja.`,
  `🌟 Um ano de oportunidades incríveis te espera em 2025, ${userName}.`,
  `✨ Renove sua energia e trace novos objetivos para 2025, ${userName}.`,
  `🎆 Brilhe intensamente em 2025, ${userName}. O mundo precisa da sua luz.`,
  `🍀 Que a sorte e a felicidade te acompanhem neste Ano Novo, ${userName}.`,
  `💖 Seja a melhor versão de si mesmo em 2025, ${userName}.`,
  `🎇 Que 2025 seja repleto de amor, saúde e muito sucesso para você, ${userName}!`
];

function showMessageWithName(type) {
  const userName = prompt("Digite seu nome para personalizar a mensagem:");
  if (!userName) {
    alert("Por favor, insira seu nome para ver a mensagem.");
    return;
  }

  let message;

  if (type === "natal") {
    const randomIndex = Math.floor(Math.random() * natalMessages.length);
    message = natalMessages[randomIndex];
  } else if (type === "anonovo") {
    const randomIndex = Math.floor(Math.random() * anoNovoMessages.length);
    message = anoNovoMessages[randomIndex];
  } else {
    alert("Tipo de mensagem inválido!");
    return;
  }

  const messageBox = document.getElementById("messageBox");
  if (!messageBox) {
    console.error("Elemento 'messageBox' não encontrado no DOM.");
    return;
  }

  messageBox.innerHTML = message.replace(/\${userName}/g, userName);
}

// Mensagens Aleatórias
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
    "🎆 Que 2025 seja repleto de conquistas e momentos inesquecíveis!",
    "🥂 Brinde às vitórias e aos desafios que nos fizeram crescer em 2024.",
    "✨ Deixe para trás o que não te serve e leve o que te faz feliz.",
    "🕰️ O tempo não volta, mas os aprendizados ficam. Feliz Ano Novo!",
    "🚀 Em 2025, voe alto e conquiste tudo o que desejar!",
    "🌈 Um Ano Novo cheio de cores, risos e muita felicidade para você.",
    "🎉 Que este Ano Novo seja tão brilhante quanto seus sonhos!",
    "🌟 Que o verdadeiro sentido do Natal esteja presente em cada gesto seu.",
    "🍀 Que 2025 seja um ano de sorte, alegria e conquistas!",
    "🕊️ Paz e harmonia para todos neste Natal e Ano Novo!"
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
