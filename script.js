const navItems = [
  { href: "index.html", label: "Home" },
  { href: "profile.html", label: "Profile" },
  { href: "areas-of-focus.html", label: "Areas of Focus" },
  { href: "track-record.html", label: "Track Record" },
  { href: "perspective.html", label: "Perspective" },
  { href: "ai-governance.html", label: "AI Governance" },
  { href: "contact.html", label: "Contact" }
];

function currentFile() {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
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
        <a href="index.html" class="brand">Dr. Gábor Majoros</a>
        <div class="nav-right">
          <nav class="nav-links" aria-label="Primary navigation">
            ${desktopLinks}
          </nav>
          <button class="menu-button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" id="menuButton">&#9776;</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">
          ${mobileLinks}
        </div>
      </div>
    </div>
  `;

  const button = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobile-menu");

  if (button && mobileMenu) {
    button.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "\u2715" : "\u2630";
    });
  }
}

function buildFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-title">Dr. Gábor Majoros</div>
          <div class="footer-text">Privacy, AI, and regulatory risk</div>
          <div class="footer-text">Email: <a href="mailto:gabor@majorosgabor.com">gabor@majorosgabor.com</a></div>
        </div>
      </div>
    </footer>
  `;
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark-mode");
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

function setupMobileMenu() {
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "\u2715" : "\u2630";
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  setupThemeToggle();
  setupMobileMenu();
  setupReveal();
});
