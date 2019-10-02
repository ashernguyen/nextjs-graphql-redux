import React from 'react';
import Helmet from 'react-helmet';
import { PageProps } from '@client/types/pages';
import { setFilteredOptions } from '@client/actions/products';
import ProductsList from '@client/containers/ProductsListByGraphql';
import { getProductSize } from '@client/utils';

const WithGraphqlDemoPage = () => (
  <>
    <Helmet
      title="With Graphql demo"
      meta={[{ property: 'og:title', content: 'With Graphql demo' }]}
    />
    <ProductsList />
  </>
);

WithGraphqlDemoPage.getInitialProps = async ({ store, query: { size } }: PageProps) => {
  await store.dispatch(
    setFilteredOptions({
      size: getProductSize(size)
    })
  );

  return {};
};

export default WithGraphqlDemoPage;
