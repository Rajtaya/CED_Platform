/* Applies the saved color theme + dark mode to <html> BEFORE first paint,
   so there is no flash of the wrong theme (FOUC). Loaded as a same-origin
   <script src> in index.html <head> — CSP-safe (no inline script needed).
   Keep in sync with src/context/ThemeContext.jsx. */
(function () {
  try {
    var root = document.documentElement;

    // Color theme: 'blue' (default) or 'warm'
    var theme = localStorage.getItem('ui-theme');
    if (theme !== 'warm' && theme !== 'blue') theme = 'blue';
    root.classList.remove('theme-blue', 'theme-warm');
    root.classList.add('theme-' + theme);

    // Dark mode
    if (localStorage.getItem('dark-mode') === 'true') {
      root.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('theme-blue');
  }
})();
