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
const inputEmail = document.getElementById("emailInput");
inputEmail.addEventListener("keyup", () => validateEmail(inputEmail));

// Fonction de validation d'email
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
