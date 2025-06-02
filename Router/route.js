// route.js
export const routes = {
  "/": "pages/accueil.html",
  "/a-propos": "a-propos.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
};
export const getRoute = (path) => {
  if (routes[path]) {
    return routes[path];
  } else {
    return "pages/404.html"; // Fallback to 404 page if route not found
  }
};
