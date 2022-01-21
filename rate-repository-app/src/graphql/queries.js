import { gql } from '@apollo/client';

import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
${CORE_REPOSITORY_FIELDS}
  query getRepositories($orderBy: AllRepositoriesOrderBy = CREATED_AT, $orderDirection: OrderDirection = DESC, $searchKeyword: String){
    repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
${CORE_REPOSITORY_FIELDS}
${CORE_REVIEW_FIELDS}
  query repository($id: ID!, $reviews: Boolean!) {    
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews @include(if: $reviews){
        edges {
          node {
            ...CoreReviewFields
          }
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