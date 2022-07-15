const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const routes = require('../api/routes/v1');
const error = require('../api/middleware/error');

const app = express();
app.use(morgan('pretty'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/v1', routes);
app.use(error.notFound);
app.use(error.handler);

module.exports = app;
