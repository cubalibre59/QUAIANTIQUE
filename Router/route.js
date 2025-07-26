// route.js
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/menu": "pages/menu.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
  "/reserver": "pages/reserver.html",
  "/Mon-compte": "pages/Mon-compte.html",
  "/admin": "pages/Admin.html",
  "/403": "pages/403.html"
};
export const getRoute = (path) => {
  if (routes[path]) {
    return routes[path];
  } else {
    return "pages/403.html"; // Fallback to 403 page if route not found
  }
};
