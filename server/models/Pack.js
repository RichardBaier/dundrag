const { Schema, model } = require("mongoose");
const costSchema = require("./dependency_models/Cost")
const packQuantitySchema = require ("./dependency_models/PackQuantity")

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
