// The landing page's footer: the mark and the license line, the links on the right.
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Footer() {
  const { footer } = useThemeConfig();
  const icon = useBaseUrl('images/icon.png');
  if (!footer) return null;
  return (
    <footer className="apic-foot">
      <div className="apic-foot__inner">
        <p className="apic-foot__close">
          <img src={icon} width="32" height="32" alt="" />
          <span>{footer.copyright}</span>
        </p>
        <p className="apic-foot__links">
          {footer.links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </p>
      </div>
    </footer>
  );
}
