const { AuthenticationError } = require("apollo-server-express");
const { Profile, Character } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate("characters");
    },
    profile: async (parent, { username }) => {
      return Profile.findOne({ username }).populate("characters");
    },
    character: async (parent, { character_id }) => {
      return Character.findOne({ _id: character_id });
    },
  },
  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
        const profile = await Profile.create({ username, email, password });
        const token = signToken(profile);
        return { token, profile };
      },
      login: async (parent, {  email, password }) => {
        const profile = await Profile.findOne({ email });
  
        if (!profile) {
          throw new AuthenticationError('No profile found with this email address');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(profile);
  
        return { token, profile };
      },
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
    }
};



module.exports = resolvers;
