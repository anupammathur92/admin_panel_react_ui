import { gql } from '@apollo/client';
import { apolloClient } from '../ApolloClient';

const CHECK_LOGIN = gql`
    query Query($input: CheckLoginInput) {
        checkLogin(input: $input) {
            msg
            status
        }
    }
`;

export const checkLogin = async (payload) => {
    return await apolloClient
      .query({
        query: CHECK_LOGIN,
        variables: {
            input:{
                "email" : payload.email,
                "password" : payload.password
            }
        },
    })
};