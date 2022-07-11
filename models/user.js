const mongoose = require('mongoose');
const { Schema } = mongoose;
const uuid = require('uuid');

const UserSchema = new Schema({
  uuid: {
    type: String,
    default: function genUUID() {
      return uuid.v4();
    },
    unique: true,
  },
  created: { type: Date, default: Date.now },
  last: { type: Date, default: Date.now },
  level: { type: Number, min: 0, max: 10, default: 0 },
  userName: { type: String, default: '' },
  displayName: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  zip: { type: String, default: '' },
  country: { type: String, default: '' },
  phone: { type: String, default: '' },
  photo: { type: String, default: '' },
  fingerprint: {
    type: [
      {
        token: { type: String },
        date: { type: Date },
      },
    ],
  },
  numRequests: { type: Number, default: 0 },
  numErrors: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  comments: {
    type: [
      {
        comment: { type: String },
        from: { type: String },
        date: { type: Date },
      },
    ],
  },
  authorizations: {
    type: [
      {
        provider: { type: String },
        token: { type: String },
      },
    ],
  },
});

var UserModel = mongoose.model('UserModel', UserSchema);
module.exports = { UserModel, UserSchema };
