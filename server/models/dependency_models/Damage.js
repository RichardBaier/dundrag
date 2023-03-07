const { Schema, model } = require("mongoose");
const damageTypeSchema = require("./dependency_models/damageType");

const damageSchema = new Schema({
  damage_dice: {
    type: String,
    required: true,
  },
  damage_type: {
    type: damageTypeSchema,
    required: true,
  },
});

module.exports = model("Damage", damageSchema);
