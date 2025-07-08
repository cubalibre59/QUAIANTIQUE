// router.js
import { routes } from "./route.js";
import{allRoutes,websiteName} from "./allroute.js";

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || "pages/accueil.html";

  
  fetch(route)
    .then((res) => res.text()) // Récupère le contenu de la page demandée
    // .then((res) => res.json()) // Si la réponse est en JSON,
    .then((html) => {
      document.getElementById("app").innerHTML = html;//introduit html dans l'élément avec l'id "app"
    })
    .catch((err) => {
      document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
      showAndHideElementsForRoles();// Appel de la fonction pour afficher/masquer les éléments en fonction du rôle
    });
}

window.addEventListener("popstate", router); // Écoute les changements d'historique (navigation arrière/avant)
//afficher et masquer les elements en fonction du role




}