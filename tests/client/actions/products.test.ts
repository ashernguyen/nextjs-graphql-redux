import fetchMock from 'fetch-mock';
import { ActionTypes } from '@client/actions/types';
import * as actions from '@client/actions/products';
import { initialState } from '@client/reducers/products';
import products from 'tests/__mocks__/product';
import { mockStore, spyFunc } from 'tests/helpers';

describe('@client/actions/products', () => {
  let store = mockStore({
    products: initialState
  });

  afterEach(() => {
    store.clearActions();
    jest.restoreAllMocks();
  });

  describe('fetchProductsRequest', () => {
    test(`it should return action: ${ActionTypes.FETCH_PRODUCTS_REQUEST}`, () => {
      expect(actions.fetchProductsRequest()).toEqual({
        type: ActionTypes.FETCH_PRODUCTS_REQUEST
      });
    });
  });

  describe('fetchProductsSuccess', () => {
    test(`it should return action: ${ActionTypes.FETCH_PRODUCTS_SUCCESS}`, () => {
      expect(actions.fetchProductsSuccess(products)).toEqual({
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: { data: products }
      });
    });
  });

  describe('fetchProductsFailure', () => {
    test(`it should return action: ${ActionTypes.FETCH_PRODUCTS_FAILURE}`, () => {
      expect(actions.fetchProductsFailure()).toEqual({
        type: ActionTypes.FETCH_PRODUCTS_FAILURE
      });
    });
  });

  describe('fetchProducts', () => {
    afterEach(() => {
      fetchMock.reset();
    });

    const data = products;

    describe('when fetching products is successful', () => {
      fetchMock.mock('/test', data);

      test(`it should return actions: ${ActionTypes.FETCH_PRODUCTS_REQUEST} & ${ActionTypes.FETCH_PRODUCTS_SUCCESS} action`, async () => {
        await store.dispatch<any>(actions.fetchProducts('/test')); //eslint-disable-line
        const receivedActions = store.getActions();

        expect(receivedActions[0].type).toEqual(ActionTypes.FETCH_PRODUCTS_REQUEST);
        expect(receivedActions[1].type).toEqual(ActionTypes.FETCH_PRODUCTS_SUCCESS);
        expect(receivedActions[1].payload).toEqual({ data });
      });
    });

    describe('when fetching products is failure', () => {
      fetchMock.mock('/products.json', 400);

      test(`it should return actions: ${ActionTypes.FETCH_PRODUCTS_REQUEST} & ${ActionTypes.FETCH_PRODUCTS_FAILURE} action`, async () => {
        await store.dispatch<any>(actions.fetchProducts('/products.json')); //eslint-disable-line
        const receivedActions = store.getActions();

        expect(receivedActions[0].type).toEqual(ActionTypes.FETCH_PRODUCTS_REQUEST);
        expect(receivedActions[1].type).toEqual(ActionTypes.FETCH_PRODUCTS_FAILURE);
      });
    });
  });

  describe('shouldFetchProducts', () => {
    test('it should return false when products is being fetched or has already been fetched', () => {
      const state = {
        products: {
          ...initialState,
          loading: true,
          data: products
        }
      };

      expect(actions.shouldFetchProducts(state)).toEqual(false);
    });

    test('it should return true', () => {
      expect(actions.shouldFetchProducts({ products: initialState })).toEqual(true);
    });
  });

  describe('fetchProductsIfNeeded', () => {
    const fetchProductsIfNeeded = actions.fetchProductsIfNeeded();

    test('it should fetch products when products are not being added or empty', () => {
      fetchProductsIfNeeded(spyFunc, store.getState, null);

      expect(spyFunc).toHaveBeenCalled();
    });

    test('it should not fetch products when product is being fetched', async () => {
      store = mockStore({
        products: {
          ...initialState,
          loading: true,
          data: products
        }
      });

      fetchProductsIfNeeded(spyFunc, store.getState, null);

      expect(spyFunc).not.toHaveBeenCalled();
    });
  });

  describe('setFilteredOptions', () => {
    test(`it should return action: ${ActionTypes.FILTER_PRODUCTS}`, () => {
      expect(actions.setFilteredOptions({ size: 'M' })).toEqual({
        type: ActionTypes.FILTER_PRODUCTS,
        payload: { filteredOptions: { size: 'M' } }
      });
    });
  });
});
