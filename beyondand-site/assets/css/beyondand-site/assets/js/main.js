// Beyond& slim — light interactivity

// Tap-to-toggle for Ampersand Grid cells (mobile); hover handled by CSS on desktop.
document.querySelectorAll('.amp-grid .amp-cell').forEach(cell => {
  cell.addEventListener('click', e => {
    if (e.target.closest('.practice-link')) return;
    cell.classList.toggle('is-open');
  });
  cell.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cell.classList.toggle('is-open');
    }
  });
});

// Highlight active nav link
(function () {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('nav.primary a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/+$/, '') || '/';
    if (href !== '/' && path.startsWith(href)) a.classList.add('is-active');
    if (href === '/' && path === '/') a.classList.add('is-active');
  });
})();
