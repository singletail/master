const express = require('express');
const logger = require('morgan');

// colors: curl -s https://gist.githubusercontent.com/HaleTom/89ffe32783f89f403bba96bd7bcd1263/raw/ | bash

const colReset = '\x1b[0m';

function fgcol(colNum) {
  return `\x1b[38;5;${colNum}m`;
}

//function bgcol(colNum) {
//  return `\x1b[48;5;${colNum}m`;
//}

function statusCol(status) {
  var colNum =
    status >= 500
      ? 1 // red
      : status >= 400
      ? 3 // yellow
      : status >= 300
      ? 6 // cyan
      : status >= 200
      ? 2 // green
      : 0; // no color
  return colNum;
}

function statusColor(status) {
  return `${fgcol(statusCol(status))}`;
}

logger.token('statusCol', function (req, res) {
  return statusColor(res.statusCode);
});

logger.token('statusStr', function (req, res) {
  return `[${res.statusCode}]`;
});

logger.token('time', function () {
  let d = new Date();
  let dh = d.getHours();
  let dm = d.getMinutes() < 10 ? '0' : '' + d.getMinutes();
  let ds = d.getSeconds() < 10 ? '0' : '' + d.getSeconds();
  let dt = `[${dh}:${dm}:${ds}]`;
  return dt;
});

logger.token('resetCol', function () {
  return `${colReset}`;
});

logger.token('realIp', function (req, res) {
  return `${req.realIp}`;
});

logger.token('city', function (req, res) {
  return `${req.city}`;
});

logger.token('state', function (req, res) {
  return `${req.st}`;
});

logger.token('country', function (req, res) {
  return `${req.country}`;
});

logger.token('latitude', function (req, res) {
  return `${req.latitude}`;
});

logger.token('longitude', function (req, res) {
  return `${req.longitude}`;
});

logger.format(
  'pretty',
  ':time :statusCol:statusStr :realIp :method :url :city :state :country :latitude :longitude :response-time ms'
);

module.exports = logger;
