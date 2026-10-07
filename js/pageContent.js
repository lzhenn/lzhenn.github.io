(function () {
  'use strict';
  var contents = document.getElementById('content-side');
  var side = document.querySelector('.page > .right');
  var toggle = document.querySelector('.anchor');
  if (!contents || !side) return;
  var source = document.getElementById('markdown-toc');
  if (source) {
    var copy = source.cloneNode(true);
    copy.querySelectorAll('[id]').forEach(function (element) { element.removeAttribute('id'); });
    while (copy.lastChild) contents.insertBefore(copy.lastChild, contents.firstChild);
  }
  var headings = document.querySelectorAll('.left article h2[id], .left article h3[id]');
  if (!source && headings.length) {
    var fragment = document.createDocumentFragment();
    headings.forEach(function (heading) {
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent;
      li.appendChild(link);
      fragment.appendChild(li);
    });
    contents.insertBefore(fragment, contents.firstChild);
  }
  function close() {
    side.classList.remove('right-show');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', String(side.classList.toggle('right-show')));
    });
    document.addEventListener('click', function (event) {
      if (!side.contains(event.target) && !toggle.contains(event.target)) close();
    });
    contents.addEventListener('click', function (event) {
      if (event.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && side.classList.contains('right-show')) { close(); toggle.focus(); }
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', close);
  }
}());
