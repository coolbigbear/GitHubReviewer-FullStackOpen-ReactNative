import { gql } from '@apollo/client';

import { CORE_REPOSITORY_FIELDS, CORE_REVIEW_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
${CORE_REPOSITORY_FIELDS}
  query getRepositories($orderBy: AllRepositoriesOrderBy = CREATED_AT, 
                        $orderDirection: OrderDirection = DESC, 
                        $searchKeyword: String,
                        $first: Int,
                        $after: String){
    repositories(after: $after, first: $first, searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...CoreRepositoryFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
${CORE_REPOSITORY_FIELDS}
${CORE_REVIEW_FIELDS}
  query repository($id: ID!, $reviews: Boolean!, $after: String, $first: Int) {    
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews(first: $first, after: $after) @include(if: $reviews) {
        edges {
          node {
            ...CoreReviewFields
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_USER = gql`
${CORE_REVIEW_FIELDS}
  query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String){
    authorizedUser {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            ...CoreReviewFields
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;