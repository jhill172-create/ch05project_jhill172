// form-validation.js

// Function to check if required fields are missing
function checkMissing() {
  const requiredFields = document.querySelectorAll('.required');
  let missingCount = 0;

  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      missingCount++;
      field.classList.add('invalid');
    } else {
      field.classList.remove('invalid');
    }
  });

  const message = missingCount > 0 
    ? `${missingCount} required field(s) are missing.` 
    : 'All required fields are filled.';
  document.getElementById('missing-count').textContent = message;

  return missingCount === 0; // returns true if all filled
}

// Function to validate email input length
function validateEmail() {
  const emailField = document.getElementById('email');
  const emailValue = emailField.value.trim();

  if (emailValue.length < 8) {
    emailField.classList.add('invalid');
    return false;
  } else {
    emailField.classList.remove('invalid');
    return true;
  }
}

// Combined function to run both checks
function validateForm() {
  const allFieldsFilled = checkMissing();
  const emailValid = validateEmail();

  if (!allFieldsFilled || !emailValid) {
    alert("Please complete all required fields correctly before submitting.");
  } else {
    alert("Form submitted successfully!");
  }
}

// Add event listener to submit button
document.getElementById('submitBtn').addEventListener('click', validateForm);

