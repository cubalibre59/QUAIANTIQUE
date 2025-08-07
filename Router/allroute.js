// allroute.js
import { router } from "./router.js";

// Routes SPA
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
  "/menu": "pages/menu.html",
  "/admin": "pages/admin.html",
  "/Mon-compte": "pages/Mon-compte.html",
  "/403": "pages/403.html",
};



// Función para obtener ruta desde el hash
export function getRouteByUrl() {
  const hash = window.location.hash || "#/";
  const path = hash.slice(1);
  return routes[path] ? path : "/403";
}

// SPA: escucha los cambios de hash y carga la ruta
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("hashchange", router);
  router(); // carga inicial
});

