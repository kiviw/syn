const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = Math.floor(canvas.width / 20);
const rows = Math.floor(canvas.height / 20);

const matrix = createMatrix(cols, rows);

function createMatrix(cols, rows) {
  const matrix = [];
  for (let i = 0; i < cols; i++) {
    matrix[i] = [];
    for (let j = 0; j < rows; j++) {
      matrix[i][j] = getRandomCharacter();
    }
  }
  return matrix;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00'; // Green color

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.fillText(matrix[i][j], i * 20, j * 20);
      if (j * 20 > canvas.height && Math.random() > 0.975) {
        matrix[i][j] = getRandomCharacter();
      }
    }
    matrix[i][rows - 1] = getRandomCharacter();
  }

  requestAnimationFrame(draw);
}

function getRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return characters[Math.floor(Math.random() * characters.length)];
}

draw();
    
