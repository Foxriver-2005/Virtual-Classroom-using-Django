
  // Function to open login form
  function openForm() {
    const loginForm = document.getElementById("login-form");
    const container = document.querySelector(".full-container");
    loginForm.classList.add("active");
    container.classList.add("active");

    // Ensure register form is hidden if open
    const registerForm = document.getElementById("register-form");
    registerForm.classList.remove("active");
  }

  // Function to open register form
  function openRegisterForm() {
    const registerForm = document.getElementById("register-form");
    const container = document.querySelector(".full-container");
    registerForm.classList.add("active");
    container.classList.add("active");

    // Ensure login form is hidden if open
    const loginForm = document.getElementById("login-form");
    loginForm.classList.remove("active");
  }

  // Function to close the form
  function closeForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const container = document.querySelector(".full-container");
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");
    container.classList.remove("active");
  }

  // Function to validate registration form
  function validateRegisterForm(event) {
    const form = document.querySelector('#register-form form');
    const nom = form.querySelector('input[name="nom"]');
    const prenom = form.querySelector('input[name="prenom"]');
    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="password"]');
    const passwordConfirm = form.querySelector('input[name="password_confirm"]');
    const role = form.querySelector('select[name="role"]');
    const picture = form.querySelector('input[name="picture"]');
    
    // Clear previous error messages
    const errorMessages = form.querySelectorAll('.error');
    errorMessages.forEach(function(msg) {
      msg.remove();
    });

    let isValid = true;

    // Check if fields are empty
    if (!nom.value.trim()) {
      displayError(nom, 'First Name is required');
      isValid = false;
    }
    if (!prenom.value.trim()) {
      displayError(prenom, 'Last Name is required');
      isValid = false;
    }
    if (!email.value.trim()) {
      displayError(email, 'Email is required');
      isValid = false;
    }
    if (!password.value.trim()) {
      displayError(password, 'Password is required');
      isValid = false;
    }
    if (!passwordConfirm.value.trim()) {
      displayError(passwordConfirm, 'Please confirm your password');
      isValid = false;
    } else if (password.value !== passwordConfirm.value) {
      displayError(passwordConfirm, 'Passwords do not match');
      isValid = false;
    }
    if (!role.value.trim()) {
      displayError(role, 'Role is required');
      isValid = false;
    }
    if (!picture.files.length) {
      displayError(picture, 'Profile Picture is required');
      isValid = false;
    }

    // If form is invalid, prevent submission
    if (!isValid) {
      event.preventDefault();
    }
  }

  // Function to display error message
  function displayError(field, message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = message;
    field.parentNode.appendChild(errorMessage);
  }

  // Attach validation function to form submit
  const registerForm = document.querySelector('#register-form form');
  registerForm.addEventListener('submit', validateRegisterForm);

