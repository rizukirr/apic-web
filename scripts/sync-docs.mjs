// Pulls the docs from the apic repo and writes them to docs/ for Docusaurus.
// The apic repo stays the single source: edit the Markdown there, not here.
import { mkdir, writeFile } from 'node:fs/promises';

const REPO = 'rizukirr/apic';
const REF = process.env.APIC_DOCS_REF || 'main';
const RAW = `https://raw.githubusercontent.com/${REPO}/${REF}`;
const BLOB = `https://github.com/${REPO}/blob/${REF}`;

// source file -> page in docs/
const PAGES = [
  { src: 'README.md', out: 'intro.md', label: 'Introduction', slug: '/' },
  { src: 'COMMAND.md', out: 'commands.md', label: 'Commands' },
  { src: 'CONTRACT.md', out: 'contract.md', label: 'Contract format' },
  { src: 'SENDING.md', out: 'sending.md', label: 'Sending' },
  { src: 'GUI.md', out: 'gui.md', label: 'Desktop app' },
];
const outFor = new Map(PAGES.map((p) => [p.src, p.out]));

// Rewrite links outside code: a page we publish points at its new file,
// anything else in the repo (LICENSE, example/) points at GitHub.
function rewriteLinks(md) {
  return md.replace(/(!?\[[^\]]*\]\()([^)\s]+)(\))/g, (all, open, href, close) => {
    if (/^(https?:|mailto:|#)/.test(href)) return all;
    const [path, hash = ''] = href.split('#');
    const file = path.replace(/^\.\//, '');
    if (outFor.has(file)) return `${open}${outFor.get(file)}${hash ? '#' + hash : ''}${close}`;
    return `${open}${BLOB}/${file}${hash ? '#' + hash : ''}${close}`;
  });
}

// Plain Markdown mode does not render raw HTML, so turn <img> into Markdown.
function htmlImages(md) {
  return md.replace(/<img\b[^>]*>/g, (tag) => {
    const src = tag.match(/src="([^"]+)"/)?.[1];
    if (!src) return '';
    const alt = tag.match(/alt="([^"]*)"/)?.[1] ?? '';
    return `![${alt}](${src})`;
  });
}

// Apply a transform only outside fenced code blocks.
function outsideFences(md, fn) {
  return md.split(/(^```[\s\S]*?^```[^\n]*$)/m).map((part, i) => (i % 2 ? part : fn(part))).join('');
}

await mkdir('docs', { recursive: true });
await Promise.all(PAGES.map(async (page, i) => {
  const res = await fetch(`${RAW}/${page.src}`);
  if (!res.ok) throw new Error(`sync-docs: ${page.src} returned ${res.status}`);
  let md = await res.text();
  md = outsideFences(md, (s) => rewriteLinks(htmlImages(s)));
  const front = [
    '---',
    `sidebar_label: ${JSON.stringify(page.label)}`,
    `sidebar_position: ${i + 1}`,
    page.slug ? `slug: ${page.slug}` : null,
    `custom_edit_url: https://github.com/${REPO}/edit/${REF}/${page.src}`,
    '---',
    '',
  ].filter((l) => l !== null).join('\n');
  await writeFile(`docs/${page.out}`, front + md);
  console.log(`sync-docs: ${page.src} -> docs/${page.out}`);
}));
