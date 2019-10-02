import React from 'react';
import NextApp, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider, compose } from 'react-apollo';
import { Provider } from 'react-redux';
import { AppPageProps } from '@client/types/pages';
import { theme } from '@client/configs/styles';
import withApollo from '@client/utils/withApollo';
import withRedux from '@client/utils/withRedux';
import makeStore from '@client/utils/store';
import Layout from '@client/components/layout';
import { GlobalStyles } from '@client/components/styledComponents';

class App extends NextApp<AppPageProps> {
  render() {
    const { Component, pageProps, store, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <>
                <GlobalStyles />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </>
            </ThemeProvider>
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default compose(
  withApollo,
  withRedux(makeStore)
)(App);
