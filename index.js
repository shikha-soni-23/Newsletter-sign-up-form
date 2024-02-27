// index.js
const form = document.getElementById('signup-form');
const content = document.querySelector('.container')
const content_2 = document.querySelector('.success_msg')
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

// Email validation function
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      emailError.classList.remove('hide');
      emailInput.classList.add('input-error'); // Add input-error class to highlight the input box
      return;
    } else {
      emailError.classList.add('hide');
      emailInput.classList.remove('input-error'); // Remove input-error class if the email is valid
    }

    content.classList.add("hide");
    content_2.classList.remove("hide");
});

// Dismiss message button functionality
const dismissButton = document.querySelector('.dismiss-msg');
dismissButton.addEventListener('click', () => {
  content_2.classList.add('hide');
  content.classList.remove('hide');
});

// Hide error message and remove input-error class when user starts typing again
emailInput.addEventListener('input', () => {
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.classList.remove('hide');
    emailInput.classList.add('input-error');
  } else {
    emailError.classList.add('hide');
    emailInput.classList.remove('input-error');
  }
});
