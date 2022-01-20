import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_REVIEW, SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

export default function useCreateReview() {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        let response = await mutate({
            variables: {
                createReviewInput: {
                    ownerName,
                    repositoryName,
                    rating,
                    text
                }
            }
        });

        return response;
    };

    return [createReview, result];
}