const { Schema, model } = require("mongoose");

const damageTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
});

module.exports = model("DamageType", damageTypeSchema);
