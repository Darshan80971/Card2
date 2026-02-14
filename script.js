const herName = "My Sunshine";

document.getElementById('title').textContent =
  `Hey ${herName}, Will You Be My Valentine? 💕`;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const prompt = document.querySelector('.prompt');
let noClicks = 0;

noBtn.addEventListener('mouseover', () => {
  noClicks++;

  yesBtn.style.transform = `scale(${1 + noClicks * 0.15})`;

  const messages = [
  "Are you sure? 💕",
  "Pretty please 😳",
  "Don’t break my heart 💔",
  "I’ll cry 😭",
  "Last chance 😢",
  "You can’t catch me 😜",
  "Think again… 💖",
  "I’ve been waiting for this 😘",
  "Promise you’ll say yes? 🥺",
  "Nooo, don’t do that 😢",
  "I’ll be sad forever 😭",
  "Give me a chance 💌",
  "My heart is yours 💘",
  "You know I love you 💖",
  "Please… just say yes ✨"
];

prompt.textContent = messages[noClicks % messages.length];


  const card = document.querySelector('.valentine-card');
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener('click', () => {
  const card = document.querySelector('.valentine-card');

  card.innerHTML = `
    <h1>Yay!! 💖</h1>
    <div class="photo-container">
      <img src="your-photo.jpg" alt="Her Photo">
      <p class="photo-comment">
        hehehehe sadinchesaa ✨💘
      </p>
    </div>
  `;

  spawnHearts();
});

// Confetti hearts
function spawnHearts() {
  const canvas = document.getElementById('hearts');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const hearts = [];

  for (let i = 0; i < 50; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      ctx.fillStyle = 'rgba(255, 105, 180, 0.9)';
      ctx.shadowColor = 'rgba(255, 105, 180, 0.7)';
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.moveTo(h.x, h.y);

      ctx.bezierCurveTo(
        h.x, h.y - h.size / 2,
        h.x - h.size / 2, h.y - h.size / 2,
        h.x - h.size / 2, h.y
      );

      ctx.bezierCurveTo(
        h.x - h.size / 2, h.y + h.size / 2,
        h.x, h.y + h.size,
        h.x, h.y + h.size * 1.3
      );

      ctx.bezierCurveTo(
        h.x, h.y + h.size,
        h.x + h.size / 2, h.y + h.size / 2,
        h.x + h.size / 2, h.y
      );

      ctx.bezierCurveTo(
        h.x + h.size / 2, h.y - h.size / 2,
        h.x, h.y - h.size / 2,
        h.x, h.y
      );

      ctx.fill();

      h.y -= h.speed;
      if (h.y < -20) h.y = canvas.height + 20;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ✨ Sparkle Cursor
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);
});

