/* One ambient canvas for every page. No dependencies or external assets. */
(function () {
  'use strict';
  var canvas = document.getElementById('matrix-rain');
  if (!canvas || canvas.dataset.initialized) return;
  canvas.dataset.initialized = 'true';
  var ctx = canvas.getContext('2d');
  var button = document.getElementById('matrix-toggle');
  if (!ctx) return;

  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var preference;
  try { preference = localStorage.getItem('lzn-matrix'); } catch (error) { /* Storage is optional. */ }
  var enabled = !motion.matches && preference !== 'off';
  var glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ012345789:<>λ';
  var streams = [];
  var width = 0;
  var height = 0;
  var frame = null;
  var last = 0;
  var cell = 20;

  function character() { return glyphs.charAt(Math.floor(Math.random() * glyphs.length)); }
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    cell = width < 760 ? 20 : 18;
    streams = [];
    for (var x = 0; x < width; x += cell) {
      var length = 12 + Math.floor(Math.random() * 22);
      streams.push({
        x: x, y: Math.random() * (height + 400), speed: 18 + Math.random() * 26,
        length: length, symbols: Array.from({ length: length }, character),
        hue: Math.random() > 0.93 ? '167,144,223' : (Math.random() > 0.7 ? '77,190,190' : '91,211,155')
      });
    }
    draw(0);
  }
  function draw(delta) {
    ctx.clearRect(0, 0, width, height);
    ctx.font = '13px monospace';
    streams.forEach(function (stream) {
      stream.y += stream.speed * delta;
      if (stream.y - stream.length * cell > height) stream.y = -cell;
      for (var j = 0; j < stream.length; j++) {
        var y = stream.y - j * cell;
        if (y < -cell || y > height + cell) continue;
        var alpha = Math.pow(1 - j / stream.length, 1.4) * 0.9;
        ctx.fillStyle = j === 0 ? 'rgba(191,255,222,.95)' : 'rgba(' + stream.hue + ',' + alpha + ')';
        ctx.fillText(stream.symbols[j], stream.x, y);
        if (delta && Math.random() < 0.008) stream.symbols[j] = character();
      }
    });
  }
  function tick(time) {
    if (!enabled || document.hidden) { frame = null; return; }
    if (!last) last = time;
    if (time - last >= 1000 / 24) {
      draw(Math.min((time - last) / 1000, 0.1));
      last = time;
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    last = 0;
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(enabled));
      button.lastElementChild.textContent = enabled ? 'Matrix on' : 'Matrix off';
      button.title = enabled ? 'Pause the background animation' : 'Resume the background animation';
    }
    if (enabled && !document.hidden) frame = requestAnimationFrame(tick);
  }
  if (button) button.addEventListener('click', function () {
    enabled = !enabled;
    try { localStorage.setItem('lzn-matrix', enabled ? 'on' : 'off'); } catch (error) { /* Storage is optional. */ }
    sync();
  });
  motion.addEventListener('change', function (event) {
    if (event.matches) enabled = false;
    else {
      try { preference = localStorage.getItem('lzn-matrix'); } catch (error) { /* Storage is optional. */ }
      enabled = preference !== 'off';
    }
    sync();
  });
  document.addEventListener('visibilitychange', sync);
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
  resize();
  sync();
}());
