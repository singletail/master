const uuid = require('uuid');

const cookieMonster = async (req, res, next) => {
  //req.realIp = await req.header('x-forwarded-for');
  console.log('Pretest Cookies: ', req.cookies);
  //console.log('Signed Cookies: ', req.signedCookies);
  if (req.cookies.testCookie) {
    console.log('Cookie found: ', req.cookies);
  } else {
    var testUuid = uuid.v4();
    console.log(`Created uuid ${testUuid}`);
    res.cookie('testCookie', testUuid, { maxAge: 900000, httpOnly: true });
  }
  next();
};

module.exports = cookieMonster;
