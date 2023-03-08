const { Schema } = require("mongoose");
const LevelSchema = require('./Level');

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hit_die: {
    type: Number,
    required: true,
  },
  class_level: {
    type: [LevelSchema],
    required: true,
  },
});

// Class requires level. Level requires class. is this okay?

module.exports = classSchema;
