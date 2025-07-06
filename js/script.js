// File: js/script.js
console.log("Script loaded successfully!");
alert('script.js est chargé');

const tokenCookieName= "accesstoken";

const signoutBtn= document.getElementById("signout-Btn");
if (signoutBtn) {
  
signoutBtn.addEventListener("click",signout) ;
}
function signout(){
  eraseCookie(tokenCookieName);
 
  window.location.href="/services"; // va a reload la page completment
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