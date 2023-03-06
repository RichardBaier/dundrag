const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    username: String!
    email: String!
    password: String!
    characters: [Character]
  }

  type Character {
    _id: ID!
    creator: String!
    character_name: String!
    character_class: String!
    character_level: Int!
    character_exp: Int!
    origin_story: String!
    background: String!
    custom_items: [CustomItem]
    items: [Item]
    skills: [Skill]
    spells: [Spell]
  }

  type CustomItem {
    _id: ID!
    item_name: String!
    item_description: String!
  }

  type Item {
    _id: ID!
    item_name: String!
    item_description: String!
  }

  type Skill {
    _id: ID!
    skill_name: String!
    skill_description: String!
  }

  type Spell {
    casting_time: String!
    classes(name: String): [Class!]!
    damage: SpellDamage
    desc: [String!]!
    duration: String!
    level: Int!
    material: String
    name: String!
    range: String!
  }

  type Query {
    profiles: [Profile]
    profile(username: String!): Profile
    characters: [Character]
    character_by_creator(creator: String!): [Character]
    character(character_id: ID!): Character

  }
  type Gear {
    index: String!
    name: String!
    cost: Cost!
    desc: [String!]
  }


`;

module.exports = typeDefs;
