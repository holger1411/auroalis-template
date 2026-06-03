/* ===== Auroalis — main.js ===== */
/* Handles: mobile navigation, scroll animations, FAQ accordion, carousel keys, popover modal */

(function () {
  'use strict';

  // Mark JS as available (enables animation hiding via CSS)
  document.documentElement.classList.add('js');

  // ===== Theme =====
  // This template is a fixed light composition: the hero, FAQ, and footer
  // are intentionally dark via literal Tailwind classes, while the content
  // sections sit on a light surface. We deliberately do NOT follow the OS
  // dark mode or persist a theme, so those panels always render light.
  // (Any orphaned "dark" preference from an earlier build is cleared here.)
  document.documentElement.classList.remove('dark');
  try { localStorage.removeItem('theme'); } catch (e) {}

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

  // ===== Popover / modal =====
  // Triggers carry data-popover="<key>" (the hero "Begin a study" CTA).
  // Clicking one opens the single reusable overlay with the matching
  // content. The overlay fades in over a blurred page; Escape, the close
  // button, and a backdrop click all dismiss it. Focus is moved into the
  // dialog and restored to the trigger on close.

  var POPOVERS = {
    'begin-study': {
      title: 'Begin a study',
      html:
        '<form data-study-form class="space-y-4 text-left">' +
        '<div>' +
        '<label for="study-topic" class="mb-1.5 block text-sm font-medium text-neutral-900">Focus area</label>' +
        '<select id="study-topic" name="topic" class="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-base text-neutral-900 focus:border-[#6B2EC7] focus:outline-none focus:ring-2 focus:ring-[#6B2EC7]/25">' +
        '<option>Atmospheric observation</option>' +
        '<option>Deep-sky optics</option>' +
        '<option>Polar expedition support</option>' +
        '<option>Instrument calibration</option>' +
        '<option>Something else</option>' +
        '</select>' +
        '</div>' +
        '<div>' +
        '<label for="study-name" class="mb-1.5 block text-sm font-medium text-neutral-900">Name</label>' +
        '<input id="study-name" name="name" type="text" placeholder="Your name" class="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#6B2EC7] focus:outline-none focus:ring-2 focus:ring-[#6B2EC7]/25">' +
        '</div>' +
        '<div>' +
        '<label for="study-email" class="mb-1.5 block text-sm font-medium text-neutral-900">Email</label>' +
        '<input id="study-email" name="email" type="email" placeholder="you@institution.org" class="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#6B2EC7] focus:outline-none focus:ring-2 focus:ring-[#6B2EC7]/25">' +
        '</div>' +
        '<div>' +
        '<label for="study-notes" class="mb-1.5 block text-sm font-medium text-neutral-900">What are you trying to measure? <span class="text-neutral-400">(optional)</span></label>' +
        '<textarea id="study-notes" name="notes" rows="2" placeholder="The site, the instrument, the question at 3 AM..." class="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#6B2EC7] focus:outline-none focus:ring-2 focus:ring-[#6B2EC7]/25"></textarea>' +
        '</div>' +
        '<button type="submit" class="w-full rounded-md bg-[#6B2EC7] px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.3px] text-white transition-colors hover:bg-[#5928A8]">Send signal</button>' +
        '</form>'
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('popover-overlay');
    if (!overlay) return;

    var card = overlay.querySelector('.popover-card');
    var titleEl = document.getElementById('popover-title');
    var contentEl = document.getElementById('popover-content');
    var lastFocused = null;

    function open(key) {
      var data = POPOVERS[key];
      if (!data) return;
      lastFocused = document.activeElement;
      titleEl.innerHTML = data.title;
      contentEl.innerHTML = data.html;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Move focus into the dialog after the fade begins.
      window.requestAnimationFrame(function () {
        card.focus();
      });
    }

    function close() {
      if (!overlay.classList.contains('is-open')) return;
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    }

    // Open triggers
    document.querySelectorAll('[data-popover]').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        open(trigger.getAttribute('data-popover'));
      });
    });

    // Close: close button(s)
    overlay.querySelectorAll('[data-popover-close]').forEach(function (btn) {
      btn.addEventListener('click', close);
    });

    // Close: click on the backdrop (outside the card)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    // Any form inside a popover (e.g. "Begin a study") just closes on
    // submit — this template has no backend to post to.
    contentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      close();
    });

    // Close: Escape, and trap Tab focus inside the dialog while open
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === 'Tab') {
        var focusables = card.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  });
})();
