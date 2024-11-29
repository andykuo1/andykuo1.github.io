import './DarkMode.css';

// Always run first.
// NOTE: Don't forget to enable dark mode selector in tailwind!
initDarkMode();

/** @typedef {'dark'|'light'|'system'} DarkMode */

export function initDarkMode() {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  function onDOMContentLoaded() {
    document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    applyDarkMode();
  }
}

/**
 * @param {DarkMode} [force]
 */
export function toggleDarkMode(force = undefined) {
  if (typeof force === 'undefined') {
    let current = isDarkMode();
    if (current) {
      changeDarkMode('light');
    } else {
      changeDarkMode('dark');
    }
  } else {
    changeDarkMode(force);
  }
}

export function isDarkMode() {
  return document.documentElement.classList.contains('dark');
}

/**
 * @param {DarkMode} theme
 */
function changeDarkMode(theme) {
  switch (theme) {
    case 'dark':
      localStorage.setItem('theme', 'dark');
      break;
    case 'light':
      localStorage.setItem('theme', 'light');
      break;
    case 'system':
      localStorage.removeItem('theme');
      break;
  }
  applyDarkMode();
}

function shouldBeDarkMode() {
  let theme = localStorage.getItem('theme');
  return (
    theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

function applyDarkMode() {
  document.documentElement.classList.toggle('dark', shouldBeDarkMode());
}
