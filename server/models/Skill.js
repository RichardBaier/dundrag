const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  skill_name: {
    type: String,
    required: true,
  },
  skill_description: {
    type: String,
    required: true,
  },
});

module.exports = skillSchema;
