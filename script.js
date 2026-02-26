(function () {
  'use strict';

  const THEME_KEY = 'briventia-theme';
  const LANG_KEY = 'briventia-lang';

  function getPreferredTheme() {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function getPreferredLang() {
    if (typeof window === 'undefined') return 'it';
    return localStorage.getItem(LANG_KEY) || 'it';
  }

  function applyLang(lang) {
    document.body.setAttribute('data-lang', lang);
    localStorage.setItem(LANG_KEY, lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Theme toggle
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang) applyLang(lang);
    });
  });

  // Initial state
  applyTheme(getPreferredTheme());
  applyLang(getPreferredLang());

  // Header logo: fade in when scrolled past hero
  var siteHeader = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  if (siteHeader && hero) {
    var ticking = false;
    function updateHeaderScrolled() {
      var heroBottom = hero.offsetTop + hero.offsetHeight;
      var threshold = heroBottom - 20;
      if (window.scrollY >= threshold) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderScrolled);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeaderScrolled();
  }
})();
