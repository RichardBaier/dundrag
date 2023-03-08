const { Schema, model } = require("mongoose");
const classSchema = require("./dependency_models/Class");

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
    type: classSchema,
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
  // custom_items: {
  //   type: Schema.Types.ObjectId,
  //   ref: "CustomItem",
  // },
  skills: [Skill],
  spells: [Spell],
});


const Character = model("Character", characterSchema);

module.exports = Character;
