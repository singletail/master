const uuid = require('uuid');
const TrackerModel = require('../models/tracker.js');

const createTracker = async (req, res, next) => {
  const newUuid = uuid.v4();
  var _address = new TrackerModel.address({
    ip: req.realIp,
    city: req.city,
    state: req.st,
    country: req.country,
    latitude: req.latitude,
    longitude: req.longitude,
  });

  var _tracker = new TrackerModel({
    uuid: newUuid,
    address: [{ _address }],
  });

  //TrackerModel.create(_tracker);
  req.tracker = _tracker;
  next();
};

module.exports = createTracker;
