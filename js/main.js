// js/main.js
import { showAndHideElementsForRoles, signout, getToken } from './scripts.js';
import { initChat } from './ai/chat.js';
import './Router/router.js';
import './Router/allroute.js';

document.addEventListener('DOMContentLoaded', () => {
  initChat();
  showAndHideElementsForRoles();
});
