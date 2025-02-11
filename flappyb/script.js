// Variabel
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bird = {
  x: 50,
  y: 250,
  vy: 0,
  gravity: 0.2
};
var pipes = [];
var score = 0;
var gameOver = false;

// Fungsi
function drawBird() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(bird.x, bird.y, 30, 30);
}

function drawPipes() {
  for (var i = 0; i < pipes.length; i++) {
    ctx.fillStyle = '#964b00';
    ctx.fillRect(pipes[i].x, pipes[i].y, 80, 200);
    ctx.fillRect(pipes[i].x, pipes[i].y + 400, 80, 200);
  }
}

function update() {
  if (!gameOver) {
    bird.vy += bird.gravity;
    bird.y += bird.vy;

    if (bird.y + 30 > canvas.height) {
      gameOver = true;
    }

    for (var i = 0; i < pipes.length; i++) {
      pipes[i].x -= 1;

      if (pipes[i].x + 80 < 0) {
        pipes.splice(i, 1);
      }

      if (checkCollision(bird, pipes[i])) {
        gameOver = true;
      }
    }

    if (Math.random() < 0.01) {
      pipes.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 400)
      });
    }

    score++;
  }
}

function checkCollision(bird, pipe) {
  if (bird.x + 30 > pipe.x &&
      bird.x < pipe.x + 80 &&
      (bird.y < pipe.y + 200 ||
       bird.y + 30 > pipe.y + 400)) {
    return true;
  }

  return false;
}

function fly() {
  bird.vy = -5;
}

// Event listener
document.getElementById('fly-button').addEventListener('click', fly);

// Main loop
setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawPipes();
  update();
  ctx.fillStyle = '#000';
  ctx.font = '24px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Score: ' + score, 10, 10);

  if (gameOver) {
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
  }
}, 1000 / 30);