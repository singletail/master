const geoiplite = require('geoip-lite');

// Update Database:
// node ./node_modules/geoip-lite/scripts/updatedb.js license_key=zvleCMIVJivTCSGD

// fields:
// req.geo.
//  country, region, timezone, city, ll[0], ll[1]]

const geoIp = (req, res, next) => {
  var realIp = '0.0.0.0';
  if ('x-forwarded-for' in req.headers) {
    realIp = req.header('x-forwarded-for');
  }
  req.realIp = realIp;
  const geo = geoiplite.lookup(realIp);
  if (geo) {
    req.city = geo.city;
    req.st = geo.region || 'NO';
    req.country = geo.country || 'NO';
    req.latitude = geo.ll[0] || 0.0;
    req.longitude = geo.ll[1] || 0.0;
  }
  next();
};

module.exports = geoIp;
