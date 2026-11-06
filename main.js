document.documentElement.classList.add('js');

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
  try { localStorage.setItem('apic-theme', next); } catch (e) {}
  labelToggle();
});

// Copy keys: say "Copied" only once the clipboard accepted the text.
const status = document.querySelector('[data-copy-status]');
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
      if (status) status.textContent = 'Copied to the clipboard';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
    } catch (e) {
      btn.textContent = 'Select it';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
    }
  });
});

// Install switcher: tabs move with the arrow keys; without script both tables show.
document.querySelectorAll('[data-switch]').forEach((sw) => {
  const tabs = [...sw.querySelectorAll('[role="tab"]')];
  const show = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      show(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true);
    });
  });
  show(tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0]);
});

// Pinned tour: the panel nearest the middle of the screen sets the screenshot's crop.
const shot = document.querySelector('.shot');
const steps = document.querySelectorAll('.tour__list > li');
if (shot && steps.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      shot.dataset.step = en.target.dataset.step;
      steps.forEach((s) => s.classList.toggle('is-current', s === en.target));
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach((s) => io.observe(s));
}

// The bar retracts while scrolling down and returns on the way up.
const bar = document.querySelector('.bar');
let lastY = window.scrollY, ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const hide = y > lastY && y > 240 && !bar.contains(document.activeElement);
    bar.classList.toggle('is-hidden', hide);
    lastY = y;
    ticking = false;
  });
}, { passive: true });
