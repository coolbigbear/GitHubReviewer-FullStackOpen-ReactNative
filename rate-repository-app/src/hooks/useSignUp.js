import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';

export default function useSignUp() {
    const [mutate, result] = useMutation(SIGN_UP);

    const signUp = async ({ username, password }) => {
        let response = await mutate({
            variables: {
                createUserInput: {
                    username,
                    password
                }
            }
        });

        return response;
    };

    return [signUp, result];
}