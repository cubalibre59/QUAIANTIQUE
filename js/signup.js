// Sélection des inputs

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");

// Ajouter les écouteurs pour chaque champ (solo si existen)
if (inputNom) inputNom.addEventListener("keyup", () => validateRequired(inputNom));
if (inputPrenom) inputPrenom.addEventListener("keyup", () => validateRequired(inputPrenom));
if (inputEmail) inputEmail.addEventListener("keyup", () => validateRequired(inputEmail));

// Función de validación general
function validateRequired(input) {
  if (input.value.trim() !== '') {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

// Validación de email con regex y comparación con email esperado
function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

const mailUser = "utilisateur@example.com";

if (inputEmail) {
  inputEmail.addEventListener("keyup", () => {
    const emailTyped = inputEmail.value.trim();
    if (validateEmailFormat(emailTyped)) {
      if (emailTyped.toLowerCase() === mailUser.toLowerCase()) {
        inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
      } else {
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
      }
    } else {
      inputEmail.classList.remove("is-valid");
      inputEmail.classList.add("is-invalid");
    }
  });
}

// Validación de password
function validatePassword(password) {
  return password.trim().length >= 6;  // mínimo 6 caracteres
}

if (inputPassword) {
  inputPassword.addEventListener("keyup", () => {
    const passTyped = inputPassword.value;
    if (validatePassword(passTyped)) {
      inputPassword.classList.add("is-valid");
      inputPassword.classList.remove("is-invalid");
    } else {
      inputPassword.classList.remove("is-valid");
      inputPassword.classList.add("is-invalid");
    }
  });
}

// Confirmación de password
if (inputValidatePassword && inputPassword) {
  inputValidatePassword.addEventListener("keyup", () => {
    const passTyped = inputValidatePassword.value;
    const originalPassword = inputPassword.value;
    if (passTyped === originalPassword && validatePassword(passTyped)) {
      inputValidatePassword.classList.add("is-valid");
      inputValidatePassword.classList.remove("is-invalid");
    } else {
      inputValidatePassword.classList.remove("is-valid");
      inputValidatePassword.classList.add("is-invalid");
    }
  });
}