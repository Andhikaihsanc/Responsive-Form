const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  console.log({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  });
});