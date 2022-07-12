const fs = require('fs');
//const jose = require('jose');
const logger = require('../config/logger');
const symbol = require('./symbol');

//const alg = 'EdDSA';
const prvKeyFile = fs.readFileSync(process.env.JWT_KEY_PVT, 'utf8');
const pubKeyFile = fs.readFileSync(process.env.JWT_KEY_PUB, 'utf8');

//const ecPrivateKey = await jose.importPKCS8(prvKeyFile, alg);
//const ecPublicKey = await jose.importSPKI(pubKeyFile, alg);

//var ecPublicKey;
//var ecPrivateKey;

async function public() {
  //if (!ecPublicKey) {
  //  logger.info(`${symbol.open} Loading public key from ${pubKeyFile}`);
  //ecPublicKey = await jose.importSPKI(pubKeyFile, alg);
  //ecPublicKey = await loadFile(pubKeyFile);
  //logger.info(`${symbol.key} Loaded public key ${ecPublicKey}`);
  //}
  //return ecPublicKey;
  console.info(`${symbol.key} Loaded public key ${pubKeyFile}`);
  return pubKeyFile;
}

async function private() {
  //if (!ecPrivateKey) {
  //logger.info(`${symbol.open} Loading private key from ${prvKeyFile}`);
  //ecPrivateKey = await jose.importSPKI(prvKeyFile, alg);
  //ecPrivateKey = await loadFile(prvKeyFile);
  //logger.info(`${symbol.key} Loaded private key ${ecPrivateKey}`);
  //}
  //return ecPrivateKey;
  console.info(`${symbol.key} Loaded private key ${prvKeyFile}`);
  return prvKeyFile;
}

module.exports = { public, private };
