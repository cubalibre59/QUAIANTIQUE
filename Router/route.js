// route.js
export const routes = {
  "/": "pages/accueil.html",
  "/connexion": "pages/connexion.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
  "/signup": "pages/signup.html",
  "/reserver": "pages/reserver.html",
  "/deconnexion": "pages/deconnexion.html",
};
export const getRoute = (path) => {
  if (routes[path]) {
    return routes[path];
  } else {
    return "pages/404.html"; // Fallback to 404 page if route not found
  }
};
export default class Route{
  constructor(url,title,pathHtml,authorize,pathJs=" ") {
    this.url = url;
    this.path = path;
    this.title = title;
    this.pathHtml = pathHtml; 
    this.pathJs = pathJs;
    this.authorize=this.authorize;
  }
  }
/*
[]-> tout le monde 
["disconnected"]-> utilisateur non connecté
["connected"]-> utilisateur connecté

["admin"]-> admin
["client"]-> client   
["admin","client"]-> admin et client
["client","admin"]-> client ou  admin

  




}