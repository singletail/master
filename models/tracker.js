const mongoose = require('mongoose');
const { Schema } = mongoose;
const uuid = require('uuid');

const TrackerSchema = new Schema({
  uuid: {
    type: String,
    default: function genUUID() {
      return uuid.v4();
    },
    unique: true,
  },
  user: { type: String },
  level: { type: Number, min: 0, max: 10, default: 0 },
  isAdmin: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  fingerprint: {
    type: [
      {
        token: { type: String },
        created: { type: Date, default: Date.now },
        last: { type: Date, default: Date.now },
      },
    ],
  },
  address: {
    type: [
      {
        ip: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        latitude: { type: String },
        longitude: { type: String },
      },
    ],
  },
  created: { type: Date, default: Date.now },
  last: { type: Date, default: Date.now },
  numRequests: { type: Number, default: 0 },
  numErrors: { type: Number, default: 0 },
});

var TrackerModel = mongoose.model('TrackerModel', TrackerSchema);
module.exports = { TrackerModel, TrackerSchema };
