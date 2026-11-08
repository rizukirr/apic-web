// The landing page's theme button: two states, a moon in light and a sun in dark.
// Which icon shows is decided by CSS on [data-theme], so it is right before hydration.
import React from 'react';
import clsx from 'clsx';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';

export default function NavbarColorModeToggle({ className }) {
  const { disableSwitch } = useThemeConfig().colorMode;
  const { colorMode, setColorMode } = useColorMode();
  if (disableSwitch) return null;
  const next = colorMode === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className={clsx('apic-theme', className)}
      aria-label={`Switch to the ${next} theme`}
      onClick={() => setColorMode(next)}>
      <svg className="apic-theme__moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
      <svg className="apic-theme__sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
    </button>
  );
}
