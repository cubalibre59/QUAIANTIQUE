// router.js
import { routes } from "./route.js";
import{allRoutes,websiteName} from "./allroute.js";
import { getRole, isConnected } from "./auth.js"; // asegúrate de tener estas funciones
import { getRouteByUrl } from "./routehelpers.js"; // si lo separas
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

export async function router() {
  const path = window.location.pathname;
  const actualRoute = getRouteByUrl(path);
// Vérifier si l'utilisateur a bien le droit de accéder à la page
const path = window.location.pathname;
  // Récupération de l'URL actuelle
  const actualRoute = getRouteByUrl(path);

  //Vérifier les droits d'accès à la page
  const allRolesArray = actualRoute.authorize;

  if(allRolesArray.length > 0){
    if(allRolesArray.includes("disconnected")){
      if(isConnected()){
        window.location.replace("/");
      }
    }
    else{
      const roleUser = getRole();
      if(!allRolesArray.includes(roleUser)){
        window.location.replace("/");
      }
    }
  }
   // Charger le contenu HTML de la page
  try {
    const res = await fetch(actualRoute.pathHtml);
    const html = await res.text();
    document.getElementById("app").innerHTML = html;

    document.title = `${actualRoute.title} - ${websiteName}`;
  } catch (e) {
    document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
  }
}