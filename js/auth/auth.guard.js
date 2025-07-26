import { isTokenExpired, getToken, logout, getUserRole } from "./auth.service.js";

export function protectPage(requiredRole = null) {
  const token = getToken();

  if (!token || isTokenExpired()) {
    logout(); // redirige automáticamente
    return;
  }

  if (requiredRole) {
    const role = getUserRole();
    if (role !== requiredRole) {
      window.location.href = "/pages/403.html";
    }
  }
}
