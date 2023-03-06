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
    ability_name: [abilitySchema]
    ability_modifier: [abilitySchema]
  }

  type Spell {
    _id: ID!
    spell_name: String!
    spell_description: String!
  }
  type Pack {
    name: String!
    desc: [String!]
    cost: Cost!
    contents: [PackQuantity!]!
  }

  type Ammunition {
    name: String!
    desc: [String!]
    quantity: Int!
    cost: Cost!
  }

  type Armor {
    name: String!
    desc: [String!]
    cost: Cost!
    weight: Float
    armor_class: ArmorClass!
  }

  type Weapon {
    name: String!
    cost: Cost!
    desc: [String!]
    damage: Damage
    weapon_range: WeaponRange!
  }

  type Query {
    profiles: [Profile]
    profile(username: String!): Profile
    characters: [Character]
    character_by_creator(creator: String!): [Character]
    character(character_id: ID!): Character
  }
`;

module.exports = typeDefs;
