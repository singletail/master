var router = require('express').Router();

/*
  400 Bad Request
  401 Unauthorized
  402 Payment Required
  403 Forbidden
  404 Not Found
  405 Method Not Allowed
  405 Not acceptable
  407 Proxy Authentication Required
  408 Request Timeout
  409 Conflict
  410 Gone
  411 Length Required
  412 Precondition Failed
  413 Content Too Large
  414 URI Too Long
  415 Unsupported Media Type
  416 Range Not Satisfiable
  417 Exception Failed
  418 I'm a teapot
  421 Misdirected Request
  422 Unprocessable Content
  426 Upgrade Required

  500 Internal Server Error
  501 Not Implemented
  502 Bad Gateway
  503 Service Unavailable
  504 Gateway Timeout
  505 HTTP Version Not Supported
  
*/

router.use(function (err, req, res, next) {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {}),
    });
  }

  return next(err);
});

// 500
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404
router.use((req, res, next) => {
  //res.status(404).send('Not Found.');
  res.status(404);
  res.render('error', { code: 404, msg: 'Not Found' });
});

module.exports = router;
