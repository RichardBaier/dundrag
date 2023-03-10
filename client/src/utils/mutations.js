import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        username
        email
        _id
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
mutation addCharacter($characterName: String!, $characterClass: String!) {
  addCharacter(character_name: $characterName, character_class: $characterClass) {
    _id
    character_name
    character_class
  }
}
`;
export const REMOVE_CHARACTER = gql`
  mutation RemoveCharacter($characterId: ID!) {
    removeCharacter(characterId: $characterId) {
      _id
      character_name
    }
  }`
;
