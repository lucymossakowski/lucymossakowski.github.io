(function() {
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  }

  window.toggleTheme = function() {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcons();
    var menu = document.getElementById('mobile-menu');
    if (menu) menu.style.background = root.classList.contains('dark') ? '#1A1A1A' : '#F8F7F5';
    document.querySelectorAll('[data-modal-panel]').forEach(function(el) {
      el.style.background = root.classList.contains('dark') ? '#1A1A1A' : '#F8F7F5';
    });
    document.querySelectorAll('[data-modal-header]').forEach(function(el) {
      el.style.background = root.classList.contains('dark') ? 'rgba(26,26,26,0.8)' : 'rgba(248,247,245,0.8)';
    });
  };

  var sunSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ink)"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moonSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ink)"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  window.updateThemeIcons = function() {
    var html = root.classList.contains('dark') ? sunSVG : moonSVG;
    document.querySelectorAll('.theme-toggle').forEach(function(btn) { btn.innerHTML = html; });
  };

  document.addEventListener('DOMContentLoaded', updateThemeIcons);
})();
