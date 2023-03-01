const { Schema, model } = require('mongoose');
const Item = require('./Item')
const Skill = require('./Skill')
const Spell = require('./Spell')


const characterSchema = new Schema({
  character_name: {
    type: String,
    required: true
  },
  character_class: {
    type: String,
    required: true
  },
  character_level: {
    type: Number,
    required: true
  },
  character_exp: {
    type: Number,
    required: true
  },
  origin_story: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  item: [Item],
  skill: [Skill],
  spell: [Spell]
});

const Character = model('Character', characterSchema);

module.exports = Character;