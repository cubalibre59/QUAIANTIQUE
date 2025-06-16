// route.js
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
  "/reserver": "pages/reserver.html",
};
export const getRoute = (path) => {
  if (routes[path]) {
    return routes[path];
  } else {
    return "pages/404.html"; // Fallback to 404 page if route not found
  }
};
