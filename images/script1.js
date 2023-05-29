document.getElementById("registerBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button click behavior
  
    // Clear any existing form elements
    clearForm();
  
    var registrationForm = document.createElement("form");
    registrationForm.id = "registrationForm";
  
    var heading = document.createElement("h2");
    heading.textContent = "Registration";
  
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.required = true;
  
    var mobileLabel = document.createElement("label");
    mobileLabel.textContent = "Mobile Number:";
    var mobileInput = document.createElement("input");
    mobileInput.type = "text";
    mobileInput.required = true;
  
    var emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.required = true;
  
    var passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Create Password:";
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.required = true;
  
    var confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.textContent = "Confirm Password:";
    var confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.type = "password";
    confirmPasswordInput.required = true;
  
    var submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Register";
  
    registrationForm.appendChild(heading);
    registrationForm.appendChild(nameLabel);
    registrationForm.appendChild(nameInput);
    registrationForm.appendChild(mobileLabel);
    registrationForm.appendChild(mobileInput);
    registrationForm.appendChild(emailLabel);
    registrationForm.appendChild(emailInput);
    registrationForm.appendChild(passwordLabel);
    registrationForm.appendChild(passwordInput);
    registrationForm.appendChild(confirmPasswordLabel);
    registrationForm.appendChild(confirmPasswordInput);
    registrationForm.appendChild(submitBtn);
  
    document.querySelector("main").appendChild(registrationForm);
  });
  
  document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button click behavior
  
    // Update the browser's location to the desired page
    window.location.href = "http://127.0.0.1:5500/index.html#";
  });
  
  
  document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button click behavior
  
    // Clear any existing form elements
    clearForm();
  
    var loginForm = document.createElement("form");
    loginForm.id = "loginForm";
  
    var heading = document.createElement("h2");
    heading.textContent = "Login";
  
    var emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.required = true;
  
    var passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.required = true;
  
    var submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Login";
  
    loginForm.appendChild(heading);
    loginForm.appendChild(emailLabel);
    loginForm.appendChild(emailInput);
    loginForm.appendChild(passwordLabel);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(submitBtn);
   
  
  
    document.querySelector("main").appendChild(loginForm);
    
  
  });
  
  function clearForm() {
    var main = document.querySelector("main");
    main.innerHTML = "";
  }
  
document.getElementById("registerBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button click behavior

  // Clear any existing form elements
  clearForm();

  var registrationForm = document.createElement("form");
  registrationForm.id = "registrationForm";

  var heading = document.createElement("h2");
  heading.textContent = "Registration";

  var nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;

  var mobileLabel = document.createElement("label");
  mobileLabel.textContent = "Mobile Number:";
  var mobileInput = document.createElement("input");
  mobileInput.type = "text";
  mobileInput.required = true;

  var emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.required = true;

  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Create Password:";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.required = true;

  var confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.textContent = "Confirm Password:";
  var confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.required = true;

  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Register";

  registrationForm.appendChild(heading);
  registrationForm.appendChild(nameLabel);
  registrationForm.appendChild(nameInput);
  registrationForm.appendChild(mobileLabel);
  registrationForm.appendChild(mobileInput);
  registrationForm.appendChild(emailLabel);
  registrationForm.appendChild(emailInput);
  registrationForm.appendChild(passwordLabel);
  registrationForm.appendChild(passwordInput);
  registrationForm.appendChild(confirmPasswordLabel);
  registrationForm.appendChild(confirmPasswordInput);
  registrationForm.appendChild(submitBtn);

  document.querySelector("main").appendChild(registrationForm);
});

document.getElementById("loginBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button click behavior

  // Update the browser's location to the desired page
  window.location.href = "http://127.0.0.1:5500/index.html#";
});


document.getElementById("loginBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button click behavior

  // Clear any existing form elements
  clearForm();

  var loginForm = document.createElement("form");
  loginForm.id = "loginForm";

  var heading = document.createElement("h2");
  heading.textContent = "Login";

  var emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.required = true;

  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.required = true;

  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Login";

  loginForm.appendChild(heading);
  loginForm.appendChild(emailLabel);
  loginForm.appendChild(emailInput);
  loginForm.appendChild(passwordLabel);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(submitBtn);
 


  document.querySelector("main").appendChild(loginForm);
  

});

function clearForm() {
  var main = document.querySelector("main");
  main.innerHTML = "";
}

  