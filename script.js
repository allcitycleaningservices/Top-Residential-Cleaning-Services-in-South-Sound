// script.js — small UX helpers: mobile nav toggle and set year

document.addEventListener('DOMContentLoaded', function () {

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      // Toggle nav visibility for small screens
      if (!expanded) {
        nav.style.display = 'block';
        nav.setAttribute('aria-hidden', 'false');
      } else {
        nav.style.display = '';
        nav.setAttribute('aria-hidden', 'true');
      }
    });

    // Close nav when clicking outside on small screens
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
          nav.style.display = '';
          nav.setAttribute('aria-hidden', 'true');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor)
