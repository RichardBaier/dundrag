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
