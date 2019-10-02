import React from 'react';
import NextDocument, { Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Helmet, { HelmetData } from 'react-helmet';
import { DocumentPageProps } from '@client/types/pages';

export default class Document extends NextDocument<DocumentPageProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags, helmet: Helmet.rewind() };
  }

  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map((el: keyof HelmetData) => this.props.helmet[el].toComponent())
      .filter(el => !(Object.keys(el).length === 0 && el.constructor === Object));

    return keys.length ? keys : [];
  }

  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents()}>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="expires" content="10800" />
          <meta name="generator" content="Akqa coding test app" />
          <meta name="Description" content="Akqa coding test app" />
          {this.helmetHeadComponents()}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
