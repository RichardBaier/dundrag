const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/cost")
const packQuantitySchema = require ("./dependency_models/packQuantity")

const packSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: [String],
    required: false
  },
  cost: {
    type: costSchema,
    required: true
  },
  contents: {
    type: [packQuantitySchema],
    required: true
  }
});

module.exports = model("Pack", packSchema);
