const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
});

module.exports = model("Skill", skillSchema);
