const { Schema, model } = require("mongoose");

const armorClassSchema = new Schema({
    base: {
      type: Number,
      required: true,
    },
    dex_bonus: {
        type: Boolean,
        required: true,
      },
      max_bonus: {
        type: Number,
        required: true,
      }
  });
  
  module.exports = model("ArmorClass", armorClassSchema);