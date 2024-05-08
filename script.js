const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let lastX, lastY;

// Mouse events
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  lastX = e.clientX - canvas.offsetLeft;
  lastY = e.clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
});

canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});

// Touch events
canvas.addEventListener('touchstart', (e) => {
  drawing = true;
  lastX = e.touches[0].clientX - canvas.offsetLeft;
  lastY = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
});

canvas.addEventListener('touchmove', (e) => {
  if (drawing) {
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
  }
});

canvas.addEventListener('touchend', () => {
  drawing = false;
});

// Clear button
document.getElementById('clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});