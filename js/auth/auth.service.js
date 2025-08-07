// File: js/auth/auth.service.js

/**
 * Guarda el token JWT en localStorage.
 */
export function setToken(token) {
  localStorage.setItem("token", token);
}

/**
 * Devuelve el token JWT desde localStorage.
 */
export function getToken() {
  return localStorage.getItem("token");
}

/**
 * Guarda los datos del usuario (JSON) en localStorage.
 */
export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

/**
 * Devuelve el objeto usuario completo.
 */
export function getUser() {
  const data = localStorage.getItem("user");
  try {
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Error al parsear datos del usuario:", e);
    return null;
  }
}

/**
 * Devuelve solo el rol del usuario.
 */
export function getUserRole() {
  const user = getUser();
  return user?.role || null;
}

/**
 * Verifica si el token está expirado.
 */
export function isTokenExpired() {
  const token = getToken();
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    const now = Math.floor(Date.now() / 1000);
    return now >= expiry;
  } catch (error) {
    console.error("Token inválido o malformado:", error);
    return true;
  }
}

/**
 * Elimina los datos del usuario y redirige al login.
 */
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/pages/connexion.html";
}

/**
 * Verifica si el usuario está logueado y su token es válido.
 */
export function isLoggedIn() {
  return !!getToken() && !isTokenExpired();
}

