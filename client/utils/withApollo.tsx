import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URI } from '@client/configs/constants';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URI,
      cache: new InMemoryCache().restore(initialState || {})
    }),
  {
    getDataFromTree: 'ssr'
  }
);
