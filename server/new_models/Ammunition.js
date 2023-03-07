const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/cost");

const ammunitionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  cost: {
    type: costSchema,
    required: true,
  },
});

module.exports = model("Ammunition", ammunitionSchema);
