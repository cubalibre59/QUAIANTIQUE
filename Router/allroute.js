// allroute.js
import { router } from "./router.js";

//fonction par attent la route url 
export function getRouteByUrl(path) {
  return allRoutes.find((route) => route.url === path) || new Route("/404", "404", "pages/404.html", []);
}

//configuration spa
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      window.history.pushState(null, "", e.target.href);
      router();
    }
  });

  router();
});
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
   "/reserver": "pages/reserver.html",
   "/deconnexion": "pages/deconnexion.html",
  "/404": "pages/404.html",
};


// ✅ Definir clase Route
class Route {
  constructor(url, title, pathHtml, authorize = []) {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.authorize = authorize;
  }
}


//define ici allroutes
export const allRoutes = [
  new Route("/", "Accueil", "pages/accueil.html", []),
  new Route("/connexion", "Connexion", "pages/connexion.html", ["disconnected"]),
  new Route("/services", "Services", "pages/services.html", []),
  new Route("/contact", "Contact", "pages/contact.html", []),
  new Route("/signup", "Inscription", "pages/signup.html", ["disconnected"]),
  new Route("/reserver", "Réserver", "pages/reserver.html", ["client"]),
  new Route("/deconnexion", "Déconnexion", "pages/deconnexion.html", ["connected"]),
  new Route("/404", "Page non trouvée", "pages/404.html"),
];
// Define el nombre del sitio web
export const websiteDescription = "Quai Antique";
("Bienvenue sur mon site web, où vous trouverez des informations sur nos services et notre entreprise.");
