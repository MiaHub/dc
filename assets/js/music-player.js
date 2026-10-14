// Site-wide theme song player.
// Adds a floating on/off button to every page. Play state and position are kept in
// localStorage so the song continues where it left off when you move to another page.
// Browsers block audio until the visitor interacts with the page, so if play() is
// refused the button pulses and the song starts on the first click or key press.
//
// Usage: <script src=".../music-player.js" data-src=".../song.mp3" [data-autostart]></script>
// data-autostart starts the song from the beginning on that page (the matrix landing page).
// Any element with data-music-toggle also toggles the song (e.g. the card on the welcome page).
(function () {
  var script = document.currentScript;
  var src = script.getAttribute('data-src');
  var autostart = script.hasAttribute('data-autostart');
  var KEY = 'dcMusic';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  var state = load();
  var wanted = autostart || state.on === true;
  var audio = new Audio(src);
  audio.preload = wanted ? 'auto' : 'none';
  if (!autostart && state.t) audio.currentTime = state.t;

  var style = document.createElement('style');
  style.textContent =
    '.dc-music{position:fixed;right:1rem;bottom:1rem;z-index:1000;width:3rem;height:3rem;' +
    'border-radius:50%;border:2px solid #9f0;background:rgba(0,0,0,.8);color:#9f0;cursor:pointer;' +
    'display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 2px 10px rgba(0,0,0,.4)}' +
    '.dc-music:hover{background:#000}' +
    '.dc-music svg{width:1.4rem;height:1.4rem;fill:currentColor}' +
    '.dc-music .bars{display:none;align-items:flex-end;gap:2px;height:1.2rem}' +
    '.dc-music .bars i{width:3px;background:currentColor;animation:dc-bar .8s ease-in-out infinite}' +
    '.dc-music .bars i:nth-child(2){animation-delay:.2s}.dc-music .bars i:nth-child(3){animation-delay:.4s}' +
    '.dc-music .bars i:nth-child(4){animation-delay:.1s}' +
    '.dc-music.is-playing .bars{display:flex}.dc-music.is-playing svg{display:none}' +
    '.dc-music.is-pending{animation:dc-pulse 1.2s ease-in-out infinite}' +
    '@keyframes dc-bar{0%,100%{height:20%}50%{height:100%}}' +
    '@keyframes dc-pulse{0%,100%{box-shadow:0 0 0 0 rgba(153,255,0,.6)}50%{box-shadow:0 0 0 10px rgba(153,255,0,0)}}' +
    '@media (prefers-reduced-motion:reduce){.dc-music .bars i,.dc-music.is-pending{animation:none}.dc-music .bars i{height:70%}}';
  document.head.appendChild(style);

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'dc-music';
  button.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>' +
    '<span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';

  var pending = false;

  function render() {
    var playing = !audio.paused;
    button.classList.toggle('is-playing', playing);
    button.classList.toggle('is-pending', pending && !playing);
    var label = playing ? 'Pause theme song' : 'Play theme song: Dieter Cho Version 2';
    button.setAttribute('aria-label', label);
    button.title = label;
    button.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }

  function play() {
    audio.play().then(function () {
      pending = false;
      render();
    }).catch(function () {
      // Autoplay blocked: wait for the first interaction anywhere on the page.
      pending = true;
      render();
    });
  }

  function pause() {
    pending = false;
    audio.pause();
    render();
  }

  function toggle() {
    if (audio.paused) play(); else pause();
  }

  function isToggle(target) {
    return target.closest && (target.closest('.dc-music') || target.closest('[data-music-toggle]'));
  }

  function onFirstGesture(e) {
    if (pending && !isToggle(e.target)) play();
  }

  document.addEventListener('pointerdown', onFirstGesture, true);
  document.addEventListener('keydown', onFirstGesture, true);

  button.addEventListener('click', toggle);
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-music-toggle]');
    if (!el) return;
    e.preventDefault();
    toggle();
  });

  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);
  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    save({ on: false, t: 0 });
    render();
  });

  window.addEventListener('pagehide', function () {
    if (audio.ended) return;
    save({ on: !audio.paused || pending, t: audio.currentTime || state.t || 0 });
  });

  function mount() {
    document.body.appendChild(button);
    render();
    if (wanted) play();
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
