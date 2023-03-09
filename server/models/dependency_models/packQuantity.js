const { Schema } = require("mongoose");

const packQuantitySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = packQuantitySchema;
