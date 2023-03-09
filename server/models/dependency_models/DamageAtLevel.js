const { Schema } = require("mongoose");

const damageAtLevelSchema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  Damage: {
    type: String,
    required: true,
  },
});

module.exports = damageAtLevelSchema;
