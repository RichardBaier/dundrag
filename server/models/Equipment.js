const { Schema, model } = require("mongoose");

const equipmentSchema = new Schema({
  gear: {
    type: Schema.Types.ObjectId,
    ref: 'Gear',
  },
  weapons: {
    type: Schema.Types.ObjectId,
    ref: 'Weapon',
  },
  pack: {
    type: Schema.Types.ObjectId,
    ref: 'Pack',
  },
  armor: {
    type: Schema.Types.ObjectId,
    ref: 'Armor',
  },
  ammunition: {
    type: Schema.Types.ObjectId,
    ref: 'Ammunition',
  }
});

module.exports = model("Equipment", equipmentSchema);