/* ─── Theme: apply immediately on parse (before first paint) ─────────── */
(function () {
  if (localStorage.getItem("site-theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
    if (document.body) document.body.classList.add("dark-mode");
  }
})();

/* ─── Navigation data ────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { href: "index.html",          label: "Home" },
  { href: "profile.html",        label: "Profile" },
  { href: "areas-of-focus.html", label: "Areas of Focus" },
  { href: "track-record.html",   label: "Track Record" },
  { href: "perspective.html",    label: "Perspective" },
  { href: "ai-governance.html",  label: "AI Governance" },
  { href: "contact.html",        label: "Contact" },
];

function currentFile() {
  return window.location.pathname.split("/").pop() || "index.html";
}

/* ─── Build injected header (inner pages) ────────────────────────────── */
function buildHeader() {
  const slot = document.getElementById("site-header");
  if (!slot) return;
  const file = currentFile();

  const desktopLinks = NAV_ITEMS.map(({ href, label }) =>
    `<a class="nav-link${href === file ? " active" : ""}" href="${href}">${label}</a>`
  ).join("");

  const mobileLinks = NAV_ITEMS.map(({ href, label }) =>
    `<a class="mobile-link${href === file ? " active" : ""}" href="${href}">${label}</a>`
  ).join("");

  slot.innerHTML = `
    <div class="site-header">
      <div class="nav-shell">
        <a href="index.html" class="brand">Dr. G&aacute;bor Majoros</a>
        <nav class="nav-links" aria-label="Primary navigation">${desktopLinks}</nav>
        <div class="nav-actions">
          <button class="theme-toggle" id="innerThemeToggle" aria-label="Toggle dark mode">&#9680;</button>
          <button class="menu-button" id="innerMenuBtn" aria-label="Open menu" aria-expanded="false">&#9776;</button>
        </div>
      </div>
      <div class="mobile-menu" id="innerMobileMenu">
        <div class="mobile-menu-inner">${mobileLinks}</div>
      </div>
    </div>`;

  /* Mobile menu toggle */
  const btn  = document.getElementById("innerMenuBtn");
  const menu = document.getElementById("innerMobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "\u2715" : "\u2630";
    });
    menu.querySelectorAll(".mobile-link").forEach(l =>
      l.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "\u2630";
      })
    );
  }
}

/* ─── Build footer ───────────────────────────────────────────────────── */
function buildFooter() {
  const slot = document.getElementById("site-footer");
  if (!slot) return;
  slot.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-title">Dr. G&aacute;bor Majoros</div>
        <div class="footer-text">Privacy, AI, and regulatory risk</div>
        <div class="footer-text">
          <a href="mailto:gabor@majorosgabor.com">gabor@majorosgabor.com</a>
          &nbsp;&middot;&nbsp;
          <a href="https://www.linkedin.com/in/majorosgt/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>`;
}

/* ─── Theme toggle (works on every page) ────────────────────────────── */
function setupThemeToggle() {
  /* Sync body class from html class (already set at parse time above) */
  if (document.documentElement.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
  }

  /* Wire whichever toggle button exists on this page */
  const btn = document.getElementById("themeToggle")
           || document.getElementById("innerThemeToggle");

  if (btn) {
    btn.addEventListener("click", () => {
      const dark = document.body.classList.toggle("dark-mode");
      document.documentElement.classList.toggle("dark-mode", dark);
      localStorage.setItem("site-theme", dark ? "dark" : "light");
    });
  }
}

/* ─── Mobile menu (index.html hardcoded header) ─────────────────────── */
function setupMobileMenu() {
  const btn  = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "\u2715" : "\u2630";
  });
  menu.querySelectorAll(".mobile-link").forEach(l =>
    l.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "\u2630";
    })
  );
}

/* ─── Scroll reveal ──────────────────────────────────────────────────── */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  els.forEach(el => obs.observe(el));
}

/* ─── Boot ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  setupThemeToggle();
  setupMobileMenu();
  setupReveal();
});
