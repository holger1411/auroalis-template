/* ===== Aurora — main.js ===== */
/* Handles: dark mode toggle, mobile navigation, scroll animations, carousel keyboard nav */

(function () {
  'use strict';

  // Mark JS as available (enables animation hiding via CSS)
  document.documentElement.classList.add('js');

  // ===== Dark Mode =====

  const THEME_KEY = 'theme';
  const DARK_CLASS = 'dark';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark' || (theme === 'system' && getSystemPreference() === 'dark');
    document.documentElement.classList.toggle(DARK_CLASS, isDark);

    // Update toggle button aria-label
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      const label = theme === 'system' ? 'System theme' : theme === 'dark' ? 'Dark theme' : 'Light theme';
      toggle.setAttribute('aria-label', label);
    }

    // Update toggle icons visibility
    document.querySelectorAll('[data-theme-icon]').forEach(function (icon) {
      icon.classList.toggle('hidden', icon.dataset.themeIcon !== theme);
    });
  }

  function cycleTheme() {
    var stored = localStorage.getItem(THEME_KEY) || 'system';
    var next = stored === 'system' ? 'light' : stored === 'light' ? 'dark' : 'system';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Apply saved theme on load
  applyTheme(localStorage.getItem(THEME_KEY) || 'system');

  // Listen for OS theme changes (only matters when set to "system")
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    var stored = localStorage.getItem(THEME_KEY) || 'system';
    if (stored === 'system') {
      applyTheme('system');
    }
  });

  // Bind toggle button
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', cycleTheme);
      applyTheme(localStorage.getItem(THEME_KEY) || 'system');
    }
  });

  // ===== Mobile Navigation =====

  document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('mobile-menu-button');
    var mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', function () {
      var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('hidden', isOpen);
      mobileMenu.setAttribute('aria-hidden', String(isOpen));

      // Focus trap: when opening, focus first link
      if (!isOpen) {
        var firstLink = mobileMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Close menu when clicking an anchor link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuButton.focus();
      }
    });
  });

  // ===== Scroll Animations =====

  document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('[data-animate]');
    if (!animatedElements.length || !('IntersectionObserver' in window)) {
      // No animation support or no elements: make everything visible
      animatedElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    try {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(function (el) {
        observer.observe(el);
      });
    } catch (e) {
      // Fallback: show everything immediately
      animatedElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  });

  // ===== FAQ Smooth Open/Close Animation =====
  // <details> opens/closes instantly by default. We intercept the
  // summary click, animate the content's pixel height, and toggle
  // the [open] attribute at the right moment so the height
  // transition (CSS) plays in both directions.

  document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('details.faq-item');

    items.forEach(function (details) {
      var summary = details.querySelector('summary');
      var content = details.querySelector('.faq-content');
      if (!summary || !content) return;

      summary.addEventListener('click', function (e) {
        e.preventDefault();

        if (details.open) {
          // CLOSING: pin the current height, then animate to 0,
          // then drop the [open] attribute when the transition ends.
          content.style.height = content.scrollHeight + 'px';
          // Force reflow so the pinned height takes effect before
          // the next style change is treated as a transition.
          // eslint-disable-next-line no-unused-expressions
          content.offsetHeight;
          content.style.height = '0px';

          var onClose = function (ev) {
            if (ev.propertyName !== 'height') return;
            details.open = false;
            content.style.height = '';
            content.removeEventListener('transitionend', onClose);
          };
          content.addEventListener('transitionend', onClose);
        } else {
          // OPENING: open the details, start at 0, then animate up
          // to the natural scrollHeight. Once the transition ends
          // release the height back to auto so reflow on resize works.
          details.open = true;
          content.style.height = '0px';
          // eslint-disable-next-line no-unused-expressions
          content.offsetHeight;
          content.style.height = content.scrollHeight + 'px';

          var onOpen = function (ev) {
            if (ev.propertyName !== 'height') return;
            content.style.height = '';
            content.removeEventListener('transitionend', onOpen);
          };
          content.addEventListener('transitionend', onOpen);
        }
      });
    });
  });

  // ===== Carousel Keyboard Navigation =====

  document.addEventListener('DOMContentLoaded', function () {
    var carousels = document.querySelectorAll('.carousel');

    carousels.forEach(function (carousel) {
      carousel.addEventListener('keydown', function (e) {
        var scrollAmount = 320; // roughly one card width
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      });
    });
  });
})();
