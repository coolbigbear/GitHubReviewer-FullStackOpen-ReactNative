import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($authorizeInput: AuthorizeInput) {
    authorize(credentials: $authorizeInput) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($createReviewInput: CreateReviewInput) {
    createReview(review: $createReviewInput) {
      repository {
        id
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($createUserInput: CreateUserInput) {
    createUser(user: $createUserInput) {
      id
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id )
  }
`;