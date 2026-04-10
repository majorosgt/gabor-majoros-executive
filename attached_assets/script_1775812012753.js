(function () {
  if (localStorage.getItem("site-theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
})();

const navItems = [
  { href: "profile.html",     label: "Profile" },
  { href: "work.html",        label: "Work" },
  { href: "perspective.html", label: "Perspective" },
  { href: "contact.html",     label: "Contact" }
];

function currentFile() {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme === "dark") { document.body.classList.add("dark-mode"); }
  else { document.body.classList.remove("dark-mode"); }
}

function buildHeader() {
  const file = currentFile();
  const header = document.getElementById("site-header");
  if (!header) return;

  const desktopLinks = navItems.map(item => {
    const active = item.href === file ? "active" : "";
    return `<a class="nav-link ${active}" href="${item.href}">${item.label}</a>`;
  }).join("");

  const mobileLinks = navItems.map(item => {
    const active = item.href === file ? "active" : "";
    return `<a class="mobile-link ${active}" href="${item.href}">${item.label}</a>`;
  }).join("");

  header.innerHTML = `
    <div class="site-header">
      <div class="nav-shell">
        <a href="index.html" class="brand">Dr. G&aacute;bor Majoros</a>
        <div class="nav-right">
          <nav class="nav-links" aria-label="Primary navigation">${desktopLinks}</nav>
          <div class="nav-actions">
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">&#9680;</button>
            <button class="menu-button" id="menuButton" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">&#9776;</button>
          </div>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">${mobileLinks}</div>
      </div>
    </div>
  `;

  const menuButton  = document.getElementById("menuButton");
  const mobileMenu  = document.getElementById("mobile-menu");
  const themeToggle = document.getElementById("themeToggle");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "\u2715" : "\u2630";
    });
    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "\u2630";
      });
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.documentElement.classList.toggle("dark-mode", document.body.classList.contains("dark-mode"));
      localStorage.setItem("site-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
  }
}

function buildFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-title">Dr. G&aacute;bor Majoros</div>
        <div class="footer-text">Privacy, AI, and regulatory risk</div>
        <div class="footer-text">
          <a href="mailto:majorosgabort@gmail.com">Get in touch</a>
          &nbsp;&middot;&nbsp;
          <a href="https://www.linkedin.com/in/majorosgt/" target="_blank" rel="noopener">LinkedIn</a>
          &nbsp;&middot;&nbsp;
          Geneva, Switzerland
        </div>
      </div>
    </footer>
  `;
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  buildHeader();
  buildFooter();
  setupReveal();
});
