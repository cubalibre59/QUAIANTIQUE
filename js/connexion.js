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
     //  Definir el objeto user antes de usarlo 11/07/25
    const user = {
      email: validEmail,
      role: "client", // o "admin"
       };

    // Guardar en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    
    window.location.href="../pages/reserver.html"; // Redirigir a la página de reserva
    // Aquí puedes cerrar el login o redirigir
   const token = "lmlmlmlmpoiuyty"; // Aquí puedes generar un token real
      setToken(token); // Guarda el token en la cookie
      
    //ferme la fenetre login
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  } else {
    alert("Email ou mot de passe incorrect !");
  }
}
//afficher la fenetre login
function openLogin() {
  document.getElementById('loginBox').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Obtener el rol del usuario
export function getRole() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || null;
}

// Saber si el usuario está conectado
export function isConnected() {
  return localStorage.getItem("user") !== null;
 
  }
// 11/07/25  Exponer funciones al HTML si usas onclick
window.openLogin = openLogin;
window.closeLogin = closeLogin;

