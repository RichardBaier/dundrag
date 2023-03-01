const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    item_name: {type: String, required: true }, 
    item_description: {type: String, required: true }, 
})

module.exports = itemSchema; 