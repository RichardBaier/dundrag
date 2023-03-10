const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/Cost");
const armorClass = require("./dependency_models/ArmorClass");

const armorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
  cost: {
    type: costSchema,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  armor_class: {
    type: armorClass,
    required: true,
  },
});

module.exports = model("Armor", armorSchema);
