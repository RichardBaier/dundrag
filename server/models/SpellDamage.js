const { Schema, model } = require("mongoose");
const damageAtLevelSchema = require("./dependency_models/DamageAtLevel");
const damageTypeSchema = require("./dependency_models/DamageType");

const spellDamageSchema = new Schema({
    damage_at_slot_level: {
        type: [damageAtLevelSchema],
        required: true,
  },
  damage_at_character_level: {
    type: [damageAtLevelSchema],
    required: true,
},
  damage_type: {
    type: [damageTypeSchema],
    required: true,
  }
});

module.exports = spellDamageSchema;
