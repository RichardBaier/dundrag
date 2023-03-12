const { AuthenticationError } = require("apollo-server-express");
const { Profile, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getProfile: async (parent, args, context) => {
      const profile = await Profile.findOne({ _id: context.profile_id })
      .populate("characters")

      if (!profile) {
        throw new ApolloError(`Couldn't find user by this id!`)
      }
      return profile;
    },
    getProfiles: async (parent, { args }) => {
      return Profile.find(args)
    },
    getCharacters: async (parent, args, context) => {
      return Character.find(args) 
    },
    getCharacter: async (parent, { characterId }) => {
        return Character.findOne({ _id: characterId });
      },
    },
    Mutation: {
      addProfile: async (parent, { username, email, password }) => {
        const profile = await Profile.create({ username, email, password });
        const token = signToken(profile);
        return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile found with this email address");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(profile);

      return { token, profile };
    },
    addCharacter: async (parent, { character_name, character_class }) => {
      const character = Character.create({
        character_name,
        character_class,
        // character_level,
        // background,
        // equipment,
        // skill,
        // spell,
      }, 
      );
      return character;
    },
    updateCharacter: async (parent, { characterId, characterName, characterClass }) => {
      const character = await Character.findOneAndUpdate(
        { _id: characterId },
        { character_name: characterName, character_class: characterClass },
        { new: true }
      );
      return character;
    },
    removeCharacter: async (parent, { characterId }) => {
      const character = await Character.findOneAndDelete({
        _id: characterId
      },
      { new: true } 
      );
      return character;
    }
  }
};

module.exports = resolvers;

  // NEW ITEM INPUT MUTATIONS 
      // async createCustomItem(_, { characterId, input }) {
      //   const character = await Character.findById(characterId);
      //   character.custom_items.push(input);
      //   await character.save();
      //   return character;
      // },
      // async updateCustomItem(_, { characterId, itemId, input }) {
      //   const character = await Character.findById(characterId);
      //   const itemIndex = character.custom_items.findIndex(item => item._id == itemId);
      //   if (itemIndex === -1) throw new Error('Item not found');
      //   character.custom_items[itemIndex] = input;
      //   await character.save();
      //   return character;
      // },
      // async deleteCustomItem(_, { characterId, itemId }) {
      //   const character = await Character.findById(characterId);
      //   character.custom_items = character.custom_items.filter(item => item._id != itemId);
      //   await character.save();
      //   return character;
      // },

      // async createSkill(_, { characterId, input }) {
      //   const character = await Character.findById(characterId);
      //   character.skills.push(input);
      //   await character.save();
      //   return character;
      // },
      // async updateSkill(_, { characterId, skillId, input }) {
      //   const character = await Character.findById(characterId);
      //   const skillIndex = character.skills.findIndex(skill => skill._id == skillId);
      //   if (skillIndex === -1) throw new Error('Skill not found');
      //   character.skills[skillIndex] = input;
      //   await character.save();
      //   return character;
      // },
      // async deleteSkill(_, { characterId, skillId }) {
      //   const character = await Character.findById(characterId);
      //   character.skills = character.skills.filter(skill => skill._id != skillId);
      //   await character.save();
      //   return character;
      // },

      // async createSpell(_, { characterId, input }) {
      //   const character = await Character.findById(characterId);
      //   character.spells.push(input);
      //   await character.save();
      //   return character;
      // },
      // async updateSpell(_, { characterId, spellId, input }) {
      //   const character = await Character.findById(characterId);
      //   const spellIndex = character.spells.findIndex(spell => spell._id == spellId);
      //   if (spellIndex === -1) throw new Error('Spell not found');
      //   character.spells[spellIndex] = input;
      //   await character.save();
      //   return character;
      // },
      // async deleteSpell(_, { characterId, spellId }) {
      //   const character = await Character.findById(characterId);
      //   character.spells = character.spells.filter(spell => spell._id != spellId);
      //   await character.save();
      //   return character;
      // },

      // profiles: async () => {
//   return Profile.find().populate("characters");
// },

// addCharacter: async (parent, args, context) => {
//   if (context.profile) {
//     const newCharacter = await Character.create({
//       args,
//       creator: context.profile.username
//     });

//     await Profile.findOneAndUpdate(
//       { _id: context.profile._id },
//       { $addToSet: { character: newCharacter._id}}
//     )
//   }
// }