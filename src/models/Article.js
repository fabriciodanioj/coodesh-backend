const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    spaceFlightId: { type: Number },
    featured: { type: Boolean, default: false },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: String,
    publishedAt: { type: String, required: true },
    launches: [
      {
        id: String,
        provider: String,
      },
    ],
    events: [
      {
        id: String,
        provider: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', ArticleSchema);
