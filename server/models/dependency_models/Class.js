const { Schema } = require("mongoose");
const LevelSchema = require('./Level');

const classSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  hit_die: {
    type: Number,
    required: false,
  },
  class_level: {
    type: [LevelSchema],
    required: false,
  },
});

// Class requires level. Level requires class. is this okay?

module.exports = classSchema;
