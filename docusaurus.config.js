// @ts-check
import { tokyoNightDay, tokyoNightStorm } from './src/prism-tokyo-night.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'apic',
  tagline: 'Git-Native API contracts and client',
  favicon: 'images/logo/favicon-light-64.png?v=2',
  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', href: '/apic-web/images/logo/favicon-dark-64.png?v=2', media: '(prefers-color-scheme: dark)' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', href: '/apic-web/images/logo/apple-touch-icon.png?v=2' } },
  ],
  url: 'https://rizukirr.github.io',
  baseUrl: '/apic-web/',
  trailingSlash: true,
  organizationName: 'rizukirr',
  projectName: 'apic-web',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  // The docs are plain Markdown ({{name}}, <query> appear in the text), not MDX.
  markdown: { format: 'detect', hooks: { onBrokenMarkdownLinks: 'throw' } },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/rizukirr/apic-web/edit/main/',
        },
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
        logo: {
          alt: 'apic',
          src: 'images/logo/apic-mark-light.png',
          srcDark: 'images/logo/apic-mark-dark.png',
          width: 29,
          height: 24,
          href: 'pathname:///apic-web/',
          target: '_self',
        },
        // Same links, same order as the landing page's nav.
        items: [
          { href: 'pathname:///apic-web/#install', label: 'Install', position: 'right', target: '_self' },
          { type: 'docSidebar', sidebarId: 'docs', position: 'right', label: 'Docs' },
          { href: 'https://github.com/rizukirr/apic', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        copyright: 'apic is free software under GPL-3.0-only, by <a href="https://github.com/rizukirr">rizukirr</a>.',
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
