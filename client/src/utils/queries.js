import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
  query profile($username: String!) {
    profile(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query getCharacter($_id: ID!) {
    character(_id: $_id) {
      _id
      characterName
      characterClass
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    getCharacters {
      _id
      character_name
      character_class
    }
  }
`;

