const { Schema, model } = require("mongoose");

const costSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: ["CP", "SP", "GP"],
    required: true,
  },
});

module.exports = costSchema;

// this will export as a schema.
// schemas are reusuable across other models. 
