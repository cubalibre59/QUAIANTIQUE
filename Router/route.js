// route.js
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/menu": "pages/menu.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
  "/reserver": "pages/reserver.html",
  "/Mon-compte": "pages/Mon-compte.html",
  "/deconnexion": "pages/deconnexion.html",
};
export const getRoute = (path) => {
  if (routes[path]) {
    return routes[path];
  } else {
    return "pages/404.html"; // Fallback to 404 page if route not found
  }
};
