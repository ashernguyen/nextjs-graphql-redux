import { AppProps } from 'next/app';
import { NextPageContext } from 'next';
import { DocumentProps } from 'next/document';
import { HelmetData } from 'react-helmet';
import { ApolloClient } from 'apollo-client';
import { AppStore } from '@client/types';

export interface AppPageProps extends AppProps {
  pageProps: object;
  store: AppStore;
  apollo: ApolloClient<{}>;
}

export interface PageProps extends Pick<AppPageProps, 'store'>, NextPageContext {}

export interface DocumentPageProps extends DocumentProps {
  helmet: HelmetData;
  styleTags: object;
}
