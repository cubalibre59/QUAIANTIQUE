// File: js/auth/auth.user.js

import { getUser } from "./auth.service.js";

/**
 * Muestra el nombre del usuario en el DOM (ejemplo de uso del user).
 */
export function showUserNameInHeader() {
  const user = getUser();
  if (user && user.username) {
    const nameElement = document.getElementById("user-name");
    if (nameElement) {
      nameElement.textContent = `Bienvenue, ${user.username}`;
    }
  }
}
