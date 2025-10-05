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
/* 
<p>
checkMissing() checks all inputs with the class “required” to see if they’re empty. 
It counts missing fields and displays a message below the form.
</p>

<p>
validateEmail() ensures that the email field has at least 8 characters. 
If not, it adds a red border to show an error.
</p>

<p>
validateForm() runs both checks together. If any field is missing or the email is invalid,
it prevents form submission and alerts the user.
</p>
*/


