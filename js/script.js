// File: js/script.js
console.log("Script loaded successfully!");
alert('script.js est chargé');

const tokenCookieName= "accesstoken";
const RoleCookieName="role";
// script.js
export function showAndHideElementsForRoles() {
  console.log("Función showAndHideElementsForRoles cargada.");
}

// gerer la connexion et la deconnexion
document.addEventListener("DOMContentLoaded", () => {
const signoutBtn= document.getElementById("signout-Btn");
if (signoutBtn) {
  
signoutBtn.addEventListener("click",signout) ;
}
showAndHideElementsForRoles();
});
// Fonction pour obtenir le rôle de l'utilisateur à partir des cookies
function getRole(){ 
  return getCookie(RoleCookieName);
   
}

function signout(){
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  
  window.location.href= "/"; // va a reload la page accueil
}
function setToken(token){
    setCookie(tokenCookieName, token, 7);
}
function getToken() {
  return getCookie(tokenCookieName);
}
function eraseToken() {
  eraseCookie(tokenCookieName);
}


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}


function getCookie(name) {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookies = decodedCookies.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(name + "=") === 0) {
      return c.substring(name.length + 1);
    }
  }
  return "";
}



function eraseCookie(name) {
  // On remplace la cookie avec une expiration passée
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function openLogin() {
  document.getElementById('loginBox').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}
//appeller si le token est ou pas present
function isConnected() {
  const token = getToken();
  return token !== null && token !== undefined && token !== "";
}

// Llamada a la función al cargar la página
if (isConnected()) {
  alert("Bienvenue sur notre site web ! Vous êtes connecté.");
  // ici tu peux afficher un bouton "Déconnexion"
} else {
  alert("Je ne suis pas connecté.");
  // ici tu peux cacher les options réservées aux membres
}
// ici rajoute connecter front avec backend 15/07/25
fetch("http://localhost:8000/backend-api/public/api/produits")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Erreur API", err));
// Gestion de la connexion RAILWAYS

const API_BASE_URL = 'https://backend-api-production-08e8.up.railway.app';


//correction 22/07/25
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

fetch(`${API_BASE_URL}/login`, {
  method: 'POST',
  body: JSON.stringify({ email, password }),
  headers: {
    'Content-Type': 'application/json',
  },
});
// Gestion de la connexion