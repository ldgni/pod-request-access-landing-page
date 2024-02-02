// Get the DOM elements
const requestForm = document.getElementById("request-form");
const emailInput = document.getElementById("email-input");

// Create a regular expression to validate the email address
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add an event listener to the form
requestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Remove existing error message
  const existingErrorMessage = document.getElementById("error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }

  // Check if the email address is invalid
  if (!emailValidationRegex.test(emailInput.value)) {
    // Create an error message
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Oops! Please check your email";
    errorMessage.id = "error-message";
    errorMessage.className = "form__error";

    if (emailInput.value === "") {
      errorMessage.innerText = "Oops! Please add your email";
    }

    // Append the error message to the form
    requestForm.appendChild(errorMessage);
  } else {
    // Clear the input field and remove focus
    emailInput.value = "";
    emailInput.blur();
  }
});
