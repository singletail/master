const geoiplite = require('geoip-lite');

// Update Database:
// node ./node_modules/geoip-lite/scripts/updatedb.js license_key=zvleCMIVJivTCSGD

// fields:
// req.geo.
//  country, region, timezone, city, ll[0], ll[1]]

const geoIp = async (req, res, next) => {
  req.realIp = await req.header('x-forwarded-for');
  //req.geo = await geoiplite.lookup(req.realIp);
  const geo = geoiplite.lookup(req.realIp);
  req.city = geo.city || 'Nowhere';
  req.st = geo.region || 'NO';
  req.country = geo.country || 'NO';
  req.latitude = geo.ll[0] || 0.0;
  req.longitude = geo.ll[1] || 0.0;
  next();
};

module.exports = geoIp;
