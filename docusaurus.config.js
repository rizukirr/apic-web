// @ts-check
import { tokyoNightDay, tokyoNightStorm } from './src/prism-tokyo-night.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'apic',
  tagline: 'Git-Native API contracts and client',
  favicon: 'images/icon.png',
  url: 'https://rizukirr.github.io',
  baseUrl: '/apic-web/',
  trailingSlash: true,
  organizationName: 'rizukirr',
  projectName: 'apic-web',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  // The apic docs are plain GitHub Markdown ({{name}}, <query>), not MDX.
  markdown: { format: 'detect', hooks: { onBrokenMarkdownLinks: 'throw' } },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { routeBasePath: 'docs', sidebarPath: './sidebars.js' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'apic',
        // The landing page is static HTML, not a Docusaurus route, so leave the router.
        logo: { alt: 'apic', src: 'images/icon.png', href: 'pathname:///apic-web/', target: '_self' },
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
          { href: 'pathname:///apic-web/#install', label: 'Install', position: 'left', target: '_self' },
          { href: 'https://github.com/rizukirr/apic', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        copyright: 'apic is free software under GPL-3.0-only, by Rizki Rakasiwi.',
        links: [
          { label: 'Source', href: 'https://github.com/rizukirr/apic' },
          { label: 'Issues', href: 'https://github.com/rizukirr/apic/issues' },
          { label: 'Changelog', href: 'https://github.com/rizukirr/apic/blob/main/CHANGELOG.md' },
        ],
      },
      prism: {
        theme: tokyoNightDay,
        darkTheme: tokyoNightStorm,
        additionalLanguages: ['bash', 'toml', 'json'],
      },
    }),
};

export default config;
