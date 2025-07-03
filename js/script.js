// This file is part of the QUAIANTIQUE project.
/**      
ici vous pouvez ajouter du code reutilisable de JavaScript pour votre projet QUAIANTIQUE.
 */
console.log("Script loaded successfully!");
alert('script.js est chargé');
/**
 * Stocke un token dans un cookie
 * @param {string} name - Le nom du cookie
 * @param {string} value - La valeur du token
 * @param {number} days - Durée de validité en jours
 * 
 */
const tokenCookieName= "accesstoken";

function setToken(token{
    setCookie(tokenCookieName, token, 7);
}
function getToken() {
  return getCookie(tokenCookieName);
}
function eraseToken() {
  eraseCookie(tokenCookieName);
}

/*}, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

/**
 * Crée une cookie
 * @param {string} name - Nom de la cookie
 * @param {string} value - Valeur de la cookie
 * @param {number} days - Durée de vie en jours
 */
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

/**
 * Récupère la valeur d'une cookie
 * @param {string} name - Nom de la cookie
 * @returns {string} - Valeur de la cookie ou chaîne vide si non trouvée
 */
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

/**
 * Supprime une cookie
 * @param {string} name - Nom de la cookie à supprimer
 */
function eraseCookie(name) {
  // On remplace la cookie avec une expiration passée
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
