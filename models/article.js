const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: { type: String },
  author: { type: String }, // uuid
  path: { type: String },
  body: { type: String },
  format: { type: String },
  template: { type: String },
  date: { type: Date, default: Date.now },
  category: { type: [{ type: String }] },
  hidden: { type: Boolean },
  stickyPosition: { type: Number, default: 0 },
});

var ArticleModel = mongoose.model('ArticleModel', ArticleSchema);
module.exports = { ArticleModel, ArticleSchema };
