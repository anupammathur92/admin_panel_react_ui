import { ApolloClient, InMemoryCache } from '@apollo/client';

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };

export const apolloClient = new ApolloClient({
    //uri: `${process.env.REACT_APP_BASE_URL}/graphql`,
    uri: "http://127.0.0.1:3333/graphql",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})