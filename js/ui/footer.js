// js/ui/footer.js
export function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <footer class="footer">
      <div class="footer-left">
        © 2025 QuaiAntique
      </div>
      <div class="footer-right">
        <a href="blog.html">Blog</a>
        <a href="docs.html">Docs</a>
        <a href="https://github.com">GitHub</a>
        <a href="#">Discord</a>
        <a href="#">X (Twitter)</a>
        <a href="#">Meetups</a>
        <a href="#">Download</a>
      </div>
    </footer>
  `;
}
