const { Schema, model } = require("mongoose");

const abilitySchema = new Schema({
  ability_name: {
    type: String,
    required: true
  },
  ability_score: {
    type: Number,
  },
  ability_modifier: {
    type: Number,
  },
});

const skillSchema = new Schema({
  skill_name: {
    type: String,
    required: true,
  },
  skill_description: {
    type: String,
    required: true,
  },
  ability_name: [abilitySchema],
  ability_modifier: [abilitySchema],
});

module.exports = skillSchema;
