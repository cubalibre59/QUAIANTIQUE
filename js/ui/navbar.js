// js/ui/navbar.js26/07/25
// Navbar rendering and logout functionality
import { logout } from '../auth/auth.service.js';

export function renderNavbar() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const navbar = document.getElementById('navbar');

  navbar.innerHTML = `
    <nav class="navbar">
      <a href="accueil.html">Accueil</a>
      <a href="menu.html">Menu</a>
      <a href="contact.html">Contact</a>
      <a href="reserver.html">Réserver</a>
      ${token ? `<a href="Mon-compte.html">Mon compte</a>` : ''}
      ${role === 'ROLE_ADMIN' ? `<a href="admin.html">Admin</a>` : ''}
      ${token 
        ? `<button id="logoutBtn" class="btn btn-link">Déconnexion</button>` 
        : `<a href="connexion.html">Connexion</a> <a href="signup.html">Inscription</a>`
      }
    </nav>
  `;

  document.getElementById('logoutBtn')?.addEventListener('click', logout);
}
