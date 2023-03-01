const { Schema, model } = require("mongoose");

const spellSchema = new Schema({
  skill_name: {
    type: string,
    required: true,
  },
  skill_description: {
    type: string,
    required: true,
  },
});

const Spell = model("Spell", spellSchema);

module.exports = Spell;
