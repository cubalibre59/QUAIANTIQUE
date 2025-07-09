// routehelpers.js
import { allRoutes } from "../allroute.js";

export function getRouteByUrl(path) {
  return allRoutes.find(route => route.url === path) || null;
}
