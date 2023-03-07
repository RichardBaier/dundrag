const { Schema, model } = require("mongoose");
const DamageTypeSchema = require("./DamageType");

const damageSchema = new Schema({
  damage_dice: {
    type: String,
    required: true,
  },
  damage_type: {
    type: DamageTypeSchema,
    required: true,
  },
});

module.exports = damageSchema;
