const { Schema, model } = require("mongoose");

const spellSchema = new Schema({
  spell_name: {
    type: String,
    required: true,
  },
  spell_description: {
    type: String,
    required: true,
  },
});

module.exports = spellSchema;
