const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    username: String
    email: String
    password: String
  }
  type Query {
    me: Profile
  }
`;

module.exports = typeDefs;
