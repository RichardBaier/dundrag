const { Schema, model } = require("mongoose");
const Skill = require("./Skill");
const Spell = require("./Spell");
const Item = require("./Item");

const characterSchema = new Schema({
  creator: {
    type: String,
    required: true,
  },
  character_name: {
    type: String,
    required: true,
  },
  character_class: {
    type: String,
    required: true,
  },
  character_level: {
    type: Number,
    required: true,
  },
  character_exp: {
    type: Number,
    required: true,
  },
  origin_story: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  custom_items: {
    type: Schema.Types.ObjectId,
    ref: "CustomItem",
  },
  items: [Item],
  skills: [Skill],
  spells: [Spell],
});


const Character = model("Character", characterSchema);

module.exports = Character;
