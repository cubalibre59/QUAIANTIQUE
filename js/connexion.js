alert('connexion.js est chargé');


console.log('connexion.js chargé et fonctionne');


function closeLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Credenciales válidas (ejemplo)
  // Aquí validas si es admin o client
  let role = "client";
  if (email === "admin@example.com" && password === "admin123") {
    role = "admin";
  }

  // También puedes validar cliente válido aquí o hacerlo con otro if
  if (
    (email === "test@example.com" && password === "123456") ||
    (role === "admin")
  ) {
    alert("Connexion réussie vous pouvez reserver une table !");

    const user = {
      email: email,
      role: role,
    };


    // Guardar en localStorage
    localStorage.setItem("user", JSON.stringify(user));
   
     // Redirigir a la página de reserva  
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

