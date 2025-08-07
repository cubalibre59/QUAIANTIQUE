
// router.js
import { getRoute } from "./route.js";
import { routes } from './allroute.js';
// Fonction pour gérer le routage
export function router() {
   const path = window.location.hash.slice(1) || "/";

  const htmlPath = getRoute(path);
  fetch(htmlPath)
     .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
        })
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
    });
}

// Carga la ruta al iniciar la página
window.addEventListener("load", router);

// Cambia la ruta cuando el hash cambia
window.addEventListener("hashchange", router);
