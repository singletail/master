const symbol = {
  config: '',
  util: '',
  home: '',
  loc: 'ꮡ',
  key: '',
  keys: '',
  off: '겮',
  on: '겯',
  id: '',
  cert: '',
  laptop: '',
  power: '',
  fingerprint: '',
  cookie: '',
  server: '',
  bug: '',
  penis: '',
  hacker: '',
  boobs: '',
  x: '',
  console: '갹',
  start: '',
  end: '',
  unknown: '',
  yes: '',
  no: '',
  open: '',
  db: '',
  locked: '',
  unlocked: '',
};

function getSymbol(symName) {
  let retSym = symbol[symName] || symbol.unknown;
  return retSym;
}

module.exports = { getSymbol, symbol };
