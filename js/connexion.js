alert('connexion.js est chargé');


console.log('connexion.js chargé et fonctionne');


function closeLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Credenciales válidas (ejemplo)
  const validEmail = "test@example.com";
  const validPassword = "123456";

  // Verificar credenciales al hacer clic en "Envoyer"
  if (email === validEmail && password === validPassword) {
    alert("Connexion réussie vous pouvez reserver une table !");
    window.location.href="reserver.html"; // Redirigir a la página de reserva
    // Aquí puedes cerrar el login o redirigir
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  } else {
    alert("Email ou mot de passe incorrect !");
  }
}




 
  