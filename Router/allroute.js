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
  "/": "pages/index.html",
  "/a-propos": "pages/a-propos.html",
  "/services": "pages/services.html",
  "/contact": "pages/contact.html",
  "/404": "pages/404.html",
};

export const websiteDescription = "Qai Antique";
("Bienvenue sur mon site web, où vous trouverez des informations sur nos services et notre entreprise.");
