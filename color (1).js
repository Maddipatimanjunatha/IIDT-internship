const colorName = document.getElementById('color-name');
const colorButton = document.getElementById('color-button');
function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
function setNewColor() {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor; // Set body background color
  colorName.textContent = randomColor;
}
colorButton.addEventListener('click', setNewColor);
setNewColor();
