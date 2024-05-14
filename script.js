// Constants
const LINE_WIDTH = 5;
const LINE_CAP = 'round';

// Get the canvas element and its context
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');

// Get the clear button element
const clearButton = document.getElementById('clearButton');

// Get the save button element
const saveButton = document.getElementById('saveButton');

// Initialize variables
let drawing = false;
let lastX, lastY;
let signatureBox;

// Function to handle drawing start
function startDrawing(event) {
  drawing = true;
  lastX = getCoordinate(event, 'clientX') - canvas.offsetLeft;
  lastY = getCoordinate(event, 'clientY') - canvas.offsetTop;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
}

// Function to handle drawing move
function draw(event) {
  if (drawing) {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    lastX = getCoordinate(event, 'clientX') - canvas.offsetLeft;
    lastY = getCoordinate(event, 'clientY') - canvas.offsetTop;
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  }
}

// Function to save the canvas as an image
function saveCanvas() {
  drawing = false;
  // Create a new image element
  const image = new Image();
  // Set the source of the image to the canvas
  image.src = canvas.toDataURL();
  // Replace the canvas with the image
  canvas.parentNode.replaceChild(image, canvas);
}

// Function to handle drawing end
function endDrawing() {
  drawing = false;
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to get coordinate from event
function getCoordinate(event, coordinate) {
  return event.touches? event.touches[0][coordinate] : event[coordinate];
}

// Add event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', endDrawing);

clearButton.addEventListener('click', clearCanvas);

saveButton.addEventListener('click', saveCanvas);