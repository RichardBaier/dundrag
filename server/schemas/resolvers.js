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
};

module.exports = resolvers;
