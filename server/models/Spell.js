const { Schema, model } = require("mongoose");

const spellSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Class',
    }
  ],
  damage: {
    type: Schema.Types.ObjectId,
    ref: 'SpellDamage',
  },
  desc: {
    type: [String],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  material: String,
  range: {
    type: String,
    required: true,
  },
});

module.exports =  spellSchema;

