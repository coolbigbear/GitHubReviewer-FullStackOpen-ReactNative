import { gql } from '@apollo/client';

import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
${CORE_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const CHECK_IF_USER_AUTHORIZED = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;