import { createSelector } from 'reselect';
import {
  selectProductsState,
  selectFilteredOptions,
  selectProductSizes,
  selectProductsData,
  selectProductsError,
  selectProductsLoading
} from '@client/selectors/products';
import { ApplicationState } from '@client/reducers/types';
import reducer, { initialState } from '@client/reducers/products';
import { ActionTypes } from '@client/actions/types';
import data from 'tests/__mocks__/product';

describe('@client/selectors/products', () => {
  describe('selectProductsState', () => {
    const state: ApplicationState = {
      products: initialState
    };

    const selector = createSelector(
      selectProductsState(),
      productState => productState
    );

    test('it should return initial value', () => {
      expect(selector(state)).toEqual(initialState);
    });
  });

  describe('selectFilteredOptions', () => {
    const state: ApplicationState = {
      products: reducer(undefined, {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: { filteredOptions: { size: 'M' } }
      })
    };

    const selector = createSelector(
      selectFilteredOptions(),
      filteredOptions => filteredOptions
    );

    test('it should return new filtered options', () => {
      expect(selector(state)).toEqual({ size: 'M' });
    });
  });

  describe('selectProductSizes', () => {
    const state: ApplicationState = {
      products: reducer(initialState, {
        type: ActionTypes.UPDATE_PRODUCT_SIZES,
        payload: { sizes: ['S', 'M', 'L'] }
      })
    };

    const selector = createSelector(
      selectProductSizes(),
      productSizes => productSizes
    );

    test('it should return product sizes from response data', () => {
      expect(selector(state)).toEqual(['S', 'M', 'L']);
    });
  });

  describe('selectProductsData', () => {
    const state: ApplicationState = {
      products: reducer(initialState, {
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: { data }
      })
    };

    const selector = createSelector(
      selectProductsData(),
      products => products
    );

    test('it should return product when fetching is succesful', () => {
      expect(selector(state)).toEqual(data);
    });
  });

  describe('selectProductsError', () => {
    const state: ApplicationState = {
      products: reducer(initialState, {
        type: ActionTypes.FETCH_PRODUCTS_FAILURE
      })
    };

    const selector = createSelector(
      selectProductsError(),
      error => error
    );

    test('it should return true when fetching products is failure', () => {
      expect(selector(state)).toEqual(true);
    });
  });

  describe('selectProductsLoading', () => {
    const state: ApplicationState = {
      products: reducer(initialState, {
        type: ActionTypes.FETCH_PRODUCTS_REQUEST
      })
    };

    const selector = createSelector(
      selectProductsLoading(),
      loading => loading
    );

    test('it should return true when products is being fetched', () => {
      expect(selector(state)).toEqual(true);
    });
  });
});
