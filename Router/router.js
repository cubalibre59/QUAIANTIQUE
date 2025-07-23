
// router.js
import { getRoute } from "./route.js";
import { routes } from './allroute.js';
// Fonction pour gérer le routage
export function router() {
  const path = window.location.pathname;

  const htmlPath = getRoute(path); // Esto ya devuelve "pages/accueil.html", etc.

  fetch(htmlPath)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
    });
}

window.addEventListener("popstate", router);
