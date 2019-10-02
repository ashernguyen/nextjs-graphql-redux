import React from 'react';
import wait from 'waait';
import { PRODUCTS_QUERY } from '@client/graphql/queries';
import ProductsContainer from '@client/containers/ProductsListByGraphql';
import { buildContainerWrapper } from 'tests/helpers/wrapper';
import { mockStore, getProps, getUpdatedProps } from 'tests/helpers';
import { initialState } from '@client/reducers/products';
import ProductList from '@client/components/productsList';
import products from 'tests/__mocks__/product';

describe('@client/containers/productsListByGraphql', () => {
  const store = mockStore({
    products: {
      ...initialState,
      filteredOptions: {
        size: 'M'
      }
    }
  });

  describe('graphql', () => {
    const mock = {
      request: {
        query: PRODUCTS_QUERY,
        variables: {
          filteredOptions: {
            size: 'M'
          }
        }
      },
      result: {
        data: {
          products,
          sizes: ['S', 'M', 'L']
        }
      }
    };

    test('it should fetch graphql data succesfully', async () => {
      const wrapper = buildContainerWrapper(store, <ProductsContainer />, 'mount', [mock], {});

      await wait(0);

      const props = getProps(wrapper, ProductList);

      expect(props.loading).toBeTruthy();

      // Get data
      const updatedProps = getUpdatedProps(wrapper, ProductList);

      expect(updatedProps.loading).toBeFalsy();
      expect(updatedProps.products.length).toEqual(8);
    });

    test('it should show error message when fetching graphql data is failure', async () => {
      const errorMock = { ...mock, error: new Error('Error!!') };

      const wrapper = buildContainerWrapper(store, <ProductsContainer />, 'mount', [errorMock], {});

      await wait(0);

      const props = getProps(wrapper, ProductList);

      expect(props.loading).toBeTruthy();

      // Get data
      const updatedProps = getUpdatedProps(wrapper, ProductList);

      expect(updatedProps.loading).toBeFalsy();
      expect(updatedProps.error.message.length).toBeGreaterThan(1);
    });
  });
});
