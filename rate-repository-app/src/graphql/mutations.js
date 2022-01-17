import { gql, useMutation } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($authorizeInput: AuthorizeInput) {
        authorize(credentials: $authorizeInput) {
        accessToken
    }
  }
`;