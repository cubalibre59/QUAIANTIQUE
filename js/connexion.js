alert('connexion.js est chargé');


console.log('connexion.js chargé et fonctionne');



// references DOM
    const form = document.getElementById('loginForm');
    const logoutSection = document.getElementById('logoutSection');
    const userDisplay = document.getElementById('userDisplay');
    const logoutBtn = document.getElementById('logoutBtn');
 
   // Función para mostrar el estado de sesión guardado
function checkLogin() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const username = localStorage.getItem('username');

  if (isLoggedIn === 'true' && username) {
    form.classList.add('d-none');
    logoutSection.classList.remove('d-none');
    userDisplay.textContent = username;
  } else {
    form.classList.remove('d-none');
    logoutSection.classList.add('d-none');
  }
}

// Al enviar el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    // Simulación de login correcto
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);

    // Actualizar interfaz
    checkLogin();
  } else {
    alert('Veuillez saisir votre nom d\'utilisateur et mot de passe');
  }
});

// Al hacer clic en desconectar
logoutBtn.addEventListener('click', function () {
  // Limpiar sesión
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');

  // Actualizar interfaz
  checkLogin();

  // Limpiar formulario
  form.reset();
});

// Al cargar la página, verifica si el usuario ya está conectado
window.addEventListener('load', checkLogin); 