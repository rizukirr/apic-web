// Theme toggle: follows the system until the visitor picks one.
const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const effective = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
const toggle = document.querySelector('[data-theme-toggle]');
const labelToggle = () => toggle && toggle.setAttribute('aria-label', effective() === 'dark' ? 'Switch to the light theme' : 'Switch to the dark theme');
labelToggle();
systemDark.addEventListener('change', labelToggle);
toggle?.addEventListener('click', () => {
  const next = effective() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  labelToggle();
});

// Copy buttons: say "Copied" only once the clipboard accepted the text.
const status = document.querySelector('[data-copy-status]');
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
      if (status) status.textContent = 'Copied to the clipboard';
    } catch (e) {
      btn.textContent = 'Select it';
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  });
});

// The CLI switcher: without script every panel shows in order.
const tablist = document.querySelector('[data-tabs]');
if (tablist) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
  panels[0].parentElement.classList.add('is-tabs');
  const select = (i, focus) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].classList.toggle('is-on', on);
      panels[j].setAttribute('aria-hidden', String(!on));
      panels[j].tabIndex = on ? 0 : -1;
    });
    if (focus) tabs[i].focus();
  };
  select(0, false);
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i, false));
    t.addEventListener('keydown', (e) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (e.key in keys) { e.preventDefault(); select((i + keys[e.key] + tabs.length) % tabs.length, true); }
      else if (e.key === 'Home') { e.preventDefault(); select(0, true); }
      else if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
    });
  });
}
