// router.js
import { routes } from "./route.js";

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || "pages/index.html";

  fetch(route)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
    });
}

window.addEventListener("popstate", router);
