const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/cost");

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
    type: [levelSchema],
    required: true,
  },
});

// Class requires level. Level requires class. is this okay?

module.exports = model("Class", classSchema);
