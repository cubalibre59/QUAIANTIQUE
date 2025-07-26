export function getToken() {
  return localStorage.getItem("token");
}

export function getUserRole() {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData).role : null;
}

export function isTokenExpired() {
  const token = getToken();
  if (!token) return true;

  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp;
  const now = Math.floor(Date.now() / 1000);

  return now > expiry;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/pages/connexion.html";
}
