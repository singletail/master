var router = require('express').Router();

router.get('/', (req, res) => {
  let data = `${req.realIp}\n${req.city}, ${req.st} ${req.country}\n${req.latitude} ${req.longitude}`;
  res.render('data', { title: 'head', data: data });
});

router.get('/test', (req, res) => {
  res.render('html', { message: 'hi' });
});

module.exports = router;
