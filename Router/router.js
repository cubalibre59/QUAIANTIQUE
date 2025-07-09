// router.js
import { routes } from "./route.js";
import { allRoutes, websiteName } from "./allroute.js";
import { getRole, isConnected } from "../js/connexion.js";
import { getRouteByUrl } from "./routehelpers.js";
import { showAndHideElementsForRoles } from "../js/script.js";

export async function router() {
  const path = window.location.pathname;
  const actualRoute = getRouteByUrl(path);

  // Verificar permisos
  const authorizedRoles = actualRoute.authorize || [];

  if (authorizedRoles.length > 0) {
    if (authorizedRoles.includes("disconnected")) {
      if (isConnected()) {
        return window.location.replace("/");
      }
    } else {
      const role = getRole();
      if (!authorizedRoles.includes(role)) {
        return window.location.replace("/");
      }
    }
  }

  // Cargar contenido
  try {
    const res = await fetch(actualRoute.pathHtml);
    const html = await res.text();
    document.getElementById("app").innerHTML = html;

    // Cambiar título y mostrar elementos según rol
    document.title = `${actualRoute.title} - ${websiteName}`;
    showAndHideElementsForRoles();
  } catch (e) {
    document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
  }
}

// Activar en eventos de navegación y al cargar la página
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);
