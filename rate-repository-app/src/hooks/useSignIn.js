import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

export default function useSignIn() {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();


    const signIn = async ({ username, password }) => {
        let response = await mutate({
            variables: {
                authorizeInput: {
                    username,
                    password
            } }
        });
        let authToken = response.data.authorize.accessToken;

        await authStorage.setAccessToken(authToken);
        apolloClient.resetStore();
        
        return authToken;
    };

    return [signIn, result];
}