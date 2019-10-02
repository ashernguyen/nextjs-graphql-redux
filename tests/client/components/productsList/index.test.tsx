import React from 'react';
import ProductsList from '@client/components/productsList';
import { buildComponent } from 'tests/helpers';
import products from 'tests/__mocks__/product';

describe('@client/components/productList', () => {
  describe('snapshot', () => {
    test('it should match snapshot when products are being fetch', () => {
      const wrapper = buildComponent(
        <ProductsList
          loading
          products={[]}
          error={false}
          filteredOptions={{ size: 'M' }}
          setFilteredOptions={jest.fn()}
          sizes={[]}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });

    test('it should match snapshot when fetching products is failure', () => {
      const wrapper = buildComponent(
        <ProductsList
          loading={false}
          products={[]}
          error={true}
          filteredOptions={{ size: 'M' }}
          setFilteredOptions={jest.fn()}
          sizes={[]}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });

    test('it should match snapshot when fetching products is successful', () => {
      const wrapper = buildComponent(
        <ProductsList
          loading={false}
          products={products}
          error={false}
          filteredOptions={{ size: 'M' }}
          setFilteredOptions={jest.fn()}
          sizes={['S', 'M', 'L']}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
