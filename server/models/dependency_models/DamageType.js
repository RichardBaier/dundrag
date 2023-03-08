const { Schema } = require("mongoose");

const DamageTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
});

module.exports = DamageTypeSchema;
