const mongoose = require('mongoose');
const { Schema } = mongoose;

const RequestSchema = new Schema({
  uuid: { type: String, default: '' },
  timeStamp: { type: Date, default: Date.now },
  reqType: { type: String, default: '' },
  reqCode: { type: String, default: '' },
  url: { type: String, default: '' },
  ip: { type: String, default: '' },
  token: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  zip: { type: String, default: '' },
  country: { type: String, default: '' },
  fingerprint: { type: String, default: '' },
});

var RequestModel = mongoose.model('RequestModel', RequestSchema);
module.exports = { RequestModel, RequestSchema };
