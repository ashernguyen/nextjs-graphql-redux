import React from 'react';
import { storiesOf } from '@storybook/react';
import products from 'tests/__mocks__/product';
import ProductsList from '@client/components/productsList';

const stories = storiesOf('Components|ProductsList', module);

stories
  .addWithJSX('Fetching products request', () => (
    <ProductsList
      products={[]}
      loading
      error={false}
      filteredOptions={{ size: 'M' }}
      sizes={['S', 'M', 'L']}
      setFilteredOptions={() => {}}
    />
  ))
  .addWithJSX('Fetching products failure', () => (
    <ProductsList
      products={[]}
      loading={false}
      error
      filteredOptions={{ size: 'M' }}
      sizes={['S', 'M', 'L']}
      setFilteredOptions={() => {}}
    />
  ))
  .addWithJSX('Fetching products success', () => (
    <ProductsList
      products={products}
      loading={false}
      error={false}
      filteredOptions={{ size: 'M' }}
      sizes={['S', 'M', 'L']}
      setFilteredOptions={() => {}}
    />
  ));
