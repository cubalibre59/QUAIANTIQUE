// allroute.js
import { router } from "./router.js";

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

export const websiteDescription = "Quai Antique";
("Bienvenue sur mon site web, où vous trouverez des informations sur nos services et notre entreprise.");
