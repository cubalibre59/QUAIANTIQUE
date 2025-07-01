// Sélection des inputs

const inputNom=document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("PasswordInput");

    // Ajouter les écouteurs pour chaque champ
inputNom.addEventListener("keyup", () => validateRequired(inputNom));
inputPrenom.addEventListener("keyup", () => validateRequired(inputPrenom));
inputEmail.addEventListener("keyup", () => validateRequired(inputEmail));
inputPassword.addEventListener("keyup", () => validateRequired(inputPassword));




// Fonction de validation

function validateRequired(input){




  
if (input.value.trim() !='='){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
}
else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
}
}

//validation avec regex des email//

// Función para validar el formato email con regex
function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Email esperado para comparar
const mailUser = "utilisateur@example.com";

const inputMail = document.getElementById("emailInput");

inputMail.addEventListener("keyup", () => {
  const emailTyped = inputMail.value.trim();

  // Primero validar formato
  if (validateEmailFormat(emailTyped)) {
    // Si formato válido, comparar con email esperado ignorando mayúsculas
    if (emailTyped.toLowerCase() === mailUser.toLowerCase()) {
      inputMail.classList.add("is-valid");
      inputMail.classList.remove("is-invalid");
    } else {
      inputMail.classList.remove("is-valid");
      inputMail.classList.add("is-invalid");
    }
  } else {
    // Si formato inválido, marcar inválido
    inputMail.classList.remove("is-valid");
    inputMail.classList.add("is-invalid");
  }
});
//verification du mot de passe


function validatePassword(password) {
  return password.trim().length >= 6;  // mínimo 6 caracteres
}

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
