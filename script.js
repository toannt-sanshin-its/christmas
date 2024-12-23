const canvas = document.getElementById("snowfall");
const ctx = canvas.getContext("2d");
const music = document.getElementById("background-music");
const snowflakes = [];

// Cấu hình canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Hàm tạo bông tuyết
function createSnowflake() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 5 + 2;
  const speed = Math.random() * 2 + 0.5;

  return { x, y, size, speed };
}

// Vẽ bông tuyết
function drawSnowflake(snowflake) {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.fill();
}

// Cập nhật vị trí
function updateSnowflake(snowflake) {
  snowflake.y += snowflake.speed;
  if (snowflake.y > canvas.height) {
    snowflake.y = 0;
    snowflake.x = Math.random() * canvas.width;
  }
}

// Hiệu ứng tuyết rơi
function animateSnowfall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    drawSnowflake(snowflake);
    updateSnowflake(snowflake);
  });

  requestAnimationFrame(animateSnowfall);
}

// Bắt đầu hiệu ứng
function startSnowfall() {
  for (let i = 0; i < 200; i++) {
    snowflakes.push(createSnowflake());
  }
  animateSnowfall();
}

// Bật/Tắt nhạc
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Sự kiện
document.getElementById("snow-btn").addEventListener("click", startSnowfall);
document.getElementById("music-btn").addEventListener("click", toggleMusic);
