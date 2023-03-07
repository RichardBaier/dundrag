const { Schema, model } = require("mongoose");

const packQuantitySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = model("PackQuantity", packQuantitySchema);
