import React from 'react';
import { NextPage } from 'next';
import Helmet from 'react-helmet';
import { PageProps } from '@client/types/pages';
import { fetchProductsIfNeeded, setFilteredOptions } from '@client/actions/products';
import ProductsList from '@client/containers/ProductsListByRedux';
import { getProductSize } from '@client/utils';

const WithReduxDemoPage: NextPage<Partial<PageProps>> = () => (
  <>
    <Helmet title="With Redux demo" meta={[{ property: 'og:title', content: 'With Redux demo' }]} />
    <ProductsList />
  </>
);

WithReduxDemoPage.getInitialProps = async ({ store, query: { size } }: PageProps) => {
  // Fetch products before page is rendered
  await store.dispatch<any>(fetchProductsIfNeeded()); //eslint-disable-line

  // Set filtered options from query params
  await store.dispatch(
    setFilteredOptions({
      size: getProductSize(size)
    })
  );

  return {};
};

export default WithReduxDemoPage;
