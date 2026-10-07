(function () {
  'use strict';
  var menu = document.getElementById('headerMenu');
  var nav = document.getElementById('headerNav');
  function closeMenu() {
    nav.classList.remove('nav-show');
    menu.setAttribute('aria-expanded', 'false');
  }
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-show');
      menu.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !nav.contains(event.target)) closeMenu();
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('nav-show')) { closeMenu(); menu.focus(); }
    });
    window.matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);
  }
  var back = document.querySelector('.back-to-top');
  if (back) {
    function syncBack() { back.classList.toggle('back-to-top-show', window.scrollY > 500); }
    window.addEventListener('scroll', syncBack, { passive: true });
    syncBack();
  }
  // The external counter can fail independently of the site. Never leave unlabeled blanks.
  var status = document.getElementById('visit-status');
  var values = document.querySelectorAll('[id^="busuanzi_value_"]');
  if (status && document.querySelector('script[src*="busuanzi.ibruce.info"]')) {
    function hasValues() {
      return Array.prototype.every.call(values, function (element) { return /^\d+$/.test(element.textContent.trim()); });
    }
    var timer;
    var observer = new MutationObserver(function () {
      if (hasValues()) { status.textContent = ''; clearTimeout(timer); observer.disconnect(); }
    });
    if (hasValues()) status.textContent = '';
    else {
      observer.observe(status.parentNode, { childList: true, subtree: true });
      timer = setTimeout(function () { status.textContent = 'Statistics temporarily unavailable'; }, 10000);
    }
  }
}());
