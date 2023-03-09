const { Schema, model } = require("mongoose");
// const classSchema = require("./dependency_models/Class");
// const levelSchema = require("./dependency_models/level");
// const spellSchema = require("./Spell");
// const skillSchema = require("./Skill");

const characterSchema = new Schema({
  // creator: {
  //   type: String,
  //   required: false,
  // },
  character_name: {
    type: String,
    required: false,
  },
  character_class: {
    type: String,
    required: false,
  }
  // character_class: {
  //   type: classSchema,
  //   required: false,
  // },
  // character_level: {
  //   type: levelSchema,
  //   required: false,
  // },
  // character_exp: {
  //   type: Number,
  //   required: false,
  // },
  // origin_story: {
  //   type: String,
  //   required: false,
  // },
  // background: {
  //   type: String,
  //   required: false,
  // },
  // custom_items: {
  //   type: Schema.Types.ObjectId,
  //   ref: "CustomItem",
  // },
  // equipment: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Equipment',
  // },
  // skill: {
  //   type: skillSchema,
  //   required: false,
  // },
  // spell: {
  //   type: spellSchema,
  //   required: false,
  // },
});

const Character = model("Character", characterSchema);

module.exports = Character;
