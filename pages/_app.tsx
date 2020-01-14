import React, { FunctionComponent } from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from '../apollo/apollo-client';

import Layout from '../components/Layout';

type AppProps = {
  apollo: ApolloClient<InMemoryCache>,
};
class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}
// Wraps all components in the tree with the data provider
export default withApollo(MyApp);
