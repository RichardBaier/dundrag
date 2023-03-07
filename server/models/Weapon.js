const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/cost");
const damageSchema = require("./dependency_models/damage");

const weaponSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: costSchema,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
  damage: {
    type: damageSchema,
    required: true,
  },
  weapon_range: {
    type: String,
    enum: [MELEE, RANGED],
    required: true,
  },
});

module.exports = model("Weapon", weaponSchema);
