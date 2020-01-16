import React from 'react';
import App from 'next/app';

import Layout from '../components/Layout';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
// Wraps all components in the tree with the data provider
export default MyApp;
