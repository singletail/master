require('dotenv').config();
const config = require('./config');
const express = require('express');
var cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const UserModel = require('./models/user');

const logger = require('./middleware/logger');
const geoIp = require('./middleware/geoip');
const cookieMonster = require('./middleware/cookies');

//const checkKeys = require('./util/jwt');

const app = express();

//app.use(express.json());
app.use(cookieParser());
app.use(cookieMonster);
app.use(geoIp);
app.use(logger('pretty'));

//app.use(express.static('static'));

app.set('view engine', 'ejs');

function error(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('error', { code: 500, msg: err });
}

app.use(require('./routes/main'));
app.use(require('./routes/errors'));
app.use(error);

const host = config.db.host;
const port = config.db.port;
const db = config.db.db;
const user = config.db.user;
const pwd = config.db.pwd;

const uri = `mongodb://${user}:${pwd}@${host}:${port}/?authSource=${db}`;

function listen() {
  //checkKeys();
  if (app.get('env') === 'test') return;
  app.listen(config.app.port);
  console.log('Express app started on port ' + config.app.port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect(uri, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connect();
