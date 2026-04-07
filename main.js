(function () {
  'use strict';

  /* ── Theme ── */
  const root   = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = localStorage.getItem('gm-theme') || 'light';
  applyTheme(theme);

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (!toggle) return;
    toggle.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.innerHTML = t === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  toggle && toggle.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('gm-theme', theme);
    applyTheme(theme);
  });

  /* ── Mobile menu ── */
  const menuBtn   = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobileNav');

  const iconHamburger = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  const iconClose     = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';

  if (menuBtn) menuBtn.innerHTML = iconHamburger;

  menuBtn && menuBtn.addEventListener('click', function () {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    if (mobileNav) mobileNav.style.display = open ? 'none' : 'block';
    menuBtn.innerHTML = open ? iconHamburger : iconClose;
  });

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
