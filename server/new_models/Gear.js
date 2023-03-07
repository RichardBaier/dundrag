const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/cost");

const armorSchema = new Schema({
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
  }
});

module.exports = model("Armor", armorSchema);
