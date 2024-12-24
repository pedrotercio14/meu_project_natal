// Mensagens de Boas-Vindas Dinâmicas
const quotes = [
  "🎄 Que este Natal seja cheio de amor e alegria!",
  "✨ O Ano Novo está chegando com novas esperanças!",
  "🎁 Presentes são ótimos, mas momentos especiais são os verdadeiros tesouros.",
  "🥂 Celebre cada conquista, grande ou pequena.",
  "🌟 A magia do Natal está nos corações generosos."
];

function displayWelcomeMessage() {
  const storedMessage = sessionStorage.getItem('welcomeMessage');
  if (!storedMessage) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    sessionStorage.setItem('welcomeMessage', quotes[randomIndex]);
  }
  document.getElementById("quoteText").innerText = sessionStorage.getItem('welcomeMessage');
}

displayWelcomeMessage();

// Mensagens Personalizadas
function showMessageWithName(type) {
  const userName = prompt("Digite seu nome para personalizar a mensagem:");

  if (!userName) {
    // Caso o usuário não insira um nome, não exibe nenhuma mensagem
    alert("Por favor, insira seu nome para ver a mensagem.");
    return;
  }

  let message;

  if (type === "natal") {
    message = `🎄 Feliz Natal, ${userName}! Que seu dia seja repleto de paz e alegria!`;
  } else if (type === "anonovo") {
    message = `🎆 Feliz Ano Novo, ${userName}! Que 2025 seja cheio de conquistas!`;
  }

  document.getElementById("messageBox").innerHTML = message;
}

// Mensagem Aleatória
function randomMessage() {
  const messages = [
    "🎄 Que seu Natal seja cheio de paz e amor!",
    "🎅 Boas Festas! Aproveite este momento mágico.",
    "🎁 Que o espírito natalino ilumine sua vida!"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  document.getElementById("messageBox").innerHTML = message;
}

// Alterar Tema Dinamicamente
function changeTheme(color) {
  const body = document.body;
  if (color === 'red') {
    body.style.background = "url('assets/red-theme.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  } else if (color === 'blue') {
    body.style.background = "url('assets/blue-theme.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  } else {
    body.style.background = "url('assets/background.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  }
}

// Compartilhar Mensagens
function shareOnWhatsApp() {
  const message = document.getElementById("messageBox").innerText;
  if (message) {
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  } else {
    alert("Nenhuma mensagem para compartilhar!");
  }
}

function shareOnInstagram() {
  const message = document.getElementById("messageBox").innerText;
  if (message) {
    alert("O Instagram não permite compartilhamento direto de texto. Copie a mensagem:\n\n" + message);
  } else {
    alert("Nenhuma mensagem para compartilhar!");
  }
}

// Mini-Game
function revealGift() {
  const gifts = [
    "🎁 Um abraço virtual!",
    "🎄 Um cartão especial foi enviado para você!",
    "🥂 Desejamos um Ano Novo cheio de conquistas!"
  ];
  const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  document.getElementById("giftMessage").innerText = randomGift;
}

// Música
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  const button = document.querySelector('button[onclick="toggleMusic()"]');
  if (music.paused) {
    music.play();
    button.innerText = "Pausar Música";
  } else {
    music.pause();
    button.innerText = "Tocar Música";
  }
}
