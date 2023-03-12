const { Schema, model } = require("mongoose");
// const classSchema = require("./dependency_models/Class");
// const levelSchema = require("./dependency_models/level");
// const spellSchema = require("./Spell");
// const skillSchema = require("./Skill");

const characterSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  character_name: {
    type: String,
    required: true,
  },
  character_class: {
    type: String,
    required: true,
  }
  // character_class: {
  //   type: classSchema,
  //   required: true,
  // },
  // character_level: {
  //   type: levelSchema,
  //   required: true,
  // },
  // character_exp: {
  //   type: Number,
  //   required: true,
  // },
  // origin_story: {
  //   type: String,
  //   required: true,

  // },
  // background: {
  //   type: String,
  //   required: true,

  // equipment: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Equipment',
  // },
  // skill: {
  //   type: skillSchema,
  //   required: true,
  // },
  // Spell: {
  //   type: spellSchema,
  //   required: true,
  // },
});

const Character = model("Character", characterSchema);

module.exports = Character;