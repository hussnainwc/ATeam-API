const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = clubSchema;
