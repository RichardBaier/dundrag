const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Profile {
    _id: ID!
    username: String
    email: String
    password: String
    token: Auth
    characters: [Character]
  }
  type Character {
    _id: ID
    creator: Profile
    character_name: String!
    character_class: String!
  }
  input UpdateCharacter {
    _id: ID!
    character_name: String
    character_class: String
  }
  
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    getProfile(username: String!): Profile
    getFullProfile: Profile
    getProfiles: [Profile]
    getCharacter(characterId: ID!): Character
    getCharacters: [Character]
    getToken(username: String!): Auth
  }
  
  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter( character_name: String!, character_class: String!): Character
    updateCharacter(characterId: ID, characterName: String, characterClass: String): Character
    removeCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;

/*____________________________________________________*/
// CREATE
// UPDATE
// DELETE 
// FOR ALL INPUT TYPES:
// CUSTOMITEM
// SKILLS
//SPELLS
// EQUIPMENTS
/**____________________________________________________________ */
// character_by_creator(creator: String!): [Character]
// type Cost {
//     quantity: Int!
//     unit: Currency!
//   }

//   type Class {
//       name: String!
//       hit_die: Int!
//       class_levels: [Level!]!
//     }

//     type Level {
//         level: Int!
//         class: Class!
//         prof_bonus: Int
//       }

//         type DamageAtLevel {
//             level: Int!
//             damage: String!
//           }

//           type SpellDamage {
//               damage_at_slot_level: [DamageAtLevel!]
//               damage_at_character_level: [DamageAtLevel!]
//               damage_type: DamageType
//             }

//             type Damage {
//                 damage_dice: String!
//                 damage_type: DamageType!
//               }

//               type DamageType {
//                   name: String!
//                   desc: [String!]!
//                 }


//                 type PackQuantity {
//                     quantity: Int!
//             }

//             type ArmorClass {
//                 base: Int!
//                 dex_bonus: Boolean!
//                 max_bonus: Int
//               }

//               enum Currency {
//                   CP
//                   SP
//                   GP
//                 }

//                 enum WeaponRange {
//                     MELEE
//                     RANGED
//                   }

//                   createCustomItem(characterId: ID!, input: CustomItemInput!): Character
//                   updateCustomItem(characterId: ID!, itemId: ID!, input: CustomItemInput!): Character
//                   deleteCustomItem(characterId: ID!, itemId: ID!): Character

//                   createSkill(characterId: ID!, input: SkillInput!): Character
//                   updateSkill(characterId: ID!, skillId: ID!, input: SkillInput!): Character
//                   deleteSkill(characterId: ID!, skillId: ID!): Character

//                   createSpell(characterId: ID!, input: SpellInput!): Character
//                   updateSpell(characterId: ID!, spellId: ID!, input: SpellInput!): Character
//                   deleteSpell(characterId: ID!, spellId: ID!): Character

//                   createEquipment(characterId: ID!, input: EquipmentInput!): Character
//                   updateEquipment(characterId: ID!, equipmentId: ID!, input: EquipmentInput!): Character
//                   deleteEquipment(characterId: ID!, equipmentId: ID!): Character


//                     type Skill {
//                       name: String!
//                       desc: [String!]!
//                     }

//                     type Spell {
//                         casting_time: String!
//                         classes(name: String): [Class!]!
//                         damage: SpellDamage
//                         desc: [String!]!
//                         duration: String!
//                         level: Int!
//         material: String
//         name: String!
//         range: String!
//       }

//       type Equipment {
//           _id: ID!
//           gear: [Gear]!
//           weapons: [Weapon]!
//           pack: [Pack]!
//           armor: [Armor]!
//           ammunition: [Ammunition]!
//         }

//         type Pack {
//             name: String!
//             desc: [String!]
//             cost: Cost!
//             contents: [PackQuantity!]!
//           }

//           type Ammunition {
//               name: String!
//               desc: [String!]
//               quantity: Int!
//               cost: Cost!
//             }

//             type Armor {
//                 name: String!
//                 desc: [String!]
//                 cost: Cost!
//                 weight: Float
//                 armor_class: ArmorClass!
//               }

//               type Weapon {
//                   name: String!
//                   cost: Cost!
//                   desc: [String!]
//                   damage: Damage
//                   weapon_range: WeaponRange!
//                 }

//                   type Gear {
//                     name: String!
//                     cost: Cost!
//                     desc: [String!]
//                   }

//                   character_level: Int!
//         character_exp: Int!
//         background: String
//         custom_items: [CustomItem]
//         skills: [Skill]
//         spells: [Spell]
//         equipment: [Equipment]


//         type CustomItem {
//           _id: ID!
//           item_name: String!
//           item_description: String!
//           }

//           input CustomItemInput {
//             item_name: String!
//             item_description: String!
//             }

//             input SkillInput {
//               skill_name: String!
//               skill_modifier: Int!
//               }

//               input SpellInput {
//         spell_name: String!
//         spell_description: String!
//         }

//         input EquipmentInput {
//           equipment_name: String!
//           equipment_description: String!
//           equipment_weight: String!
//           }

//           character_level: Int!
//           character_exp: Int!
//           background: String!
//           custom_items: [CustomItemInput]
//           skills: [SkillInput]
//           spells: [SpellInput]
//           equipment: [EquipmentInput]

//           input characterInput {
//           _id: ID
//           character_name: String
//           character_class: String
//           }