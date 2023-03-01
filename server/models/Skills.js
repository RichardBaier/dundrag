const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  skill_name: {
    type: string,
    required: true,
  },
  skill_description: {
    type: string,
    required: true,
  },
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
