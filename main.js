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
