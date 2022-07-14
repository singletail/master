var router = require('express').Router();
const jayson = require('jayson');

const rpcServer = jayson.server({
  add: function (args, callback) {
    callback(null, args[0] + args[1]);
  },
  say: function (args, callback) {
    callback(null, 'hi');
  },
});

router.post('/json-rpc', (req, res, next) => {
  var dump = JSON.stringify(req.body);
  console.log(`Req body: ${dump}`);
  const context = { headers: req.headers };

  //rpcServer.call(req.body, context, function (err, result) {
  rpcServer.call(req.body, context, function (err, result) {
    if (err) {
      if (err instanceof Error) return next(err);
      res.status(400);
      res.send(err);
      return;
    }

    //const { GT_CLIENT_SECRET } = process.env;
    //const hash = crypto.createHmac('sha256', GT_CLIENT_SECRET)
    //.update(JSON.stringify(result))
    //.digest('hex');

    if (result) {
      res.send(result);
    } else {
      res.status(204);
      res.send('');
    }
  });
});

module.exports = router;
