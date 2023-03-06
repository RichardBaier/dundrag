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
    ability_name: String!
    ability_modifier: Int!
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
  
    type Gear {
    index: String!
    name: String!
    cost: Cost!
    desc: [String!]
  }



  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(username: String!): Profile
    characters: [Character]
    character_by_creator(creator: String!): [Character]
    character(character_id: ID!): Character
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Cost {
    quantity: Int!
    unit: Currency!
  }

  type Class {
    name: String!
    hit_die: Int!
    class_levels: [Level!]!
  }

  type Level {
    level: Int!
    class: Class!
    prof_bonus: Int
  }

  type DamageAtLevel {
    level: Int!
    damage: String!
  }
  
  type SpellDamage {
    damage_at_slot_level: [DamageAtLevel!]
    damage_at_character_level: [DamageAtLevel!]
    damage_type: DamageType
  }

  type Damage {
    damage_dice: String!
    damage_type: DamageType!
  }

  type DamageType {
    index: String!
    name: String!
    desc: [String!]!
  }
  

  type PackQuantity {
    quantity: Int!
  }

  type ArmorClass {
    base: Int!
    dex_bonus: Boolean!
    max_bonus: Int
  }

  enum Currency {
    CP
    SP
    GP
  }

  enum WeaponRange {
    MELEE
    RANGED
  }

`;

// input characterInput {
//   character_name: [String]
//   character_class: [String]
//   character_level: [String]
//   character_exp: [String]
//   origin_story: [String]
//   background: [String]
//   custom_items: [String]
//   items: [String]
//   skills: [String]
//   spells: [String]
// }
// addCharacter(input: characterInput!): Profile

module.exports = typeDefs;
