import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import withApollo from 'next-with-apollo';
import fetch from 'cross-fetch';

const link = new HttpLink({
  uri: process.env.GQL_URL,
  fetch,
  headers: {
    authorization: process.env.GQL_TOKEN,
  },
});

const defaultOptions = {
  watchQuery: {
    errorPolicy: 'all',
  },
  query: {
    errorPolicy: 'all',
  },
};

export default withApollo(
  ({ initialState }) => new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {})
  })
);
