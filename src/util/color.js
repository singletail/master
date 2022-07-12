// colors: curl -s https://gist.githubusercontent.com/HaleTom/89ffe32783f89f403bba96bd7bcd1263/raw/ | bash

const col = {
  red: 196,
  orange: 208,
  yellow: 226,
  green: 82,
  blue: 21,
  violet: 93,
  cyan: 51,
  pink: 201,
  white: 15,
  black: 0,
  reset: '\x1b[0m',
};

function colCode(colName) {
  let colNum = col[colName] || 15;
  return `\x1b[38;5;${colNum}m`;
}

function status(code) {
  var colNum =
    code >= 500
      ? col.red
      : code >= 400
      ? col.yellow
      : code >= 300
      ? col.cyan
      : code >= 200
      ? col.green
      : col.white;
  return colCode(`${colNum}[${code}]${col.reset}`);
}

module.exports = status;
