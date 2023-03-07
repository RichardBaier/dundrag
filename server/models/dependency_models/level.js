const { Schema, model } = require("mongoose");

const levelSchema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  class: {
    type: classSchema,
    required: true,
  },
  prof_bonus: {
    type: Number,
  },
});

// Class requires level. Level requires class. is this okay?

module.exports = model("Level", levelSchema);
