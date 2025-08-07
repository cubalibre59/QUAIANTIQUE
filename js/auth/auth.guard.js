// File: js/auth/auth.guard.js

import {
  isTokenExpired,
  getToken,
  logout,
  getUserRole,
} from "./auth.service.js";

/**
 * Protege una página obligando a estar autenticado.
 * Puedes también pasar un rol requerido.
 * 
 * @param {string|null} requiredRole
 */
export function protectPage(requiredRole = null) {
  const token = getToken();

  if (!token || isTokenExpired()) {
    logout();
    return;
  }

  if (requiredRole) {
    const role = getUserRole();
    if (role !== requiredRole) {
      window.location.href = "/pages/403.html";
    }
  }
}

