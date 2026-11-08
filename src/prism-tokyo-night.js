// Code colours from the Tokyo Night palette apic-gui ships, so code in the docs
// reads like the app. Day for light, Storm for dark.
const make = (c) => ({
  plain: { color: c.fg, backgroundColor: c.bg },
  styles: [
    { types: ['comment', 'prolog', 'cdata'], style: { color: c.comment, fontStyle: 'italic' } },
    { types: ['punctuation', 'operator'], style: { color: c.punct } },
    { types: ['property', 'tag', 'attr-name', 'key', 'parameter'], style: { color: c.blue } },
    { types: ['string', 'char', 'attr-value', 'inserted'], style: { color: c.green } },
    { types: ['number', 'boolean', 'constant', 'null'], style: { color: c.orange } },
    { types: ['keyword', 'selector', 'important', 'atrule'], style: { color: c.purple } },
    { types: ['function', 'class-name', 'builtin'], style: { color: c.cyan } },
    { types: ['variable', 'regex'], style: { color: c.yellow } },
    { types: ['deleted'], style: { color: c.red } },
  ],
});

export const tokyoNightDay = make({
  bg: '#d0d5e3', fg: '#3760bf', comment: '#848cb5', punct: '#6172b0', blue: '#2e7de9',
  green: '#587539', orange: '#b15c00', purple: '#9854f1', cyan: '#007197', yellow: '#8c6c3e', red: '#f52a65',
});

export const tokyoNightStorm = make({
  bg: '#2f334d', fg: '#c0caf5', comment: '#7884b7', punct: '#89ddff', blue: '#7aa2f7',
  green: '#9ece6a', orange: '#ff9e64', purple: '#bb9af7', cyan: '#7dcfff', yellow: '#e0af68', red: '#f7768e',
});
