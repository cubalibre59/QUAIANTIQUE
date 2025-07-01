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

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input.value.trim())) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}
// Validation de l'email avec un exemple d'email attendu
const mailUser = "utilisateur@example.com"; // el email attendu pour la validation

inputMail.addEventListener("keyup", () => {
  const emailTyped = inputMail.value.trim();

  if (emailTyped === mailUser) {
    inputMail.classList.add("is-valid");
    inputMail.classList.remove("is-invalid");
  } else {
    inputMail.classList.remove("is-valid");
    inputMail.classList.add("is-invalid");
  }
});
