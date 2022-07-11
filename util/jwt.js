const jose = require('jose');
const fs = require('fs');

const alg = 'EdDSA';
const privateKey = fs.readFileSync(process.env.JWT_KEY_PVT, 'utf8');
const publicKey = fs.readFileSync(process.env.JWT_KEY_PUB, 'utf8');

const ecPrivateKey = await jose.importPKCS8(privateKey, alg);
console.log(`imported: ${ecPrivateKey}`);

const pkcs8Pem = await jose.exportPKCS8(ecPrivateKey);
console.log(`re-exported: ${pkcs8Pem}`);

const checkKeys = async (req, res, next) => {};

module.exports = checkKeys;
