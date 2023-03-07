const { Schema, model } = require("mongoose")

const customItemSchema = new Schema({
    item_name: {type: String, required: true }, 
    item_description: {type: String, required: true }, 
})

const CustomItem = model("Item", customItemSchema)


module.exports = CustomItem; 